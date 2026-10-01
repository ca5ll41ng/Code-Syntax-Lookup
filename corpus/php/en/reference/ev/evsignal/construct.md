---
id: "en-php-function-evsignal-construct"
language: "php"
lang: "en"
category: "function"
name: "EvSignal::__construct"
title: "Constructs EvSignal watcher object"
signature: "public EvSignal::__construct(int $signum, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evsignal.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EvSignal watcher object

## Description

```php
public EvSignal::__construct(int $signum, callable $callback, mixed $data = null, int $priority = 0)
```

Constructs EvSignal watcher object and starts it automatically. For a stopped signal watcher consider using `EvSignal::createStopped()` method.

## Parameters

- **`$signum`** — Signal number. See constants exported by *pcntl* extension. See also `signal(7)` man page.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Examples

**Handle SIGTERM signal**

```php


<?php
$w = new EvSignal(SIGTERM, function ($watcher) {
    echo "SIGTERM received\n";
    $watcher->stop();
});

Ev::run();
?>

   
```

## See Also

  `EvSignal::createStopped()`
