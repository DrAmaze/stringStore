Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :word, only: [:show, :create, :destroy]
    resources :words, only: [:index]
  end
  root "static_pages#root"
  get '*path', to: 'static_pages#root'
end
