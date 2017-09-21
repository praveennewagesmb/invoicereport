import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserauthService } from './userauth.service';
import { Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private user: UserauthService, private router: Router) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.user.getUserLoggedIn() == false){
      console.log(this.user.getUserLoggedIn());
      this.router.navigate(['/Login']);}
        console.log(this.user.getUserLoggedIn());
        return this.user.getUserLoggedIn();
  }
}
