import { Router } from '@angular/router';
import { AccountsService } from './../accounts.service';
import { User } from './../register.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    username: "",
    email: `${sessionStorage.getItem("email")}`,
    codigo: "",
    password: "",
  }

  constructor(private accountsService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }
    
  CreateUser(): void {
    this.accountsService.register(this.user).subscribe(response => {
      sessionStorage.setItem('token', response.token);
      sessionStorage.setItem("email", "");
      this.router.navigate(["login"])
    })
  }

}
