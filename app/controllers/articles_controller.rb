class ArticlesController < ApplicationController

	include ArticlesHelper

	def index
		@articles = Article.all
	end
	def show
		@article = Article.find(params[:id])
		@comment = Comment.new
		@comment.article_id = @article.id
	end
	before_filter :require_login, only: [:new, :create, :destroy, :edit, :update]
	def require_login
		flash.notice = "You must be logged in to create a new article!"
			# if not logged in
			if Author.count == 0
				flash.notice = "No users exist!"
				redirect_to new_author_path
				return false
			elsif !current_user
				redirect_to login_path
				flash.notice = "You are NOT logged in!"
				# redirect_to new_article_path

				return false
			# if you are logged in
			else
				flash.notice = "You ARE logged in!"
				# redirect_to new_article_path

			end
	end
	def new 
		@article = Article.new
	end
	def create
		@article = Article.new(article_params)
		@article.save
		flash.notice = "Article '#{@article.title}' has been created!"
		redirect_to article_path(@article)
	end
	def destroy
		@article = Article.find(params[:id])
		flash.notice = "Article '#{@article.title}' has been deleted!"
		@article.destroy
		redirect_to articles_path
	end
	def edit
		@article = Article.find(params[:id])
	end
	def update
		@article = Article.find(params[:id])
		@article.update(article_params)
		flash.notice = "Article '#{@article.title}' Updated!"
		redirect_to article_path(@article)
	end
end
