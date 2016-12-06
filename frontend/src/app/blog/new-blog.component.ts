import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { BlogService } from './blog.service';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import { Blog } from './blog';
import { Router } from '@angular/router';

@Component({
  selector: 'new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [BlogService]
})

export class NewBlogComponent implements OnInit {
  blog = new Blog();
  creatingBlog = false;
  @ViewChild('newBlogModal') public newBlogModal: ModalDirective;
  @Output() addBlog: EventEmitter<any> = new EventEmitter<any>();

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {}

  saveBlog() {
    this.creatingBlog = true
    this.blogService.saveBlog(this.blog)
      .then(blog => {
        this.creatingBlog = false;
        this.hideNewBlogModal();
        this.addBlog.emit(blog);
        if(this.router.url != '/blogs')
          this.router.navigate(['/']);
      })
      .catch(error => alert('Some error occurred'))
  }

  showNewBlogModal(blog) {
    if (blog)
      this.blog = Object.assign({}, blog);
    else
      this.blog = new Blog();
    this.newBlogModal.show();
  }

  hideNewBlogModal() {
    this.newBlogModal.hide();
  }
}
