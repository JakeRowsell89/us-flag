const colors = require('colors')
const row1 = '*  *  *  *  * '.white.bgBlue + '                          '.white.bgRed
const row2 = ' *  *  *  *  *'.white.bgBlue + '                          '.white.bgWhite
const rowWhite = '                                        '.bgWhite
const rowRed = '                                        '.bgRed

const ar = [row1, row2, row1, row2, row1, row2, row1, rowWhite, rowRed, rowWhite, rowRed, rowWhite, rowRed]

module.exports = {
  flag: ar.join('\n')
}
