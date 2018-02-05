Rails.application.routes.draw do
  get '/you', to: "users#show"
  devise_for :users

  resources :relationships, only: [:create, :destroy]
  get '/friend', to: 'users#following'
  get '/p_friend', to: 'users#followers'
  #消す
  get '/users', to: 'users#index'
  root 'static_pages#home'
end
