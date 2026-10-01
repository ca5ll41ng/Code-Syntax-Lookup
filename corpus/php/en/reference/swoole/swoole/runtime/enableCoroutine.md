---
id: "en-php-function-swoole-runtime-enable-coroutine"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Runtime::enableCoroutine"
title: "Enable coroutine for specified functions"
signature: "public static void Swoole\\Runtime::enableCoroutine(int $flags = SWOOLE_HOOK_ALL)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-runtime.enable-coroutine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enable coroutine for specified functions

## Description

```php
public static void Swoole\Runtime::enableCoroutine(int $flags = SWOOLE_HOOK_ALL)
```

This method enables coroutine support for specified PHP functions based on the given flags. It should be called once at the beginning of the application.

## Parameters

- **`$flags`** — Bitmask of flags specifying which functions to hook. Can be combined using | operator. Available flags: `SWOOLE_HOOK_TCP`, `SWOOLE_HOOK_UDP`, `SWOOLE_HOOK_UNIX`, `SWOOLE_HOOK_UDG`, `SWOOLE_HOOK_SSL`, `SWOOLE_HOOK_TLS`, `SWOOLE_HOOK_SLEEP`, `SWOOLE_HOOK_FILE`, `SWOOLE_HOOK_STREAM_FUNCTION`, `SWOOLE_HOOK_BLOCKING_FUNCTION`, `SWOOLE_HOOK_PROC`, `SWOOLE_HOOK_CURL`, `SWOOLE_HOOK_NATIVE_CURL`, `SWOOLE_HOOK_SOCKETS`, `SWOOLE_HOOK_STDIO`, `SWOOLE_HOOK_PDO_PGSQL`, `SWOOLE_HOOK_PDO_ODBC`, `SWOOLE_HOOK_PDO_ORACLE`, `SWOOLE_HOOK_PDO_SQLITE`, or `SWOOLE_HOOK_ALL` for all flags.

## Return Values

No value is returned.
