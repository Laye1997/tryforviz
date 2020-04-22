          var guy=document.getElementById("guy");
          var contener=document.getElementById("contener");
          var guyLeft=0;
          var txt1=document.getElementById("txt1");
          var txt2=document.getElementById("txt2");
          var txt3=document.getElementById("txt3");

      function myMove() {
        var elem = document.getElementById("guy");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == 100) {
              clearInterval(id);
          } else {
              pos++;
              elem.style.top = pos + 'px';
            }
        }
    }

    function myMove1() {

        var elem = document.getElementById("guy");
        var txt3=document.getElementById("txt1");
        var pos = 0;
        var p=490;
        var q=250;
        var id = setInterval(frame, 10);
        var attente=document.getElementById("attente");
        var attente1=document.getElementById("attente1");
        attente1.value="move";
        setTimeout(function(){
          attente1.value=""},15000);
        txt3.value=3;
        function frame() {

          if (attente.value==1 && attente1.value=="") {
            p--;
            elem.style.top=p+'px'
              if (p == 20) {
                clearInterval(id);
                attente1.value="";
                setTimeout(function(){
                attente.value=3},2000);
                setTimeout(function(){
                txt3.value="";attente1.value=""},3000);

            }
          }else if (attente.value==2 && attente1.value==""){
              q--;
              elem.style.top = q + 'px';
              if (q == 20) {
                clearInterval(id);
                attente1.value="";
                setTimeout(function(){
                attente.value=3},3000);
                setTimeout(function(){
                txt3.value=""},4000);

              }

            } 

        }
    }

    function myMove2() {
        var elem = document.getElementById("guy");
        var txt2=document.getElementById("txt2");
        var pos = 0;
        var p=490;
        var q=20;
        var id = setInterval(frame, 10);
        var attente=document.getElementById("attente");
        var attente1=document.getElementById("attente1");
        attente1.value="move";
        txt2.value=2;
        function frame() {
          if (attente.value==1) {
            p--;
            elem.style.top=p+'px'
              if (p == 250) {
                clearInterval(id);
                setTimeout(function(){
                attente.value=2;attente1.value=""},3000);
                setTimeout(function(){
                txt2.value=""},4000);
            }
          }else if (attente.value==3){
              q++;
              elem.style.top = q + 'px';
              if (q == 250) {
                clearInterval(id);
              setTimeout(function(){
                attente.value=2;attente1.value=""},3000);
                setTimeout(function(){
                txt2.value=""},4000);
              }

            } 

        }
    }

    function myMove3() {
        var elem = document.getElementById("guy");
        var txt3=document.getElementById("txt3");
        var pos = 0;
        var p=20;
        var q=250;
        var id = setInterval(frame, 10);
        var attente=document.getElementById("attente");
      txt3.value=1;
        function frame() {
            if (attente.value==2 && attente1.value=="") {
            q++;
            elem.style.top=q+'px'
              if (q == 490) {
                clearInterval(id);
                setTimeout(function(){
                attente.value=1},3000);
                setTimeout(function(){
                txt3.value=""},4000);

            }
          }else if (attente.value==3 && attente1.value==""){
              p++;
              elem.style.top = p + 'px';
              if (p == 490) {
                clearInterval(id);
                setTimeout(function(){
                attente.value=1},3000);
                setTimeout(function(){
                txt3.value=""},4000);

              }

            } 

        }
    }