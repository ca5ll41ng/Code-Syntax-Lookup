---
id: "en-php-function-gearmanworker-setid"
language: "php"
lang: "en"
category: "function"
name: "GearmanWorker::setId"
title: "Give the worker an identifier so it can be tracked when asking gearmand for the list of available workers"
signature: "public bool GearmanWorker::setId(string $id)"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearmanworker.setid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Give the worker an identifier so it can be tracked when asking gearmand for the list of available workers

## Description

 {{{ 

```php
public bool GearmanWorker::setId(string $id)
```

Assigns the worker an identifier.

 }}} 

## Parameters

 {{{ 

- **`$id`** — A string identifier.

 }}} 

## Return Values

 {{{ 

Returns `true` on success or `false` on failure.

 }}} 

## Examples

 {{{ 

**`GearmanWorker::setId()` example**

 {{{ 

Set an identifier for a simple worker.

```php


<?php
$worker= new GearmanWorker();
$worker->setId('test');
?>

   
```

The above example will output something similar to:

```text


Run the following command:
gearadmin --workers

Output:
30 ::3a3a:3361:3361:3a33%976303667 - : test

   
```

 }}} 

 }}}
