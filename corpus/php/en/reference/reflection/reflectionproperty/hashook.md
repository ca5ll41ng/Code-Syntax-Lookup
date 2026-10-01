---
id: "en-php-function-reflectionproperty-hashook"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::hasHook"
title: "Returns whether the property has a given hook defined"
signature: "public bool ReflectionProperty::hasHook(PropertyHookType $type)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.hashook.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the property has a given hook defined

## Description

```php
public bool ReflectionProperty::hasHook(PropertyHookType $type)
```

Returns whether the property has a given hook defined.

## Parameters

- **`$PropertyHookType`** — The type of hook to check for.

## Return Values

Returns `true` if the hook is defined on this property, `false` if not.

## Examples

**`ReflectionProperty::hasHook()` example**

```php


<?php
class Example
{
    public string $name { get => "Name here"; }
}

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('name');
var_dump($rProp->hasHook(PropertyHookType::Get));
var_dump($rProp->hasHook(PropertyHookType::Set));
?>

   
```

The above example will output:

```text


bool(true)
bool(false)

   
```

## See Also

 `ReflectionMethod` `PropertyHookType`
