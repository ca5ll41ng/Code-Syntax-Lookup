---
id: "en-php-function-solrdismaxquery-useedismaxqueryparser"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::useEDisMaxQueryParser"
title: "Switch QueryParser to be EDisMax"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::useEDisMaxQueryParser()"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.useedismaxqueryparser.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Switch QueryParser to be EDisMax

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::useEDisMaxQueryParser()
```

Switch QueryParser to be EDisMax. By default the query builder uses edismax, if it was switched using `SolrDisMaxQuery::useDisMaxQueryParser()`, it can be switched back using this method.

## Parameters

This function has no parameters.

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::useEDisMaxQueryParser()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->useEDisMaxQueryParser();
echo $dismaxQuery;

?>

   
```

The above example will output something similar to:

```text


defType=edismax

   
```
