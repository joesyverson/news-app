class UserArticlesController < ApplicationController
  # skip_before_action :authorized

  def destroy
    # debugger
    to_destroy = cur_user.user_articles.find(params[:id])
    copy_for_render = to_destroy
    to_destroy.destroy
    render json: copy_for_render
  end

  private

  def user_article_params
    params.permit(:id)
  end
end
