class CreateMentions < ActiveRecord::Migration[5.2]
  def change
    create_table :mentions do |t|
      t.integer :article_id
      t.integer :user_id

      t.timestamps
    end
  end
end
