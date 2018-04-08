class FixColumnsName < ActiveRecord::Migration[5.1]
  def change
    rename_column :group_members ,  :friend_id , :user_id
    rename_column :order_items , :friend_id , :user_id
    rename_column :order_invitations , :friend_id, :user_id 
  end
end
