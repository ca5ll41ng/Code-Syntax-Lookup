---
id: "en-php-function-solrdocument-getinputdocument"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::getInputDocument"
title: "Returns a SolrInputDocument equivalent of the object"
signature: "public SolrInputDocument SolrDocument::getInputDocument()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.getinputdocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a SolrInputDocument equivalent of the object

## Description

```php
public SolrInputDocument SolrDocument::getInputDocument()
```

Returns a SolrInputDocument equivalent of the object. This is useful if one wishes to resubmit/update a document retrieved from a query.

## Parameters

This function has no parameters.

## Return Values

Returns a SolrInputDocument on success and `null` on failure.
