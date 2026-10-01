---
id: "en-php-function-rararchive-issolid"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::isSolid"
aliases: ["rar_solid_is"]
title: "Check whether the RAR archive is solid"
signature: "public bool RarArchive::isSolid()"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.issolid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the RAR archive is solid

## Description

Object-oriented style (method):

```php
public bool RarArchive::isSolid()
```

Procedural style:

```php
bool rar_solid_is(RarArchive $rarfile)
```

Check whether the RAR archive is solid. Individual file extraction is slower on solid archives.

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.

## Return Values

Returns `true` if the archive is solid, `false` otherwise.

## Examples

**Object-oriented style**

```php


<?php
$arch1 = RarArchive::open("store_method.rar");
$arch2 = RarArchive::open("solid.rar");
echo "$arch1: " . ($arch1->isSolid()?'yes':'no') ."\n";
echo "$arch2: " . ($arch2->isSolid()?'yes':'no') . "\n";
?>

    
```

The above example will output something similar to:

```text


RAR Archive "C:\php_rar\trunk\tests\store_method.rar": no
RAR Archive "C:\php_rar\trunk\tests\solid.rar": yes

   
```

**Procedural style**

```php


<?php
$arch1 = rar_open("store_method.rar");
$arch2 = rar_open("solid.rar");
echo "$arch1: " . (rar_solid_is($arch1)?'yes':'no') ."\n";
echo "$arch2: " . (rar_solid_is($arch2)?'yes':'no') . "\n";
?>

    
```
