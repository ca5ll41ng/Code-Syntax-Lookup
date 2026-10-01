---
id: "en-php-function-parallel-events-poll"
language: "php"
lang: "en"
category: "function"
name: "parallel\\Events::poll"
title: "Polling"
signature: "public parallel\\Events\\Event|null parallel\\Events::poll()"
module: "parallel"
source_url: "https://www.php.net/manual/en/parallel-events.poll.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Polling

## Description

```php
public parallel\Events\Event|null parallel\Events::poll()
```

Shall poll for the next event

## Return Values

Should there be no targets remaining, `null` shall be returned

Should this be a non-blocking loop, and blocking would occur, `null` shall be returned

Otherwise, the `parallel\Events\Event` returned describes the event.

## Exceptions

> Shall throw `parallel\Events\Error\Timeout` if timeout is used and reached.
