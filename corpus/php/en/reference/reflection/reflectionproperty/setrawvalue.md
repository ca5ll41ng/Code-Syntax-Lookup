---
id: "en-php-function-reflectionproperty-setrawvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::setRawValue"
title: "Sets the value of a property, bypassing a set hook if defined"
signature: "public void ReflectionProperty::setRawValue(object $object, mixed $value)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.setrawvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the value of a property, bypassing a set hook if defined

## Description

```php
public void ReflectionProperty::setRawValue(object $object, mixed $value)
```

Sets the value of a property, bypassing a `set` hook if defined.

## Parameters

- **`$object`** — The object on which to set the property value.
- **`$value`** — The value to write. It must still be valid according to the property's type.

## Return Values

No value is returned.

## Errors/Exceptions

If the property is virtual, an `Error` will be thrown, as there is no raw value to set.

## Examples

**`ReflectionProperty::setRawValue()` example**

```php


<?php
class Example
{
    public int $age {
        set {
            if ($value <= 0) {
               throw new \InvalidArgumentException();
            }
            $this->age = $value;
        }
    }
}

$example = new Example();

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('age');

// These would go through the set hook, and throw an exception.
try {
    $example->age = -2;
} catch (InvalidArgumentException) {
    echo "InvalidArgumentException for setting property to -2\n";
}
try {
    $rProp->setValue($example, -2);
} catch (InvalidArgumentException) {
    echo "InvalidArgumentException for using ReflectionProperty::setValue() with -2\n";
}

// But this would set the $age to -2 without error.
$rProp->setRawValue($example, -2);
echo $example->age;
?>

   
```

The above example will output:

```text


InvalidArgumentException for setting property to -2
InvalidArgumentException for using ReflectionProperty::setValue() with -2
-2

   
```

## See Also

 Asymmetric property visibility
