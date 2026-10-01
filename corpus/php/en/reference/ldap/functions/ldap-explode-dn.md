---
id: "en-php-function-function-ldap-explode-dn"
language: "php"
lang: "en"
category: "function"
name: "ldap_explode_dn"
title: "Splits DN into its component parts"
signature: "array|false ldap_explode_dn(string $dn, int $with_attrib)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-explode-dn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Splits DN into its component parts

## Description

```php
array|false ldap_explode_dn(string $dn, int $with_attrib)
```

Splits the DN returned by `ldap_get_dn()` and breaks it up into its component parts. Each part is known as Relative Distinguished Name, or RDN.

## Parameters

- **`$dn`** — The distinguished name of an LDAP entity.
- **`$with_attrib`** — Used to request if the RDNs are returned with only values or their attributes as well. To get RDNs with the attributes (i.e. in attribute=value format) set `$with_attrib` to 0 and to get only values set it to 1.

## Return Values

Returns an array of all DN components, or `false` on failure. The first element in the array has `count` key and represents the number of returned values, next elements are numerically indexed DN components.
