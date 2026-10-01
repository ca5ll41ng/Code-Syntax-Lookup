---
id: "en-php-function-parallel-events-settimeout"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events::setTimeout"
title: "Behaviour"
signature: "public void parallel\\Events::setTimeout(int $timeout)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events.settimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Behaviour

## Description

By default when events are polled for, blocking will occur (at the PHP level) until the first event can be returned: Setting the timeout causes an exception to be thrown when the timeout is reached.

This differs from setting blocking mode to `false` with `parallel\Events::setBlocking()`, which will not cause an exception to be thrown.

```php
public void parallel\Events::setTimeout(int $timeout)
```

Shall set the timeout in microseconds

## Exceptions

> Shall throw `parallel\Events\Error` if loop is non-blocking.
