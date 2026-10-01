---
id: "en-php-function-solrclient-adddocuments"
language: "php"
lang: "en"
category: "function"
name: "SolrClient::addDocuments"
title: "Adds a collection of SolrInputDocument instances to the index"
signature: "public void SolrClient::addDocuments(array $docs, bool $overwrite = true, int $commitWithin = 0)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrclient.adddocuments.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a collection of SolrInputDocument instances to the index

## Description

```php
public void SolrClient::addDocuments(array $docs, bool $overwrite = true, int $commitWithin = 0)
```

Adds a collection of documents to the index.

## Parameters

- **`$docs`** — An array containing the collection of SolrInputDocument instances. This array must be an actual variable.
- **`$overwrite`** — Whether to overwrite existing documents or not. If `false` there will be duplicates (several documents with the same ID).
  > PECL Solr < 2.0 $allowDups was used instead of $overwrite, which does the same functionality with exact opposite bool flag.
  >
  > $allowDups = false is the same as $overwrite = true


- **`$commitWithin`** — Number of milliseconds within which to auto commit this document. Available since Solr 1.4 . Default (0) means disabled. — When this value specified, it leaves the control of when to do the commit to Solr itself, optimizing number of commits to a minimum while still fulfilling the update latency requirements, and Solr will automatically do a commit when the oldest add in the buffer is due.

## Return Values

Returns a `SolrUpdateResponse` object or throws an exception on failure.

## Errors/Exceptions

Throws `SolrClientException` if the client had failed, or there was a connection issue.

Throws `SolrServerException` if the Solr Server had failed to process the request.

## Examples

**`SolrClient::addDocuments()` example**

```php


<?php

$options = array
(
    'hostname' => SOLR_SERVER_HOSTNAME,
    'login'    => SOLR_SERVER_USERNAME,
    'password' => SOLR_SERVER_PASSWORD,
    'port'     => SOLR_SERVER_PORT,
);

$client = new SolrClient($options);

$doc = new SolrInputDocument();

$doc->addField('id', 334455);
$doc->addField('cat', 'Software');
$doc->addField('cat', 'Lucene');

$doc2 = clone $doc;

$doc2->deleteField('id');
$doc2->addField('id', 334456);

$docs = array($doc, $doc2);

$updateResponse = $client->addDocuments($docs);

// no changes will be written to disk unless $commitWithin is passed or SolrClient::commit is called

print_r($updateResponse->getResponse());

?>

    
```

The above example will output something similar to:

```text


SolrObject Object
(
    [responseHeader] => SolrObject Object
        (
            [status] => 0
            [QTime] => 2
        )

)


    
```

## See Also

`SolrClient::addDocument()` `SolrClient::commit()`
