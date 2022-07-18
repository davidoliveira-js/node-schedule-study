const schedule = require('node-schedule');
const readline = require('readline-sync');

const minutes = Number(
  readline.question(
    ' Agendar a execucao da funcao para daqui a quantos minutos? '
  )
);

Date.prototype.addMinutes = function (minutes) {
  const date = new Date(this.valueOf());
  date.setMinutes(date.getMinutes() + minutes);
  return date;
};

let date = new Date();

date = date.addMinutes(minutes);

const job = schedule.scheduleJob(date, () => {
  const date = new Date();
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  console.log(`função executada às ${time}`);
});

const { hour, minute, second } = job.nextInvocation()._date.c;

console.log(
  `\n A função será executada às ${hour}:${minute}:${second}`
);
