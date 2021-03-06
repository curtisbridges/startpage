# startpage
A browser startpage specifically for me.

The appearance is lifted from [this page](https://github.com/MiguelRAvila/Bento) but the implementation is mine, done with React. (I did steal the CSS variables to match the appearance.)

![Screenshot](/.github/images/startpage.png?raw=true "My Startpage")

## Technology Used
1. React & React Hooks
2. React & FontAwesome integration
3. Remote REST API (for weather data)
   1. deployed on server without exposing private API keys
   2. async/await fetch
   3. consuming JSON data from API

## TODO

- [x] Responsive
- [x] System theme applied to page
- [x] Font-Awesome icons
- [x] Date / Time
  - [x] Greeting based upon time
  - [x] Weather: hard coded zipcode (but dynamic weather)
- [x] Host in GitHub
- [x] Auto-refresh

## Version 2
- [ ] Configurable (via JSON) Links
- [ ] Random background image (with annotation?)
- [ ] Weather: based upon locality
- [ ] Web search (Google)

## Version 3
- [ ] Add configurable themes
- [ ] Web search shortcuts (wiki ddg yt twi, etc)
