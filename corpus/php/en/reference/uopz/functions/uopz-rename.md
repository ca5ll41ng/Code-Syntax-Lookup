---
id: "en-php-function-function-uopz-rename"
language: "php"
lang: "en"
category: "function"
name: "uopz_rename"
title: "Rename a function at runtime"
signature: "void uopz_rename(string $function, string $rename)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rename a function at runtime

## Description

```php
void uopz_rename(string $function, string $rename)
```

```php
void uopz_rename(string $class, string $function, string $rename)
```

Renames `$function` to `$rename`

> If both functions exist, this effectively swaps their names

## Parameters

- **`$class`** — The name of the class containing the function
- **`$function`** — The name of an existing function
- **`$rename`** — The new name for the function

## Return Values

## Examples

**`uopz_rename()` example**

```php


<?php
uopz_rename("strlen", "original_strlen");

echo original_strlen("Hello World");
?>

   
```

The above example will output:

```text


11

   
```

**`uopz_rename()` class example**

```php


<?php
class My {
    public function strlen($arg) {
        return strlen($arg);
    }
}

uopz_rename(My::class, "strlen", "original_strlen");

echo My::original_strlen("Hello World");
?>

   
```

The above example will output:

```text


11

   
```
