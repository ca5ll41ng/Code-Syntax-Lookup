---
id: "en-php-function-function-ldap-count-entries"
language: "php"
lang: "en"
category: "function"
name: "ldap_count_entries"
title: "Count the number of entries in a search"
signature: "int ldap_count_entries(LDAP\\Connection $ldap, LDAP\\Result $result)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-count-entries.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Count the number of entries in a search

## Description

```php
int ldap_count_entries(LDAP\Connection $ldap, LDAP\Result $result)
```

Returns the number of entries stored in the result of previous search operations.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$result`** — An `LDAP\Result` instance, returned by `ldap_list()` or `ldap_search()`.

## Return Values

Returns the number of entries in the result, or `-1` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$result` parameter expects an `LDAP\Result` instance now; previously, a valid `ldap result` `resource` was expected. |

## Examples

**`ldap_count_entries()` example**

Retrieve number of entries in the result.

```php

     
     // $ds is a valid LDAP\Connection instance for a directory server

     $dn        = 'ou=example,dc=org';
     $filter    = '(|(sn=Doe*)(givenname=John*))';
     $justthese = array('ou', 'sn', 'givenname', 'mail');

     $sr = ldap_search($ds, $dn, $filter, $justthese);

     var_dump(ldap_count_entries($ds, $sr));
     
    
```

The above example will output something similar to:

```text

     
     int(1)
     
    
```
