Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'sessions', registrations: 'registrations'}

  resources :forum_threads do
  resources :forum_posts
  end

  root to: 'application#login'
end
