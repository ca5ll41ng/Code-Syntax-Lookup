---
id: "en-php-function-reflectionproperty-gethook"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getHook"
title: "Returns a reflection object for a specified hook"
signature: "public ReflectionMethod|null ReflectionProperty::getHook(PropertyHookType $type)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.gethook.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a reflection object for a specified hook

## Description

```php
public ReflectionMethod|null ReflectionProperty::getHook(PropertyHookType $type)
```

Gets the reflection of the property's hook, if any.

## Parameters

- **`$PropertyHookType`** — The type of hook to request.

## Return Values

If the requested hook is defined, a `ReflectionMethod` instance will be returned. If not, the method will return `null`

## Examples

**`ReflectionProperty::getHook()` example**

```php


<?php
class Example
{
    public string $name { get => "Name here"; }
}

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('name');
var_dump($rProp->getHook(PropertyHookType::Get));
var_dump($rProp->getHook(PropertyHookType::Set));
?>

   
```

The above example will output:

```text


object(ReflectionMethod)#4 (2) {
  ["name"]=>
  string(10) "$name::get"
  ["class"]=>
  string(7) "Example"
}
NULL

   
```

## See Also

 `ReflectionMethod` `PropertyHookType`
