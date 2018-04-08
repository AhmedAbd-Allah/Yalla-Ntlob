class RemoveDateTimeFromOrder < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :date_time
  end
end
