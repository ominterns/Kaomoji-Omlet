var allCategories = document.getElementsByClassName("table table-striped");

function shareToOmlet() {
      if(Omlet.isInstalled()) {
          var text = {
            type: "text",
            data: {
              text: document.getElementById("clipboard").value
            }
          }
          Omlet.exit(text);
      }
}
function addToClipboard(kaomoji) {
  document.getElementById("clipboard").value += kaomoji;
}
function showCategory(category) {
  console.log(category);
  for(var i = 0; i < allCategories.length; i++) {
    if(allCategories[i].id != category) {
      document.getElementById(allCategories[i].id).style.visibility = "hidden";
      document.getElementById(allCategories[i].id).style.display = "none";
      document.getElementsByTagName("h3")[i].style.visibility = "hidden";
      document.getElementsByTagName("h3")[i].style.display = "none";
    }
    else {
      document.getElementById(allCategories[i].id).style.visibility = "visible";
      document.getElementById(allCategories[i].id).style.display = "block";
      document.getElementsByTagName("h3")[i].style.visibility = "visible";
      document.getElementsByTagName("h3")[i].style.display = "block";
    }
  }
}

function setUpClick() {
  var allKaomoji = document.getElementsByTagName("td");
  for(var j = 0; j < allKaomoji.length; j++) {
    if(document.getElementsByTagName("td")[j].width != "50%")
      document.getElementsByTagName("td")[j].setAttribute("onclick", "addToClipboard(this.innerHTML)");
  }
}

function setUpOptions() {
  var select = document.getElementById("categorySelect");
  for(var k = 0; k < allCategories.length; k++) {
    var option = document.createElement("option");
    option.text = document.getElementsByTagName("h3")[k].innerHTML;
    option.value = allCategories[k].id;
    select.add(option);
    console.log("option added");
  }
}
