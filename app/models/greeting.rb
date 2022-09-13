# frozen_string_literal: true

class Greeting < ApplicationRecord
  def self.greeting
    Greeting.all.sample(1)[0]
  end
end
