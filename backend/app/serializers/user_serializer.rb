class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :city, :followers, :followees, :all_articles
  # :articles, :comment_articles, :mention_articles, :uniq_comment_articles
end
