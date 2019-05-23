const { Rabbit } = require('rabbit-queue');

const rabbit = new Rabbit(process.env.RABBIT_URL || 'amqp://localhost', {
  prefetch: 1, //default prefetch from queue
  replyPattern: true, //if reply pattern is enabled an exclusive queue is created
  scheduledPublish: false,
  prefix: '', //prefix all queues with an application name
  socketOptions: {} // socketOptions will be passed as a second param to amqp.connect and from ther to the socket library (net or tls)
});
 
rabbit.publish('queueName', { test: 'data' }, { correlationId: '1' }).then(() => console.log('message published'));
