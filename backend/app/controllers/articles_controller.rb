class ArticlesController < ApplicationController
  skip_before_action :authorized

  def create
    new_article = Article.create(article_params)
    render json: new_article
  end

  def show
    title = params[:title].split("-").join(" ")
    if Article.find_by(title: title)
      render json: Article.find_by(title: title), include: "**"
    else
      render json: false
    end
  end


  private

  def article_params
    params.permit(:title, :author, :description, :published_at, :src, :url, :url_to_image)
  end

end
