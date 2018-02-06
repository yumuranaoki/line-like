Rails.application.routes.draw do
  get '/room/:access_id', to: "rooms#show", as: 'room'
  post 'rooms', to: 'rooms#create'

  devise_for :users
  get '/you', to: "users#show"

  resources :relationships, only: [:create, :destroy]
  resources :room_relationships, only: [:create, :destroy]
  resources :user_relationships, only: [:create, :destroy]

  get '/friend', to: 'users#following'
  get '/p_friend', to: 'users#followers'
  #消す
  get '/users', to: 'users#index'

  root 'static_pages#home'
end
