---
id: "en-php-function-solrdismaxquery-adduserfield"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::addUserField"
title: "Adds a field to User Fields Parameter (uf)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::addUserField(string $field)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.adduserfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a field to User Fields Parameter (uf)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::addUserField(string $field)
```

Adds a field to The User Fields Parameter (uf)

## Parameters

- **`$field`** — Field Name

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::addUserField()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery
->addUserField('cat')
->addUserField('text')
->addUserField('*_dt');

echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&uf=cat text *_dt

   
```

## See Also

 `SolrDisMaxQuery::removeUserField()` `SolrDisMaxQuery::setUserFields()`
