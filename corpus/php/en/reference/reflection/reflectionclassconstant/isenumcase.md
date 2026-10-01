---
id: "en-php-function-reflectionclassconstant-isenumcase"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClassConstant::isEnumCase"
title: "Checks if class constant is an Enum case"
signature: "public bool ReflectionClassConstant::isEnumCase()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclassconstant.isenumcase.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if class constant is an Enum case

## Description

```php
public bool ReflectionClassConstant::isEnumCase()
```

Checks if the class constant is an Enum case.

## Parameters

This function has no parameters.

## Return Values

`true` if the class constant is an Enum case; `false` otherwise.

## Examples

**`ReflectionClassConstant::isEnumCase()` example**

Distinguish between Enum cases and regular class constants.

```php


<?php
enum Status
{
    const BORING_CONSTANT = 'test';
    const ENUM_VALUE = Status::PUBLISHED;

    case DRAFT;
    case PUBLISHED;
    case ARCHIVED;
}

$reflection = new ReflectionEnum(Status::class);
foreach ($reflection->getReflectionConstants() as $constant) {
    echo "{$constant->name} is ",
        $constant->isEnumCase() ? "an enum case" : "a regular class constant",
        PHP_EOL;
}
?>

   
```

The above example will output:

```text


BORING_CONSTANT is a regular class constant
ENUM_VALUE is a regular class constant
DRAFT is an enum case
PUBLISHED is an enum case
ARCHIVED is an enum case

   
```

## See Also

 `ReflectionEnum`
