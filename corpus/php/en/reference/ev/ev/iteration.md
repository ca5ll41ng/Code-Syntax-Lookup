---
id: "en-php-function-ev-iteration"
language: "php"
lang: "en"
category: "function"
name: "Ev::iteration"
title: "Return the number of times the default event loop has polled for new events"
signature: "final public static int Ev::iteration()"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.iteration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the number of times the default event loop has polled for new events

## Description

```php
final public static int Ev::iteration()
```

Return the number of times the event loop has polled for new events. Sometimes useful as a generation counter.

## Parameters

This function has no parameters.

## Return Values

Returns number of polls of the default event loop.

## See Also

  `Ev::depth()`
