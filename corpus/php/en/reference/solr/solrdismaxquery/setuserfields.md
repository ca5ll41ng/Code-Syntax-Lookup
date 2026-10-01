---
id: "en-php-function-solrdismaxquery-setuserfields"
language: "php"
lang: "en"
category: "function"
name: "SolrDisMaxQuery::setUserFields"
title: "Sets User Fields parameter (uf)"
signature: "public SolrDisMaxQuery SolrDisMaxQuery::setUserFields(string $fields)"
module: "solr"
source_url: "https://www.php.net/manual/en/solrdismaxquery.setuserfields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets User Fields parameter (uf)

## Description

```php
public SolrDisMaxQuery SolrDisMaxQuery::setUserFields(string $fields)
```

Sets User Fields parameter (uf)

User Fields: Specifies which schema fields the end user shall be allowed to query.

## Parameters

- **`$fields`** — Fields names separated by space — This parameter supports wildcards.

## Return Values

`SolrDisMaxQuery`

## Examples

**`SolrDisMaxQuery::setUserFields()` example**

```php


<?php

$dismaxQuery = new SolrDisMaxQuery('lucene');
$dismaxQuery->setUserFields('field1 field2 *_txt');
echo $dismaxQuery.PHP_EOL;

?>

   
```

The above example will output something similar to:

```text


q=lucene&defType=edismax&uf=field1 field2 *_txt

   
```

## See Also

 `SolrDisMaxQuery::addUserField()` `SolrDisMaxQuery::removeUserField()`
