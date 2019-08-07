class Article < ApplicationRecord
  has_many :tags

  has_many :user_articles
  has_many :users, through: :user_articles

  has_many :mentions
  has_many :mention_users, through: :mentions, source: :user

  has_many :comments
  has_many :comment_users, through: :comments, source: :user
end
