class AddFriendidToFriend < ActiveRecord::Migration[5.1]
  def change
    add_column :friends ,:friend_id ,:bigint
    add_foreign_key :friends, :users , column:'friend_id'
  end
end
