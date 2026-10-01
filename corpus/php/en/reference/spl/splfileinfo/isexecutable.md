---
id: "en-php-function-splfileinfo-isexecutable"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::isExecutable"
title: "Tells if the file is executable"
signature: "public bool SplFileInfo::isExecutable()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.isexecutable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells if the file is executable

## Description

```php
public bool SplFileInfo::isExecutable()
```

Checks if the file is executable.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if executable, `false` otherwise.

## Examples

**`SplFileInfo::isExecutable()` example**

```php


<?php
$info = new SplFileInfo('/usr/bin/php');
var_dump($info->isExecutable()); 

$info = new SplFileInfo('/usr/bin');
var_dump($info->isExecutable());

$info = new SplFileInfo('foo');
var_dump($info->isExecutable());
?>

    
```

The above example will output something similar to:

```text


bool(true)
bool(true)
bool(false)

    
```
