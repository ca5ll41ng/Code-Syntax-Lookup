---
id: "en-php-function-eventhttprequest-findheader"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::findHeader"
title: "Finds the value belonging to a header"
signature: "public void EventHttpRequest::findHeader(string $key, string $type)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.findheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Finds the value belonging to a header

## Description

```php
public void EventHttpRequest::findHeader(string $key, string $type)
```

Finds the value belonging to a header.

## Parameters

- **`$key`** — The header name.
- **`$type`** — One of `EventHttpRequest::*_HEADER` constants.

## Return Values

Returns `null` if header not found.

## See Also

  `EventHttpRequest::addHeader()`
