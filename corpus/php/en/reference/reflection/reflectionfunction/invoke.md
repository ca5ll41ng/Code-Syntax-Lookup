---
id: "en-php-function-reflectionfunction-invoke"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::invoke"
title: "Invokes function"
signature: "public mixed ReflectionFunction::invoke(mixed $args)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.invoke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Invokes function

## Description

```php
public mixed ReflectionFunction::invoke(mixed $args)
```

Invokes a reflected function.

## Parameters

- **`$args`** — The passed in argument list. It accepts a variable number of arguments which are passed to the function much like `call_user_func()` is.

## Return Values

Returns the result of the invoked function call.

## Examples

**`ReflectionFunction::invoke()` example**

```php


<?php
function title($title, $name)
{
    return sprintf("%s. %s\r\n", $title, $name);
}

$function = new ReflectionFunction('title');

echo $function->invoke('Dr', 'Phil');
?>

    
```

The above example will output:

```text


Dr. Phil

    
```

## Notes

> `ReflectionFunction::invoke()` cannot be used when reference parameters are expected. `ReflectionFunction::invokeArgs()` has to be used instead (passing references in the argument list).

## See Also

`ReflectionFunction::export()` __invoke() `call_user_func()`
