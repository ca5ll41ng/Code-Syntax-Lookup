---
id: "en-php-function-evstat-construct"
language: "php"
lang: "en"
category: "function"
name: "EvStat::__construct"
title: "Constructs EvStat watcher object"
signature: "public EvStat::__construct(string $path, float $interval, callable $callback, mixed $data = null, int $priority = 0)"
module: "ev"
source_url: "https://www.php.net/manual/en/evstat.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EvStat watcher object

## Description

```php
public EvStat::__construct(string $path, float $interval, callable $callback, mixed $data = null, int $priority = 0)
```

Constructs EvStat watcher object and starts the watcher automatically.

## Parameters

- **`$path`** — The path to wait for status changes on.
- **`$interval`** — Hint on how quickly a change is expected to be detected and should normally be specified as `0.0` to let *libev* choose a suitable value.
- **`$callback`** — See Watcher callbacks.
- **`$data`** — Custom data associated with the watcher.
- **`$priority`** — Watcher priority

## Examples

**Monitor changes of /var/log/messages**

```php


<?php

// Use 10 second update interval.
$w = new EvStat("/var/log/messages", 10, function ($w) {
    echo "/var/log/messages changed\n";

    $attr = $w->attr();

    if ($attr['nlink']) {
        printf("Current size: %ld\n", $attr['size']);
        printf("Current atime: %ld\n", $attr['atime']);
        printf("Current mtime: %ld\n", $attr['mtime']);
    } else {
        fprintf(STDERR, "`messages` file is not there!");
        $w->stop();
    }
});

?>

   
```
