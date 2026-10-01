---
id: "en-php-function-varnishadmin-ban"
language: "php"
lang: "en"
category: "function"
name: "VarnishAdmin::ban"
title: "Ban URLs using a VCL expression"
signature: "public int VarnishAdmin::ban(string $vcl_regex)"
module: "varnish"
source_url: "https://www.php.net/manual/en/varnishadmin.ban.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ban URLs using a VCL expression

## Description

```php
public int VarnishAdmin::ban(string $vcl_regex)
```

## Parameters

- **`$vcl_regex`** — Varnish VCL expression. It's based on the varnish ban command.

## Return Values

Returns the varnish command status.
