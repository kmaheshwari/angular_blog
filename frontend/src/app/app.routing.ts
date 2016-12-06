import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ShowBlogComponent } from './blog/show.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/about.component';
import { ContactComponent } from './shared/contact.component';

export const routes: Routes = [
  { path: 'blogs', component: BlogComponent },
  { path: 'blogs/:blog_id', component: ShowBlogComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: 'blogs', pathMatch: 'full'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);