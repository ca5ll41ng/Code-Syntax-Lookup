---
id: "en-php-function-function-wddx-add-vars"
language: "php"
lang: "en"
category: "function"
name: "wddx_add_vars"
title: "Add variables to a WDDX packet with the specified ID"
signature: "bool wddx_add_vars(resource $packet_id, mixed $var_name, mixed $var_names)"
module: "wddx"
source_url: "https://www.php.net/manual/en/function.wddx-add-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add variables to a WDDX packet with the specified ID

## Description

```php
bool wddx_add_vars(resource $packet_id, mixed $var_name, mixed $var_names)
```

Serializes the passed variables and add the result to the given packet.

## Parameters

This function takes a variable number of parameters.

- **`$packet_id`** — A WDDX packet, returned by `wddx_packet_start()`.
- **`$var_name`** — Can be either a string naming a variable or an array containing strings naming the variables or another array, etc.
- **`$var_names`**

## Return Values

Returns `true` on success or `false` on failure.
