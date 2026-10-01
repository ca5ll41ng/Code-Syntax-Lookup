---
id: "en-php-function-function-snmp-read-mib"
language: "php"
lang: "en"
category: "function"
name: "snmp_read_mib"
title: "Reads and parses a MIB file into the active MIB tree"
signature: "bool snmp_read_mib(string $filename)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp-read-mib.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads and parses a MIB file into the active MIB tree

## Description

```php
bool snmp_read_mib(string $filename)
```

This function is used to load additional, e.g. vendor specific, MIBs so that human readable OIDs like `VENDOR-MIB::foo.1` instead of error prone numeric OIDs can be used.

The order in which the MIBs are loaded does matter as the underlying Net-SNMP library will print warnings if referenced objects cannot be resolved.

## Parameters

- **`$filename`** — The filename of the MIB.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Using `snmp_read_mib()`**

```php


<?php
 print_r( snmprealwalk('localhost', 'public', '.1.3.6.1.2.1.2.3.4.5') );

 snmp_read_mib('./FOO-BAR-MIB.txt');
 print_r( snmprealwalk('localhost', 'public', 'FOO-BAR-MIB::someTable') );
?>

   
```

The above example is made up but the results would look like: Array ( [iso.3.6.1.2.1.2.3.4.5.0] => Gauge32: 6 ) Array ( [FOO-BAR-MIB::someTable.0] => Gauge32: 6 )
