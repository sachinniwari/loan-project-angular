import { Component } from '@angular/core';
import { UsersListService } from 'src/app/services/users-list.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','../../../../node_modules/boxicons/css/boxicons.min.css']

})
export class AdminComponent {
  toggle() {
    var element = document.getElementById("accordionSidebar");
    var body = document.getElementById("body");
    element?.classList.toggle("toggled");
    body?.classList.toggle("sidebar-toggled");
 }
 users:any;
 usersData:any=[];
constructor(private userslist: UsersListService){
  userslist.users().subscribe((data)=>{
   this.usersData= data;
   console.log(this.usersData);
  })

}
}
