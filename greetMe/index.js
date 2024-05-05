const moment = require('moment');

const greetings = {
  en: 'Hello',
  fr: 'Bonjour',
  hi: 'Nameste',
};

exports.handler = async (event) => {
  let name = event.pathParameters.name;
  let { lang, ...info } = event.queryStringParameters;
  let message = `${greetings[lang] || greetings['en']} ${name}`;

  let response = {
    msg: message,
    info: info,
    timeStamp: moment().unix(),
  };
  return {
    status: 200,
    body: JSON.stringify(response),
  };
};
