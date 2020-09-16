class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :actor, :ally, :enemy, :image, :show_name
  # belongs_to :show
end
