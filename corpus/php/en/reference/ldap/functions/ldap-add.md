---
id: "en-php-function-function-ldap-add"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["ldap_injection"],"cwe":["CWE-90"],"params":[3]}
name: "ldap_add"
title: "Add entries to LDAP directory"
signature: "bool ldap_add(LDAP\\Connection $ldap, string $dn, array $entry, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add entries to LDAP directory

## Description

```php
bool ldap_add(LDAP\Connection $ldap, string $dn, array $entry, array|null $controls = null)
```

Add entries in the LDAP directory.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — The distinguished name of an LDAP entity.
- **`$entry`** — An array that specifies the information about the entry. The values in the entries are indexed by individual attributes. In case of multiple values for an attribute, they are indexed using integers starting with 0. ```php <?php $entry["attribute1"] = "value"; $entry["attribute2"][0] = "value1"; $entry["attribute2"][1] = "value2"; ?> ```
- **`$controls`** — Array of LDAP Controls to send with the request.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |
| 7.3.0 | Support for `$controls` added |

## Examples

**Complete example with authenticated bind**

```php


<?php
$ds = ldap_connect("localhost");  // assuming the LDAP server is on this host

if ($ds) {
    // bind with appropriate dn to give update access
    $r = ldap_bind($ds, "cn=root, o=My Company, c=US", "secret");

    // prepare data
    $info["cn"] = "John Jones";
    $info["sn"] = "Jones";
    $info["objectclass"] = "person";

    // add data to directory
    $r = ldap_add($ds, "cn=John Jones, o=My Company, c=US", $info);

    ldap_close($ds);
} else {
    echo "Unable to connect to LDAP server";
}
?>

    
```

## Notes

> This function is binary-safe.

## See Also

`ldap_add_ext()` `ldap_delete()`
