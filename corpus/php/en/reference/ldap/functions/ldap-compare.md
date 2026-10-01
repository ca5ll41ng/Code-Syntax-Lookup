---
id: "en-php-function-function-ldap-compare"
language: "php"
lang: "en"
category: "function"
name: "ldap_compare"
title: "Compare value of attribute found in entry specified with DN"
signature: "bool|int ldap_compare(LDAP\\Connection $ldap, string $dn, string $attribute, string $value, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare value of attribute found in entry specified with DN

## Description

```php
bool|int ldap_compare(LDAP\Connection $ldap, string $dn, string $attribute, string $value, array|null $controls = null)
```

Compare `$value` of `$attribute` with value of same attribute in an LDAP directory entry.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — The distinguished name of an LDAP entity.
- **`$attribute`** — The attribute name.
- **`$value`** — The compared value.
- **`$controls`** — Array of LDAP Controls to send with the request.

## Return Values

Returns `true` if `$value` matches otherwise returns `false`. Returns -1 on error.

> Both `true` and `-1` are truthy, so a plain truth test such as if (ldap_compare(...)) treats an error as a match. The result must be compared strictly against `true`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |
| 7.3.0 | Support for `$controls` added |

## Examples

The following example demonstrates how to check whether or not given password matches the one defined in DN specified entry.

**Complete example of password check**

```php


<?php

$ds=ldap_connect("localhost");  // assuming the LDAP server is on this host

if ($ds) {

    // bind
    if (ldap_bind($ds)) {

        // prepare data
        $dn = "cn=Matti Meikku, ou=My Unit, o=My Company, c=FI";
        $value = "secretpassword";
        $attr = "password";

        // compare value
        $r=ldap_compare($ds, $dn, $attr, $value);

        if ($r === -1) {
            echo "Error: " . ldap_error($ds);
        } elseif ($r === true) {
            echo "Password correct.";
        } elseif ($r === false) {
            echo "Wrong guess! Password incorrect.";
        }

    } else {
        echo "Unable to bind to LDAP server.";
    }

    ldap_close($ds);

} else {
    echo "Unable to connect to LDAP server.";
}
?>


    
```

## Notes

> `ldap_compare()` can NOT be used to compare BINARY values!
