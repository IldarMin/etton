window.prettyNav = {
    mouseDown: function(){
        document.getElementById('ul').classList.remove('display_none');
        document.getElementById('layout').classList.remove('display_none');
    },
    mouseUp: function(){
        document.getElementById('ul').classList.add('display_none');
        document.getElementById('layout').classList.add('display_none');
    },
    new: function (el){
    }
}
