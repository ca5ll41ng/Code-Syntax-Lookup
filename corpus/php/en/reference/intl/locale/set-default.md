---
id: "en-php-function-locale-setdefault"
language: "php"
lang: "en"
category: "function"
name: "Locale::setDefault"
aliases: ["locale_set_default"]
title: "Sets the default runtime locale"
signature: "public static true Locale::setDefault(string $locale)"
module: "intl"
source_url: "https://www.php.net/manual/en/locale.setdefault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the default runtime locale

## Description

Object-oriented style

```php
public static true Locale::setDefault(string $locale)
```

Procedural style

```php
true locale_set_default(string $locale)
```

Sets the default runtime locale to `$locale`. This changes the value of INTL global 'default_locale' locale identifier. UAX #35 extensions are accepted.

## Parameters

- **`$locale`** — Is a BCP 47 compliant language tag.

## Return Values

Returns `true`.

## Examples

**`locale_set_default()` example**

```php


<?php
locale_set_default('de-DE');
echo locale_get_default();
?>

   
```

**OO example**

```php


<?php
Locale::setDefault('de-DE');
echo Locale::getDefault();
?>

   
```

The above example will output:

```text


de-DE

  
```

## See Also

`locale_get_default()`
