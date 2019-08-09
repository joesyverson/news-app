class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :location, :followers, :followees, :articles, :comment_articles, :mention_articles
end
