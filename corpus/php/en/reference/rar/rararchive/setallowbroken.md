---
id: "en-php-function-rararchive-setallowbroken"
language: "php"
lang: "en"
category: "function"
name: "RarArchive::setAllowBroken"
title: "Whether opening broken archives is allowed"
signature: "public bool RarArchive::setAllowBroken(bool $allow_broken)"
module: "rar"
source_url: "https://www.php.net/manual/en/rararchive.setallowbroken.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Whether opening broken archives is allowed

## Description

Object-oriented style (method):

```php
public bool RarArchive::setAllowBroken(bool $allow_broken)
```

Procedural style:

```php
bool rar_allow_broken_set(RarArchive $rarfile, bool $allow_broken)
```

This method defines whether broken archives can be read or all the operations that attempt to extract the archive entries will fail. Broken archives are archives for which no error is detected when the file is opened but an error occurs when reading the entries.

## Parameters

- **`$rarfile`** — A `RarArchive` object, opened with `rar_open()`.
- **`$allow_broken`** — Whether to allow reading broken files (`true`) or not (`false`).

## Return Values

Returns `true` or `false` on failure. It will only fail if the file has already been closed.

## Examples

**Object-oriented style**

```php


<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument omits "volume not found" message */
$a = RarArchive::open($file, null, 'retnull');
$a->setAllowBroken(true);
foreach ($a->getEntries() as $e) {
    echo "$e\n";
}
var_dump(count($a));
?>

    
```

The above example will output something similar to:

```text


RarEntry for file "file1.txt" (52b28202)
int(1)

   
```

**Procedural style**

```php


<?php
function retnull() { return null; }
$file = dirname(__FILE__) . "/multi_broken.part1.rar";
/* Third argument omits "volume not found" message */
$a = rar_open($file, null, 'retnull');
rar_allow_broken_set($a, true);
foreach (rar_list($a) as $e) {
    echo "$e\n";
}
var_dump(count($a));
?>

    
```

## See Also

 `RarArchive::isBroken()`
