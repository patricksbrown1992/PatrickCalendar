Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    get 'users/verify', to: 'users#verify'
    resources :users, only: [:create] 
    resource :session, only: [:destroy, :create]
    resources :events, only: [:index, :create, :destroy, :show, :update]
  end
end
