---
id: "en-php-function-zmqdevice-setidletimeout"
language: "php"
lang: "en"
category: "function"
name: "ZMQDevice::setIdleTimeout"
title: "Set the idle timeout"
signature: "public ZMQDevice ZMQDevice::setIdleTimeout(int $timeout)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqdevice.setidletimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the idle timeout

## Description

```php
public ZMQDevice ZMQDevice::setIdleTimeout(int $timeout)
```

Sets the idle callback timeout value. The idle callback is invoked periodically when the device is idle.

## Parameters

- **`$timeout`** — The idle callback timeout value.

## Return Values

On success this method returns the current object.
