---
id: "en-php-function-function-variant-cast"
language: "php"
lang: "en"
category: "function"
name: "variant_cast"
title: "Convert a variant into a new variant object of another type"
signature: "variant variant_cast(variant $variant, int $type)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-cast.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert a variant into a new variant object of another type

## Description

```php
variant variant_cast(variant $variant, int $type)
```

This function makes a copy of `$variant` and then performs a variant cast operation to force the copy to have the type given by `$type`.

This function wraps VariantChangeType() in the COM library; consult MSDN for more information.

## Parameters

- **`$variant`** — The variant.
- **`$type`** — `$type` should be one of the `VT_{*}` constants.

## Return Values

Returns a variant of given `$type`.

## See Also

`variant_set_type()`
