class CharactersController < ApplicationController
    def index
        @characters = Character.order(:name)
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

      def update
        if params[:name].nil?
          @character = Character.find(params[:id])
          @character.add_like
          render json: @character
        else 
          @character = Character.find(params[:id])
          @character.update(params.permit(:id, :name, :actor, :ally, :enemy, :image))
          @character.tvShow = params[:show]
          render json: @character
        end 
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
