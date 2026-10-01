---
id: "en-php-function-eventsslcontext-construct"
language: "php"
lang: "en"
category: "function"
name: "EventSslContext::__construct"
title: "Constructs an OpenSSL context for use with Event classes"
signature: "public EventSslContext::__construct(string $method, string $options)"
module: "event"
source_url: "https://www.php.net/manual/en/eventsslcontext.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs an OpenSSL context for use with Event classes

## Description

```php
public EventSslContext::__construct(string $method, string $options)
```

Creates SSL context holding pointer to `SSL_CTX` (see the system manual).

## Parameters

- **`$method`** — One of `EventSslContext::*_METHOD` constants.
- **`$options`** — Associative array of SSL context options One of `EventSslContext::OPT_*` constants.

## Examples

**`EventSslContext::__construct()` example**

```php


<?php
$ctx = new EventSslContext(EventSslContext::SSLv3_SERVER_METHOD, array(
     EventSslContext::OPT_LOCAL_CERT        => $local_cert,
     EventSslContext::OPT_LOCAL_PK          => $local_pk,
     EventSslContext::OPT_PASSPHRASE        => "echo server",
     EventSslContext::OPT_VERIFY_PEER       => true,
     EventSslContext::OPT_ALLOW_SELF_SIGNED => false,
));
?>

   
```
