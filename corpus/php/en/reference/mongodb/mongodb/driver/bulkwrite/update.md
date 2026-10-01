---
id: "en-php-function-mongodb-driver-bulkwrite-update"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWrite::update"
title: "Add an update operation to the bulk"
signature: "public void MongoDB\\Driver\\BulkWrite::update(array|object $filter, array|object $newObj, array|null $updateOptions = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwrite.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add an update operation to the bulk

## Description

```php
public void MongoDB\Driver\BulkWrite::update(array|object $filter, array|object $newObj, array|null $updateOptions = null)
```

Adds an update operation to the `MongoDB\Driver\BulkWrite`.

## Parameters

- **`$filter` (`array|object`)** — The [query predicate](tutorial/query-documents/). An empty predicate will match all documents in the collection.
  > When evaluating query criteria, MongoDB compares types and values according to its own [comparison rules for BSON types](reference/bson-type-comparison-order/), which differs from PHP's comparison and type juggling rules. When matching a special BSON type the query criteria should use the respective BSON class (e.g. use `MongoDB\BSON\ObjectId` to match an [ObjectId]()).


- **`$newObj` (`array|object`)** — A document containing either update operators (e.g. `$set`), a replacement document (i.e. *only* `field:value` expressions), or an [aggregation pipeline](update/#update-with-an-aggregation-pipeline).
- **`$updateOptions`** — | Option | Type | Description | Default | | --- | --- | --- | --- | | arrayFilters | `array` | An array of filter documents that determines which array elements to modify for an update operation on an array field. See [Specify arrayFilters for Array Update Operations](update/#update-command-arrayfilters) in the MongoDB manual for more information. This option is available in MongoDB 3.6+ and will result in an exception at execution time if specified for an older server version. | | collation | `array\|object` | [Collation]() allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks. When specifying collation, the `"locale"` field is mandatory; all other collation fields are optional. For descriptions of the fields, see [Collation Document](#collation-document). If the collation is unspecified but the collection has a default collation, the operation uses the collation specified for the collection. If no collation is specified for the collection or for the operation, MongoDB uses the simple binary comparison used in prior versions for string comparisons. This option is available in MongoDB 3.4+ and will result in an exception at execution time if specified for an older server version. | | hint | `string\|array\|object` | Index specification. Specify either the index name as a string or the index key pattern. If specified, then the query system will only consider plans using the hinted index. This option is available in MongoDB 4.2+ and will result in an exception at execution time if specified for an older server version. | | multi | `bool` | Update only the first matching document if `false`, or all matching documents `true`. This option cannot be `true` if `$newObj` is a replacement document. | `false` | | sort | `array\|object` | Specify which document the operation updates if the query matches multiple documents. The first document matched by the sort order will be updated. This option cannot be used if `"multi"` is `true`. This option is available in MongoDB 8.0+ and will result in an exception at execution time if specified for an older server version. | | upsert | `bool` | If `$filter` does not match an existing document, insert a *single* document. The document will be created from `$newObj` if it is a replacement document (i.e. no update operators); otherwise, the operators in `$newObj` will be applied to `$filter` to create the new document. | `false` |

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.21.0 | Added the `"sort"` option. |
| PECL mongodb 1.7.0 | Added the `"hint"` option. |
| PECL mongodb 1.6.0 | The `$newObj` parameter now accepts an aggregation pipeline. This feature requires MongoDB 4.2+ and will result in an exception at execution time if specified for an older server version. |
| PECL mongodb 1.5.0 | Using the `"arrayFilters"` option will result in an exception at execution time if unsupported by the server. Previously, no exception would be thrown and the option may have been ignored. |
| PECL mongodb 1.4.0 | Added the `"arrayFilters"` option. |
| PECL mongodb 1.2.0 | Added the `"collation"` option. |

## Examples

**`MongoDB\Driver\BulkWrite::update()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->update(
    ['x' => 2],
    ['$set' => ['y' => 3]],
    ['multi' => false, 'upsert' => false]
);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$result = $manager->executeBulkWrite('db.collection', $bulk);

?>

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWrite()` `MongoDB\Driver\WriteResult`
