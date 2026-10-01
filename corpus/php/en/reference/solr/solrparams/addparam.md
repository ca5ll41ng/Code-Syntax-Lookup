---
id: "en-php-function-solrparams-addparam"
language: "php"
lang: "en"
category: "function"
name: "SolrParams::addParam"
title: "Adds a parameter to the object"
signature: "public SolrParams SolrParams::addParam(string $name, string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrparams.addparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a parameter to the object

## Description

```php
public SolrParams SolrParams::addParam(string $name, string $value)
```

Adds a parameter to the object. This is used for parameters that can be specified multiple times.

## Parameters

- **`$name`** — Name of parameter
- **`$value`** — Value of parameter

## Return Values

Returns a SolrParam object on success and `false` on failure.
