---
id: "en-php-function-eventhttprequest-removeheader"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::removeHeader"
title: "Removes an HTTP header from the headers of the request"
signature: "public void EventHttpRequest::removeHeader(string $key, string $type)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.removeheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes an HTTP header from the headers of the request

## Description

```php
public void EventHttpRequest::removeHeader(string $key, string $type)
```

Removes an HTTP header from the headers of the request.

## Parameters

- **`$key`** — The header name.
- **`$type`** — `$type` is one of `EventHttpRequest::*_HEADER` constants.

## Return Values

Removes an HTTP header from the headers of the request.

## See Also

  `EventHttpRequest::addHeader()`
