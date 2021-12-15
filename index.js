const Logger = require('logplease');
const logger = Logger.create('el logger del ej3 dice', {showTimestamp: false});

logger.debug('hola, mundo de Node');
logger.info('información de último momento!');
logger.warn('aquí va un mensaje a través del método warn');
logger.error('algo no está bien...')