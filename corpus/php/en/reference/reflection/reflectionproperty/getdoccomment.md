---
id: "en-php-function-reflectionproperty-getdoccomment"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::getDocComment"
title: "Gets the property doc comment"
signature: "public string|false ReflectionProperty::getDocComment()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.getdoccomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the property doc comment

## Description

```php
public string|false ReflectionProperty::getDocComment()
```

Gets the doc comment for a property.

## Parameters

This function has no parameters.

## Return Values

The doc comment if it exists, otherwise `false`.

## Examples

**`ReflectionProperty::getDocComment()` example**

```php


<?php
class Str
{
    /**
     * @var int  The length of the string
     */
    public $length = 5;
}

$prop = new ReflectionProperty('Str', 'length');

var_dump($prop->getDocComment());

?>

    
```

The above example will output something similar to:

```text


string(53) "/**
     * @var int  The length of the string
     */"

    
```

**Multiple property declarations**

If multiple property declarations are preceded by a single doc comment, the doc comment refers to the first property only.

```php


<?php
class Foo
{
    /** @var string */
    public $a, $b;
}
$class = new \ReflectionClass('Foo');
foreach ($class->getProperties() as $property) {
    echo $property->getName() . ': ' . var_export($property->getDocComment(), true) . PHP_EOL;
}
?>

    
```

The above example will output:

```text


a: '/** @var string */'
b: false

    
```

## See Also

`ReflectionProperty::getModifiers()` `ReflectionProperty::getName()` `ReflectionProperty::getValue()`
