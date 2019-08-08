Rails.application.routes.draw do
  post '/login', to: 'auth#create'
  # get '/test', to: 'auth#test'
  post '/signup', to: 'users#create'
  # get '/profile', to: 'users#profile'


end
