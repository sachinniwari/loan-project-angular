import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  
constructor(private authService:AuthServiceService,
  private router: Router){}

myGroup = new FormGroup({
  email: new FormControl('',Validators.required),
  password: new FormControl('',Validators.required),
});

ngOnInit(): void {}

loginProcess(){
  if(this.myGroup.valid){
    this.authService.login(this.myGroup.value).subscribe(result =>{
      if(result.status==200){
        console.log(result);
        // alert(result.messages.message);
        this.router.navigate(['admin'])
      }else{
        alert(result.messages.message);
      }
    })
  }
}
}
