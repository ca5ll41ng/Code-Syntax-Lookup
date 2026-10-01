---
id: "en-php-function-varnishadmin-banurl"
language: "php"
lang: "en"
category: "function"
name: "VarnishAdmin::banUrl"
title: "Ban an URL using a VCL expression"
signature: "public int VarnishAdmin::banUrl(string $vcl_regex)"
module: "varnish"
source_url: "https://www.php.net/manual/en/varnishadmin.banurl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ban an URL using a VCL expression

## Description

```php
public int VarnishAdmin::banUrl(string $vcl_regex)
```

## Parameters

- **`$vcl_regex`** — URL regular expression in PCRE compatible syntax. It's based on the ban.url varnish command.

## Return Values

Returns the varnish command status.
