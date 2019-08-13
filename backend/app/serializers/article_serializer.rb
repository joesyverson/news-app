class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :updated_at, :author, :description, :published_at, :url, :url_to_image, :users, :mentions, :comments
end
