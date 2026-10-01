---
id: "en-php-function-resourcebundle-count"
language: "php"
lang: "en"
category: "function"
name: "ResourceBundle::count"
aliases: ["resourcebundle_count"]
title: "Get number of elements in the bundle"
signature: "public int ResourceBundle::count()"
module: "intl"
source_url: "https://www.php.net/manual/en/resourcebundle.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get number of elements in the bundle

## Description

Object-oriented style

```php
public int ResourceBundle::count()
```

Procedural style

```php
int resourcebundle_count(ResourceBundle $bundle)
```

Get the number of elements in the bundle.

## Parameters

- **`$bundle`** — `ResourceBundle` object.

## Return Values

Returns number of elements in the bundle.

## Examples

**`resourcebundle_count()` example**

```php


<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo resourcebundle_count($r);
?>

   
```

**OO example**

```php


<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r->count();
?>

   
```

The above example will output:

```text


42

  
```

## See Also

`resourcebundle_get()`
