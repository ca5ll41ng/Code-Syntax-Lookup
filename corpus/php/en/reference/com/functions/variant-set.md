---
id: "en-php-function-function-variant-set"
language: "php"
lang: "en"
category: "function"
name: "variant_set"
title: "Assigns a new value for a variant object"
signature: "void variant_set(variant $variant, mixed $value)"
module: "com"
source_url: "https://www.php.net/manual/en/function.variant-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Assigns a new value for a variant object

## Description

```php
void variant_set(variant $variant, mixed $value)
```

Converts `$value` to a variant and assigns it to the `$variant` object; no new variant object is created, and the old value of `$variant` is freed/released.

## Parameters

- **`$variant`** — The variant.
- **`$value`**

## Return Values

No value is returned.
