class User < ApplicationRecord
  has_secure_password

  has_many :user_articles
  has_many :articles, through: :user_articles

  has_many :comments
  has_many :comment_articles, through: :comments, source: :article
end
