---
id: "en-php-function-mongodb-bson-serializable-bsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Serializable::bsonSerialize"
title: "Provides an array or document to serialize as BSON"
signature: "abstract public array|stdClass|MongoDB\\BSON\\Document|MongoDB\\BSON\\PackedArray MongoDB\\BSON\\Serializable::bsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-serializable.bsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Provides an array or document to serialize as BSON

## Description

```php
abstract public array|stdClass|MongoDB\BSON\Document|MongoDB\BSON\PackedArray MongoDB\BSON\Serializable::bsonSerialize()
```

Called during serialization of the object to BSON. The method must return an `array`, `stdClass`, `MongoDB\BSON\Document`, or `MongoDB\BSON\PackedArray`.

Root documents (e.g. a MongoDB\BSON\Serializable passed to `MongoDB\BSON\Document::fromPHP()`) will always be serialized as a BSON document. For field values, associative arrays and `stdClass` instances will be serialized as a BSON document and sequential arrays (i.e. sequential, numeric indexes starting at `0`) will be serialized as a BSON array.

Users are encouraged to include an _id property (e.g. a `MongoDB\BSON\ObjectId` initialized in the constructor) when returning data for a BSON root document. In the absence of an _id property, the extension or server will generate a `MongoDB\BSON\ObjectId` for insert or upsert operations, respectively.

## Parameters

This function has no parameters.

## Return Values

An `array`, `stdClass`, `MongoDB\BSON\Document`, or `MongoDB\BSON\PackedArray` to be serialized as a BSON array or document.

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.17.0 | The return type was changed from `array\|object`. Instead of `object`, the return type now specifies `stdClass`. Classes that implement this interface must be changed to no longer declare an `object` return type. As the return type is tentative, a deprecation warning is emitted on PHP 8.1 and newer.    In addition to the changes above, the extension now also supports returning instances of `MongoDB\BSON\Document` and `MongoDB\BSON\PackedArray`. Please note that any `MongoDB\BSON\PackedArray` instances returned are silently converted to objects when stored as root documents. They are stored as arrays when used as an embedded field value. |

## Examples

**`MongoDB\BSON\Serializable::bsonSerialize()` returning an associative array for root document**

```php


<?php

class MyDocument implements MongoDB\BSON\Serializable
{
    private $id;

    function __construct()
    {
        $this->id = new MongoDB\BSON\ObjectId;
    }

    function bsonSerialize(): array
    {
        return ['_id' => $this->id, 'foo' => 'bar'];
    }
}

echo MongoDB\BSON\Document::fromPHP(new MyDocument)->toRelaxedExtendedJSON(), "\n";

?>

   
```

The above example will output something similar to:

```text


{ "_id" : { "$oid" : "56cccdcada14d8755a58c591" }, "foo" : "bar" }

   
```

**`MongoDB\BSON\Serializable::bsonSerialize()` returning a sequential array for root document**

```php


<?php

class MyArray implements MongoDB\BSON\Serializable
{
    function bsonSerialize(): array
    {
        return [1, 2, 3];
    }
}

echo MongoDB\BSON\Document::fromPHP(new MyArray)->toRelaxedExtendedJSON(), "\n";

?>

   
```

The above example will output:

```text


{ "0" : 1, "1" : 2, "2" : 3 }

   
```

**`MongoDB\BSON\Serializable::bsonSerialize()` returning an associative array for document field**

```php


<?php

class MyDocument implements MongoDB\BSON\Serializable
{
    function bsonSerialize(): array
    {
        return ['foo' => 'bar'];
    }
}

$value = ['document' => new MyDocument];

echo MongoDB\BSON\Document::fromPHP($value)->toRelaxedExtendedJSON(), "\n";

?>

   
```

The above example will output:

```text


{ "document" : { "foo" : "bar" } }

   
```

**`MongoDB\BSON\Serializable::bsonSerialize()` returning a sequential array for document field**

```php


<?php

class MyArray implements MongoDB\BSON\Serializable
{
    function bsonSerialize(): array
    {
        return [1, 2, 3];
    }
}

$value = ['array' => new MyArray];

echo MongoDB\BSON\Document::fromPHP($value)->toRelaxedExtendedJSON(), "\n";

?>

   
```

The above example will output:

```text


{ "array" : [ 1, 2, 3 ] }

   
```

## See Also

 `MongoDB\BSON\Unserializable::bsonUnserialize()` MongoDB\BSON\Persistable `mongodb.persistence`
