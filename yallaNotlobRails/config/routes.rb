Rails.application.routes.draw do
  resources :friends
  resources :user_groups
  resources :groups
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
