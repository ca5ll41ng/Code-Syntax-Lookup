---
id: "en-php-function-rrdgraph-save"
language: "php"
lang: "en"
category: "function"
name: "RRDGraph::save"
title: "Saves the result of query into image"
signature: "public array RRDGraph::save()"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdgraph.save.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Saves the result of query into image

## Description

```php
public array RRDGraph::save()
```

Saves the result of RRD database query into image defined by `RRDGraph::__construct()`.

## Parameters

This function has no parameters.

## Return Values

Returns array with information about generated image, or `false` on failure.
