---
id: "en-php-guide-wddx-examples"
language: "php"
lang: "en"
category: "guide"
name: "wddx.examples"
title: "Examples"
module: "wddx"
source_url: "https://www.php.net/manual/en/wddx.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## wddx examples

All the functions that serialize variables use the first element of an array to determine whether the array is to be serialized into an array or structure. If the first element has string key, then it is serialized into a structure, otherwise, into an array.

**Serializing a single value with WDDX**

```php


<?php
echo wddx_serialize_value("PHP to WDDX packet example", "PHP packet");
?>

   
```

This example will produce:

```text


<wddxPacket version='1.0'><header comment='PHP packet'/><data>
<string>PHP to WDDX packet example</string></data></wddxPacket>

   
```

**Using incremental packets with WDDX**

```php


<?php
$pi = 3.1415926;
$packet_id = wddx_packet_start("PHP");
wddx_add_vars($packet_id, "pi");

/* Suppose $cities came from database */
$cities = array("Austin", "Novato", "Seattle");
wddx_add_vars($packet_id, "cities");

$packet = wddx_packet_end($packet_id);
echo $packet;
?>

   
```

This example will produce:

```text


<wddxPacket version='1.0'><header comment='PHP'/><data><struct>
<var name='pi'><number>3.1415926</number></var><var name='cities'>
<array length='3'><string>Austin</string><string>Novato</string>
<string>Seattle</string></array></var></struct></data></wddxPacket>

   
```

> Strings should be encoded in UTF-8; to handle other encodings, convert the string first using `mb_convert_encoding()`, `UConverter::transcode()`, or `iconv()`.
