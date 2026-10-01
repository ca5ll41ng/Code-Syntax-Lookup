---
id: "en-php-function-mysql-xdevapi-collection-createindex"
language: "php"
lang: "en"
category: "function"
name: "Collection::createIndex"
title: "Create collection index"
signature: "public void mysql_xdevapi\\Collection::createIndex(string $index_name, string $index_desc_json)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collection.createindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create collection index

## Description

```php
public void mysql_xdevapi\Collection::createIndex(string $index_name, string $index_desc_json)
```

Creates an index on the collection.

An exception is thrown if an index with the same name already exists, or if index definition is not correctly formed.

## Parameters

- **`$index_name`** — The name of the index that to create. This name must be a valid index name as accepted by the `CREATE INDEX` SQL query.
- **`$index_desc_json`** — Definition of the index to create. It contains an array of IndexField objects, and each object describes a single document member to include in the index, and an optional string for the type of index that might be INDEX (default) or SPATIAL. — A single IndexField description consists of the following fields:
  - field: string, the full document path to the document member or field to be indexed.
  - type: string, one of the supported SQL column types to map the field into. For numeric types, the optional UNSIGNED keyword may follow. For the TEXT type, the length to consider for indexing may be added.
  - required: bool, (optional) true if the field is required to exist in the document. Defaults to `false`, except for `GEOJSON` where it defaults to `true`.
  - options: integer, (optional) special option flags for use when decoding `GEOJSON` data.
  - srid: integer, (optional) srid value for use when decoding `GEOJSON` data.

 — It is an error to include other fields not described above in IndexDefinition or IndexField documents.

## Return Values

## Examples

**`mysql_xdevapi\Collection::createIndex()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");
$session->sql("DROP DATABASE IF EXISTS addressbook")->execute();
$session->sql("CREATE DATABASE addressbook")->execute();

$schema     = $session->getSchema("addressbook");
$collection = $schema->createCollection("people");

// Creating a text index
$collection->createIndex(
  'myindex1', 
  '{"fields": [{
    "field": "$.name", 
    "type": "TEXT(25)", 
    "required": true}], 
    "unique": false}'
);

// A spatial index
$collection->createIndex(
  'myindex2', 
  '{"fields": [{
    "field": "$.home", 
    "type": "GEOJSON", 
    "required": true}], 
    "type": "SPATIAL"}'
);

// Index with multiple fields
$collection->createIndex(
  'myindex3', 
  '{"fields": [
    {
      "field": "$.name",
      "type": "TEXT(20)",
      "required": true
    },
    {
      "field": "$.age",
      "type": "INTEGER"
    },
    {
      "field": "$.job",
      "type": "TEXT(30)",
      "required": false
    }
  ],
  "unique": true
  }'
);

   
```
