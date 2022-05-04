document.write(`
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Lesson 6: Timers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
        <style>
            html, body{
                height: 100%;
            }

            html{
                font-family: 'Orbitron';
                display: table;
                margin: auto;
            }

            body{
                background-color: black;
                display: table-cell;
                vertical-align: middle;
            }

            #timerDisplay{
                text-align: center;
                color:#49fb35;
                font-size: 300px;
            }

            h1{
                color: #49fb35;
                text-align: center;
                font-size: 50px;
            }

            input.button1{
                display: inline-block;
                text-align: center;
                padding: 1em;
                border-radius: 5em;
                color: #000000;
                background-color: #49fb35;
                font-weight: bold;
                font-size: 50px;
            }

            p{
                margin: 0 auto;
                text-align: center;
            }
        </style>
    </head>

    <body>
        <h1>STOPWATCH</h1>
       
        <p>
            <input type="button" class="button1" id="startTimer" value="Start Timer">
            <input type="button" class="button1" id="stopTimer" value="Stop Timer">
            <input type="button" class="button1" id="resetTimer" value="Reset Timer">
        </p>

        <p id="timerDisplay"></p>

    </body>

    <script>
        var tick = 0;

        function drawTimer() {
            document.getElementById('timerDisplay').innerHTML = tick;
            tick ++;
        };

        function startTimer(){
            interval = setInterval(drawTimer, 1000);
        };

        function pauseTimer(){
            tickStored = (tick -= 1);
            clearInterval(interval);
            document.getElementById('timerDisplay').innerHTML = tickStored;
            setInterval(drawTimer(tickStored), 1000);
        };
        
        function resetTimer(){
            tick = 0;
            document.getElementById('timerDisplay').innerHTML = tick;
            clearInterval(interval);
        };

        drawTimer()

        document.getElementById("startTimer").addEventListener("click", startTimer);
        document.getElementById("stopTimer").addEventListener("click", pauseTimer);
        document.getElementById("resetTimer").addEventListener("click", resetTimer);
    </script>
</html>

`);