This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# LAB RectangleConfigurator
 - fork and clone this project

## Iteration 1
- Create a new JSX Component Class "RectangleConfigurator.tsx", it should render "Hello I'm a rectangle configurator"
- import and RectangleConfigurator.tsx to App.tsx and add the JSX Component to the render() method of App.tsx
- Create a new JSX Component Class "DimensionConfigurator.tsx", it should render "I'm a DimensionConfigurator"
- add two DimensionConfigurator components to the render method of the SquareConfigurator.tsx

## Iteration 2
- add the property "Dimension" to the DimensionConfigurator Class
- create an "enum" as a type for the dimension property. Dimensions can be "width" or "heigth"
- change the render method of the Class "DimensionConfigurator" so the it renders one of those according to the dimension property
  - I'm a width configurator
  - I'm a height configurator
- in Class "RectangleConfigurator" set the dimension prop of the first to "height" and the dimension prop of the second to "width"

## Iteration 3
- add a "length" property to the DimensionConfigurator
- show the length visually with a "div" that has the width of "length" in pixels

## Iteration 4
- add an input field to the DimensionConfigurator, to change the length
- add state to "RectangleConfigurator" for width and height of a square
- add a div with the width and height in state to render a square with this width and height in pixels
- add eventhandlers in SquareConfigurator and DimensionConfigurator, so that a user can change width and height and the UI gets updated accordingliy
