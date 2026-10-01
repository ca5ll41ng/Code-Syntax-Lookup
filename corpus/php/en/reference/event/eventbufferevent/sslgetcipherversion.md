---
id: "en-php-function-eventbufferevent-sslgetcipherversion"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslGetCipherVersion"
title: "Returns version of cipher used by current SSL connection"
signature: "public string EventBufferEvent::sslGetCipherVersion()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslgetcipherversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns version of cipher used by current SSL connection

## Description

```php
public string EventBufferEvent::sslGetCipherVersion()
```

Retrieves version of cipher used by current SSL connection.

> This function is available only if `Event` is compiled with OpenSSL support.

## Parameters

This function has no parameters.

## Return Values

Returns the current cipher version of the SSL connection, or `false` on error.
