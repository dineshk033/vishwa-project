import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private authService: AuthService ) {
 
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      if (!this.authService.isUserLogIn()) {
        alert('You are not allowed to view this page. You are redirected to login Page');
        console.log(next,'sds',state.url)
        this.router.navigate(["login"],{ queryParams: { retUrl: state.url} });
        return false;

        //var urlTree = this.router.createUrlTree(['login']);
        //return urlTree;
    } 
      return true;
  }
  
}
