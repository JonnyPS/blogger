class TagsController < ApplicationController
	def show
		@tag = Tag.find(params[:id])
	end
	def index
		@tags = Tag.all
	end
	before_filter :require_login, only: [:destroy]
	def require_login
		flash.notice = "You must be logged in to create a new article!"
			# if not logged in
			if Author.count == 0
				flash.notice = "You do not have permission to delete this tag!"
				redirect_to new_author_path
				return false
			elsif !current_user
				redirect_to login_path
				flash.notice = "You must be logged in to delete tags!"
				# redirect_to new_article_path
				return false
			# if you are logged in
			else
				flash.notice = "You ARE logged in!"
				# redirect_to new_article_path

			end
	end
	def destroy
		@tag = Tag.find(params[:id])
		flash.notice = "Tag '#{@tag.name}' has been deleted!"
		@tag.destroy
		redirect_to tags_path
	end
end
