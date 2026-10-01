---
id: "en-php-function-mongodb-bson-packedarray-tocanonicalextendedjson"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::toCanonicalExtendedJSON"
title: "Returns the Canonical Extended JSON representation of the BSON array"
signature: "final public string MongoDB\\BSON\\PackedArray::toCanonicalExtendedJSON()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.tocanonicalextendedjson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Canonical Extended JSON representation of the BSON array

## Description

```php
final public string MongoDB\BSON\PackedArray::toCanonicalExtendedJSON()
```

Converts the BSON array to its [Canonical Extended JSON](#canonical-extended-json-example) representation. The canonical format prefers type fidelity at the expense of concise output and is most suited for producing output that can be converted back to BSON without any loss of type information (e.g. numeric types will remain differentiated).

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the [Canonical Extended JSON](#canonical-extended-json-example) representation of the BSON array.

## Examples

**`MongoDB\BSON\PackedArray::toCanonicalExtendedJSON()` example**

```php

    
<?php

$array = [
    'foo',
    123,
    4294967295,
    new MongoDB\BSON\ObjectId('56315a7c6118fd1b920270b1'),
];

$packedArray = MongoDB\BSON\PackedArray::fromPHP($array);
echo $packedArray->toCanonicalExtendedJSON(), "\n";

?>

   
```

The above example will output:

```text

    
[ "foo", { "$numberInt" : "123" }, { "$numberLong" : "4294967295" }, { "$oid" : "56315a7c6118fd1b920270b1" } ]

   
```

## See Also

 `MongoDB\BSON\PackedArray::fromJSON()` `MongoDB\BSON\PackedArray::toRelaxedExtendedJSON()` `MongoDB\BSON\toCanonicalExtendedJSON()` [Extended JSON Specification]() [BSON Types]()
