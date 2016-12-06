Rails.application.routes.draw do
  namespace :api, defaults: { format: :json }, path: '/api/v1/' do
    scope module: :v1 do
      # We are going to list our resources here
      resources :blogs, :only => [:show, :index, :create, :update, :destroy]
    end
  end
end
