class CharactersController < ApplicationController
    def index
        @characters = Character.all
        render json: @characters
      end
    
      def destroy
        @character = Character.find(params[:id])
        @character.destroy
        render json: {message: "You did it, Brittany and friends!"}
      end
    
end
