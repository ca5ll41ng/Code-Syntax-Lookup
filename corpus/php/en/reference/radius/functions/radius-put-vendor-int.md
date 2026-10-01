---
id: "en-php-function-function-radius-put-vendor-int"
language: "php"
lang: "en"
category: "function"
name: "radius_put_vendor_int"
title: "Attaches a vendor specific integer attribute"
signature: "bool radius_put_vendor_int(resource $radius_handle, int $vendor, int $type, int $value, int $options = 0, [int $tag = ...])"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-put-vendor-int.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attaches a vendor specific integer attribute

## Description

```php
bool radius_put_vendor_int(resource $radius_handle, int $vendor, int $type, int $value, int $options = 0, [int $tag = ...])
```

Attaches a vendor specific integer attribute to the current RADIUS request.

> A request must be created via `radius_create_request()` before this function can be called.

## Parameters

- **`$radius_handle`** — The RADIUS resource.
- **`$vendor`** — The vendor ID.
- **`$type`** — The attribute type.
- **`$value`** — The attribute value.
- **`$options`** — A bitmask of the attribute options. The available options include `RADIUS_OPTION_TAGGED` and `RADIUS_OPTION_SALT`.
- **`$tag`** — The attribute tag. This parameter is ignored unless the `RADIUS_OPTION_TAGGED` option is set.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL radius 1.3.0 | The `$options` and `$tag` parameters were added. |

## See Also

 `radius_put_vendor_string()`
