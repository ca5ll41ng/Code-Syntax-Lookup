---
id: "en-php-function-function-ldap-err2str"
language: "php"
lang: "en"
category: "function"
name: "ldap_err2str"
title: "Convert LDAP error number into string error message"
signature: "string ldap_err2str(int $errno)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-err2str.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert LDAP error number into string error message

## Description

```php
string ldap_err2str(int $errno)
```

Returns the string error message explaining the error number `$errno`. While LDAP errno numbers are standardized, different libraries return different or even localized textual error messages. Never check for a specific error message text, but always use an error number to check.

## Parameters

- **`$errno`** — The error number.

## Return Values

Returns the error message, as a string.

## Examples

**Enumerating all LDAP error messages**

```php


<?php
  for ($i=0; $i<100; $i++) {
    printf("Error $i: %s<br />\n", ldap_err2str($i));
  }
?>

    
```

## See Also

`ldap_errno()` `ldap_error()`
