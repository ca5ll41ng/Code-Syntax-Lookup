---
id: "en-php-function-snmp-close"
language: "php"
lang: "en"
category: "function"
name: "SNMP::close"
title: "Close SNMP session"
signature: "public bool SNMP::close()"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close SNMP session

## Description

```php
public bool SNMP::close()
```

Frees previously allocated SNMP session object.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SNMP::close()` example**

```php


<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  # ...
  # get, walk, etc goes here
  # ...
  $session->close();
?>

   
```

## See Also

 `SNMP::__construct()`
