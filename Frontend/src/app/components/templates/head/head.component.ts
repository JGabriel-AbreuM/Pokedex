import { Router } from '@angular/router';
import { UserModel } from './../header.model';
import { User } from './../../accounts/register.model';
import { HeaderService } from './../header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor( private headerService: HeaderService, private router: Router) { }

  user: UserModel = {
    username: "",
  }

  ngOnInit(): void {

     this.headerService.getUser().subscribe(response => {
       this.user = response
     }, () => {
      this.headerService.showMessage("Você não está logado")
      this.router.navigate(["login"])
    })
  }

  logout() {
    this.headerService.logout()
    this.router.navigate(["login"])
    sessionStorage.clear()
  }

}
