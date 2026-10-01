---
id: "en-php-function-zmqpoll-add"
language: "php"
lang: "en"
category: "function"
name: "ZMQPoll::add"
title: "Add item to the poll set"
signature: "public string ZMQPoll::add(mixed $entry, int $type)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqpoll.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add item to the poll set

## Description

```php
public string ZMQPoll::add(mixed $entry, int $type)
```

Adds a new item to the poll set and returns the internal id of the added item. The item can be removed from the poll set using the returned string id.

## Parameters

- **`$entry`** — ZMQSocket object or a PHP stream resource
- **`$type`** — Defines what activity the socket is polled for. See `ZMQ::POLL_IN` and `ZMQ::POLL_OUT` constants.

## Return Values

Returns a string id of the added item which can be later used to remove the item. Throws ZMQPollException on error.
