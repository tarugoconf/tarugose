const { format } = require('date-fns');
const gl = require('date-fns/locale/gl');

module.exports = (date, pattern = 'dd-MM-yyyy') => format(date, pattern, { locale: gl });
