class ChangeLocationIdToLocationInUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :location_id, :location
  end
end
