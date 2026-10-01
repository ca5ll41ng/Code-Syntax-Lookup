---
id: "en-php-function-mysql-xdevapi-collectionmodify-patch"
language: "php"
lang: "en"
category: "function"
name: "CollectionModify::patch"
title: "Patch document"
signature: "public mysql_xdevapi\\CollectionModify mysql_xdevapi\\CollectionModify::patch(string $document)"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-collectionmodify.patch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Patch document

## Description

```php
public mysql_xdevapi\CollectionModify mysql_xdevapi\CollectionModify::patch(string $document)
```

Takes a patch object and applies it on one or more documents, and can update multiple document properties.

## Parameters

- **`$document`** — A document with the properties to apply to the matching documents.

## Return Values

A CollectionModify object.

## Examples

**`mysql_xdevapi\CollectionModify::patch()` example**

```php


<?php

$res = $coll->modify('"Programmatore" IN job')->patch('{"Hobby" : "Programmare"}')->execute();

?>

   
```
