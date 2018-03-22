var listItemHTML = '<div id="item' + i + '"><input type="checkbox" onclick="crossedOut(\'item' + i + '\');">' + listItem +
'<input type = "button" value="Remove" onclick="removeItem(\'item' + i + '\');"></div>';

function removeItem(item){
        var itemToRemove = document.getElementById(item);
        itemToRemove.parentNode.removeChild(itemToRemove);
}
