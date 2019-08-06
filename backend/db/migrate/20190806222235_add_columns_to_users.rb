class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :password_digest, :string
    add_column :users, :age, :integer
    add_column :users, :email, :string
  end
end
