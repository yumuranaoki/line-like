Rails.application.routes.draw do
  post '/messages', to: "messages#create", as: 'messages'
  #api
  get '/room/:access_id/messages', to: "messages#index", as: 'messages_index'

  get '/room/:access_id', to: "rooms#show", as: 'room'
  post 'rooms', to: 'rooms#create'

  devise_for :users
  get '/you', to: "users#show"
  get '/search', to: "users#search"
  #api(thread一覧を取得する（数を制限する）)
  get '/user_rooms/:id', to: "api#user_rooms"
  #api(talk一覧を取得する（数を制限する）)
  get '/user_talks/:id', to: "api#user_talks"
  #api(followeds一覧を取得する（数を制限する）)
  get '/user_followers/:id', to: "api#user_followings"

  resources :relationships, only: [:create, :destroy]
  resources :room_relationships, only: [:create, :destroy]
  resources :user_relationships, only: [:create, :destroy]

  get '/friend', to: 'users#following'
  get '/p_friend', to: 'users#followers'
  #消す
  get '/users', to: 'users#index'
  #get '/react', to: 'rooms#react'

  root 'static_pages#home'
end
