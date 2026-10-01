---
id: "en-php-function-resourcebundle-locales"
language: "php"
lang: "en"
category: "function"
name: "ResourceBundle::getLocales"
aliases: ["resourcebundle_locales"]
title: "Get supported locales"
signature: "public static array|false ResourceBundle::getLocales(string $bundle)"
module: "intl"
source_url: "https://www.php.net/manual/en/resourcebundle.locales.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get supported locales

## Description

Object-oriented style

```php
public static array|false ResourceBundle::getLocales(string $bundle)
```

Procedural style

```php
array|false resourcebundle_locales(string $bundle)
```

Get available locales from ResourceBundle name.

## Parameters

- **`$bundle`** — Path of ResourceBundle for which to get available locales, or empty string for default locales list.

## Return Values

Returns the list of locales supported by the bundle, or `false` on failure.

## Examples

**`resourcebundle_locales()` example**

```php


<?php
$bundle = "/user/share/data/myapp";
echo join(PHP_EOL, resourcebundle_locales($bundle));
?>

   
```

The above example will output something similar to:

```text


es
root

   
```

**OO example**

```php


<?php
$bundle = "/usr/share/data/myapp";
$r = new ResourceBundle( 'es', $bundle);
echo join("\n", $r->getLocales($bundle));
?>

   
```

The above example will output something similar to:

```text


es
root

  
```

## See Also

`resourcebundle_get()`
