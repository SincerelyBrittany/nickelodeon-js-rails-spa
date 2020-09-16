# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
characters = [
    {
      "name": "Arnold Shortman",
      "actor": "Lane_Toran",
      "ally": "Gerald Martin Johanssen",
      "enemy": "Helga G Pataky",
      "image": "https://img.hulu.com/user/v3/artwork/a4a06e0c-c4d8-4b34-a55e-a28c57ecc429?base_image_bucket_name=image_manager&base_image=b8f52699-81b5-417b-9c5f-8f7f63528c33&size=400x600&format=jpeg",
      "tvShow": "Hey Arnold"
    },
    {
        "name": "Gerald Martin Johanssen",
        "actor": "N/A",
        "ally": "Arnold Shortman",
        "enemy": "N/A",
        "image": "https://www.pngitem.com/pimgs/m/166-1661759_gerald-hey-arnold-png-clipart-png-download-gerald.png",
        "tvShow": "Hey Arnold"
      },
      {
        "name": "Tommy Pickles",
        "actor": "Lane_Toran",
        "ally": "Chucky Finster",
        "enemy": "N/A",
        "image": "https://upload.wikimedia.org/wikipedia/en/e/e4/Tommy_Pickles.png",
        "tvShow": "Rugrats"
      },
      {
        "name": "Chucky Finster",
        "actor": "Lane_Toran",
        "ally": "Tommy Pickles",
        "enemy": "N/A",
        "image": "https://downtownprintwear.files.wordpress.com/2011/02/chuckie-finster.jpg",
        "tvShow": "Rugrats"
      },
      {
        "name": "Phil Deville",
        "actor": "Lane_Toran",
        "ally": "Lillian Deville",
        "enemy": "N/A",
        "image": "https://vignette.wikia.nocookie.net/rugrats/images/b/b4/Phil_DeVille.png",
        "tvShow": "Rugrats"
      },
      {
        "name": "Lillian Deville",
        "actor": "Lane_Toran",
        "ally": "Phil Deville",
        "enemy": "N/A",
        "image": "https://i.pinimg.com/474x/2a/79/a1/2a79a108dbab2f5a8dcdaac7c3d63de6.jpg",
        "tvShow": "Rugrats"
      },
    ]

    characters.each do |character|
        Character.create(character)
    end