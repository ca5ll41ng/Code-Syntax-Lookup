---
id: "en-php-function-parallel-events-setblocking"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events::setBlocking"
title: "Behaviour"
signature: "public void parallel\\Events::setBlocking(bool $blocking)"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events.setblocking.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Behaviour

## Description

By default when events are polled for, blocking will occur (at the PHP level) until the first event can be returned: Setting blocking mode to `false` will cause poll to return control if the first target polled is not ready.

This differs from setting a timeout of 0 with `parallel\Events::setTimeout()`, since a timeout of 0, while allowed, will cause an exception to be raised, which may be extremely slow or wasteful if what is really desired is non-blocking behaviour.

A non-blocking loop effects the return value of `parallel\Events::poll()`, such that it may be `null` before all events have been processed.

```php
public void parallel\Events::setBlocking(bool $blocking)
```

Shall set blocking mode

## Exceptions

> Shall throw `parallel\Events\Error` if loop has timeout set.
