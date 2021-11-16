export const toZeroedNumber = (number, countOfDigits) => {
    let num = number.toString()
    if (num.length === countOfDigits) {
        return num
    } else if (num.length < countOfDigits) {
        return '0'.repeat(countOfDigits - num.length) + num
    } else {
        return '0'.repeat(countOfDigits)
    }
}