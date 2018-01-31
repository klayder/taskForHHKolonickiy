@@include("../../bower_components/jquery/dist/jquery.min.js")
@@include("../../bower_components/bootstrap/dist/js/bootstrap.min.js")

(function(){
	
	var resData=[{
        "colectionName" : "New York Colorblock Tank",
        "itemStocks"    : "New collection",
        "description"   : "The relaxed hiking cultere of New York inspired Pharrell to create his Colorblock collection, a palyful blend of retro and modern outdoor design.",
        "author"        : "Pharell Williams",
        "itemName"      : "NY Colorblock Top",
        "itemImage"     : "img/tshirt.png",
        "price"         : "$299",
        "sizeNotation"  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur ex sint repellat voluptatem natus facere repudiandae molestiae quam saepe.",
        "aviableSizes"  : {  
            "xs"    :   2,
            "s"     :   4,
            "m"     :   3,
            "l"     :   2
        }
    },
    {
        "colectionName" : "New York Colorblock Tank",
        "itemStocks"    : "New collection",
        "description"   : "The relaxed hiking cultere of New York inspired Pharrell to create his Colorblock collection, a palyful blend of retro and modern outdoor design.",
        "author"        : "Pharell Williams",
        "itemName"      : "NY Colorblock Top",
        "itemImage"     : "img/tshirt.png",
        "price"         : "$299",
        "aviableSizes"  : {  
            "xs"    :   2,
            "s"     :   4,
            "m"     :   3,
            "l"     :   2
        }
    }];
	/* 
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://localhost:9000/data/tshorts.json",false);
	xhr.send();
	if (xhr.status != 200) {
 		alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} else {
		var resData = JSON.parse(xhr.responseText);
	}

	*/

	

	var container	=	document.querySelector(".mainContent");
	var template	=	document.querySelector("#templateItem");
	var fragment	=	document.createDocumentFragment();
	
	
	function renderElementFromTemplate(number){
		var IMAGE_TIMEOUT=10000;
		if("content" in template){
			var element=template.content.children[0].cloneNode(true);
		} else {
			var element=template.children[0].cloneNode(true);
		}
		
		
			element.querySelector(".colectionName").textContent=resData[number].colectionName;
			element.querySelector(".itemStocks").textContent=resData[number].itemStocks;
			element.querySelector(".description").textContent=resData[number].description;
			element.querySelector(".author").textContent=resData[number].author;
			element.querySelector(".itemName").textContent=resData[number].itemName;
			element.querySelector(".itemPrice").textContent=resData[number].price;
			element.querySelector(".sizeNotation").textContent=resData[number].sizeNotation;
			
			var itemImage	=	new Image();

			var imageLoadTimeout	=	setTimeout(function(){
				itemImage.src="";
				element.querySelector(".itemImage").classList.add("noItemFoto");
			}, IMAGE_TIMEOUT);
			
			itemImage.onload	=	function(){
				clearTimeout(imageLoadTimeout);
				element.querySelector(".itemImage").style.backgroundImage = 'url(\''+itemImage.src+'\')';
			};

			itemImage.onerror	= 	function(){
				element.querySelector(".itemImage").classList.add("noItemFoto");
			};

			itemImage.src	=	resData[number].itemImage;

			fragment.appendChild(element);

		container.appendChild(fragment);

	};
	
		function removeFromViwport(){
			container.removeChild(document.querySelector(".templateWrap"));
		}
	
		renderElementFromTemplate(0);




 })();
