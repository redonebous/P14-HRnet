export class FormatUserData {

    constructor(data) {
        this.data = data
        this.formatData(this.data)
    }

    formatData(data) {
        data.forEach(user => {
            const birthDate = new Date(user.birthdate);
            const startDate = new Date(user.startdate);

            user.birthdateString = this.formatNumberDate(birthDate?.getDate()) + '/' + this.formatNumberDate(birthDate?.getMonth() + 1) + '/' + birthDate.getFullYear();
            user.startdateString = this.formatNumberDate(startDate?.getDate()) + '/' + this.formatNumberDate(startDate?.getMonth() + 1) + '/' + startDate.getFullYear();

        })
    }

    formatNumberDate(nb) {
        return nb <= 9 ? '0' + nb.toString() : nb.toString()
    }

}