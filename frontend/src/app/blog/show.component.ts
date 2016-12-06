import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from './blog.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewBlogComponent } from './new-blog.component';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './show.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})

export class ShowBlogComponent implements OnInit {
  blogs: any;
  blog: Blog;
  blogId: any;
  @ViewChild(NewBlogComponent) newBlogComponent: NewBlogComponent;

  constructor(private blogService: BlogService, route: ActivatedRoute, private router: Router) { 
  	route.params.forEach((params: Params) => {
      this.blogId = + params['blog_id'];
    });
  }

  ngOnInit() {
  	this.getBlog();
  }

  getBlog() {
    this.blogService.getBlog(this.blogId)
      .then(response => {this.blog = response})
  }

  openNewBlogModal(blog) {
    this.newBlogComponent.showNewBlogModal(blog);
  }

  deleteBlog(blogId) {
    this.blogService.deleteBlog(blogId)
      .then(blogs => {
      	this.router.navigate([ '/']);
        alert('Blog deleted successfully');
      })
  }
}
