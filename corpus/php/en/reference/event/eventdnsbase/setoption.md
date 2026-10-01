---
id: "en-php-function-eventdnsbase-setoption"
language: "php"
lang: "en"
category: "function"
name: "EventDnsBase::setOption"
title: "Set the value of a configuration option"
signature: "public bool EventDnsBase::setOption(string $option, string $value)"
module: "event"
source_url: "https://www.php.net/manual/en/eventdnsbase.setoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the value of a configuration option

## Description

```php
public bool EventDnsBase::setOption(string $option, string $value)
```

Set the value of a configuration option.

## Parameters

- **`$option`** — The currently available configuration options are: `"ndots"`, `"timeout"`, `"max-timeouts"`, `"max-inflight"`, and `"attempts"`.
- **`$value`** — Option value.

## Return Values

Returns `true` on success or `false` on failure.
