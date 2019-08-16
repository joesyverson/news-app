class ChangeLocationToBeStringInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :location_id, :string
  end
end
