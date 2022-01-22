import { AccountsService } from './../accounts.service';
import { Login } from './../login.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    username: "",
    password: ""
  }

  constructor(private accountsService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }

  Logar(): void {
    // var resp: string
    this.accountsService.login(this.login).subscribe(
      response => {
        sessionStorage.setItem('token', response.token)
        console.log(this.login)
        console.log(response.token)
        this.router.navigate(["pokemon"])
      }
    )
  }

}
