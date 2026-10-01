---
id: "en-php-function-locale-getdefault"
language: "php"
lang: "en"
category: "function"
name: "Locale::getDefault"
aliases: ["locale_get_default"]
title: "Gets the default locale value from the INTL global 'default_locale'"
signature: "public static string Locale::getDefault()"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.getdefault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the default locale value from the INTL global 'default_locale'

## Description

Object-oriented style

```php
public static string Locale::getDefault()
```

Procedural style

```php
string locale_get_default()
```

Gets the default locale value. At the PHP initialization this value is set to 'intl.default_locale' value from php.ini if that value exists or from ICU's function uloc_getDefault().

## Parameters

## Return Values

The current runtime locale

## Examples

**`locale_get_default()` example**

```php


<?php
ini_set('intl.default_locale', 'de-DE');
echo locale_get_default();
echo '; ';
locale_set_default('fr');
echo locale_get_default();
?>

   
```

**OO example**

```php


<?php
ini_set('intl.default_locale', 'de-DE');
echo Locale::getDefault();
echo '; ';
Locale::setDefault('fr');
echo Locale::getDefault();
?>

   
```

The above example will output:

```text


de-DE; fr

  
```

## See Also

`locale_set_default()`
