---
id: "en-php-function-zmqdevice-run"
language: "php"
lang: "en"
category: "function"
name: "ZMQDevice::run"
title: "Run the new device"
signature: "public void ZMQDevice::run()"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqdevice.run.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Run the new device

## Description

```php
public void ZMQDevice::run()
```

Runs the device.

## Parameters

This function has no parameters.

## Return Values

Call to this method will block until the device is running. It is not recommended that devices are used from interactive scripts. On failure this method will throw ZMQDeviceException.
