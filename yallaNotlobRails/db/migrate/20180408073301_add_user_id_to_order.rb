class AddUserIdToOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders ,:owner_id ,:bigint
    add_foreign_key :orders, :users , column:'owner_id'
  end
end
