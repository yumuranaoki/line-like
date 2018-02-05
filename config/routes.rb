Rails.application.routes.draw do
  get '/you', to: "users#show"
  devise_for :users

  resources :relationships, only: [:create, :destroy]
  root 'static_pages#home'
end
