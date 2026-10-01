---
id: "en-php-function-rrdcreator-addarchive"
language: "php"
lang: "en"
category: "function"
name: "RRDCreator::addArchive"
title: "Adds RRA - archive of data values for each data source"
signature: "public void RRDCreator::addArchive(string $description)"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdcreator.addarchive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds RRA - archive of data values for each data source

## Description

```php
public void RRDCreator::addArchive(string $description)
```

Adds RRA definition by description of archive. Archive consists of a number of data values or statistics for each of the defined data-sources (DS). Data sources are defined by method `RRDCreator::addDataSource()`. You need call this method for each requested archive.

## Parameters

- **`$description`** — Definition of archive - RRA. This has same format as RRA definition in rrd create command. See man page of rrd create for more details.

## Return Values

No value is returned.
