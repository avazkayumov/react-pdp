class Timer {
    minutes = 00;
    seconds = 00;
    hours = 00;
    interval;

    appendMinutes = document.querySelector(".minutes");
    appendSeconds = document.querySelector(".seconds");
    appendHours = document.querySelector(".hours");

    startBtn = document.querySelector(".start");
    stopBtn = document.querySelector(".stop");
    resetBtn = document.querySelector(".reset");

    start() {
        this.interval = setInterval( () => {
            this.stopBtn.style.display = "block";
            this.startBtn.style.display = "none";
            this.resetBtn.style.display = "block";
    
            this.seconds++;
    
            if (this.seconds >= 60) {
                this.minutes++;
                this.seconds = 0;
            }
    
            if (this.minutes >= 60) {
                this.hours++;
                this.minutes = 0;
            }
            
            this.appendSeconds.innerHTML = String(this.seconds).padStart(2, 0)
            this.appendMinutes.innerHTML = String(this.minutes).padStart(2, 0)
            this.appendHours.innerHTML = String(this.hours).padStart(2, 0)
        } ,1000);
    };

    stop() {
        clearInterval(this.interval);
    };

    reset() {
        this.minutes = 0;
        this.hours = 0;
        this.seconds = 0;
        this.appendSeconds.innerHTML = String(this.seconds).padStart(2, 0)
        this.appendMinutes.innerHTML = String(this.minutes).padStart(2, 0)
        this.appendHours.innerHTML = String(this.hours).padStart(2, 0)

        this.startBtn.style.display = "block";
        this.stopBtn.style.display = "none";
        this.resetBtn.style.display = "none";

        this.stop(); 
    }
}
const timer = new Timer