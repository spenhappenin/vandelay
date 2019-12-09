Rails.application.routes.draw do
  namespace :api do
    resources :contacts_report, only: :create
  end
end
