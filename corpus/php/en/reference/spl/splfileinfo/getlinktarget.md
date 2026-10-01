---
id: "en-php-function-splfileinfo-getlinktarget"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getLinkTarget"
title: "Gets the target of a link"
signature: "public string|false SplFileInfo::getLinkTarget()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getlinktarget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the target of a link

## Description

```php
public string|false SplFileInfo::getLinkTarget()
```

Gets the target of a filesystem link.

> The target may not be the real path on the filesystem. Use `SplFileInfo::getRealPath()` to determine the true path on the filesystem.

## Parameters

This function has no parameters.

## Return Values

Returns the target of the filesystem link on success, or `false` on failure.

## Errors/Exceptions

Throws `RuntimeException` on error.

## Examples

**`SplFileInfo::getLinkTarget()` example**

```php


<?php
$info = new SplFileInfo('/Users/bbieber/workspace');
if ($info->isLink()) {
    var_dump($info->getLinkTarget());
    var_dump($info->getRealPath());
}
?>

    
```

The above example will output something similar to:

```text


string(19) "Documents/workspace"
string(34) "/Users/bbieber/Documents/workspace"

    
```

## See Also

`SplFileInfo::isLink()` `SplFileInfo::getRealPath()`
