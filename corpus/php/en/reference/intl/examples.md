---
id: "en-php-guide-intl-examples"
language: "php"
lang: "en"
category: "guide"
name: "intl.examples"
title: "Examples"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Basic usage of this extension

Each module provides two kind of APIs: a procedural one and an object oriented one. Both are actually identical and described in the corresponding document.

> All input strings must be in UTF-8 encoding. All output strings are also in UTF-8.

**Example of using the procedural API**

```php


<?php
$coll  = collator_create('en_US');
$result = collator_compare($coll, "string#1", "string#2");
?>

   
```

**Example of using the object-oriented API**

```php


<?php
$coll = new Collator('en_US');
$al   = $coll->getLocale(Locale::ACTUAL_LOCALE);
echo "Actual locale: $al\n";

$formatter = new NumberFormatter('en_US', NumberFormatter::DECIMAL);
echo $formatter->format(1234567);
?>

   
```
