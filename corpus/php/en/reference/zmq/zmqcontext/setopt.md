---
id: "en-php-function-zmqcontext-setopt"
language: "php"
lang: "en"
category: "function"
name: "ZMQContext::setOpt"
title: "Set a socket option"
signature: "public ZMQContext ZMQContext::setOpt(int $key, mixed $value)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqcontext.setopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a socket option

## Description

```php
public ZMQContext ZMQContext::setOpt(int $key, mixed $value)
```

Sets a ZMQ context option. The type of the `$value` depends on the `$key`. See ZMQ Constant Types for more information.

## Parameters

- **`$key`** — One of the `ZMQ::CTXOPT_{*}` constants.
- **`$value`** — The value of the parameter.

## Return Values

Returns the current object. Throws ZMQContextException on error.
