---
id: "en-php-function-function-ldap-sort"
language: "php"
lang: "en"
category: "function"
name: "ldap_sort"
title: "Sort LDAP result entries on the client side"
signature: "bool ldap_sort(resource $link, resource $result, string $sortfilter)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sort LDAP result entries on the client side

## Description

```php
bool ldap_sort(resource $link, resource $result, string $sortfilter)
```

Sort the result of a LDAP search, returned by `ldap_search()`.

As this function sorts the returned values on the client side it is possible that you might not get the expected results in case you reach the `$sizelimit` either of the server or defined within `ldap_search()`.

## Parameters

- **`$link`** — An LDAP resource, returned by `ldap_connect()`.
- **`$result`** — An search result identifier, returned by `ldap_search()`.
- **`$sortfilter`** — The attribute to use as a key in the sort.

## Return Values

No value is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been removed. |

## Examples

Sorting the result of a search.

**LDAP sort**

```php

     
     <?php
     // $ds is a valid link identifier (see ldap_connect)

     $dn        = 'ou=example,dc=org';
     $filter    = '(|(sn=Doe*)(givenname=John*))';
     $justthese = array('ou', 'sn', 'givenname', 'mail');

     $sr = ldap_search($ds, $dn, $filter, $justthese);

     // Sort
     ldap_sort($ds, $sr, 'sn');

     // Retrieving the data
     $info = ldap_get_entries($ds, $sr);
     
    
```
