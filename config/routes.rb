Rails.application.routes.draw do
  get '/you', to: "users#show"
  devise_for :users
  root 'static_pages#home'
end
