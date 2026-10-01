---
id: "en-php-function-function-litespeed-finish-request"
language: "php"
lang: "en"
category: "function"
name: "litespeed_finish_request"
title: "Flushes all response data to the client"
signature: "bool litespeed_finish_request()"
module: "litespeed"
source_url: "https://www.php.net/manual/en/function.litespeed-finish-request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Flushes all response data to the client

## Description

```php
bool litespeed_finish_request()
```

This function flushes all response data to the client and finishes the request. This allows for time consuming tasks to be performed without leaving the connection to the client open.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 7.2.18 | This function became available. |

## See Also

 `fastcgi_finish_request()`
