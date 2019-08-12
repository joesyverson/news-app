class ArticlesController < ApplicationController

  def create_and_save
    # debugger
    if !Article.find_by(url: article_params[:url])
      new_article = Article.create(title: article_params[:title], description: article_params[:description], published_at: article_params[:publishedAt], src: article_params[:src], url: article_params[:url], url_to_image: article_params[:urlToImage])
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

  private

  def article_params
    params[:data].permit(:title, :author, :description, :publishedAt, :src, :url, :urlToImage)
  end

end
