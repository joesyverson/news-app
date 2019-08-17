class UserArticlesController < ApplicationController
  # skip_before_action :authorized

  def destroy
    # debugger
    to_destroy = cur_user.user_articles.find_by(article_id: params[:id])
    articles_by_comment = cur_user.comments.where(article_id: params[:id])
    # debugger
    if cur_user.user_articles.find_by(article_id: params[:id]) || cur_user.comments.where(article_id: 9)
      # debugger
      to_destroy.destroy if to_destroy

      # debugger
      articles_by_comment.destroy_all if articles_by_comment
      render json: {destroyed: true}
    else
      render json: {destroyed: false}
    end
    # debugger
  end

  private

  def user_article_params
    params.permit(:id)
  end
end
