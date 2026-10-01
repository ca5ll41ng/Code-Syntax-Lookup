---
id: "en-php-function-eventbufferevent-sslgetciphername"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslGetCipherName"
title: "Returns the current cipher name of the SSL connection"
signature: "public string EventBufferEvent::sslGetCipherName()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslgetciphername.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current cipher name of the SSL connection

## Description

```php
public string EventBufferEvent::sslGetCipherName()
```

Retrieves name of cipher used by current SSL connection.

> This function is available only if `Event` is compiled with OpenSSL support.

## Parameters

This function has no parameters.

## Return Values

Returns the current cipher name of the SSL connection, or `false` on error.
