---
id: "en-php-function-function-pcntl-async-signals"
language: "php"
lang: "en"
category: "function"
name: "pcntl_async_signals"
title: "Enable/disable asynchronous signal handling or return the old setting"
signature: "bool pcntl_async_signals(bool|null $enable = null)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-async-signals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enable/disable asynchronous signal handling or return the old setting

## Description

 {{{ 

```php
bool pcntl_async_signals(bool|null $enable = null)
```

If the `$enable` parameter is `null`, `pcntl_async_signals()` returns whether asynchronous signal handling is enabled. Otherwise, asynchronous signal handling is enabled or disabled.

 }}} 

## Parameters

 {{{ 

- **`$enable`** — Whether asynchronous signal handling should be enabled.

 }}} 

## Return Values

 {{{ 

When used as getter (`$enable` parameter is `null`) it returns whether asynchronous signal handling is enabled. When used as setter (`$enable` parameter is not `null`), it returns whether asynchronous signal handling was enabled *before* the function call.

 }}} 

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$enable` is nullable now. |

## See Also

 {{{ 

 declare 

 }}}
