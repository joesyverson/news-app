class AddColumnsToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :author, :string
    add_column :articles, :description, :string
    add_column :articles, :published_at, :datetime
    add_column :articles, :src, :string
    add_column :articles, :url, :string
    add_column :articles, :url_to_image, :string
  end
end
