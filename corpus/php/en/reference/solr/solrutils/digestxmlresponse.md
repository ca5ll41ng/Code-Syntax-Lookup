---
id: "en-php-function-solrutils-digestxmlresponse"
language: "php"
lang: "en"
category: "function"
name: "SolrUtils::digestXmlResponse"
title: "Parses an response XML string into a SolrObject"
signature: "public static SolrObject SolrUtils::digestXmlResponse(string $xmlresponse, int $parse_mode = 0)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrutils.digestxmlresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parses an response XML string into a SolrObject

## Description

```php
public static SolrObject SolrUtils::digestXmlResponse(string $xmlresponse, int $parse_mode = 0)
```

This method parses an response XML string from the Apache Solr server into a SolrObject. It throws a SolrException if there was an error.

## Parameters

- **`$xmlresponse`** — The XML response string from the Solr server.
- **`$parse_mode`** — Use SolrResponse::PARSE_SOLR_OBJ or SolrResponse::PARSE_SOLR_DOC

## Return Values

Returns the SolrObject representing the XML response.

If the parse_mode parameter is set to SolrResponse::PARSE_SOLR_OBJ Solr documents will be parses as SolrObject instances.

If it is set to SolrResponse::PARSE_SOLR_DOC, they will be parsed as SolrDocument instances.
