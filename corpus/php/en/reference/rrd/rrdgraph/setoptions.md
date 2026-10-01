---
id: "en-php-function-rrdgraph-setoptions"
language: "php"
lang: "en"
category: "function"
name: "RRDGraph::setOptions"
title: "Sets the options for rrd graph export"
signature: "public void RRDGraph::setOptions(array $options)"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrdgraph.setoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the options for rrd graph export

## Description

```php
public void RRDGraph::setOptions(array $options)
```

## Parameters

- **`$options`** — List of options for the image generation from the RRD database file. It can be list of strings or list of strings with keys for better readability. Read the rrd graph man pages for list of available options.

## Return Values

No value is returned.

## Examples

**`RRDGraph::setOptions()` example**

```php


<?php
$graphObj->setOptions(array(
    "--start" => "920804400",
    "--end" => 920808000,
    "--vertical-label" => "m/s",
    "DEF:myspeed=$rrdFile:speed:AVERAGE",
    "CDEF:realspeed=myspeed,1000,*",
    "LINE2:realspeed#FF0000"
));
?>

    
```

**Set multiple color options**

```php


<?php
$graphObj->setOptions(array(
    "--start" => "920804400",
    "--end" => 920808000,
    "--vertical-label" => "m/s",
    "--color=BACK#00000000",
    "--color=GRID#00000000",
    "--color=MGRID#00000000",
    "DEF:myspeed=$rrdFile:speed:AVERAGE",
    "CDEF:realspeed=myspeed,1000,*",
    "LINE2:realspeed#FF0000"
));
?>

    
```

Don't use key value syntax for same rrd option. It looks more readable, but it doesn't work.

```php


<?php
$graphObj->setOptions(array(
    "--color" => "BACK#00000000",
    "--color" => "GRID#00000000",
    "--color" => "MGRID#00000000"
));
?>

    
```

In nature of php it's same as

```php


<?php
$graphObj->setOptions(array(
    "--color" => "MGRID#00000000"
));
?>

    
```
