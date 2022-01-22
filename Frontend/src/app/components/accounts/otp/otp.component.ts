import { Router } from '@angular/router';
import { AccountsService } from './../accounts.service';
import { Otp } from './../otp.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  cod_otp: Otp = {
    email: ""
  }

  constructor(private accountsService: AccountsService, private router: Router) { }

  ngOnInit(): void {
  }

  OtpCreate(): void {
    this.accountsService.create(this.cod_otp).subscribe(() => {
      this.router.navigate(["register"])
    })
    sessionStorage.setItem('email', this.cod_otp.email)
  }

}
