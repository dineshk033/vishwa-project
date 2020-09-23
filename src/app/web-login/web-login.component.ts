import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-web-login',
  templateUrl: './web-login.component.html',
  styleUrls: ['./web-login.component.scss']
})
export class WebLoginComponent implements OnInit {

  loginForm: FormGroup;
  toggle = true;
  retUrl: string = "home";
  constructor(private fb: FormBuilder, private router: Router,
    private activatedRoute: ActivatedRoute,private authService:AuthService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe(params => {
        this.retUrl = params.get('retUrl');
        console.log('LoginComponent/ngOnInit ' + this.retUrl);
      });
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.authService.login('username', 'loginForm.value.password').subscribe(data => {
    console.log('return to ' + this.retUrl);
    if (this.retUrl != null) {
      this.router.navigate([this.retUrl]);
    } else {
      this.router.navigate(['home']);
    }
    });
  }

  handleReset() {
    this.loginForm.reset();
  }
}
