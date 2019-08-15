class ArticlesController < ApplicationController

  def create_and_save
    # debugger
    if !Article.find_by(url: article_params[:url])
      new_article = Article.create(title: article_params[:title], description: article_params[:description], published_at: article_params[:publishedAt], url: article_params[:url], url_to_image: article_params[:urlToImage])
      # debugger
      cur_user.articles << new_article
      render json: new_article
    else
      # debugger
      if !cur_user.articles.include?(Article.find_by(url: article_params[:url]))
        cur_user.articles << Article.find_by(url: article_params[:url])
        render json: Article.find_by(url: article_params[:url])
      end
    end
  end

  def renderComments
    # debugger
    if Article.find_by(url: comment_params[:url])
      render json: Article.find_by(url: comment_params[:url]).comments.sort_by {|comment| comment.updated_at}.reverse
    else
      render json: [{response: false}]
    end
  end

  private

  def article_params
    params.permit(:title, :author, :description, :publishedAt, :url, :urlToImage)
  end

  def comment_params
    params.permit(:url)
  end

end
