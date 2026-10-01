---
id: "en-php-function-zmqpoll-poll"
language: "php"
lang: "en"
category: "function"
name: "ZMQPoll::poll"
title: "Poll the items"
signature: "public int ZMQPoll::poll(array $readable, array $writable, int $timeout = -1)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqpoll.poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Poll the items

## Description

```php
public int ZMQPoll::poll(array $readable, array $writable, int $timeout = -1)
```

Polls the items in the current poll set. The readable and writable items are returned in the `$readable` and `$writable` parameters. `ZMQPoll::getLastErrors()` can be used to check if there were errors.

## Parameters

- **`$readable`** — Array where readable ZMQSockets/PHP streams are returned. The array will be cleared at the beginning of the operation.
- **`$writable`** — Array where writable ZMQSockets/PHP streams are returned. The array will be cleared at the beginning of the operation.
- **`$timeout`** — Timeout for the operation. -1 means that poll waits until at least one item has activity. Please note that starting from version 1.0.0 the poll timeout is defined in milliseconds, rather than microseconds.

## Return Values

Returns an integer representing the amount of items with activity.

## Errors/Exceptions

Throws `ZMQPollException` on error.

## Examples

**A `ZMQPoll()` example**

Create a simple poll server

```php


<?php

/* Create socket, request-reply pattern (reply socket) */
$context = new ZMQContext();
$server  = $context->getSocket(ZMQ::SOCKET_REP);

/* Bind to port 5555 on 127.0.0.1 */
$server->bind("tcp://127.0.0.1:5555");

/* Create new pollset for incoming/outgoing message */
$poll = new ZMQPoll();

/* Add the object and listen for poll in/out */
$id = $poll->add($server, ZMQ::POLL_IN | ZMQ::POLL_OUT);
echo "Added object with id " . $id . "\n";

/* Initialise readable and writable arrays */
$readable = array();
$writable = array();

while (true) {
   /* Amount of events retrieved */
   $events = 0;

   try {
       /* Poll until there is something to do */
       $events = $poll->poll($readable, $writable, -1);
       $errors = $poll->getLastErrors();

       if (count($errors) > 0) {
           foreach ($errors as $error) {
               echo "Error polling object " . $error . "\n";
           }
       }
   } catch (ZMQPollException $e) {
       echo "poll failed: " . $e->getMessage() . "\n";
   }

   if ($events > 0) {
       /* Loop through readable objects and recv messages */
       foreach ($readable as $r) {
           try {
               echo "Received message: " . $r->recv() . "\n";
           } catch (ZMQException $e) {
               echo "recv failed: " . $e->getMessage() . "\n";
           }
       }

       /* Loop through writable and send back messages */
       foreach ($writable as $w) {
           try {
               $w->send("Got it!");
           } catch (ZMQException $e) {
               echo "send failed: " . $e->getMessage() . "\n";
           }
       }
   }
}
?>

    
```
