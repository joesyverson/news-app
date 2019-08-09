class CommentsController < ApplicationController
  # skip_before_action :authorized

  def create
    new_comment = Comment.create(user_id: cur_user.id, article_id: comment_params[:article_id], content: comment_params[:content])
    render json: new_comment
  end

  def update
    to_update = cur_user.comments.find(params[:id])
    to_update.update(content: comment_params[:content])
    render json: to_update
  end

  def destroy
    # debugger
    to_destroy = cur_user.comments.find(params[:id])
    copy_for_render = to_destroy
    to_destroy.destroy
    render json: copy_for_render
  end

  private

  def comment_params
    params.permit(:article_id, :content)
  end
end
