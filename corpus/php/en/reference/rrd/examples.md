---
id: "en-php-guide-rrd-examples"
language: "php"
lang: "en"
category: "guide"
name: "rrd.examples"
title: "Examples"
module: "rrd"
source_url: "https://www.php.net/manual/en/rrd.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Procedural PECL/rrd example

**Procedural usage of rrd**

```php


<?php
$rrdFile = dirname(__FILE__) . "/speed.rrd";

//create rrd file
rrd_create($rrdFile,
 array(
  "--start",920804400,
  "DS:speed:COUNTER:600:U:U",
  "RRA:AVERAGE:0.5:1:24",
  "RRA:AVERAGE:0.5:6:10"
  )
);

//update rrd file
rrd_update($rrdFile,
 array(
  "920804700:12345",
  "920805000:12357"
  )
);

//graph output
rrd_graph(dirname(__FILE__) . "/speed.png",
 array(
  "--start", "920804400",
  "--end", "920808000",
  "--vertical-label", "m/s",
  "DEF:myspeed=$rrdFile:speed:AVERAGE",
  "CDEF:realspeed=myspeed,1000,*",
  "LINE2:realspeed#FF0000"
 )
);
?>

   
```

## OOP PECL/rrd example

**OO usage of rrd**

```php


<?php
$rrdFile = dirname(__FILE__) . "/speed.rrd";
$outputPngFile = dirname(__FILE__) . "/speed.png";

$creator = new RRDCreator($rrdFile, "now -10d", 500);
$creator->addDataSource("speed:COUNTER:600:U:U");
$creator->addArchive("AVERAGE:0.5:1:24");
$creator->addArchive("AVERAGE:0.5:6:10");
$creator->save();

$updater = new RRDUpdater($rrdFile);
$updater->update(array("speed" => "12345"), "920804700");
$updater->update(array("speed" => "12357"), "920805000");

$graphObj = new RRDGraph($outputPngFile);
$graphObj->setOptions(
    array(
        "--start" => "920804400",
        "--end" => 920808000,
        "--vertical-label" => "m/s",
        "DEF:myspeed=$rrdFile:speed:AVERAGE",
        "CDEF:realspeed=myspeed,1000,*",
        "LINE2:realspeed#FF0000"
    )
);
$graphObj->save();
?>

   
```
