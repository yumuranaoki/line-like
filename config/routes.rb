Rails.application.routes.draw do
  post '/messages', to: "messages#create", as: 'messages'
  #api
  get '/room/:access_id/messages', to: "messages#index", as: 'messages_index'

  post 'rooms', to: 'rooms#create'

  devise_for :users
  get '/you', to: "users#show", as: 'you'
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

  root 'static_pages#home'
end
