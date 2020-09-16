

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/blob/master/nickelodeon_frontend/assets/images/Nickelodeon-old-school-nickelodeon-295359_1024_768.jpg">
    <img src="https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/blob/master/nickelodeon_frontend/assets/images/Nickelodeon-old-school-nickelodeon-295359_1024_768.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">I DO NOT OWN ANY RIGHTS TO THE NICKOLEON COMPANY, but I am a fan.</h3>

  <p align="center">
    This is a simple single page application ("SPA") for nickelodeon characters. I grew up watching nickelodeon and wanted to create an application that would allow users to add and create characters, hopefully one day it can be a list of ALL characters from nick.com!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/issues">Report Bug</a>
    ·
    <a href="https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://www.nick.com/)

This application was built with a rails backend and Javascript frontend. 

### Built With
* [Ruby-on-Rails](https://guides.rubyonrails.org/)
* [postgresql](https://www.postgresql.org/)
* [byebug](https://rubygems.org/gems/byebug/versions/9.0.6)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
*  Love ❤️


<!-- GETTING STARTED -->
## Getting Started

To get the application started you must have ruby and postgresql installed on your computer. Checkout the ruby on rails [getting-started-guide](https://guides.rubyonrails.org/v5.0/getting_started.html) to learn how to install it on your device. If you need to install postgres check out the doumentation [here](https://www.postgresql.org/about/).

### Prerequisites
Before running your server, you will need to install the gems and add content to your database manually or you can use the seeds file:

To install the gems first cd into <a href="https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/tree/master/nickelodeon_backend"> nickelodeon_backend</a> and run the following:

```sh
bundle install
```

To run your migrations and update your db/schema.rb file to match the structure of the database, run the following:

```sh
rails db:create
```

```sh
rails db:migrate
```

To create data in the database, run the following:
```sh
rails db:seed
```

```sh
rails s
```
and then go to your favorite browser and visit this webpage "http://localhost:3000/characters" 

### Installation

1. Clone the repo
```sh
git clone git@github.com:SincerelyBrittany/nickelodeon-js-rails-spa.git
```
3. Cd into backend and install the gemfile packages
```sh
bundle install
```
4. Run rails s
5. cd into frontend and open index.html


<!-- USAGE EXAMPLES -->
<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

 -->

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Connect/Follow me:

[![Linkedin][linkedin-shield]][linkedin-url]
[![Twitter][twitter-shield]][twitter-url]
[![Dev.to][dev-to-shield]][dev-to-url]


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Youtube](https://youtube.com)
* [Google](https://google.com)
* [Flatiron School](https://flatironschool.com/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/SincerelyBrittany/nickelodeon-js-rails-spa.svg?style=flat-square
[contributors-url]: https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SincerelyBrittany/nickelodeon-js-rails-spa.svg?style=flat-square
[forks-url]: https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/network/members
[stars-shield]: https://img.shields.io/github/stars/SincerelyBrittany/nickelodeon-js-rails-spa.svg?style=flat-square
[stars-url]: https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/stargazers
[issues-shield]: https://img.shields.io/github/issues/SincerelyBrittany/nickelodeon-js-rails-spa.svg?style=flat-square
[issues-url]: https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/issues
[license-shield]: https://img.shields.io/github/license/SincerelyBrittany/nickelodeon-js-rails-spa.svg?style=flat-square
[license-url]: https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sincerelybrittany/
[twitter-shield]:https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FSincerelyBrittt
[twitter-url]: https://twitter.com/SincerelyBrittt
[dev-to-url]: https://dev.to/sincerelybrittany
[dev-to-shield]:https://img.shields.io/badge/-Dev.to-black.svg?style=flat-square&logo=dev.to&colorB=555
[product-screenshot]: https://github.com/SincerelyBrittany/nickelodeon-js-rails-spa/blob/master/nickelodeon_frontend/assets/images/Sep-16-2020%2017-22-22.gif