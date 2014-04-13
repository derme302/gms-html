function gmh_canvas_html_set_y(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.top = b + "px";
}

function gmh_canvas_html_set_x(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.left = b + "px";
}

function gmh_canvas_html_get_y(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	return parseFloat(canvas_element.style.top);
}

function gmh_canvas_html_get_x(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	return parseFloat(canvas_element.style.left);
}

function gmh_canvas_html_set_html(a, b) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.innerHTML = b;
}

function gmh_canvas_html_get_html(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	return canvas_element.innerHTML;
}

function gmh_canvas_html_show(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.display = "inline";
}

function gmh_canvas_html_hide(a) {
	canvas_element = document.getElementById("canvas_html_" + a);
	canvas_element.style.display = "none";
}

function gmh_canvas_html_remove(a) {
	canvas_html = document.getElementById("canvas_html");
	canvas_element = document.getElementById("canvas_html_"+a);
	canvas_html.removeChild(canvas_element);
}

function gmh_canvas_html_add(a, b, c) {
	canvas_html=document.getElementById("canvas_html");
	canvas_element=document.createElement("div");
	canvas_html_id++;
	canvas_element.setAttribute("id", "canvas_html_" + canvas_html_id);
	canvas_element.style.position = "relative";
	canvas_element.style.left = a + "px";
	canvas_element.style.top = b + "px";
	canvas_element.innerHTML = c;
	canvas_html.appendChild(canvas_element);
	return canvas_html_id;
}

function gmh_canvas_html_fire_event(a) {
	canvas_html_callbacks[a]=true;
}

function gmh_canvas_html_add_event() {
	canvas_html_callbacks[canvas_html_callbacks.length]=false;
	return canvas_html_callbacks.length-1;
}

function gmh_canvas_html_callback(a) {
	if (canvas_html_callbacks[a]) {
		canvas_html_callbacks[a] = false;
		return true;
	}			
	return false;
}

function gmh_initiate() {
	var wrapper = document.createElement("div");
	var canvas = document.getElementById("canvas");
	var canvas_html = document.createElement("div");
	var canvas_html_callbacks = [];
	var canvas_html_id = 0;
	canvas_html.setAttribute("id","canvas_html");
	canvas_html.style.position = "absolute";
	canvas_html.style.left = "0px";
	canvas_html.style.top = "0px";
	canvas.parentNode.insertBefore(wrapper, canvas);
	wrapper.appendChild(canvas);
	wrapper.appendChild(canvas_html);
}