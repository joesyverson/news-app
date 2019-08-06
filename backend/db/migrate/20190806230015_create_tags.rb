class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :article_id
      t.integer :category_id

      t.timestamps
    end
  end
end
