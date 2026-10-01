---
id: "en-php-function-zmqcontext-getopt"
language: "php"
lang: "en"
category: "function"
name: "ZMQContext::getOpt"
title: "Get context option"
signature: "public mixed ZMQContext::getOpt(string $key)"
module: "zmq"
source_url: "https://www.php.net/manual/en/zmqcontext.getopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get context option

## Description

```php
public mixed ZMQContext::getOpt(string $key)
```

Returns the value of a context option.

## Parameters

- **`$key`** — An integer representing the option. See the `ZMQ::CTXOPT_{*}` constants.

## Return Values

Returns either a `string` or an `integer` depending on `$key`. Throws ZMQContextException on error.
