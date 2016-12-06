class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :detail
      t.integer :views, null: false, default: 0
      t.string :author
      t.string :short_description

      t.timestamps null: false
    end
  end
end
