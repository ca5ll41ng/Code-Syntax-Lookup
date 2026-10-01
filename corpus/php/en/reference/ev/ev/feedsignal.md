---
id: "en-php-function-ev-feedsignal"
language: "php"
lang: "en"
category: "function"
name: "Ev::feedSignal"
title: "Feed a signal event into Ev"
signature: "final public static void Ev::feedSignal(int $signum)"
module: "ev"
source_url: "https://www.php.net/manual/en/ev.feedsignal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Feed a signal event into Ev

## Description

```php
final public static void Ev::feedSignal(int $signum)
```

Simulates a signal receive. It is safe to call this function at any time, from any context, including signal handlers or random threads. Its main use is to customise signal handling in the process.

Unlike `Ev::feedSignalEvent()`, this works regardless of which loop has registered the signal.

## Parameters

- **`$signum`** — Signal number. See `signal(7)` man page for details. You can use constants exported by `pcntl` extension.

## Return Values

No value is returned.

## See Also

  `Ev::feedSignalEvent()`
