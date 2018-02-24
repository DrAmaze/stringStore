class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :content, null: false
      
      t.timestamps
    end
  end
end
