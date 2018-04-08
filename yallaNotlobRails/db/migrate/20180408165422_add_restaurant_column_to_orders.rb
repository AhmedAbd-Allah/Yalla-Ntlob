class AddRestaurantColumnToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders ,:restaurant ,:string
  end
end
