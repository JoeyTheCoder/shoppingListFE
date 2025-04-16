import { Injectable } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  user,
  authState
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$: Observable<any>;
  private _authState$: Observable<any>;

  constructor(
    private router: Router,
    private auth: Auth
  ) {
    // Initialize observables in constructor
    this._currentUser$ = user(this.auth);
    this._authState$ = authState(this.auth);
  }

  // Expose observables through getters
  get currentUser$(): Observable<any> {
    return this._currentUser$;
  }

  get authState$(): Observable<any> {
    return this._authState$;
  }

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['/dashboard']);
  }

  async register(email: string, password: string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, password);
    this.router.navigate(['/dashboard']);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.currentUser$.pipe(
      map((user: any) => !!user)
    );
  }

  getCurrentUserId(): Observable<string | null> {
    return this.currentUser$.pipe(
      map((user: any) => user ? user.uid : null)
    );
  }
}
