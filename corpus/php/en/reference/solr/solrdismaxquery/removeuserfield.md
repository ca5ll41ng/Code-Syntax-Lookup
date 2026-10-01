---
id: "en-php-function-solrdismaxquery-removeuserfield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::removeUserField"
title: "Removes a field from The User Fields Parameter (uf)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::removeUserField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.removeuserfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a field from The User Fields Parameter (uf)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::removeUserField(string $field)
```

Removes a field from The User Fields Parameter (uf)

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$field`** — Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::removeUserField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addUserField('cat')
->addUserField('text')
->addUserField('*_dt')
;
echo $dismaxQuery.PHP_EOL;

// remove field named 'text'
$dismaxQuery
->removeUserField('text');
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=%s&uf=cat text *_dt
q=lucene&defType=%s&uf=cat *_dt

   
```

## See Also

 `SolrDisMaxQuery::addUserField()` `SolrDisMaxQuery::setUserFields()`
