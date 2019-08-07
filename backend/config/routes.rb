Rails.application.routes.draw do
  post '/login', to: 'auth#create'
  post '/signup', to: 'users#create'
  get '/profile', to: 'users#profile'
end
