---
id: "en-php-function-intllistformatter-format"
language: "php"
lang: "en"
category: "function"
name: "IntlListFormatter::format"
title: "Format a list of items"
signature: "public string|false IntlListFormatter::format(array $list)"
module: "intl"
source_url: "https://www.php.net/manual/en/intllistformatter.format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Format a list of items

## Description

```php
public string|false IntlListFormatter::format(array $list)
```

Formats a list of items as a locale-appropriate string.

## Parameters

- **`$list`** — An array of strings to format as a list.

## Return Values

The formatted list as a string, or `false` on failure.

## Examples

**`IntlListFormatter::format()` example**

```php


<?php
$fmt = new IntlListFormatter('en_US', IntlListFormatter::TYPE_AND, IntlListFormatter::WIDTH_WIDE);
echo $fmt->format(['one', 'two', 'three']);
// one, two, and three

$fmt = new IntlListFormatter('en_US', IntlListFormatter::TYPE_OR, IntlListFormatter::WIDTH_WIDE);
echo $fmt->format(['one', 'two', 'three']);
// one, two, or three
?>

   
```

## See Also

 `IntlListFormatter::__construct()`
