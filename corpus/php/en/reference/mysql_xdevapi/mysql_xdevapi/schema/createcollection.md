---
id: "en-php-function-mysql-xdevapi-schema-createcollection"
language: "php"
lang: "en"
category: "function"
name: "Schema::createCollection"
title: "Add collection to schema"
signature: "public mysql_xdevapi\\Collection mysql_xdevapi\\Schema::createCollection(string $name, [string $validate = ...])"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-schema.createcollection.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add collection to schema

## Description

```php
public mysql_xdevapi\Collection mysql_xdevapi\Schema::createCollection(string $name, [string $validate = ...])
```

Create a collection within the schema.

## Parameters

- **`$name`** — Collection name.
- **`$validate`** — Validation definition, as a JSON object.

## Return Values

The Collection object.

## Changelog

|  |  |
| --- | --- |
| 8.0.20 | Added the optional validate parameter. |

## Examples

**`mysql_xdevapi\Schema::createCollection()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE IF EXISTS food")->execute();
$session->sql("CREATE DATABASE food")->execute();
$session->sql("CREATE TABLE food.fruit(name text, rating text)")->execute();

$schema = $session->getSchema("food");
$schema->createCollection("trees");

print_r($schema->gettables());
print_r($schema->getcollections());

   
```

The above example will output something similar to:

```text


Array
(
    [fruit] => mysql_xdevapi\Table Object
        (
            [name] => fruit
        )
)
Array
(
    [trees] => mysql_xdevapi\Collection Object
        (
            [name] => trees
        )
)

   
```

**`mysql_xdevapi\Schema::createCollection()` example**

```php

 
 <?php
 $collection = $schema->createCollection("mycollection", '{
	"validation": {
		"level": "strict",
		"schema": {
			"id": "http://json-schema.org/geo",
			"description": "A geographical coordinate",
			"type": "object",
			"properties": {
				"latitude": {
					"type": "number"
				},
				"longitude": {
					"type": "number"
				}
			},
			"required": ["latitude", "longitude"]
		}
	}
}');
// Succeeds
$collection->add('{"latitude": 10, "longitude": 20}')->execute();

// Fails, invalid types (not numbers)
$collection->add('{"latitude": "lat", "longitude": "long"}')->execute();

    
```
