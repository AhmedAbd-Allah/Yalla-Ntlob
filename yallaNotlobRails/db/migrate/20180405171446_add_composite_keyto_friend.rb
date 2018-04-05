class AddCompositeKeytoFriend < ActiveRecord::Migration[5.1]
  def change
    add_index :friends, [:user_id, :friend_id], unique: true
  end
end
