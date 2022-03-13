# Josh TakeHome


## Tech Used:
- Create React App to initialize project
- Material UI as my CSS library
- Used date-fns for simplification of dates and calendar


## Architectural Overview:
- App component:
  - handles routing for the application
  - renders Navbar component
  - routes to RoverListing and RoverDetails component
- Navbar component:
  - essentially a header, that will route back to main RoverListings page
- RoverListing component:
  - fetches from API and then renders the different rovers available in a grid
  - upon clicking a rover, will redirect to that rovers photo collection
- RoverDetail component: 
  - requests rover photos from current date 
  - calendar allowing selection of different date, which will do another update fetch request
- DatePicker component:
  - utilizing Material UI's date time picker for picking a new date for photos


## Reflections/Justifications:
- Decided based on the application a more robust state management solution wasn't necessary as props were not passed down more than one level
- Decided to use Material UI for the bonus credit
- Decied 

## Things I'd work on next wtih more time:
- Improve responsiveness
- Simplify/improve styling on Rover components in RoverListing
- Implement testing
- Improve view on mobile devices
- Add pagination option when showing pictures of a rover on a day with lots of photos

## How to run:
- clone repository
- run npm i
- run npm start
