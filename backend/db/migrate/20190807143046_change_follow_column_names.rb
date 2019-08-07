class ChangeFollowColumnNames < ActiveRecord::Migration[5.2]
  def change
    change_table :follows do |t|
      t.rename :user_one_id, :follower_id
      t.rename :user_two_id, :followee_id 
    end
  end
end
