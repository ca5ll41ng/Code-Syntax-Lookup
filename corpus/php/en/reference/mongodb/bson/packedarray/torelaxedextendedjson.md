---
id: "en-php-function-mongodb-bson-packedarray-torelaxedextendedjson"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::toRelaxedExtendedJSON"
title: "Returns the Relaxed Extended JSON representation of the BSON array"
signature: "final public string MongoDB\\BSON\\PackedArray::toRelaxedExtendedJSON()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.torelaxedextendedjson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Relaxed Extended JSON representation of the BSON array

## Description

```php
final public string MongoDB\BSON\PackedArray::toRelaxedExtendedJSON()
```

Converts the BSON array to its [Relaxed Extended JSON](#relaxed-extended-json-example) representation. The relaxed format prefers use of JSON type primitives at the expense of type fidelity and is most suited for producing output that can be easily consumed by web APIs and humans.

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the [Relaxed Extended JSON](#relaxed-extended-json-example) representation of the BSON array.

## Examples

**`MongoDB\BSON\PackedArray::toRelaxedExtendedJSON()` example**

```php

    
<?php

$array = [
    'foo',
    123,
    4294967295,
    new MongoDB\BSON\ObjectId('56315a7c6118fd1b920270b1'),
];

$packedArray = MongoDB\BSON\PackedArray::fromPHP($array);
echo $packedArray->toRelaxedExtendedJSON(), "\n";

?>

   
```

The above example will output:

```text

    
[ "foo", 123, 4294967295, { "$oid" : "56315a7c6118fd1b920270b1" } ]

   
```

## See Also

 `MongoDB\BSON\PackedArray::fromJSON()` `MongoDB\BSON\PackedArray::toCanonicalExtendedJSON()` `MongoDB\BSON\toRelaxedExtendedJSON()` [Extended JSON Specification]() [BSON Types]()
