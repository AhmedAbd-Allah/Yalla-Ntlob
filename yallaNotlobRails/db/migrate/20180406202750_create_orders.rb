class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer :order_type
      t.integer :status
      t.string :meal_image
      t.datetime :date_time

      t.timestamps
    end
  end
end
