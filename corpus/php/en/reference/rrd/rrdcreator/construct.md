---
id: "en-php-function-rrdcreator-construct"
language: "php"
lang: "en"
category: "function"
name: "RRDCreator::__construct"
title: "Creates new `RRDCreator` instance"
signature: "public RRDCreator::__construct(string $path, [string $startTime = ...], int $step = 0)"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdcreator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates new `RRDCreator` instance

## Description

```php
public RRDCreator::__construct(string $path, [string $startTime = ...], int $step = 0)
```

Creates new `RRDCreator` instance.

## Parameters

- **`$path`** — Path for newly created RRD database file.
- **`$startTime`** — Time for the first value in RRD database. Parameter supports all formats which are supported by rrd create call.
- **int`$step`** — Base interval in seconds with which data will be fed into the RRD database.
