class Event < ApplicationRecord
    validates :title, :user_id, :start, :end, presence: true
    belongs_to :user
end