import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from './blog.service';
import { NewBlogComponent } from './new-blog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})

export class BlogComponent implements OnInit {
  blogs: any;
  options = ["none", "latest", "popular"];
  @ViewChild(NewBlogComponent) newBlogComponent: NewBlogComponent;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  	this.getAllBlogs();
  }

  getAllBlogs() {
    this.blogService.getAllBlogs()
      .then(blogs => {this.blogs = blogs.blogs})
  }

  addBlog(blog) {
    this.getAllBlogs();
  }

  openNewBlogModal(blog) {
    this.newBlogComponent.showNewBlogModal(blog);
  }

  deleteBlog(blogId) {
    this.blogService.deleteBlog(blogId)
      .then(blogs => {
        alert('Blog deleted successfully');
        this.getAllBlogs();
      })
  }
}
