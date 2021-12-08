import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DashboardModule } from '../../dashboard/dashboard/dashboard.module';

import { BadgesComponent } from './badges.component';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { TotalAchievementsAndExpComponent } from '../components/total-achievements-and-exp/total-achievements-and-exp.component';
import { LastAchievementsComponent } from '../components/last-achievements/last-achievements.component';
import { FullListOfAchievementsComponent } from '../components/full-list-of-achievements/full-list-of-achievements.component';


@NgModule({
  declarations: [
    BadgesComponent,
    EditProfileComponent,
    TotalAchievementsAndExpComponent,
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    PipesModule,
    DashboardModule
  ],
  exports: [
    BadgesComponent,
    EditProfileComponent,
    TotalAchievementsAndExpComponent,
    LastAchievementsComponent,
    FullListOfAchievementsComponent,
  ]
})
export class BadgesModule { }
