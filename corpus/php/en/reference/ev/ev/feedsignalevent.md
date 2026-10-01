---
id: "en-php-function-ev-feedsignalevent"
language: "php"
lang: "en"
category: "function"
name: "Ev::feedSignalEvent"
title: "Feed signal event into the default loop"
signature: "final public static void Ev::feedSignalEvent(int $signum)"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.feedsignalevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Feed signal event into the default loop

## Description

```php
final public static void Ev::feedSignalEvent(int $signum)
```

Feed signal event into the default loop. Ev will react to this call as if the signal specified by `$signal` had occurred.

## Parameters

- **`$signum`** — Signal number. See `signal(7)` man page for details. See also constants exported by `pcntl` extension.

## Return Values

No value is returned.

## See Also

  `Ev::feedSignal()`
