class ForumThreads::ForumPostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_forum_thread

  def create
    create_post = @forum_post
    @forum_post = @forum_thread.forum_posts.new forum_post_params
    @forum_post.user = current_user

    if @forum_post.save
      render json: create_post.save
     else
      render json: { error: error.message }, status: 404
  end
end

private

  def set_forum_thread
    set_thread = @forum_thread
    @forum_thread = Forum.Thread.find(params[:id])
    render json: set_thread
  end

  def forum_post_params
    params.require(:forum_post).permit(:body)
  end
end

