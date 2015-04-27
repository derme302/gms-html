GameMaker: Studio - HTML Extension
===

Originally created by [Schalk](http://gmc.yoyogames.com/index.php?showuser=99569) updated by [Derme](http://gmc.yoyogames.com/index.php?showuser=125302)

This extension package provides HTML functionality for Game Maker HTML5 games. That means you can add snippets of HTML code where you want it. The extension also provides functionality to connect the HTML elements to your code, for example when you press a button made in HTML it can make your character jump.

###Functions
* gmh_initiate - Activates the extension
* gmh_canvas_html_add(x,y,html) - Creates a new html element and positions it accordingly. The function returns an integer as an id that must be used in all other functions to access the particular html element.
* gmh_canvas_html_remove(id) - Destroys the html element, do this when you are done using the element.
* gmh_canvas_html_hide(id) - Makes the html element invisible.
* gmh_canvas_html_show(id) - Makes the html element visible.
* gmh_canvas_html_get_html(id) - Returns the html for the html element.
* gmh_canvas_html_set_html(id,html) - Sets the html for the html element.
* gmh_canvas_html_get_x(id) - Returns the x-coordinate for the html element.
* gmh_canvas_html_get_y(id) - Returns the y-coordinate for the html element.
* gmh_canvas_html_set_x(id,x) - Sets the x-coordinate for the html element.
* gmh_canvas_html_set_y(id,y) - Sets the y-coordinate for the html element.
* gmh_canvas_html_add_event() - Returns the id of the event to be used for other functions. This function must be called first before being able to use events.
* gmh_canvas_html_callback(id) - This function will return true if the event with the given id has been triggered. If it hasn't been trigger it will return false. This will usually go in the step event of an object.
* gmh_canvas_html_fire_event(id) - This function is a bit tricky. This "fires" an event with the given id. You would expect this to be in your html code, however can also be used in your game maker project.
* gmh_canvas_html_get_value(id); - Gets the value from a HTML object like a textbox, be careful to use this function only with objects that have values
* gmh_canvas_html_set_value(id, value); - Sets the value from a HTML object like a textbox, be careful to use this function only with objects that have values

###Live Example
Availiable on [Derme's Coffee](http://derme.coffee/html5/gmh/index.html)

###Download
Available on [GitHub](https://github.com/derme302/gmh)

###Online Documentation
[Wiki (Work in Progress)](https://github.com/derme302/gmh/wiki)

###Compatibility
I haven't tested compatability. Please feel free to post what browsers this work/don't work on.
