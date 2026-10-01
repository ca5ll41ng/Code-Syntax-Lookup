---
id: "en-php-function-mongodb-driver-bulkwrite-delete"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWrite::delete"
title: "Add a delete operation to the bulk"
signature: "public void MongoDB\\Driver\\BulkWrite::delete(array|object $filter, array|null $deleteOptions = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwrite.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a delete operation to the bulk

## Description

```php
public void MongoDB\Driver\BulkWrite::delete(array|object $filter, array|null $deleteOptions = null)
```

Adds a delete operation to the `MongoDB\Driver\BulkWrite`.

## Parameters

- **`$filter` (`array|object`)** — The [query predicate](tutorial/query-documents/). An empty predicate will match all documents in the collection.
  > When evaluating query criteria, MongoDB compares types and values according to its own [comparison rules for BSON types](reference/bson-type-comparison-order/), which differs from PHP's comparison and type juggling rules. When matching a special BSON type the query criteria should use the respective BSON class (e.g. use `MongoDB\BSON\ObjectId` to match an [ObjectId]()).


- **`$deleteOptions`** — | Option | Type | Description | Default | | --- | --- | --- | --- | | collation | `array\|object` | [Collation]() allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks. When specifying collation, the `"locale"` field is mandatory; all other collation fields are optional. For descriptions of the fields, see [Collation Document](#collation-document). If the collation is unspecified but the collection has a default collation, the operation uses the collation specified for the collection. If no collation is specified for the collection or for the operation, MongoDB uses the simple binary comparison used in prior versions for string comparisons. This option is available in MongoDB 3.4+ and will result in an exception at execution time if specified for an older server version. | | hint | `string\|array\|object` | Index specification. Specify either the index name as a string or the index key pattern. If specified, then the query system will only consider plans using the hinted index. This option is available in MongoDB 4.4+ and will result in an exception at execution time if specified for an older server version. | | limit | `bool` | Delete all matching documents (`false`), or only the first matching document (`true`) | `false` |

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.8.0 | Added the `"hint"` option. |
| PECL mongodb 1.2.0 | Added the `"collation"` option. |

## Examples

**`MongoDB\Driver\BulkWrite::delete()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->delete(['x' => 1], ['limit' => 1]);
$bulk->delete(['x' => 2], ['limit' => 0]);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$result = $manager->executeBulkWrite('db.collection', $bulk);

?>

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWrite()` `MongoDB\Driver\WriteResult`
