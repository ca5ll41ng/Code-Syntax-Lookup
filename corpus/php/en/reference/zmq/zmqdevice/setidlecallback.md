---
id: "en-php-function-zmqdevice-setidlecallback"
language: "php"
lang: "en"
category: "function"
name: "ZMQDevice::setIdleCallback"
title: "Set the idle callback function"
signature: "public ZMQDevice ZMQDevice::setIdleCallback(callable $cb_func, int $timeout, [mixed $user_data = ...])"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqdevice.setidlecallback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the idle callback function

## Description

```php
public ZMQDevice ZMQDevice::setIdleCallback(callable $cb_func, int $timeout, [mixed $user_data = ...])
```

Sets the idle callback function. If idle timeout is defined the idle callback function shall be called if the internal poll loop times out without events. If the callback function returns false or a value that evaluates to false the device is stopped. The callback function signature is callback (mixed $user_data).

## Parameters

- **`$cb_func`** — Callback function to invoke when the device is idle. Returning false or a value that evaluates to false from this function will cause the device to stop.
- **`$timeout`** — How often to invoke the idle callback in milliseconds. The idle callback is invoked periodically when there is no activity on the device. The timeout value guarantees that there is at least this amount of milliseconds between invocations of the callback function.
- **`$user_data`** — Additional data to pass to the callback function.

## Return Values

On success this method returns the current object.
