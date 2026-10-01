---
id: "en-php-function-rrdgraph-saveverbose"
language: "php"
lang: "en"
category: "function"
name: "RRDGraph::saveVerbose"
title: "Saves the RRD database query into image and returns the verbose information about generated graph"
signature: "public array RRDGraph::saveVerbose()"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdgraph.saveverbose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Saves the RRD database query into image and returns the verbose information about generated graph

## Description

```php
public array RRDGraph::saveVerbose()
```

Saves the RRD database query into image file defined by method `RRDGraph::__construct()` and returns the verbose information about generated graph, if "-" is used as image filename, image data are also returned in result array.

## Parameters

This function has no parameters.

## Return Values

Returns array with detailed information about generated image, or `false` on failure.
