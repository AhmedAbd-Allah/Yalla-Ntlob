Rails.application.routes.draw do
  resources :order_items
  resources :order_invitations
  resources :orders
  resources :user_groups
  resources :groups
  resources :users
  resources :friends
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
