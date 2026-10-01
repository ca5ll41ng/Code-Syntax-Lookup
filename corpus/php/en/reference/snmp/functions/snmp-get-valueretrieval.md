---
id: "en-php-function-function-snmp-get-valueretrieval"
language: "php"
lang: "en"
category: "function"
name: "snmp_get_valueretrieval"
title: "Return the method how the SNMP values will be returned"
signature: "int snmp_get_valueretrieval()"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp-get-valueretrieval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the method how the SNMP values will be returned

## Description

```php
int snmp_get_valueretrieval()
```

## Parameters

This function has no parameters.

## Return Values

OR-ed combitantion of constants ( `SNMP_VALUE_LIBRARY` or `SNMP_VALUE_PLAIN` ) with possible SNMP_VALUE_OBJECT set.

## Examples

**Using `snmp_get_valueretrieval()`**

```php


<?php
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 if (snmp_get_valueretrieval() & SNMP_VALUE_OBJECT) {
   echo $ret->value;
 } else {
   echo $ret;
 }
?>

   
```

## See Also

  `snmp_set_valueretrieval()`  `snmp.constants`
