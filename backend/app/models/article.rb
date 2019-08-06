class Article < ApplicationRecord
  has_many :user_articles
  has_many :users, through: :user_articles

  has_many :comments
  has_many :comment_users, through: :comments, source: :user

  # has_many :user_articles
  # has_many :articles, through: :user_articles, class_name: "Article"
  #
  # has_many :comments
  # has_many :comment_articles, through: :comments, class_name: "Article"
end
