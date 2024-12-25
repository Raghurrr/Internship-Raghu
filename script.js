
        function perform(val)
        {
            let v = document.getElementById("screen");
            v.value=v.value+val;

        }

        function calCulate()
        {
            let v = document.getElementById("screen").value;
            let result=eval(v);
            document.getElementById("screen").value=result;

        

        }
        
        function reSet()
        {
            window.location="index.html";
        }


   