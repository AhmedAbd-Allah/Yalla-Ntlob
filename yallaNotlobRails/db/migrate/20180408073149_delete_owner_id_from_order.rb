class DeleteOwnerIdFromOrder < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :owner_id
  end
end
