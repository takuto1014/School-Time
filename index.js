// var class_time1 = document.getElementById("class_time")
// var class_time = class_time1.value


var start_time = document.getElementById("start_time").value;
var class_time = document.getElementById("class_time");
var break_time = document.getElementById("break_time");
var class_number = document.getElementById("class_number");
var lunch_time = document.getElementById("lunch_time");
var lunch_number = document.getElementById("lunch_number");



document.getElementById("button1").addEventListener("click", function () {
    
    var start_time   = document.getElementById("start_time").value;
    var class_time   = Number(document.getElementById("class_time").value);
    var break_time   = Number(document.getElementById("break_time").value);
    var class_number = Number(document.getElementById("class_number").value);
    var lunch_time   = Number(document.getElementById("lunch_time").value);
    var lunch_number = Number(document.getElementById("lunch_number").value);
    if(start_time==""||class_time==""||break_time==""||class_number==""){
        alert("まずはちゃんと入力しろwwwww")
    }else if(class_time<0||break_time<0||class_number<0||lunch_time<0||lunch_number<0){
        alert("なんで負の数なんだよwwww")
    }else if(class_time%1!=0||break_time%1!=0||class_number%1!=0||lunch_time%1!=0||lunch_number%1!=0){
        alert("なんで小数なんだよwwww")
    }else{
        var start_time1  = start_time.split(":") 
        var time = 0
        var hours = Number(start_time1[0])
        var minutes = Number(start_time1[1])
        var set_time = []
        for(i=1;i<=class_number;i++){
            //始まりの時間
            time = hours+":"+minutes
            if(minutes<10){
                time = hours+":0"+minutes
            }
            set_time.push(time)

            //終わりの時間
            minutes += class_time
            hours += parseInt(minutes/60)
            hours -= parseInt(hours/24)*24
            minutes -= parseInt(minutes/60)*60
            time = hours+":"+minutes
            if(minutes<10){
                time = hours+":0"+minutes
            }
            set_time.push(time)
            
            //休み時間足す
            minutes += break_time
            hours += parseInt(minutes/60)
            hours -= parseInt(hours/24)*24
            minutes -= parseInt(minutes/60)*60
            
            //昼休み
            if(i==lunch_number){
                minutes += (lunch_time-break_time)
                hours += parseInt(minutes/60)
                hours -= parseInt(hours/24)*24
                minutes -= parseInt(minutes/60)*60
            }
        }
        result =""
        var text= document.getElementById("result"); 
        for(i=1;i<=class_number;i++){
            result = result + i+"時間目  "+set_time[i*2-2]+"～"+set_time[i*2-1]+"<br>"
        }
        text.innerHTML = result
    }
}, false);  


    var btn = document.getElementById('button2');
    btn.addEventListener('click', function(e) {
            var start_time   = document.getElementById("start_time").value;
            var class_time   = Number(document.getElementById("class_time").value);
            var break_time   = Number(document.getElementById("break_time").value);
            var class_number = Number(document.getElementById("class_number").value);
            var lunch_time   = Number(document.getElementById("lunch_time").value);
            var lunch_number = Number(document.getElementById("lunch_number").value);
            var start_time1  = start_time.split(":") 
            var time = 0
            var hours = Number(start_time1[0])
            var minutes = Number(start_time1[1])
            var set_time = []
            for(i=1;i<=class_number;i++){
                //始まりの時間
                time = hours+":"+minutes
                if(minutes<10){
                    time = hours+":0"+minutes
                }
                set_time.push(time)

                //終わりの時間
                minutes += class_time
                hours += parseInt(minutes/60)
                if(hours>23){
                    hours -=24
                }
                minutes = minutes-parseInt(minutes/60)*60
                time = hours+":"+minutes
                if(minutes<10){
                    time = hours+":0"+minutes
                }
                set_time.push(time)
                
                //休み時間足す
                minutes += break_time
                hours += parseInt(minutes/60)
                if(hours>23){
                    hours -=24
                }
                minutes = minutes-parseInt(minutes/60)*60
                
                //
                if(i==lunch_number){
                    minutes += (lunch_time-break_time)
                    hours += parseInt(minutes/60)
                    if(hours>23){
                        hours -=24
                    }
                    minutes = minutes-parseInt(minutes/60)*60
                }
            }
            result =""
            for(i=1;i<=class_number;i++){
                result = result + i+"時間目  "+set_time[i*2-2]+"～"+set_time[i*2-1]+"\n" //←ここはjsの改行文字
            }
    

        copy_to_clipboard(result);
    });
     
    function copy_to_clipboard(value) {
        if(navigator.clipboard) {
            var copyText = value;
            navigator.clipboard.writeText(copyText).then(function() {
                alert('コピーしました。');
            });
        } else {
            alert('対応していません。');
        }
    }

