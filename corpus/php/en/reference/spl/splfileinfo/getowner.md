---
id: "en-php-function-splfileinfo-getowner"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getOwner"
title: "Gets the owner of the file"
signature: "public int|false SplFileInfo::getOwner()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getowner.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the owner of the file

## Description

```php
public int|false SplFileInfo::getOwner()
```

Gets the file owner. The owner ID is returned in numerical format.

## Parameters

This function has no parameters.

## Return Values

The owner id in numerical format on success, or `false` on failure.

## Errors/Exceptions

Throws `RuntimeException` on error.

## Examples

**`SplFileInfo::getOwner()` example**

```php


<?php
$info = new SplFileInfo('example.jpg');
echo $info->getFilename() . ' belongs to owner id ' . $info->getOwner() . "\n";
print_r(posix_getpwuid($info->getOwner()));
?>

    
```

The above example will output something similar to:

```text


example.jpg belongs to user id 501
Array
(
    [name] => tom
    [passwd] => x
    [uid] => 501
    [gid] => 42
    [gecos] => Tom Cat
    [dir] => /home/tom
    [shell] => /bin/bash
)

    
```

## See Also

`posix_getpwuid()` `SplFileInfo::getGroup()`
