function timer(id, deadline) {
    //timer

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(t / 86400000);
        const hours = Math.floor((t / 3600000) % 24);
        const minutes = Math.floor((t / 60000) % 24);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        };
    }

    function zero(number) {
        if (number >= 0 && number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = zero(t.days);
            hours.innerHTML = zero(t.hours);
            minutes.innerHTML = zero(t.minutes);
            seconds.innerHTML = zero(t.seconds);
            if (t.total <= 0) {
                days.innerHTML = zero(0);
                hours.innerHTML = zero(0);
                minutes.innerHTML = zero(0);
                seconds.innerHTML = zero(0);
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

export default timer;