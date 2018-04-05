class AddCompositeKeyToOrderInvitation < ActiveRecord::Migration[5.1]
  def change
    add_index :order_invitations, [:user_id, :order_id], unique: true
  end
end
