class CharactersController < ApplicationController
    def index
        @characters = Character.all
        render json: @characters
      end

      def create
        if !(character_params).empty? && !(character_params).nil?
        @character = Character.new(character_params)
        @character.tvShow = params[:show]
        @character.save
        render json: @character
        end
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
