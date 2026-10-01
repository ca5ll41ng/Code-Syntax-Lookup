---
id: "en-php-function-swoole-process-kill"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Process::kill"
title: "Send signal to the child process."
signature: "public static bool Swoole\\Process::kill(int $pid, [int $signal_no = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-process.kill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send signal to the child process.

## Description

```php
public static bool Swoole\Process::kill(int $pid, [int $signal_no = ...])
```

Send signal to the child process.

## Parameters

- **`$pid`** — Process pid
- **`$signal_no`** — Signal to be sent

## Return Values

Returns `true` on success or `false` on failure.
