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
  constructor(private usersService: UserService) { }

  ngOnInit(): void {
   this.getUsers();   
  }
  getUsers():any{
    this.isLoading=true;
    this.usersService.getAll().subscribe(
      (res:any)=>{
        this.users=res.data;
        this.isLoading=false
      },
      error=>{
        console.error(error)
      }
    )
  }
  deleteUSer(id: number):void{
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

}
