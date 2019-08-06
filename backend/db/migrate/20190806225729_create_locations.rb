class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :province
      t.string :state

      t.timestamps
    end
  end
end
