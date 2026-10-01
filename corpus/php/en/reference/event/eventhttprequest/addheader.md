---
id: "en-php-function-eventhttprequest-addheader"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::addHeader"
title: "Adds an HTTP header to the headers of the request"
signature: "public bool EventHttpRequest::addHeader(string $key, string $value, int $type)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.addheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds an HTTP header to the headers of the request

## Description

```php
public bool EventHttpRequest::addHeader(string $key, string $value, int $type)
```

Adds an HTTP header to the headers of the request.

## Parameters

- **`$key`** — Header name.
- **`$value`** — Header value.
- **`$type`** — One of `EventHttpRequest::*_HEADER` constants.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

  `EventHttpRequest::removeHeader()`
