---
id: "en-php-function-swoole-event-dispatch"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::dispatch"
title: "Perform a single event loop iteration"
signature: "public static void Swoole\\Event::dispatch()"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.dispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perform a single event loop iteration

## Description

```php
public static void Swoole\Event::dispatch()
```

The purpose of this function is to maintain compatibility with some frameworks. When a framework internally manages its own reactor loop, using Event::wait would allow Swoole's underlying layer to retain control, preventing the framework from taking over execution.

## Return Values

No return value.

## Examples

**Manual event loop control**

```php

     
<?php
while (true) {
    Swoole\Event::dispatch();
}

    
```
