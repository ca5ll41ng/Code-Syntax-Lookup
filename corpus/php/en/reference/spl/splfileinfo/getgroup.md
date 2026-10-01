---
id: "en-php-function-splfileinfo-getgroup"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getGroup"
title: "Gets the file group"
signature: "public int|false SplFileInfo::getGroup()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getgroup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the file group

## Description

```php
public int|false SplFileInfo::getGroup()
```

Gets the file group. The group ID is returned in numerical format.

## Parameters

This function has no parameters.

## Return Values

The group id in numerical format on success, or `false` on failure.

## Errors/Exceptions

Throws `RuntimeException` on error.

## Examples

**`SplFileInfo::getGroup()` example**

```php


<?php
$info = new SplFileInfo('example.jpg');
echo $info->getFilename() . ' belongs to group id ' . $info->getGroup() . "\n";
print_r(posix_getgrgid($info->getGroup()));
?>

    
```

The above example will output something similar to:

```text


example.jpg belongs to group id 42
Array
(
    [name] => toons
    [passwd] => x
    [members] => Array
        (
            [0] => tom
            [1] => jerry
        )
    [gid] => 42
)

    
```

## See Also

`filegroup()` `posix_getgrgid()`
