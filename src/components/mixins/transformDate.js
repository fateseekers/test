export default {
    methods: {
        transformDate(date) {
            let stringDate = this.$moment(new Date(date)).format('DD.MM.YYYY')
            return stringDate
        }
    }
}