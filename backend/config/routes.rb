Rails.application.routes.draw do

  # auth

  post '/login', to: 'auth#create' #

  # user

  get '/users/profile', to: 'users#profile' #

  post '/users/signup', to: 'users#create' #
  get '/users/:name', to: 'users#show'
  patch '/users/profile/edit', to: 'users#update'
  delete '/users/delete', to: 'users#destroy'


  # get '/users/articles/saved', to: 'users#show_saved_articles'
  # get '/users/articles/mentioned', to: 'users#show_saved_articles'
  # get '/users/articles/commented', to: 'users#show_saved_articles'

  post '/follow/:id', to: 'users#follow'
  delete '/unfollow/:id', to: 'users#unfollow'

  # articles

  post '/articles/create-and-save', to: 'articles#create_and_save' #
  # post '/articles', to: 'articles#create'
  # get '/articles/:title', to: 'articles#show'

  # user_articles

  delete '/user-articles/:id', to: 'user_articles#destroy'

  # comments

  post '/comments', to: 'comments#create'
  patch '/comments/:id', to: 'comments#update'
  delete '/comments/:id', to: 'comments#destroy'

  # mentions

  post '/mentions', to: 'mentions#create'
  delete '/mentions/:id', to: 'mentions#destroy'

  # tags

  post '/tags', to: 'tags#create'

end
