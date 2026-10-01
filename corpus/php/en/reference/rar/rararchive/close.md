---
id: "en-php-function-rararchive-close"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::close"
aliases: ["rar_close"]
title: "Close RAR archive and free all resources"
signature: "public bool RarArchive::close()"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close RAR archive and free all resources

## Description

Object-oriented style (method):

```php
public bool RarArchive::close()
```

Procedural style:

```php
bool rar_close(RarArchive $rarfile)
```

Close RAR archive and free all allocated resources.

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| PECL rar 2.0.0 | The RAR entries returned by `RarArchive::getEntry()` and `RarArchive::getEntries()` are now invalidated when calling this method. This means that all instance methods called for such entries and not guaranteed to succeed. |

## Examples

**Object-oriented style**

```php


<?php
$rar_arch = RarArchive::open('latest_winrar.rar');
echo $rar_arch."\n";
$rar_arch->close();
echo $rar_arch."\n";
?>

    
```

The above example will output something similar to:

```text


RAR Archive "D:\php_rar\trunk\tests\latest_winrar.rar"
RAR Archive "D:\php_rar\trunk\tests\latest_winrar.rar" (closed)

   
```

**Procedural style**

```php


<?php
$rar_arch = rar_open('latest_winrar.rar');
echo $rar_arch."\n";
rar_close($rar_arch);
echo $rar_arch."\n";
?>

    
```
