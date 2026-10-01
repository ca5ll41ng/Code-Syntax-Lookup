---
id: "en-php-function-varnishadmin-setparam"
language: "php"
lang: "en"
category: "function"
name: "VarnishAdmin::setParam"
title: "Set configuration param on the current varnish instance"
signature: "public int VarnishAdmin::setParam(string $name, string|int $value)"
module: "varnish"
source_url: "https://www.php.net/manual/en/varnishadmin.setparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set configuration param on the current varnish instance

## Description

```php
public int VarnishAdmin::setParam(string $name, string|int $value)
```

## Parameters

- **`$name`** — Varnish configuration param name.
- **`$value`** — Varnish configuration param value.

## Return Values

Returns the varnish command status.
