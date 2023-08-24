class List < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :tag, presence: true
end
