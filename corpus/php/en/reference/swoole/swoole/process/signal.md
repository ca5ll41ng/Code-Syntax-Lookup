---
id: "en-php-function-swoole-process-signal"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Process::signal"
title: "Send signal to the child processes."
signature: "public static void Swoole\\Process::signal(string $signal_no, callable $callback)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-process.signal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send signal to the child processes.

## Description

```php
public static void Swoole\Process::signal(string $signal_no, callable $callback)
```

## Parameters

- **`$signal_no`**
- **`$callback`**

## Return Values

If signal sent successfully, it returns TRUE, otherwise it returns FALSE.
