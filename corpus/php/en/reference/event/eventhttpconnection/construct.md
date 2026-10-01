---
id: "en-php-function-eventhttpconnection-construct"
language: "php"
lang: "en"
category: "function"
name: "EventHttpConnection::__construct"
title: "Constructs EventHttpConnection object"
signature: "public EventHttpConnection::__construct(EventBase $base, EventDnsBase $dns_base, string $address, int $port, EventSslContext $ctx = null)"
module: "event"
source_url: "https://www.php.net/manual/en/eventhttpconnection.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EventHttpConnection object

## Description

```php
public EventHttpConnection::__construct(EventBase $base, EventDnsBase $dns_base, string $address, int $port, EventSslContext $ctx = null)
```

Constructs EventHttpConnection object.

## Parameters

- **`$base`** — Associated event base.
- **`$dns_base`** — If `$dns_base` is `null`, hostname resolution will block.
- **`$address`** — The address to connect to.
- **`$port`** — The port to connect to.
- **`$ctx`** — `EventSslContext` class object. Enables OpenSSL.
  > This parameter is available only if `Event` is compiled with OpenSSL support and only with `Libevent 2.1.0-alpha` and higher.



## Changelog

|  |  |
| --- | --- |
| PECL event 1.9.0 | OpenSSL support (`$ctx`) added. |
