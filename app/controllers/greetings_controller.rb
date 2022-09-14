class GreetingsController < ApplicationController
  def index
    render json: Greeting.greeting
  end
end
