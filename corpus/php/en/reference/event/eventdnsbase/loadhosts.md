---
id: "en-php-function-eventdnsbase-loadhosts"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::loadHosts"
title: "Loads a hosts file (in the same format as /etc/hosts) from hosts file"
signature: "public bool EventDnsBase::loadHosts(string $hosts)"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.loadhosts.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Loads a hosts file (in the same format as /etc/hosts) from hosts file

## Description

```php
public bool EventDnsBase::loadHosts(string $hosts)
```

Loads a hosts file (in the same format as `/etc/hosts`) from hosts file.

## Parameters

- **`$hosts`** — Path to the hosts' file.

## Return Values

Returns `true` on success or `false` on failure.
