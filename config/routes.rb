# frozen_string_literal: true

Rails.application.routes.draw do
  get 'greetings', to: 'greetings#index'
  root 'root#index'
end
