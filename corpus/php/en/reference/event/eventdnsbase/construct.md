---
id: "en-php-function-eventdnsbase-construct"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::__construct"
title: "Constructs EventDnsBase object"
signature: "public EventDnsBase::__construct(EventBase $base, int|bool $initialize)"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs EventDnsBase object

## Description

```php
public EventDnsBase::__construct(EventBase $base, int|bool $initialize)
```

Constructs EventDnsBase object.

## Parameters

- **`$base`** — Event base.
- **`$initialize`** — If `$initialize` is `true`, it attempts to use the underlying operating system defaults to configure the DNS base sensibly. If it is `false`, the DNS base is left unconfigured, with no nameservers or options set. In the latter case the DNS base should be configured manually, e.g. with `EventDnsBase::parseResolvConf()`. — If `$initialize` is an integer, it must be one of the following flags: | Flag |  | | --- | --- | | `EventDnsBase::DISABLE_WHEN_INACTIVE` | Do not prevent the libevent event loop from exiting when we have no active DNS requests. | | `EventDnsBase::INITIALIZE_NAMESERVERS` | Process the `resolv.conf`. | | `EventDnsBase::NAMESERVERS_NO_DEFAULT` | Do not add default nameserver if there are no nameservers in the `resolv.conf`. |

## Errors/Exceptions

If `$initialize` has a type other than `int|bool`, a TypeError is thrown.

If the value of `$initialize` is invalid, a EventException is thrown.

## Changelog

|  |  |
| --- | --- |
| PECL event 3.1.3 | If `$initialize` has a type other than `int\|bool`, a TypeError is thrown. |
| PECL event 3.1.0RC1 | The type of the `$initialize` parameter has been changed from `bool` to `mixed`. The value can be either `bool` (preserving the previous meaning) or one of the following constants: `EventDnsBase::DISABLE_WHEN_INACTIVE`, `EventDnsBase::INITIALIZE_NAMESERVERS`, or `EventDnsBase::NAMESERVERS_NO_DEFAULT`. |
