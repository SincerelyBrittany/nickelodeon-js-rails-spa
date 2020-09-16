class CharactersController < ApplicationController
    def index
        @characters = Character.all
        render json: @characters
      end

      def create
        byebug
        @character = Character.new(character_params)
        @character.save
        byebug
        # render json: @character
      end 

      def show 
        @character = Character.find(params[:id])
        render json: @character
      end 
    
      def destroy
        @character = Character.find(params[:id])
        @character.destroy
        render json: {message: "You did it, Brittany and friends!"}
      end

      private

      def character_params
          params.permit(:name, :actor, :ally, :enemy, :image, :show)
      end
    
end
