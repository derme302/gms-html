GameMaker: Studio - HTML Extension
===

GM: HTML is an extension for GameMaker: Studio that makes it possible to add snippets of HTML code to your HTML5 games. It also allows you to connect any elements you create back to your code, so for example you can press a HTML button and make a character jump.

## How it works

I’ll write up more later about the specifics, but basically it uses JavaScript to update the pages HTML code.

## What can the project do right now?

The extension still has some bugs, especially when handling keyboard input due to the way that the GameMaker engine works. I’m looking at adding in new features for these areas, however they require a lot of work to write a work-around. You can find a complete list of the functions below. Or the live demo to see it in action.

## Functions
```javascript
gmh_initiate(); // Activates the extension
gmh_canvas_html_add(x,y,html); // Creates a new html element and positions it accordingly. The function returns an integer as an id that must be used in all other functions to access the particular html element.
gmh_canvas_html_remove(id); // Destroys the html element, do this when you are done using the element.
gmh_canvas_html_hide(id); // Makes the html element invisible.
gmh_canvas_html_show(id); // Makes the html element visible.
gmh_canvas_html_get_html(id); // Returns the html for the html element.
gmh_canvas_html_set_html(id,html); // Sets the html for the html element.
gmh_canvas_html_get_x(id); // Returns the x-coordinate for the html element.
gmh_canvas_html_get_y(id); // Returns the y-coordinate for the html element.
gmh_canvas_html_set_x(id,x); // Sets the x-coordinate for the html element.
gmh_canvas_html_set_y(id,y); // Sets the y-coordinate for the html element.
gmh_canvas_html_add_event(); // Returns the id of the event to be used for other functions. This function must be called first before being able to use events.
gmh_canvas_html_callback(id); // This function will return true if the event with the given id has been triggered. If it hasn't been trigger it will return false. This will usually go in the step event of an object.
gmh_canvas_html_fire_event(id); // This function is a bit tricky. This "fires" an event with the given id. You would expect this to be in your html code, however can also be used in your game maker project.
gmh_canvas_html_get_value(id); // Gets the value from a HTML object like a textbox, be careful to use this function only with objects that have values
gmh_canvas_html_set_value(id, value); // Sets the value from a HTML object like a textbox, be careful to use this function only with objects that have values
gmh_canvas_html_active_element(); // Returns the tag of the element that is currently active
gmh_canvas_html_set_checked(id, value); // Sets the value of a checkbox
gmh_canvas_html_get_checked(id); // Gets the value of a checkbox
```
## Authors and Contributors

Originally this project was developed by Schalk, but unfortunately changes to the GameMaker runner broke it, this updated version is based on the original source. At the moment the project is just maintained by me ([@derme302](https://twitter.com/derme302)), but if you would like to contribute feel free to do so!

The project is currently under the MIT Licence (MIT)

## Support or Contact

Having trouble with GM: HTML? Either try the thread on the GameMaker Community or hit me up on Twitter. Also you could try the online documentation, however the library isn’t fully documented yet.

## Live Example
Availiable on [Derme's Coffee](http://derme.coffee/html5/gmh/index.html)

## Online Documentation
[Wiki (Work in Progress)](https://github.com/derme302/gmh/wiki)

## Compatibility
I haven't tested compatability. Please feel free to post what browsers this work/don't work on.

## Buy (Supports future development)

[GameMaker Marketplace](https://marketplace.yoyogames.com/assets/1530/gmh-canvas-companion)
