class RenameSomeColumns < ActiveRecord::Migration[5.1]
  def change
    rename_column :group_members , :user_id , :friend_id
    rename_column :order_items , :user_id , :friend_id
    rename_column :order_invitations , :user_id , :friend_id
  end
end
