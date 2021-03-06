import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileModalWinComponent } from 'src/app/shared/components/edit-profile-modal-win/edit-profile-modal-win.component';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';
import { ConfirmLogoutComponent } from 'src/app/modules/auth/components/confirm-logout/confirm-logout.component';
import { ChangePasswordComponent } from 'src/app/shared/components/change-password/change-password.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  routers = [{
    link: '/dashboard',
    name: 'Dashboard'
  },
  {
    link: '/badges',
    name: 'Badges'
  },
  {
    link: '/orders',
    name: 'Orders'
  }
  ];

  activeLink = this.routers[0];

  constructor(public dialog: MatDialog,
    public readonly authUserService: AuthUserService) { }

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
    })
  }

  confirm(): void {
    const dialogRef = this.dialog.open(ConfirmLogoutComponent, {
      panelClass: 'confirm-logout-container',
      width: '400px',
      height: '200px',
    });
  }

  changePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      panelClass: 'modal-window-container',
      width: '500px',
      height: '600px',
    })
  }
}


