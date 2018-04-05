json.extract! order_item, :id, :user_id, :order_id, :item, :amount, :price, :comment, :created_at, :updated_at
json.url order_item_url(order_item, format: :json)
