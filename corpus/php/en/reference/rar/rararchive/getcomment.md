---
id: "en-php-function-rararchive-getcomment"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::getComment"
aliases: ["rar_comment_get"]
title: "Get comment text from the RAR archive"
signature: "public string RarArchive::getComment()"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.getcomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get comment text from the RAR archive

## Description

Object-oriented style (method):

```php
public string RarArchive::getComment()
```

Procedural style:

```php
string rar_comment_get(RarArchive $rarfile)
```

Get the (global) comment stored in the RAR archive. It may be up to 64 KiB long.

> This extension does not support comments at the entry level.

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.

## Return Values

Returns the comment or `null` if there is none.

> RAR has currently no support for unicode comments. The encoding of the result of this function is not specified, but it will probably be Windows-1252.

## Examples

**Object-oriented style**

```php


<?php
$rar_arch = RarArchive::open('commented.rar');
echo $rar_arch->getComment();
?>

    
```

The above example will output something similar to:

```text


This is the comment of the file commented.rar.

   
```

**Procedural style**

```php


<?php
$rar_arch = rar_open('commented.rar');
echo rar_comment_get($rar_arch);
?>

    
```
