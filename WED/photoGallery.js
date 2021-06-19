/*this update will make us know clearly and link to the html */
function update(previewPic){
			/*we must to set the element make sure not to just like anyone bla blaa
			dsfaadsfsdafds
			asdfdsa*/
			document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
			document.getElementById('image').innerHTML = previewPic.alt;
		}
function unDo(){
	/*asdfdsafds emdsafdfdsa */
	document.getElementById('image').style.backgroundImage = "url('')";
	document.getElementById('image').innerHTML = "Hover over an image below to display here";
}