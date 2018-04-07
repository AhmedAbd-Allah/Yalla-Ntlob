class AddOwnerIDtoOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders ,:owner_id ,:bigint
  end
end
