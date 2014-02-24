$(function() {
        $("#options1").mousedown(function(){
            document.getElementById("dialog1").style.display= "block";
        });
    });
$(function() {
        $("#options2").mousedown(function(){
            document.getElementById("dialog1").style.display= "block";
        });
    });
$(function() {
        $("#news").mousedown(function(){
            document.getElementById("dialog2").style.display= "block";
        });
    });
$(function() {
        $("#news2").mousedown(function(){
            document.getElementById("dialog2").style.display= "block";
        });
    });
$(function(){
        $("#ok_about").mousedown(function(){
            document.getElementById("dialog1").style.display= "none";
        });
    })
$(function(){
        $("#quit").mousedown(function(){
            document.getElementById("dialog2").style.display= "none";
        });
    })