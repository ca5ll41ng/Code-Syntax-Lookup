---
id: "en-php-function-eventbufferevent-sslrenegotiate"
language: "php"
lang: "en"
category: "function"
name: "EventBufferEvent::sslRenegotiate"
title: "Tells a bufferevent to begin SSL renegotiation"
signature: "public void EventBufferEvent::sslRenegotiate()"
module: "event"
source_url: "https://www.php.net/manual/en/eventbufferevent.sslrenegotiate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells a bufferevent to begin SSL renegotiation

## Description

```php
public void EventBufferEvent::sslRenegotiate()
```

Tells a bufferevent to begin SSL renegotiation.

> Calling this function tells the SSL to renegotiate, and the buffer event to invoke appropriate callbacks. This is an advanced topic; this should be generally avoided unless one really knows what he/she does, especially since many SSL versions have had known security issues related to renegotiation.

## Parameters

This function has no parameters.

## Return Values

No value is returned.
