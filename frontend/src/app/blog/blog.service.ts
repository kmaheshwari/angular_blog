import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Blog } from './blog';

@Injectable()

export class BlogService {
  
  constructor(private http: Http) { }

  headers = new Headers({ 'Content-Type' : 'application/json; charset=UTF-8' });
  
  getAllBlogs() {
    return this.http
      .get('/api/v1/blogs.json', {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  saveBlog(blog: Blog): Promise<Blog>  {
    if (blog.id) 
      return this.update(blog);
    else
      return this.post(blog);
  }

  // Add new Blog
  private post(blog: Blog): Promise<Blog> {
    return this.http
      .post("/api/v1/blogs.json", JSON.stringify(blog), {headers: this.headers})
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }

  // Update Blog
  private update(blog: Blog) {
    return this.http
      .put(`/api/v1/blogs/${blog.id}.json`, JSON.stringify(blog), {headers: this.headers})
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }

  getBlog(blogId): Promise<Blog> {
    return this.http.get(`/api/v1/blogs/${blogId}.json`)
      .toPromise()
      .then(response => response.json().blog)
      .catch(this.handleError)
  }

  // Delete Blog
  deleteBlog(id: number) {
    return this.http
      .delete(`/api/v1/blogs/${id}.json`, {headers: this.headers})
      .toPromise()
      .then(res => res.json().response)
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}