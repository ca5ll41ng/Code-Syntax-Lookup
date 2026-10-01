---
id: "en-php-function-swoole-event-defer"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::defer"
title: "Execute a function at the start of the next event loop"
signature: "public static void Swoole\\Event::defer(callable $callback_function)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.defer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a function at the start of the next event loop

## Description

```php
public static void Swoole\Event::defer(callable $callback_function)
```

Schedules a function to run at the start of the next event loop iteration.

## Parameters

- **`$callback_function`** — Callback function to execute (no parameters allowed; use `use` for closure variables).

## Return Values

No return value.

## Examples

**`Swoole\Event::defer()` example**

```php

     
<?php
Swoole\Event::defer(function(){
    echo "After EventLoop\n";
});
?>

    
```
