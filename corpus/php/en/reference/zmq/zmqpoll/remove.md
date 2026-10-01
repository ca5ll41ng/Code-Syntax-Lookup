---
id: "en-php-function-zmqpoll-remove"
language: "php"
lang: "en"
category: "function"
name: "ZMQPoll::remove"
title: "Remove item from poll set"
signature: "public bool ZMQPoll::remove(mixed $item)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqpoll.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove item from poll set

## Description

```php
public bool ZMQPoll::remove(mixed $item)
```

Remove item from the poll set. The `$item` parameter can be ZMQSocket object, a stream resource or the id returned from `ZMQPoll::add()` method.

## Parameters

- **`$item`** — The ZMQSocket object, PHP stream or `string` id of the item.

## Return Values

Returns true if the item was removed and false if the object with given id does not exist in the poll set.
