---
id: "en-php-function-function-pcntl-getqos-class"
language: "php"
lang: "en"
category: "function"
name: "pcntl_getqos_class"
title: "Get the QoS class of the current thread"
signature: "Pcntl\\QosClass pcntl_getqos_class()"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-getqos-class.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the QoS class of the current thread

## Description

```php
Pcntl\QosClass pcntl_getqos_class()
```

Retrieves the Quality of Service (QoS) class of the current thread.

> This function is only available on Apple platforms.

## Parameters

This function has no parameters.

## Return Values

Returns the current QoS class as a `Pcntl\QosClass`.

## Errors/Exceptions

Throws an Error if the underlying call to `pthread_get_qos_class_np()` fails.

## See Also

 `pcntl_setqos_class()` `Pcntl\QosClass`
