Rails.application.routes.draw do
  constraints format: :json do
    resources :order_items
    resources :order_invitations
    resources :user_groups
    resources :groups
    resources :users
    resources :orders
    resources :friends
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
