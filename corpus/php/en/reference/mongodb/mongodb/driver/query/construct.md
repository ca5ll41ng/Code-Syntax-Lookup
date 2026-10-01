---
id: "en-php-function-mongodb-driver-query-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Query::__construct"
title: "Create a new Query"
signature: "final public MongoDB\\Driver\\Query::__construct(array|object $filter, array|null $queryOptions = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-query.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new Query

## Description

```php
final public MongoDB\Driver\Query::__construct(array|object $filter, array|null $queryOptions = null)
```

Constructs a new `MongoDB\Driver\Query`, which is an immutable value object that represents a database query. The query may then be executed with `MongoDB\Driver\Manager::executeQuery()`.

## Parameters

- **`$filter` (`array|object`)** — The [query predicate](tutorial/query-documents/). An empty predicate will match all documents in the collection.
  > When evaluating query criteria, MongoDB compares types and values according to its own [comparison rules for BSON types](reference/bson-type-comparison-order/), which differs from PHP's comparison and type juggling rules. When matching a special BSON type the query criteria should use the respective BSON class (e.g. use `MongoDB\BSON\ObjectId` to match an [ObjectId]()).


- **`$queryOptions`** — | Option | Type | Description | | --- | --- | --- | | allowDiskUse | `bool` | Allows MongoDB to use temporary disk files to store data exceeding the 100 megabyte system memory limit while processing a blocking sort operation. | | allowPartialResults | `bool` | For queries against a sharded collection, returns partial results from the mongos if some shards are unavailable instead of throwing an error. Falls back to the deprecated `"partial"` option if not specified. | | awaitData | `bool` | Use in conjunction with the `"tailable"` option to block a getMore operation on the cursor temporarily if at the end of data rather than returning no data. After a timeout period, the query returns as normal. | | batchSize | `int` | The number of documents to return in the first batch. Defaults to 101. A batch size of 0 means that the cursor will be established, but no documents will be returned in the first batch. In versions of MongoDB before 3.2, where queries use the legacy wire protocol OP_QUERY, a batch size of 1 will close the cursor irrespective of the number of matched documents. | | collation | `array\|object` | [Collation]() allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks. When specifying collation, the `"locale"` field is mandatory; all other collation fields are optional. For descriptions of the fields, see [Collation Document](#collation-document). If the collation is unspecified but the collection has a default collation, the operation uses the collation specified for the collection. If no collation is specified for the collection or for the operation, MongoDB uses the simple binary comparison used in prior versions for string comparisons. This option is available in MongoDB 3.4+ and will result in an exception at execution time if specified for an older server version. | | comment | `mixed` | An arbitrary comment to help trace the operation through the database profiler, currentOp output, and logs. The comment can be any valid BSON type for MongoDB 4.4+. Earlier server versions only support string values. Falls back to the deprecated `"$comment"` modifier if not specified. | | exhaust | `bool` | Stream the data down full blast in multiple "more" packages, on the assumption that the client will fully read all data queried. Faster when you are pulling a lot of data and know you want to pull it all down. Note: the client is not allowed to not read all the data unless it closes the connection. This option is not supported by the find command in MongoDB 3.2+ and will force the driver to use the legacy wire protocol version (i.e. OP_QUERY). | | explain | `bool` | If `true`, the returned `MongoDB\Driver\Cursor` will contain a single document that describes the process and indexes used to return the query. Falls back to the deprecated `"$explain"` modifier if not specified. This option is not supported by the find command in MongoDB 3.2+ and will only be respected when using the legacy wire protocol version (i.e. OP_QUERY). The [explain](reference/command/explain/) command should be used on MongoDB 3.0+. | | hint | `string\|array\|object` | Index specification. Specify either the index name as a string or the index key pattern. If specified, then the query system will only consider plans using the hinted index. Falls back to the deprecated `"hint"` option if not specified. | | let | `array\|object` | Map of parameter names and values. Values must be constant or closed expressions that do not reference document fields. Parameters can then be accessed as variables in an aggregate expression context (e.g. `$$var`). This option is available in MongoDB 5.0+ and will result in an exception at execution time if specified for an older server version. | | limit | `int` | The maximum number of documents to return. If unspecified, then defaults to no limit. A limit of 0 is equivalent to setting no limit. | | max | `array\|object` | The *exclusive* upper bound for a specific index. Falls back to the deprecated `"$max"` modifier if not specified. | | maxAwaitTimeMS | `int` | Positive integer denoting the time limit in milliseconds for the server to block a getMore operation if no data is available. This option should only be used in conjunction with the `"tailable"` and `"awaitData"` options. | | maxTimeMS | `int` | The cumulative time limit in milliseconds for processing operations on the cursor. MongoDB aborts the operation at the earliest following interrupt point. Falls back to the deprecated `"$maxTimeMS"` modifier if not specified. | | min | `array\|object` | The *inclusive* lower bound for a specific index. Falls back to the deprecated `"$min"` modifier if not specified. | | noCursorTimeout | `bool` | Prevents the server from timing out idle cursors after an inactivity period (10 minutes). | | projection | `array\|object` | The [projection specification](tutorial/project-fields-from-query-results/) to determine which fields to include in the returned documents. If you are using the ODM functionality to deserialise documents as their original PHP class, make sure that you include the __pclass field in the projection. This is required for the deserialization to work and without it, the extension will return (by default) a `stdClass` object instead. | | readConcern | `MongoDB\Driver\ReadConcern` | A read concern to apply to the operation. By default, the read concern from the MongoDB Connection URI will be used. This option is available in MongoDB 3.2+ and will result in an exception at execution time if specified for an older server version. | | returnKey | `bool` | If `true`, returns only the index keys in the resulting documents. Default value is `false`. If `true` and the find command does not use an index, the returned documents will be empty. Falls back to the deprecated `"$returnKey"` modifier if not specified. | | showRecordId | `bool` | Determines whether to return the record identifier for each document. If `true`, adds a top-level `"$recordId"` field to the returned documents. Falls back to the deprecated `"$showDiskLoc"` modifier if not specified. | | singleBatch | `bool` | Determines whether to close the cursor after the first batch. Defaults to `false`. | | skip | `int` | Number of documents to skip. Defaults to 0. | | sort | `array\|object` | The sort specification for the ordering of the results. Falls back to the deprecated `"$orderby"` modifier if not specified. | | tailable | `bool` | Returns a tailable cursor for a capped collection. |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `"partial"` option was removed. Use the `"allowPartialResults"` option instead.    The `"maxScan"` option was removed. Support for this option was removed in MongoDB 4.2.    The `"modifiers"` option was removed. This option was used for legacy query modifiers, which are all deprecated.    The `"oplogReplay"` option was removed. It is ignored in MongoDB 4.4 and newer.    The `"snapshot"` option was removed. Support for this option was removed in MongoDB 4.0.    A negative value for the `"limit"` option no longer implies `true` for the `"singleBatch"` option. To only receive a single batch of results, combine a positive `"limit"` value with the `"singleBatch"` option. |
| PECL mongodb 1.14.0 | Added the `"let"` option. The `"comment"` option now accepts any type. |
| PECL mongodb 1.8.0 | Added the `"allowDiskUse"` option.    The `"oplogReplay"` option is deprecated. |
| PECL mongodb 1.5.0 | The `"maxScan"` and `"snapshot"` options are deprecated. |
| PECL mongodb 1.3.0 | Added the `"maxAwaitTimeMS"` option. |
| PECL mongodb 1.2.0 | Added the `"allowPartialResults"`, `"collation"`, `"comment"`, `"hint"`, `"max"`, `"maxScan"`, `"maxTimeMS"`, `"min"`, `"returnKey"`, `"showRecordId"`, and `"snapshot"` options.    Renamed the `"partial"` option to `"allowPartialResults"`. For backwards compatibility, `"partial"` will still be read if `"allowPartialResults"` is not specified.    Removed the legacy `"secondaryOk"` option, which is obsolete. For queries using the legacy wire protocol OP_QUERY, the driver will set the `secondaryOk` bit as needed in accordance with the [Server Selection Specification](). |
| PECL mongodb 1.1.0 | Added the `"readConcern"` option. |

## Examples

**`MongoDB\Driver\Query::__construct()` example**

```php


<?php
/* Select only documents authord by "bjori" with at least 100 views */
$filter = [
    'author' => 'bjori',
    'views' => [
        '$gte' => 100,
    ],
];

$options = [
    /* Only return the following fields in the matching documents */
    'projection' => [
        'title' => 1,
        'article' => 1,
    ],
    /* Return the documents in descending order of views */
    'sort' => [
        'views' => -1
    ],
];

$query = new MongoDB\Driver\Query($filter, $options);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$readPreference = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY);
$cursor = $manager->executeQuery('databaseName.collectionName', $query, ['readPreference' => $readPreference]);

foreach($cursor as $document) {
    var_dump($document);
}

?>

   
```

## See Also

 `MongoDB\Driver\Manager::executeQuery()` `MongoDB\Driver\Cursor`
