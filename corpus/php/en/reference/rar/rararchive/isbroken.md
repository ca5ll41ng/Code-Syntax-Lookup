---
id: "en-php-function-rararchive-isbroken"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::isBroken"
aliases: ["rar_broken_is"]
title: "Test whether an archive is broken (incomplete)"
signature: "public bool RarArchive::isBroken()"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.isbroken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test whether an archive is broken (incomplete)

## Description

Object-oriented style (method):

```php
public bool RarArchive::isBroken()
```

Procedural style:

```php
bool rar_broken_is(RarArchive $rarfile)
```

This function determines whether an archive is incomplete, i.e., if a volume is missing or a volume is truncated.

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.

## Return Values

Returns `true` if the archive is broken, `false` otherwise. This function may also return `false` if the passed file has already been closed. The only way to tell the two cases apart is to enable exceptions with `RarException::setUsingExceptions()`; however, this should be unnecessary as a program should not operate on closed files.

## Examples

**Object-oriented style**

```php


<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument is used to omit notice */
$arch = RarArchive::open($file, null, 'retnull');
var_dump($arch->isBroken());
?>

    
```

The above example will output something similar to:

```text


bool(true)

   
```

**Procedural style**

```php


<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument is used to omit notice */
$arch = rar_open($file, null, 'retnull');
var_dump(rar_broken_is($arch));
?>

    
```

## See Also

 `RarArchive::setAllowBroken()`
