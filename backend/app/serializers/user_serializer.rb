class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :city, :followers, :followees, :articles, :comment_articles, :mention_articles
end
