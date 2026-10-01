---
id: "en-php-function-zmqdevice-construct"
language: "php"
lang: "en"
category: "function"
name: "ZMQDevice::__construct"
title: "Construct a new device"
signature: "public ZMQDevice::__construct(ZMQSocket $frontend, ZMQSocket $backend, [ZMQSocket $listener = ...])"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqdevice.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new device

## Description

```php
public ZMQDevice::__construct(ZMQSocket $frontend, ZMQSocket $backend, [ZMQSocket $listener = ...])
```

"ØMQ devices can do intermediation of addresses, services, queues, or any other abstraction you care to define above the message and socket layers." -- zguide

## Parameters

- **`$frontend`** — Frontend parameter for the devices. Usually where there messages are coming.
- **`$backend`** — Backend parameter for the devices. Usually where there messages going to.
- **`$listener`** — Listener socket, which receives a copy of all messages going both directions. The type of this socket should be SUB, PULL or DEALER.

## Return Values

Call to this method will prepare the device. Usually devices are very long running processes so running this method from interactive script is not recommended. This method throw ZMQDeviceException if the device cannot be started.
