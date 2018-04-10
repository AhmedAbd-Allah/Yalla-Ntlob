Rails.application.routes.draw do
  get    'auth'            => 'users#auth'
  post 'user_token' => 'user_token#create'
  mount ActionCable.server => '/cable'
  

  resources :order_invitations
  resources :order_items
  resources :orders
  resources :groups
  resources :group_members
  resources :friends do
    collection do
      get '/search' => 'friends#getFriendByEmail'
    end
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
