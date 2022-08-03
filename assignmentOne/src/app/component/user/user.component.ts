import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isAdd: boolean=false;
  isEdit: boolean = false;
  indexOfEdit: number=0;//default
  errorMsg: boolean=false;
  msg: boolean=false;
  // state==> for ngModel (values of inputs)
  id: string='';
  firstName: string='';
  lastName: string='';
  birthDate:string='';
  email:string='';
  phone:string='';
  address:string='';

  users: User[] = [
    { id: '1', name:{firstName: 'Eman', lastName:'Hassouna'}, birthDate:'22/10/2000',email:'eman@hotmail.com', phone:'05977777',address:'Gaza' },
    { id: '2', name:{firstName: 'Akram', lastName: 'hassouna'}, birthDate:'22/10/1973',email:'akram@hotmail.com', phone:'0593685471',address:'Gaza' },
    { id: '3', name:{firstName: 'Yousef', lastName: 'hassouna'}, birthDate:'5/5/2010',email:'yousef@hotmail.com', phone:'05987412',address:'Gaza' },
    { id: '4', name:{firstName: 'Mahmmoud', lastName: 'hassouna'}, birthDate:'5/8/1998',email:'mahmoud@hotmail.com', phone:'05987456',address:'Gaza' },
    { id: '5', name:{firstName: 'Hala', lastName: 'hassouna'}, birthDate:'5/5/2010',email:'Hala@hotmail.com', phone:'059123654',address:'Gaza' },
    { id: '6', name:{firstName: 'Ali', lastName: 'hassouna'}, birthDate:'5/8/1998',email:'Ali@hotmail.com', phone:'05914753',address:'Gaza' },
    { id: '7', name:{firstName: 'Heba', lastName: 'hassouna'}, birthDate:'5/5/2010',email:'Heba@hotmail.com', phone:'059321456',address:'Gaza' },
    { id: '8', name:{firstName: 'Sara', lastName: 'hassouna'}, birthDate:'5/8/1998',email:'Sara@hotmail.com', phone:'05987413',address:'Gaza' },
    { id: '9', name:{firstName: 'Mona', lastName: 'hassouna'}, birthDate:'5/5/2010',email:'Mona@hotmail.com', phone:'059541236',address:'Gaza' },
    { id: '10', name:{firstName: 'Shrouq', lastName: 'hassouna'}, birthDate:'5/8/1998',email:'Shrouq@hotmail.com', phone:'0596784123',address:'Gaza' },
  ];
  ngOnInit(): void {
    this.fillUsersArray();
  }
  // when click on add button then the form appear
  onClickAdd():void{
    this.msg=false
    //if Edit form is appear and you click on add button then print error msg
    if(!this.isEdit)
       this.isAdd=true;
    else{
      this.msg=true;
       }
  }
  //when click on create button then fill user array
  fillUsersArray():void{
    this.errorMsg=false;
    if((this.id && this.firstName && this.lastName && this.birthDate && this.email && this.phone && this.address)){
      this.users.push(
        {id:this.id, 
        name:{firstName: this.firstName,
        lastName: this.lastName},
        birthDate: this.birthDate,
        email: this.email,
        phone: this.phone,
        address: this.address,
      })
      this.isAdd = false;
      this.clearInputs();
    }else{
      this.errorMsg=true;
    }
  } 
  // clear inputs value after adding and editing
  clearInputs():void{
    this.id=''
    this.firstName=''
    this.lastName=''
    this.birthDate=''
    this.email=''
    this.phone=''
    this.address=''  
  }
  // Delete index of the record from userArray using filter
  deleteUser(index:number):void{
    this.users = this.users.filter((value, position)=> !(position === index))
  }
  // When click on edit button then the form appear
  onClickEdit(index: number):void{
    //if Create form is appear and you click on Edit button then print error msg
    this.msg=false
    if(!this.isAdd){
      this.isEdit=true;
      this.indexOfEdit = index;
      // fill in the inputs with index number
      const {id,name,birthDate,phone,email,address} = this.users[index];
      this.id=id;
      this.firstName=name.firstName
      this.lastName=name.lastName
      this.birthDate=birthDate
      this.phone=phone
      this.email=email
      this.address=address
    }else{
      this.msg=true
    }
  }
  // When click on Edit button(in Form) then make edit index of the record
  editUser():void{
    this.users[this.indexOfEdit]= {
        id:this.id,
        name:{firstName:this.firstName, lastName:this.lastName},
        birthDate:this.birthDate,
        phone:this.phone,
        email:this.email,
        address:this.address
  }
    this.isEdit=false;
    this.clearInputs();
  }

}
interface User{
  id: string;
  name:{
    firstName: string,
    lastName: string,
  }
  birthDate:string;
  email:string;
  phone:string;
  address:string;
}