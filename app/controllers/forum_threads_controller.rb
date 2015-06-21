class ForumThreadsController <ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_forum_thread, except: [:index, :new, :create]

def index
  @forum_threads = ForumThread.all
  render json: @forum_threads
end

def show
end

def new
  @forum_thread = ForumThread.new
  posts = @forum_thread.forum_posts.new
  render json: posts
end

def create #automatically assignes new id w/ new thread.
  create_thread = @forum_thread
  @forum_thread = current_user.forum_thread.new forum_thread_params
  @forum_thread.forum_posts.first.user_id = current_user.id

    if @forum_thread.save
      render json: @create_thread.save
    else
      render json: { error: error.message }, status: 400
end


private

  def set_forum_thread
    set_thread = @forum_thread
    @forum_thread = Forum.Thread.find(params[:id])
    render json: set_thread
  end

  def forum_thread_params
    params.require(:forum_thread).permit(:subject, :forum_posts_attributes: [:body])
  end
end
