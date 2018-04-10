Rails.application.routes.draw do
  get    'auth'            => 'users#auth'
  post 'user_token' => 'user_token#create'
  

  resources :order_invitations ,except: [:update] do 
  collection do
    put '/update' => 'order_invitations#updateStatus'
  end
end
  resources :order_items
  resources :orders do
    collection do
      get '/LatestOrders' => 'orders#getLatestOrders'
    end
  end
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
