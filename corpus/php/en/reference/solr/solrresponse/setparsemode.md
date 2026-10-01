---
id: "en-php-function-solrresponse-setparsemode"
language: "php"
lang: "en"
category: "function"
name: "SolrResponse::setParseMode"
title: "Sets the parse mode"
signature: "public bool SolrResponse::setParseMode(int $parser_mode = 0)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrresponse.setparsemode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the parse mode

## Description

```php
public bool SolrResponse::setParseMode(int $parser_mode = 0)
```

Sets the parse mode.

## Parameters

- **`$parser_mode`** — SolrResponse::PARSE_SOLR_DOC parses documents in SolrDocument instances. SolrResponse::PARSE_SOLR_OBJ parses document into SolrObjects.

## Return Values

Returns `true` on success or `false` on failure.
