Rails.application.routes.draw do
  post '/login', to: 'auth#create'
  post '/logout', to: 'auth#destroy'

  # user

  post '/users/signup', to: 'users#create'
  get '/user/profile', to: 'users#profile'
  patch '/users/profile/edit', to: 'users#update'
  delete '/users/delete', to: 'users#destroy'

  get '/usesr/show/:id', to: 'user#show'

  get '/users/articles/saved', to: 'users#show_saved_articles'
  get '/users/articles/mentioned', to: 'users#show_saved_articles'
  get '/users/articles/commented', to: 'users#show_saved_articles'

  # articles

  post '/articles', to: 'articles#create_or_update'

  # follows

  post '/follows', to: 'follows#create'
  delete '/delete/:id', to: 'follows#destroy'

  # user_articles

  post '/user-articles', to: '/user_articles#create'
  delete '/user-articles', to: 'user_articles#destroy'

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
