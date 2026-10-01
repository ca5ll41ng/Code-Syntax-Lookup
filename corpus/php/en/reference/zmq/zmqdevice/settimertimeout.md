---
id: "en-php-function-zmqdevice-settimertimeout"
language: "php"
lang: "en"
category: "function"
name: "ZMQDevice::setTimerTimeout"
title: "Set the timer timeout"
signature: "public ZMQDevice ZMQDevice::setTimerTimeout(int $timeout)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqdevice.settimertimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the timer timeout

## Description

```php
public ZMQDevice ZMQDevice::setTimerTimeout(int $timeout)
```

Sets the timer callback timeout value. The timer callback is invoked periodically if it's set. Added in ZMQ extension version 1.1.0.

## Parameters

- **`$timeout`** — The timer callback timeout value.

## Return Values

On success this method returns the current object.
