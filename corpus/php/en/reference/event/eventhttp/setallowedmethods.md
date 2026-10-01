---
id: "en-php-function-eventhttp-setallowedmethods"
language: "php"
lang: "en"
category: "function"
name: "EventHttp::setAllowedMethods"
title: "Sets which HTTP methods are supported in requests accepted by this server, and passed to user callbacks"
signature: "public void EventHttp::setAllowedMethods(int $methods)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttp.setallowedmethods.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets which HTTP methods are supported in requests accepted by this server, and passed to user callbacks

## Description

```php
public void EventHttp::setAllowedMethods(int $methods)
```

Sets which HTTP methods are supported in requests accepted by this server, and passed to user callbacks

If not supported they will generate a `"405 Method not allowed"` response.

By default this includes the following methods: `GET`, `POST`, `HEAD`, `PUT`, `DELETE`. See `EventHttpRequest::CMD_*` constants.

## Parameters

- **`$methods`** — A bit mask of `EventHttpRequest::CMD_*` constants.

## Return Values

No value is returned.
