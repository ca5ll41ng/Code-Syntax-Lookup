---
id: "en-php-function-function-yaz-wait"
language: "php"
lang: "en"
category: "function"
name: "yaz_wait"
title: "Wait for Z39.50 requests to complete"
signature: "mixed yaz_wait([array $options = ...])"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-wait.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Wait for Z39.50 requests to complete

## Description

```php
mixed yaz_wait([array $options = ...])
```

This function carries out networked (blocked) activity for outstanding requests which have been prepared by the functions `yaz_connect()`, `yaz_search()`, `yaz_present()`, `yaz_scan()` and `yaz_itemorder()`.

`yaz_wait()` returns when all servers have either completed all requests or aborted (in case of errors).

## Parameters

- **`$options`** — An associative array of options: - **`timeout`** — Sets timeout in seconds. If a server has not responded within the timeout it is considered dead and `yaz_wait()` returns. The default value for timeout is 15 seconds. - **`event`** — A boolean.

## Return Values

Returns `true` on success or `false` on failure. In event mode, returns resource or `false` on failure.
