---
id: "en-php-function-function-uopz-restore"
language: "php"
lang: "en"
category: "function"
name: "uopz_restore"
title: "Restore a previously backed up function"
signature: "void uopz_restore(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-restore.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Restore a previously backed up function

## Description

```php
void uopz_restore(string $function)
```

```php
void uopz_restore(string $class, string $function)
```

Restore a previously backed up function

## Parameters

- **`$class`** — The name of the class containing the function to restore
- **`$function`** — The name of the function

## Return Values

## Examples

**`uopz_restore()` example**

```php


<?php
uopz_backup("fgets");
uopz_function("fgets", function(){
    return true;
});
var_dump(fgets());
uopz_restore('fgets');
fgets();
?>

   
```

The above example will output something similar to:

```text


Warning: fgets() expects at least 1 parameter, 0 given in /path/to/script.php on line 8

   
```
