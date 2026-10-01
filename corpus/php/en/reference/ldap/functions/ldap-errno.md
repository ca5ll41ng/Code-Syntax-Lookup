---
id: "en-php-function-function-ldap-errno"
language: "php"
lang: "en"
category: "function"
name: "ldap_errno"
title: "Return the LDAP error number of the last LDAP command"
signature: "int ldap_errno(LDAP\\Connection $ldap)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the LDAP error number of the last LDAP command

## Description

```php
int ldap_errno(LDAP\Connection $ldap)
```

Returns the standardized error number returned by the last LDAP command. This number can be converted into a textual error message using `ldap_err2str()`.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.

## Return Values

Return the LDAP error number of the last LDAP command for this link.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |

## Examples

Unless you lower your warning level in your php.ini sufficiently or prefix your LDAP commands with @ (at) characters to suppress warning output, the errors generated will also show up in your HTML output.

**Generating and catching an error**

```php


<?php
// This example contains an error, which we will catch.
$ld = ldap_connect("localhost");
$bind = ldap_bind($ld);
// syntax error in filter expression (errno 87),
// must be "objectclass=*" to work.
$res =  @ldap_search($ld, "o=Myorg, c=DE", "objectclass");
if (!$res) {
    echo "LDAP-Errno: " . ldap_errno($ld) . "<br />\n";
    echo "LDAP-Error: " . ldap_error($ld) . "<br />\n";
    die("Argh!<br />\n");
}
$info = ldap_get_entries($ld, $res);
echo $info["count"] . " matching entries.<br />\n";
?>

    
```

## See Also

`ldap_err2str()` `ldap_error()`
