import { Routes } from '@angular/router';
import { ToBuyComponent } from './main/to-buy/to-buy.component';
import { GuideComponent } from './main/guide/guide.component';

export const routes: Routes = [
        {
          path: 'tobuy',
          component: ToBuyComponent,
        },
        {
          path: 'guide', // example.com/about
          component: GuideComponent,
        },
        // {
        //   path: 'manage',
        //   component: ManageComponent,
        //   data: {
        //     authOnly: true,
        //     authGuardPipe: redirectUnauthorizedToHome,
        //   },
        //   canActivate: [AuthGuard],
        // },
        // {
        //   path: '**',
        //   component: NotFoundComponent,
        // },
      ];