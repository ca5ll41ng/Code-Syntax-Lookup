---
id: "en-php-function-locale-getscript"
language: "php"
lang: "en"
category: "function"
name: "Locale::getScript"
aliases: ["locale_get_script"]
title: "Gets the script for the input locale"
signature: "public static string|null Locale::getScript(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getscript.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the script for the input locale

## Description

Object-oriented style

```php
public static string|null Locale::getScript(string $locale)
```

Procedural style

```php
string|null locale_get_script(string $locale)
```

Gets the script for the input locale.

## Parameters

- **`$locale`** — The locale to extract the script code from

## Return Values

The script subtag for the locale or `null` if not present

## Examples

**`locale_get_script()` example**

```php


<?php
echo locale_get_script('sr-Cyrl');
?>

   
```

**OO example**

```php


<?php
echo Locale::getScript('sr-Cyrl');
?>

   
```

The above example will output:

```text


Cyrl

  
```

## See Also

`locale_get_primary_language()` `locale_get_region()` `locale_get_all_variants()`
