---
id: "en-php-function-mongodb-bson-unserializable-bsonunserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Unserializable::bsonUnserialize"
title: "Constructs the object from a BSON array or document"
signature: "abstract public void MongoDB\\BSON\\Unserializable::bsonUnserialize(array $data)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-unserializable.bsonunserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs the object from a BSON array or document

## Description

```php
abstract public void MongoDB\BSON\Unserializable::bsonUnserialize(array $data)
```

Called during unserialization of the object from BSON. The properties of the BSON array or document will be passed to the method as an `array`.

Remember to check for an _id property when handling data from a BSON document.

> This method acts as the constructor of the object. The __construct() method will *not* be called after this method.

## Parameters

- **`$data` (`array`)** — Properties within the BSON array or document.

## Return Values

The return value from this method is ignored.

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |

## Examples

**`MongoDB\BSON\Unserializable::bsonUnserialize()` example**

```php


<?php

class MyDocument implements MongoDB\BSON\Unserializable
{
    private $data = [];

    function bsonUnserialize(array $data): void
    {
        $this->data = $data;
    }
}

$bson = MongoDB\BSON\Document::fromJSON('{ "foo": "bar" }');

var_dump($bson->toPHP(['root' => 'MyDocument']));

?>

   
```

The above example will output:

```text


object(MyDocument)#1 (1) {
  ["data":"MyDocument":private]=>
  array(1) {
    ["foo"]=>
    string(3) "bar"
  }
}

   
```

## See Also

 `MongoDB\BSON\Serializable::bsonSerialize()` MongoDB\BSON\Persistable `mongodb.persistence`
