---
id: "en-php-function-rrdupdater-update"
language: "php"
lang: "en"
category: "function"
name: "RRDUpdater::update"
title: "Update the RRD database file"
signature: "public bool RRDUpdater::update(array $values, string $time = time())"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdupdater.update.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Update the RRD database file

## Description

```php
public bool RRDUpdater::update(array $values, string $time = time())
```

Updates the RRD file defined via `RRDUpdater::__construct()`. The file is updated with a specific values.

## Parameters

- **`$values`** — Data for update. Key is data source name.
- **`$time`** — Time value for updating the RRD with a particular data. Default value is current time.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

Throws a `Exception` on error.

## Examples

**`RRDUpdater::update()` examples**

```php


<?php
$updator = new RRDUpdater("speed.rrd");
//updates the data source "speed" with value "12411"
//for time defined by timestamp "920807700"
$updator->update(array("speed" => "12411"), "920807700");
?>

   
```
