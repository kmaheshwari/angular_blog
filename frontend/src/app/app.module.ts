import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { Router} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './blog/new-blog.component';
import { ShowBlogComponent } from './blog/show.component';
import { AboutComponent } from './shared/about.component';
import { ContactComponent } from './shared/contact.component';
import { ButtonsModule, ModalModule, CollapseModule, ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';
import { Search } from './blog/search.pipe';
import { Sort } from './blog/sort.pipe';
import { SelectModule } from 'ng2-select/ng2-select';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NewBlogComponent,
    AboutComponent,
    ContactComponent,
    ShowBlogComponent,
    Search,
    Sort
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule, ModalModule, CollapseModule,
    HttpModule,
    SelectModule,
    RouterModule,
    routing
  ],
  providers: [{provide: ComponentsHelper, useClass: ComponentsHelper}],
  bootstrap: [AppComponent]
})
export class AppModule { }
