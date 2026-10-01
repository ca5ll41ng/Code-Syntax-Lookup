---
id: "en-php-function-splfileobject-setflags"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::setFlags"
title: "Sets flags for the SplFileObject"
signature: "public void SplFileObject::setFlags(int $flags)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.setflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets flags for the SplFileObject

## Description

```php
public void SplFileObject::setFlags(int $flags)
```

Sets the flags to be used by the `SplFileObject`.

## Parameters

- **`$flags`** — Bit mask of the flags to set. See SplFileObject constants for the available flags.

## Return Values

No value is returned.

## Examples

**`SplFileObject::setFlags()` example**

```php


<?php
$file = new SplFileObject("data.csv");
$file->setFlags(SplFileObject::READ_CSV);
foreach ($file as $fields) {
    var_dump($fields);
}
?>

    
```

## See Also

`SplFileObject::getFlags()`
