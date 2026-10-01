---
id: "en-php-function-zmqdevice-settimercallback"
language: "php"
lang: "en"
category: "function"
name: "ZMQDevice::setTimerCallback"
title: "Set the timer callback function"
signature: "public ZMQDevice ZMQDevice::setTimerCallback(callable $cb_func, int $timeout, [mixed $user_data = ...])"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqdevice.settimercallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the timer callback function

## Description

```php
public ZMQDevice ZMQDevice::setTimerCallback(callable $cb_func, int $timeout, [mixed $user_data = ...])
```

Sets the timer callback function. The timer callback will be invoked after timeout has passed. The difference between idle and timer callbacks are that idle callback is invoked only when the device is idle. The callback function signature is callback (mixed $user_data). Added in ZMQ extension version 1.1.0.

## Parameters

- **`$cb_func`** — Callback function to invoke when the timer fires. Returning false or a value that evaluates to false from this function will cause the device to stop.
- **`$timeout`** — How often to invoke the timer callback in milliseconds. The timer callback is invoked periodically. The timeout value guarantees that there is at least this amount of milliseconds between invocations of the callback function.
- **`$user_data`** — Additional data to pass to the callback function.

## Return Values

On success this method returns the current object.
