---
id: "en-php-function-collator-setattribute"
language: "php"
lang: "en"
category: "function"
name: "Collator::setAttribute"
aliases: ["collator_set_attribute"]
title: "Set collation attribute"
signature: "public bool Collator::setAttribute(int $attribute, int $value)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.setattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set collation attribute

## Description

Object-oriented style

```php
public bool Collator::setAttribute(int $attribute, int $value)
```

Procedural style

```php
bool collator_set_attribute(Collator $object, int $attribute, int $value)
```

## Parameters

- **`$object`** — `Collator` object.
- **`$attribute`** — Attribute.
- **`$value`** — Attribute value.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`collator_set_attribute()` example**

```php


<?php
$coll = collator_create('en_CA');
collator_set_attribute($coll, Collator::NORMALIZATION_MODE, Collator::ON);
?>

    
```

## See Also

Collator constants `collator_get_attribute()` `collator_set_strength()`
