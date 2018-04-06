Rails.application.routes.draw do
  resources :order_invitations
  resources :order_items
  resources :orders
  resources :friends
  resources :group_members
  resources :groups
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
