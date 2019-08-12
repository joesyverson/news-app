class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :articles, :src, :source
  end
end
