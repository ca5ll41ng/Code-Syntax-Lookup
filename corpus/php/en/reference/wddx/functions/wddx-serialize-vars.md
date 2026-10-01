---
id: "en-php-function-function-wddx-serialize-vars"
language: "php"
lang: "en"
category: "function"
name: "wddx_serialize_vars"
title: "Serialize variables into a WDDX packet"
signature: "string wddx_serialize_vars(mixed $var_name, mixed $var_names)"
module: "wddx"
source_url: "https://www.php.net/manual/en/function.wddx-serialize-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serialize variables into a WDDX packet

## Description

```php
string wddx_serialize_vars(mixed $var_name, mixed $var_names)
```

Creates a WDDX packet with a structure that contains the serialized representation of the passed variables.

## Parameters

This function takes a variable number of parameters.

- **`$var_name`** — Can be either a string naming a variable or an array containing strings naming the variables or another array, etc.
- **`$var_names`**

## Return Values

Returns the WDDX packet, or `false` on error.

## Examples

**`wddx_serialize_vars()` example**

```php


<?php
$a = 1;
$b = 5.5;
$c = array("blue", "orange", "violet");
$d = "colors";

$clvars = array("c", "d");
echo wddx_serialize_vars("a", "b", $clvars);
?>

    
```

The above example will output:

```text


<wddxPacket version='1.0'><header/><data><struct><var name='a'><number>1</number></var>
<var name='b'><number>5.5</number></var><var name='c'><array length='3'>
<string>blue</string><string>orange</string><string>violet</string></array></var>
<var name='d'><string>colors</string></var></struct></data></wddxPacket>

    
```
