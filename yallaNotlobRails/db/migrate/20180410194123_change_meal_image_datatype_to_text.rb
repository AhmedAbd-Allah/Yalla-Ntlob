class ChangeMealImageDatatypeToText < ActiveRecord::Migration[5.1]
  def change
    change_column :orders, :meal_image, :text
  end
end
