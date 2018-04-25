import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';

import {SignupService} from './signup.service'
import {NotificationsService} from 'angular2-notifications'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    data = {
        username: '',
        email:'',
        password: '',
        passwordRepeat:''
    }

    constructor(
        private router: Router,
        private signupService:SignupService,
        private notifService: NotificationsService
    ) {}

    ngOnInit() {}

    processSignUp(data){
        let error = this.validateuser(data)
        if(error!=null){
            this.showNotifError(error);
            return;
        }
        this.signupService.registerUser(data).subscribe(
            response=>{
                if (response.errorCode === '00') {
                    this.router.navigate(["/layout/dashboard"])
                    this.showNotifSuccess("tài khoản đăng ký thành công");
                }
                else {
                    this.showNotifError("uername hoặc email trùng lặp ")
                }
            },
            err=>{
                this.showNotifError("form invalid")
            })
    }

    validateuser(data){
        if(data.username ==''){
            return "Thiếu tên Username";
        }
        if(data.email ==''){
            return "Thiếu email"
        }
        if(data.password ==''|| data.password.length<6){
            return "Thiếu password hoặc password độ dài nhỏ hơn 6 ký tự"
        }
        if(data.passwordRepeat =='' || data.passwordRepeat.length <6){
            return "Thiếu password hoặc password độ dài nhỏ hơn 6 ký tự"
        }
        if(data.password != data.passwordRepeat){
            return "Password lặp lại không chính xác ";
        }
        return null;
    }

    showNotifSuccess(content:string){
        this.notifService.success('SUCCESS', content);
    }

    showNotifWarning(content:string){
        this.notifService.warn('WARNING', content);
    }

    showNotifError( content:string){
        this.notifService.error('ERROR', content);
    }

    readonly notifyOptions = {
        position:["bottom", "right"],
        timeOut: 2000
    };
}
