---
id: "en-php-function-solrinputdocument-addchilddocument"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::addChildDocument"
title: "Adds a child document for block indexing"
signature: "public void SolrInputDocument::addChildDocument(SolrInputDocument $child)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.addchilddocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a child document for block indexing

## Description

```php
public void SolrInputDocument::addChildDocument(SolrInputDocument $child)
```

Adds a child document to construct a document block with nested documents.

## Parameters

- **`$child`** — A `SolrInputDocument` object.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `SolrIllegalArgumentException` on failure.

Throws `SolrException` on internal failure.

## Examples

**`SolrInputDocument::addChildDocument()` example**

```php


<?php

include "bootstrap.php";

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
    'path'     => SOLR_SERVER_STORE_PATH,
);

$client = new SolrClient($options);

$product = new SolrInputDocument();

$product->addField('id', 'P-BLACK');
$product->addField('cat', 'tshirt');
$product->addField('cat', 'polo');
$product->addField('content_type', 'product');

$small = new SolrInputDocument();
$small->addField('id', 'TS-BLK-S');
$small->addField('content_type', 'sku');
$small->addField('size', 'S');
$small->addField('inventory', 100);

$medium = new SolrInputDocument();
$medium->addField('id', 'TS-BLK-M');
$medium->addField('content_type', 'sku');
$medium->addField('size', 'M');
$medium->addField('inventory', 200);

$large = new SolrInputDocument();
$large->addField('id', 'TS-BLK-L');
$large->addField('content_type', 'sku');
$large->addField('size', 'L');
$large->addField('inventory', 300);

// add child documents 
$product->addChildDocument($small);
$product->addChildDocument($medium);
$product->addChildDocument($large);

// add product document block to the index
$updateResponse = $client->addDocument(
        $product,
        true, // overwrite if the document exists
        10000 // commit within 10 seconds
);

print_r($updateResponse->getResponse());


   
```

The above example will output something similar to:

```text


SolrObject Object
(
    [responseHeader] => SolrObject Object
        (
            [status] => 0
            [QTime] => 5
        )
)

   
```

## See Also

 `SolrInputDocument::addChildDocuments()` `SolrInputDocument::hasChildDocuments()` `SolrInputDocument::getChildDocuments()` `SolrInputDocument::getChildDocumentsCount()`
