---
id: "en-php-function-solrinputdocument-addchilddocuments"
language: "php"
lang: "en"
category: "function"
name: "SolrInputDocument::addChildDocuments"
title: "Adds an array of child documents"
signature: "public void SolrInputDocument::addChildDocuments(array $docs)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrinputdocument.addchilddocuments.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds an array of child documents

## Description

```php
public void SolrInputDocument::addChildDocuments(array $docs)
```

Adds an array of child documents to the current input document.

## Parameters

- **`$docs`** — An `array` of `SolrInputDocument` objects.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `SolrIllegalArgumentException` on failure.

Throws `SolrException` on internal failure.

## Examples

**`SolrInputDocument::addChildDocuments()` example**

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
$skus = [$small, $medium, $large];
$product->addChildDocuments($skus);

// add the product document block to the index
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

 `SolrInputDocument::addChildDocument()` `SolrInputDocument::hasChildDocuments()` `SolrInputDocument::getChildDocuments()` `SolrInputDocument::getChildDocumentsCount()`
