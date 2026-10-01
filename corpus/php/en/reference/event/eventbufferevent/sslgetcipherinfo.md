---
id: "en-php-function-eventbufferevent-sslgetcipherinfo"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslGetCipherInfo"
title: "Returns a textual description of the cipher"
signature: "public string EventBufferEvent::sslGetCipherInfo()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslgetcipherinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a textual description of the cipher

## Description

```php
public string EventBufferEvent::sslGetCipherInfo()
```

Retrieves description of the current cipher by means of the `SSL_CIPHER_description` SSL API function (see *SSL_CIPHER_get_name(3)* man page).

> This function is available only if `Event` is compiled with OpenSSL support.

## Parameters

This function has no parameters.

## Return Values

Returns a textual description of the cipher on success, or `false` on error.
