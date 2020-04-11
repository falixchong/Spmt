import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  HostListener,
  ViewChild,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy, OnInit {
  @ViewChild('snav') sidenav: any;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //console.log(event.key);
    if (event.key == 'Escape') this.sidenav.toggle();
  }

  sessionId: Observable<string>;
  token: Observable<string>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    // Capture the session ID if available
    this.sessionId = this.route.queryParamMap.pipe(
      map(params => params.get('session_id') || 'None')
    );

    //console.log('SessionId');
    //console.log(this.sessionId);

    // Capture the fragment if available
    this.token = this.route.fragment.pipe(map(fragment => fragment || 'None'));

    //console.log('Token');
    //console.log(this.token);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };

    this.authService.logout();
    setTimeout(() => this.router.navigate(['/login'], navigationExtras), 500);
  }

  closeSideNav() {
    if (this.sidenav._mode == 'over') {
      this.sidenav.close();
    }
  }
}
