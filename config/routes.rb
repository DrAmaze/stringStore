Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :word, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end
