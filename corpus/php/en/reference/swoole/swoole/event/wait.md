---
id: "en-php-function-swoole-event-wait"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::wait"
title: "Start event loop"
signature: "public static void Swoole\\Event::wait()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.wait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Start event loop

## Description

```php
public static void Swoole\Event::wait()
```

Starts the event loop. Place this at the end of your PHP program.

## Return Values

No return value.

## Examples

**`Swoole\Event::wait()` example**

```php

     
<?php
Swoole\Timer::tick(1000, function () {
    echo "hello\n";
});

Swoole\Event::wait();
?>

    
```
