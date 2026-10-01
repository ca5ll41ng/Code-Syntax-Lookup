---
id: "en-php-function-function-ldap-control-paged-result"
language: "php"
lang: "en"
category: "function"
name: "ldap_control_paged_result"
title: "Send LDAP pagination control"
signature: "bool ldap_control_paged_result(resource $link, int $pagesize, bool $iscritical = false, string $cookie = \"\")"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-control-paged-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send LDAP pagination control

## Description

```php
bool ldap_control_paged_result(resource $link, int $pagesize, bool $iscritical = false, string $cookie = "")
```

Enable LDAP pagination by sending the pagination control (page size, cookie...).

## Parameters

- **`$link`** — An LDAP resource, returned by `ldap_connect()`.
- **`$pagesize`** — The number of entries by page.
- **`$iscritical`** — Indicates whether the pagination is critical or not. If true and if the server doesn't support pagination, the search will return no result.
- **`$cookie`** — An opaque structure sent by the server (`ldap_control_paged_result_response()`).

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been removed. |
| 7.4.0 | This function has been deprecated. |

## Examples

The example below show the retrieval of the first page of a search paginated with one entry by page.

**LDAP pagination**

```php

     
     <?php
     // $ds is a valid link identifier (see ldap_connect)
     ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);

     $dn        = 'ou=example,dc=org';
     $filter    = '(|(sn=Doe*)(givenname=John*))';
     $justthese = array('ou', 'sn', 'givenname', 'mail');

     // enable pagination with a page size of 1.
     ldap_control_paged_result($ds, 1);

     $sr = ldap_search($ds, $dn, $filter, $justthese);

     $info = ldap_get_entries($ds, $sr);

     echo $info['count'] . ' entries returned' . PHP_EOL;
     
    
```

The example below show the retrieval of all the result paginated with 100 entries by page.

**LDAP pagination**

```php

     
     <?php
     // $ds is a valid link identifier (see ldap_connect)
     ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3);

     $dn        = 'ou=example,dc=org';
     $filter    = '(|(sn=Doe*)(givenname=John*))';
     $justthese = array('ou', 'sn', 'givenname', 'mail');

     // enable pagination with a page size of 100.
     $pageSize = 100;

     $cookie = '';
     do {
         ldap_control_paged_result($ds, $pageSize, true, $cookie);

         $result  = ldap_search($ds, $dn, $filter, $justthese);
         $entries = ldap_get_entries($ds, $result);
             
         foreach ($entries as $e) {
             echo $e['dn'] . PHP_EOL;
         }

         ldap_control_paged_result_response($ds, $result, $cookie);
       
     } while($cookie !== null && $cookie != '');
     
    
```

## Notes

> Pagination control is a LDAPv3 protocol feature.

## See Also

`ldap_control_paged_result_response()` [RFC2696 : LDAP Control Extension for Simple Paged Results Manipulation](2696)
