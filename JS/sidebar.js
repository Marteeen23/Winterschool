var mini = true;
        
        function toggleSidebar() {
            if (mini) {
                // console.log("opening sidebar");
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if(width>400){
                    document.getElementById("mySidebar").style.width = "300px";
                }
                else{
                    document.getElementById("mySidebar").style.width = "260px";
                }
                document.getElementById("mySidebar").style.boxShadow = "0px 0px 10000px 10000px rgba(0,0,0,0.7)";
                document.getElementById("rbtx").style.opacity = "1";
                this.mini = false;
            } else {
                // console.log("closing sidebar");
                document.getElementById("mySidebar").style.width = "60px";
                document.getElementById("mySidebar").style.boxShadow = "none";
                document.getElementById("rbtx").style.opacity = "0";
                this.mini = true;
            }
        }