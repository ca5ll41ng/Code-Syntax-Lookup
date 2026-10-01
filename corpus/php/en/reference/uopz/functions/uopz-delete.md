---
id: "en-php-function-function-uopz-delete"
language: "php"
lang: "en"
category: "function"
name: "uopz_delete"
title: "Delete a function"
signature: "void uopz_delete(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a function

## Description

```php
void uopz_delete(string $function)
```

```php
void uopz_delete(string $class, string $function)
```

Deletes a function or method

## Parameters

- **`$class`**
- **`$function`**

## Return Values

## Examples

**`uopz_delete()` example**

```php


<?php
uopz_delete("strlen");

echo strlen("Hello World");
?>

   
```

The above example will output something similar to:

```text


PHP Fatal error: Call to undefined function strlen() in /path/to/script.php on line 4

   
```

**`uopz_delete()` class example**

```php


<?php
class My {
    public static function strlen($arg) {
        return strlen($arg);
    }
}

uopz_delete(My::class, "strlen");

echo My::strlen("Hello World");
?>

   
```

The above example will output something similar to:

```text


PHP Fatal error: Call to undefined method My::strlen() in /path/to/script.php on line 10

   
```
