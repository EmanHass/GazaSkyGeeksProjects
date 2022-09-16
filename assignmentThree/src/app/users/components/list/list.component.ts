import { Component, OnInit } from '@angular/core';
import { concatMap, from } from 'rxjs';
import { Users } from '../../model-interface/model';
import { UserService } from '../../users-service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: Users[];
  id: number;
  isLoading: boolean= false;
  isDelete: boolean= false;
  msgDelete: string;
  page: number=1;
  perPage: number=3;
  totalPage: number;
  totalUserArr: number[]=[];
  totalPageArr: number[]=[];
  userChecked: boolean[];
  constructor(private usersService: UserService) { }

  ngOnInit(): void {
   this.getUsers(this.page, this.perPage);   
  }
  getUsers(page: number, perPage: number):any{
    this.isLoading=true;
    this.usersService.getAll(page, perPage).subscribe(
      (res:any)=>{
        this.users=res.data;
        this.page= res.page;
        this.totalPage = res.total_pages;
        this.totalUserArr = Array.from(new Array(res.total).keys(), (item)=>item+1)
        this.totalPageArr = Array.from(new Array(this.totalPage).keys(), (item)=> item+1)
        this.userChecked = Array.from(new Array(res.data.length).keys(), (item)=> false)

        this.isLoading=false
      },
      error=>{
        console.error(error)
      }
    )
  }
  deleteUser(id: number):void{
      this.usersService.delete(id).subscribe(
        res=>{
          this.id=id;
          this.isDelete=true;
          this.msgDelete=`User #${this.id} Deleted`;
          setTimeout(() => this.isDelete=false, 2000);          
        },
        error=> console.error(error)
      )
  }

  detailsUser(id:number):void{
    this.usersService.getByID(id).subscribe(
      (res: any)=> {
        this.usersService.sendData(res.data)      
      },
      error => {
        console.log(error)
      } 
    )  
  }
  getPrivous(): void{
    this.getUsers(this.page - 1, this.perPage)
  }
  getNext(): void{
    this.getUsers(this.page + 1, this.perPage)
  }
  goToPage(page: number): void{
    this.getUsers(page, this.perPage)
  }
  getValue(event: any): void{
    this.perPage=event.target.value;
    this.getUsers(1, this.perPage)
  }

  toggleCheck(event: any, index:number): void{
    this.userChecked[index]=event.target.checked;
  }
  deleteSelectedUsers(): void{
    var checkedId: number[]=[];
    this.userChecked.forEach((value,index)=>{
      if(value){
        checkedId.push(this.users[index].id);
      }
    })

    var obs = from(checkedId);    
    obs.pipe(
      concatMap((value)=>{
        this.id=value;
        this.isDelete=true;
        this.msgDelete=`User #${value} Deleted`;
        setTimeout(() => this.isDelete=false, 5000);
        return this.usersService.delete(value)
      })
    ).subscribe(
      res=>{
        console.log(`user Deleted`);
      },
      error=>{
        console.log('error', error);
        
      }
    )
  }

}
