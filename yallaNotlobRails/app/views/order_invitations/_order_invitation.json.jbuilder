json.extract! order_invitation, :id, :user_id, :order_id, :status, :created_at, :updated_at
json.url order_invitation_url(order_invitation, format: :json)
