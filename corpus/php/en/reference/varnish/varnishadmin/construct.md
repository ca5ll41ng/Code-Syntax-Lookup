---
id: "en-php-function-varnishadmin-construct"
language: "php"
lang: "en"
category: "function"
name: "VarnishAdmin::__construct"
title: "VarnishAdmin constructor"
signature: "public VarnishAdmin::__construct([array $args = ...])"
module: "varnish"
source_url: "https://www.php.net/manual/en/varnishadmin.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# VarnishAdmin constructor

## Description

```php
public VarnishAdmin::__construct([array $args = ...])
```

## Parameters

- **`$args`** — Configuration arguments. The possible keys are: VARNISH_CONFIG_IDENT - local varnish instance ident VARNISH_CONFIG_HOST - varnish instance ip VARNISH_CONFIG_PORT - varnish instance port VARNISH_CONFIG_SECRET - varnish instance secret VARNISH_CONFIG_TIMEOUT - connection read timeout VARNISH_CONFIG_COMPAT - varnish major version compatibility

## Return Values

## Examples

**`VarnishAdmin::__construct()` example**

```php


<?php
    $args = array(
        VARNISH_CONFIG_HOST => "::1",
        VARNISH_CONFIG_PORT => 6082,
        VARNISH_CONFIG_SECRET => "5174826b-8595-4958-aa7a-0609632ad7ca",
        VARNISH_CONFIG_TIMEOUT => 300,
    );
    $va = new VarnishAdmin($args);
?>

   
```
