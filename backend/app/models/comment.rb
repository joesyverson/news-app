class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :article

  def comment_user
    # debugger
    user.name
  end
end
