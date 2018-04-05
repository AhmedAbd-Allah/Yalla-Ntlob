class CreateOrderItems < ActiveRecord::Migration[5.1]
  def change
    create_table :order_items do |t|
      t.references :user, foreign_key: true
      t.references :order, foreign_key: true
      t.string :item
      t.integer :amount
      t.integer :price
      t.string :comment

      t.timestamps
    end
  end
end
