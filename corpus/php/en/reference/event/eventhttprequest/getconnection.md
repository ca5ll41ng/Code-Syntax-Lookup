---
id: "en-php-function-eventhttprequest-getconnection"
language: "php"
lang: "en"
category: "function"
name: "EventHttpRequest::getConnection"
title: "Returns EventHttpConnection object"
signature: "public EventHttpConnection EventHttpRequest::closeConnection()"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttprequest.getconnection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns EventHttpConnection object

## Description

```php
public EventHttpConnection EventHttpRequest::closeConnection()
```

Returns `EventHttpConnection` object which represents HTTP connection associated with the request.

> Libevent API allows HTTP request objects to be not bound to any HTTP connection. Therefore we can't unambiguously associate `EventHttpRequest` with `EventHttpConnection`. Thus, we construct `EventHttpConnection` object on-the-fly. Having no information about the event base, DNS base and connection-close callback, we just leave these fields unset.

`EventHttpRequest::getConnection()` method is usually useful when we need to set up a callback on connection close. See `EventHttpConnection::setCloseCallback()`.

## Parameters

This function has no parameters.

## Return Values

Returns `EventHttpConnection` object.

## See Also

  `EventHttpConnection::setCloseCallback()`   `EventHttpRequest::getBufferEvent()`
