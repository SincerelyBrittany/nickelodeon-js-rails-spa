class ShowsController < ApplicationController
    def index
        @shows = Show.all
        # render json: @shows
        render json: @shows, include: "characters"
      end
end
