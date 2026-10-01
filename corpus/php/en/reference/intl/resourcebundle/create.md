---
id: "en-php-function-resourcebundle-create"
language: "php"
lang: "en"
category: "function"
name: "ResourceBundle::create"
aliases: ["resourcebundle_create","ResourceBundle::__construct"]
title: "Create a resource bundle"
signature: "public static ResourceBundle|null ResourceBundle::create(string|null $locale, string|null $bundle, bool $fallback = true)"
module: "intl"
source_url: "https://www.php.net/manual/en/resourcebundle.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a resource bundle

## Description

Object-oriented style (method)

```php
public static ResourceBundle|null ResourceBundle::create(string|null $locale, string|null $bundle, bool $fallback = true)
```

Procedural style

```php
ResourceBundle|null resourcebundle_create(string|null $locale, string|null $bundle, bool $fallback = true)
```

Object-oriented style (constructor):

```php
public ResourceBundle::__construct(string|null $locale, string|null $bundle, bool $fallback = true)
```

Creates a resource bundle.

## Parameters

- **`$locale`** — Locale for which the resources should be loaded (locale name, e.g. en_CA).
- **`$bundle`** — The directory where the data is stored or the name of the .dat file.
- **`$fallback`** — Whether locale should match exactly or fallback to parent locale is allowed.

## Return Values

Returns `ResourceBundle` object or `null` on error.

## Examples

**`resourcebundle_create()` example**

```php


<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo $r['teststring'];
?>

   
```

**`ResourceBundle::create()` example**

```php


<?php
$r = ResourceBundle::create( 'es', "/usr/share/data/myapp");
echo $r['teststring'];
?>

   
```

The above example will output:

```text


¡Hola, mundo!

  
```

## See Also

`resourcebundle_get()`
