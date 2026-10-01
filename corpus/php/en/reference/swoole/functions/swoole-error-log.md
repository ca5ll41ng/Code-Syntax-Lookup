---
id: "en-php-function-function-swoole-error-log"
language: "php"
lang: "en"
category: "function"
name: "swoole_error_log"
title: "Output error messages to the log"
signature: "void swoole_error_log(int $level, string $msg)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-error-log.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output error messages to the log

## Description

```php
void swoole_error_log(int $level, string $msg)
```

Output error messages to the log.

## Parameters

- **`$level`** — Log Level, constants can be used: `SWOOLE_LOG_DEBUG`, `SWOOLE_LOG_TRACE`, `SWOOLE_LOG_INFO`, `SWOOLE_LOG_NOTICE`, `SWOOLE_LOG_WARNING`, `SWOOLE_LOG_ERROR`, `SWOOLE_LOG_NONE`
- **`$msg`** — Message content to be written to the log.

## Return Values

No value is returned.
