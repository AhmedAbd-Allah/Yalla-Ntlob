Rails.application.routes.draw do
  get    'auth'            => 'users#auth'
  post 'user_token' => 'user_token#create'

  resources :order_invitations
  resources :order_items
  resources :orders
  resources :friends
  resources :group_members
  resources :groups
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
