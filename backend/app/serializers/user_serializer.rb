class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :followers, :followees, :all_articles, :location, :email
  # :articles, :comment_articles, :mention_articles, :uniq_comment_articles, :city
end
