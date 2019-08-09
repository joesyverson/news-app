class UserArticlesController < ApplicationController
  # skip_before_action :authorized

  def create
    new_user_article = UserArticle.create(user_id: cur_user.id, article_id: user_article_params[:article_id])
    render json: new_user_article
  end

  def destroy
    # debugger
    to_destroy = cur_user.user_articles.find(params[:id])
    copy_for_render = to_destroy
    to_destroy.destroy
    render json: copy_for_render
  end

  private

  def user_article_params
    params.permit(:article_id)
  end
end
