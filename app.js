// ON DOCUMENT READY
$(document).ready(() => {
	var headerBars = $('.bars');
	var headerNav = $('.aside-menu'); 
	var headerNavClose = $('.close'); 

	headerBars.on("click", function () {
		$(this).toggleClass("active");
		headerNav.toggleClass('active');
	});

	headerNavClose.on("click", function () {
		headerNav.removeClass('active');
		headerBars.removeClass("active");
	});
});

function loadJSON() {
    return new Promise((resolve, reject) => {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'translation.json', true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4) {
                if (xobj.status == 200) {
                    resolve(JSON.parse(xobj.responseText));
                } else {
                    reject('Failed to load JSON file');
                }
            }
        };
        xobj.send(null);
    });
}

