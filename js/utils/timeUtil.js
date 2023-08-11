class TimeUtil{
    static DEFAULT_SEPARATOR = "-";
    static TIME_SEPARATOR = ":";

    static convertDateToStringWithSeparator(date) {
        const year = date.getFullYear();
        const month = this.leftPad(date.getMonth() + 1);
        const day = this.leftPad(date.getDate());
        const hour = this.leftPad(date.getHours());
        const minute = this.leftPad(date.getMinutes());
        const second = this.leftPad(date.getSeconds());

        const front = [year, month, day].join(TimeUtil.DEFAULT_SEPARATOR);
        const back = [hour, minute, second].join(TimeUtil.TIME_SEPARATOR);
        return front + TimeUtil.TIME_SEPARATOR + back;
    }
    
    static leftPad(value) {
        if(value >= 10) {
            return value;
        }

        return `0${value}`;
    }
}