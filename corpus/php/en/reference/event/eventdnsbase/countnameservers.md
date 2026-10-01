---
id: "en-php-function-eventdnsbase-countnameservers"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::countNameservers"
title: "Gets the number of configured nameservers"
signature: "public int EventDnsBase::countNameservers()"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.countnameservers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the number of configured nameservers

## Description

```php
public int EventDnsBase::countNameservers()
```

Gets the number of configured nameservers

## Parameters

This function has no parameters.

## Return Values

Returns the number of configured nameservers(not necessarily the number of running nameservers). This is useful for double-checking whether our calls to the various nameserver configuration functions have been successful.
