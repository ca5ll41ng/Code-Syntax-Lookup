---
id: "en-php-function-rrdcreator-adddatasource"
language: "php"
lang: "en"
category: "function"
name: "RRDCreator::addDataSource"
title: "Adds data source definition for RRD database"
signature: "public void RRDCreator::addDataSource(string $description)"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdcreator.adddatasource.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds data source definition for RRD database

## Description

```php
public void RRDCreator::addDataSource(string $description)
```

RRD can accept input from several data sources (DS), e.g incoming and outgoing traffic. This method adds data source by description. You need call this method for each data source.

## Parameters

- **`$description`** — Definition of data source - DS. This has same format as DS definition in rrd create command. See man page of rrd create for more details.

## Return Values

No value is returned.
