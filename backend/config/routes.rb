Rails.application.routes.draw do

  # auth

  post '/login', to: 'auth#create'

  # user

  post '/users/signup', to: 'users#create'
  get '/users/profile', to: 'users#profile'
  patch '/users/profile/edit', to: 'users#update'
  delete '/users/delete', to: 'users#destroy'

  get '/usesr/show/:id', to: 'user#show'

  get '/users/articles/saved', to: 'users#show_saved_articles'
  get '/users/articles/mentioned', to: 'users#show_saved_articles'
  get '/users/articles/commented', to: 'users#show_saved_articles'

  post '/follows', to: 'users#follow'
  delete '/follows/:id', to: 'users#unfollow'

  # articles

  post '/articles', to: 'articles#create_or_update'

  # user_articles

  post '/user-articles', to: 'user_articles#create'
  delete '/user-articles/:id', to: 'user_articles#destroy'

  # comments

  post '/comments', to: 'comments#create'
  patch '/comments/:id', to: 'comments#update'
  delete '/comments/:id', to: 'comments#destroy'

  # mentions

  post '/mentions', to: 'mentions#create'
  delete '/mention/:id', to: 'mentions#destroy#'

  # tags

  post '/tags', to: 'tags#create'

end
