class CommentsController < ApplicationController
  # skip_before_action :authorized

  def create
    # debugger
    if !Article.find_by(url: comment_params[:url])
      # debugger
      new_article = Article.create(title: comment_params[:title], description: comment_params[:description], published_at: comment_params[:publishedAt], url: comment_params[:url], url_to_image: comment_params[:urlToImage])
      comment = Comment.create(user_id: cur_user.id, article_id: new_article.id, content: comment_params[:content])
      render json: Article.find(new_article.id).comments
    else
      # debugger
      article = Article.find_by(url: comment_params[:url])
        comment = Comment.create(user_id: cur_user.id, article_id: article.id, content: comment_params[:content])
        render json: Article.find(article.id).comments
    end
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
    render json: cur_user.comments
  end

  private

  def comment_params
    params.permit(:title, :author, :description, :publishedAt, :url, :urlToImage, :content)
  end
end
