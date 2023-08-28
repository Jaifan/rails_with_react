Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resource :list, only: [:index]
    end
  end

end
