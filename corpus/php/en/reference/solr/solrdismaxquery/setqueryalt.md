---
id: "en-php-function-solrdismaxquery-setqueryalt"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setQueryAlt"
title: "Set Query Alternate (q.alt parameter)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setQueryAlt(string $q)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setqueryalt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set Query Alternate (q.alt parameter)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setQueryAlt(string $q)
```

Set Query Alternate (q.alt parameter)

When the main *q* parameter is not specified or is blank. The *q.alt* parameter is used

## Parameters

- **`$q`** — Query String

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setQueryAlt()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery();
$dismaxQuery->setQueryAlt('*:*');

?>

   
```

The above example will output something similar to:

```text


defType=edismax&q.alt=*:*&q=

   
```
