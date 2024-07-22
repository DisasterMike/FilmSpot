Rails.application.routes.draw do
  devise_for :users
  root to: "spots#index"
  # root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # get 'owner/bookings/all', to: "owner/bookings#all_bookings"

  # Defines the root path route ("/")
  # root "posts#index"
  resources :spots, only: [:index, :show, :new, :create] do
  end

  resources :bookings, only: [:index, :show, :new, :create]

  namespace :owner do
    get 'spots/index'
    get 'spots/show'
    resources :spots, only: [:index, :show]
    resources :bookings, only: [:index, :show, :edit, :update]
  end
end
