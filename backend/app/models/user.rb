class User < ApplicationRecord
  has_secure_password

  has_many :user_articles
  has_many :articles, through: :user_articles

  has_many :comments
  has_many :comment_articles, through: :comments, source: :article

  has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
  has_many :followees, through: :followed_users
end
