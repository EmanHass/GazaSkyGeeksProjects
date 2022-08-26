import { Injectable } from '@angular/core';
import { Files } from '../interfaces/files-interface';
@Injectable({
  providedIn: 'root'
})
export class FilesServiceService {
  files: Files[]=[
    {id:'1',name:'file1',description:'File one'},
    {id:'2',name:'file2',description:'File two'},
    {id:'3',name:'file3',description:'File three'},
    {id:'4',name:'file4',description:'File four'},
    {id:'5',name:'file5',description:'File five'},
    {id:'6',name:'file6',description:'File six'},
  ]
  constructor() { }

  getFiles():any{
    return this.files
  }
}
