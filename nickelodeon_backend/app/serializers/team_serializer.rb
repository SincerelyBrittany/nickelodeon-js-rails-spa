class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :characters, serializer: CharacterSerializer
  # has_many :characters
end
