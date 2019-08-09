class TagsController < ApplicationController
  # skip_before_action :authorized

  def create
    category_id = Category.find_by(name: params[:name]).id
    new_tag = Tag.create(article_id: params[:article_id], category_id: category_id)
    render json: new_tag
  end

  private

  def tag_params
    params.permit(:article_id, :name)
  end
end
