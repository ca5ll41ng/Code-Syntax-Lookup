---
id: "en-php-function-arrayobject-serialize"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::serialize"
title: "Serialize an ArrayObject"
signature: "public string ArrayObject::serialize()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.serialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serialize an ArrayObject

## Description

```php
public string ArrayObject::serialize()
```

Serializes an `ArrayObject`.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

The serialized representation of the `ArrayObject`.

## Examples

**`ArrayObject::serialize()` example**

```php


<?php
$o = new ArrayObject();

$s1 = serialize($o);
$s2 = $o->serialize();

var_dump($s1);
var_dump($s2);
?>

    
```

The above example will output:

```text


string(45) "C:11:"ArrayObject":21:{x:i:0;a:0:{};m:a:0:{}}"
string(21) "x:i:0;a:0:{};m:a:0:{}"

    
```

## See Also

`ArrayObject::unserialize()` `serialize()` Serializing Objects
