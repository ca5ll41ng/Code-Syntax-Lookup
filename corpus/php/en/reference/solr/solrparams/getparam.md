---
id: "en-php-function-solrparams-getparam"
language: "php"
lang: "en"
category: "function"
name: "SolrParams::getParam"
title: "Returns a parameter value"
signature: "final public mixed SolrParams::getParam([string $param_name = ...])"
module: "solr"
source_url: "https://www.php.net/manual/en/solrparams.getparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a parameter value

## Description

```php
final public mixed SolrParams::getParam([string $param_name = ...])
```

Returns a parameter with name `$param_name`.

## Parameters

- **`$param_name`** — The name of the parameter.

## Return Values

Returns a `string` or an `array` depending on the type of the parameter.
