---
id: "en-php-function-eventdnsbase-addnameserverip"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::addNameserverIp"
title: "Adds a nameserver to the DNS base"
signature: "public bool EventDnsBase::addNameserverIp(string $ip)"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.addnameserverip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a nameserver to the DNS base

## Description

```php
public bool EventDnsBase::addNameserverIp(string $ip)
```

Adds a nameserver to the evdns_base.

## Parameters

- **`$ip`** — The nameserver string, either as an IPv4 address, an IPv6 address, an IPv4 address with a port ( `IPv4:Port` ), or an IPv6 address with a port ( `[IPv6]:Port` ).

## Return Values

Returns `true` on success or `false` on failure.
