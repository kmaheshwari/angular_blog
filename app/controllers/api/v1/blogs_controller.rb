class Api::V1::BlogsController < ApplicationController
  before_filter :set_blog, only: [:update, :destroy, :show]
  def index
  	@blogs = Blog.all
  end

  def create
    @blog = Blog.new(blog_params)
    if @blog.save
      render @blog
    else
      render json: { errors: @blog.errors }, status: 400 and return
    end
  end

  def update
    if @blog.update(blog_params)
      render @blog
    else
      render :json => { :errors => @blog.errors }, status: 400 and return
    end
  end

  def show
    @blog.update(views: @blog.views + 1)
  end

  def destroy
    @blog.destroy
    render :json => { notice: 'Job was successfully destroyed.' }, status: 200 and return
  end

  private
  def blog_params
    params.permit(:id, :author, :detail, :short_description, :stars, :title)
  end

  def set_blog
    @blog = Blog.find_by_id(params[:id])
    render :json => { :errors => "Invalid blog" }, status: 404 and return if @blog.blank?
  end
end
