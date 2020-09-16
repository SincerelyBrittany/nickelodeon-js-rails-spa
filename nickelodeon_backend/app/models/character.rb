class Character < ApplicationRecord
  belongs_to :show

  def tvShow=(name)
    show = Show.find_or_create_by(name: name)
    self.show = show
  end
end
