import { Component, OnInit } from '@angular/core';
import { Users } from '../../model-interface/model';
import { UserService } from '../../users-service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: Users[];
  isLoading: boolean= false;
  userDetails: Users;
  page: number=1;
  perPage: number=3;
  totalPage: number;
  totalUserArr: number[]=[];
  totalPageArr: number[]=[];
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
        this.isLoading=false
      },
      error=>{
        console.error(error)
      }
    )
  }
  deleteUser(id: number):void{
      this.usersService.delete(id).subscribe(
        res=>console.log('delted done'),
        error=> console.error(error)
        
        
      )
  }

  detailsUser(id:number):void{
    this.usersService.getByID(id).subscribe(
      (res: any)=> {
        this.userDetails= res.data;
        this.usersService.sendData(this.userDetails)      
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

}
