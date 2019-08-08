class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :location, :followers, :followees

  # def just_followers
  #   this.followers[0]
  # end

  has_many :articles
  has_many :comment_articles
  has_many :mention_articles
  # has_many :followers
  # , unless: :articles



  # has_many :followees
end
