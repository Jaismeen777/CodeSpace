<script>
    var anchor=document.querySelectorAll("ul li a");
    anchor.forEach(function(obj){
        obj.addEventListener("click",function()
        {
            var getColor=obj.style.background;
            document.body.style.background=getColor;
        })
    });
</script>