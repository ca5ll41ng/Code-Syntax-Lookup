---
id: "en-php-function-solrdocument-getfieldcount"
language: "php"
lang: "en"
category: "function"
name: "SolrDocument::getFieldCount"
title: "Returns the number of fields in this document"
signature: "public int SolrDocument::getFieldCount()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdocument.getfieldcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of fields in this document

## Description

```php
public int SolrDocument::getFieldCount()
```

Returns the number of fields in this document. Multi-value fields are only counted once.

## Parameters

This function has no parameters.

## Return Values

Returns an integer on success and `false` on failure.
