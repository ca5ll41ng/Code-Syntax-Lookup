---
id: "en-php-function-function-radius-create-request"
language: "php"
lang: "en"
category: "function"
name: "radius_create_request"
title: "Create accounting or authentication request"
signature: "bool radius_create_request(resource $radius_handle, int $type)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-create-request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create accounting or authentication request

## Description

```php
bool radius_create_request(resource $radius_handle, int $type)
```

A Radius request consists of a code specifying the kind of request, and zero or more attributes which provide additional information. To begin constructing a new request, call `radius_create_request()`.

> Attention: You must call this function, before you can put any attribute!

## Parameters

- **`$radius_handle`**
- **`$type`** — Type is `RADIUS_ACCESS_REQUEST` or `RADIUS_ACCOUNTING_REQUEST`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`radius_create_request()` example**

```php


<?php
if (!radius_create_request($res, RADIUS_ACCESS_REQUEST)) {
    echo 'RadiusError:' . radius_strerror($res). "\n<br />";
    exit;
}
?>

   
```

## See Also

 `radius_send_request()`
