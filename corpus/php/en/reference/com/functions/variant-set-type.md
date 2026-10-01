---
id: "en-php-function-function-variant-set-type"
language: "php"
lang: "en"
category: "function"
name: "variant_set_type"
title: "Convert a variant into another type \"in-place\""
signature: "void variant_set_type(variant $variant, int $type)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-set-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert a variant into another type "in-place"

## Description

```php
void variant_set_type(variant $variant, int $type)
```

This function is similar to `variant_cast()` except that the variant is modified "in-place"; no new variant is created. The parameters for this function have identical meaning to those of `variant_cast()`.

## Parameters

- **`$variant`** — The variant.
- **`$type`**

## Return Values

No value is returned.

## See Also

`variant_cast()` `variant_get_type()`
