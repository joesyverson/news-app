class User < ApplicationRecord
  has_secure_password

  validates :name, :password, :age, :email, :location_id, presence: true
  validates :name, :email, uniqueness: true

  belongs_to :location

  has_many :user_articles
  has_many :articles, through: :user_articles

  has_many :comments
  has_many :comment_articles, through: :comments, source: :article

  has_many :mentions
  has_many :mention_articles, through: :mentions, source: :article

  has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
  has_many :followees, through: :followed_users

  has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
  has_many :followers, through: :following_users

  def city
    location.city
  end

  def uniq_comment_articles
    # debugger
    comment_articles.uniq
  end
end
