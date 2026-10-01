---
id: "en-php-function-solrparams-setparam"
language: "php"
lang: "en"
category: "function"
name: "SolrParams::setParam"
title: "Sets the parameter to the specified value"
signature: "public SolrParams SolrParams::setParam(string $name, string $value)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrparams.setparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the parameter to the specified value

## Description

```php
public SolrParams SolrParams::setParam(string $name, string $value)
```

Sets the query parameter to the specified value. This is used for parameters that can only be specified once. Subsequent calls with the same parameter name will override the existing value

## Parameters

- **`$name`** — Name of the parameter
- **`$value`** — Value of the parameter

## Return Values

Returns a SolrParam object on success and `false` on value.

## Examples

**`SolrParams::setParam()` example**

```php


<?php

$param = new SolrParams();

$param->setParam('q', 'solr')->setParam('rows', 2);

?>

    
```

The above example will output something similar to:

```text





    
```
