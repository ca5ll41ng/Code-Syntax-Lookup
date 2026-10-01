---
id: "en-php-function-swoole-mysql-on"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\MySQL::on"
title: "Register callback function based on event name."
signature: "public void Swoole\\MySQL::on(string $event_name, callable $callback)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-mysql.on.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register callback function based on event name.

## Description

```php
public void Swoole\MySQL::on(string $event_name, callable $callback)
```

Register callback function based on event name, current only 'close' event is supported.

## Parameters

- **`$event_name`**
- **`$callback`**

## Return Values
