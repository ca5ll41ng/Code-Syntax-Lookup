---
id: "en-php-function-function-uopz-backup"
language: "php"
lang: "en"
category: "function"
name: "uopz_backup"
title: "Backup a function"
signature: "void uopz_backup(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-backup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Backup a function

## Description

```php
void uopz_backup(string $function)
```

```php
void uopz_backup(string $class, string $function)
```

Backup a function at runtime, to be restored on shutdown

## Parameters

- **`$class`** — The name of the class containing the function to backup
- **`$function`** — The name of the function

## Return Values

## Examples

**`uopz_backup()` example**

```php


<?php
uopz_backup("fgets");
uopz_function("fgets", function(){
    return true;
});
var_dump(fgets());
?>

   
```

The above example will output:

```text


bool(true)

   
```
