import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private service: AuthService){

    }
    canActivate (): boolean{
        if(this.service.isLogged){
            return true;
        }
        return false;
    }
}