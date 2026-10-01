---
id: "en-php-function-collator-getattribute"
language: "php"
lang: "en"
category: "function"
name: "Collator::getAttribute"
aliases: ["collator_get_attribute"]
title: "Get collation attribute value"
signature: "public int|false Collator::getAttribute(int $attribute)"
module: "intl"
source_url: "https://www.php.net/manual/en/collator.getattribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get collation attribute value

## Description

Object-oriented style

```php
public int|false Collator::getAttribute(int $attribute)
```

Procedural style

```php
int|false collator_get_attribute(Collator $object, int $attribute)
```

Get a value of an integer collator attribute.

## Parameters

- **`$object`** — `Collator` object.
- **`$attribute`** — Attribute to get value for.

## Return Values

Attribute value, or `false` on failure.

## Examples

**`collator_get_attribute()` example**

```php


<?php
$coll = collator_create( 'en_CA' );
$val = collator_get_attribute( $coll, Collator::NUMERIC_COLLATION );
if( $val === false )
{
    // Handle error.
}
?>

    
```

## See Also

Collator constants `collator_set_attribute()` `collator_get_strength()`
