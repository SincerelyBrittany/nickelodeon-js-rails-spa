class CharactersController < ApplicationController
    def index
        @characters = Character.all
        render json: @characters
      end

      def create
        @character = Character.new(character_params)
        @character.tvShow = params[:show]
        @character.save
        render json: @character
      end 

      def show 
        @character = Character.find(params[:id])
        render json: @character
      end 
    
      def destroy
        @character = Character.find(params[:id])
        @character.destroy
        render json: {message: "Yay"}
      end

      private

      def character_params
          params.require(:character).permit(:name, :actor, :ally, :enemy, :image)
      end
    
end
