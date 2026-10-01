---
id: "en-php-function-pharfileinfo-chmod"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::chmod"
title: "Sets file-specific permission bits"
signature: "public void PharFileInfo::chmod(int $perms)"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.chmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets file-specific permission bits

## Description

```php
public void PharFileInfo::chmod(int $perms)
```

`PharFileInfo::chmod()` allows setting of the executable file permissions bit, as well as read-only bits. Writeable bits are ignored, and set at runtime based on the phar.readonly INI variable. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a `Phar` archive. Files within `PharData` archives do not have this restriction.

## Parameters

- **`$perms`** — permissions (see `chmod()`)

## Return Values

No value is returned.

## Examples

**A `PharFileInfo::chmod()` example**

```php


<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar('brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.sh'] = '#!/usr/local/lib/php
    <?php echo "hi"; ?>';
    // set executable bit
    $p['file.sh']->chmod(0555);
    var_dump($p['file.sh']->isExecutable());
} catch (Exception $e) {
    echo 'Could not create/modify phar: ', $e;
}
?>

    
```

The above example will output:

```text


bool(true)

    
```
