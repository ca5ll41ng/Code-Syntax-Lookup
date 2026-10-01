---
id: "en-php-function-mongodb-driver-bulkwritecommand-updateone"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommand::updateOne"
title: "Add an updateOne operation"
signature: "public void MongoDB\\Driver\\BulkWriteCommand::updateOne(string $namespace, array|object $filter, array|object $update, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommand.updateone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add an updateOne operation

## Description

```php
public void MongoDB\Driver\BulkWriteCommand::updateOne(string $namespace, array|object $filter, array|object $update, array|null $options = null)
```

Add an updateOne operation to the `MongoDB\Driver\BulkWriteCommand`. The first document matching `$filter` in the collection identified by `$namespace` will be updated.

## Parameters

- **`$namespace` (`string`)** — A fully qualified namespace (e.g. `"databaseName.collectionName"`).
- **`$filter` (`array|object`)** — The [query predicate](tutorial/query-documents/). An empty predicate will match all documents in the collection.
  > When evaluating query criteria, MongoDB compares types and values according to its own [comparison rules for BSON types](reference/bson-type-comparison-order/), which differs from PHP's comparison and type juggling rules. When matching a special BSON type the query criteria should use the respective BSON class (e.g. use `MongoDB\BSON\ObjectId` to match an [ObjectId]()).


- **`$update` (`array|object`)** — A document containing either update operators (e.g. `$set`) or an [aggregation pipeline](update/#update-with-an-aggregation-pipeline).
- **`$options`** — | Option | Type | Description | Default | | --- | --- | --- | --- | | arrayFilters | `array` | An array of filter documents that determines which array elements to modify for an update operation on an array field. See [Specify arrayFilters for Array Update Operations](update/#update-command-arrayfilters) in the MongoDB manual for more information. | | collation | `array\|object` | [Collation]() allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks. When specifying collation, the `"locale"` field is mandatory; all other collation fields are optional. For descriptions of the fields, see [Collation Document](#collation-document). If the collation is unspecified but the collection has a default collation, the operation uses the collation specified for the collection. If no collation is specified for the collection or for the operation, MongoDB uses the simple binary comparison used in prior versions for string comparisons. This option is available in MongoDB 3.4+ and will result in an exception at execution time if specified for an older server version. | | hint | `string\|array\|object` | Index specification. Specify either the index name as a string or the index key pattern. If specified, then the query system will only consider plans using the hinted index. | | sort | `array\|object` | Specify which document the operation updates if the query matches multiple documents. The first document matched by the sort order will be updated. | | upsert | `bool` | If `$filter` does not match an existing document, insert a *single* document. The document will be created by applying operators in `$update` to any field values in `$filter`. | `false` |

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\BulkWriteCommand::updateOne()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->updateOne('db.coll', ['x' => 1], ['$set' => ['y' => 2]]);

$result = $manager->executeBulkWriteCommand($bulk);

?>

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommand::replaceOne()` `MongoDB\Driver\BulkWriteCommand::updateMany()` `MongoDB\Driver\Manager::executeBulkWriteCommand()` `MongoDB\Driver\BulkWriteCommandResult`
