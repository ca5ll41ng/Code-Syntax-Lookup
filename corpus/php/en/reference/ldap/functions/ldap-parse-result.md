---
id: "en-php-function-function-ldap-parse-result"
language: "php"
lang: "en"
category: "function"
name: "ldap_parse_result"
title: "Extract information from result"
signature: "bool ldap_parse_result(LDAP\\Connection $ldap, LDAP\\Result $result, int $error_code, string $matched_dn = null, string $error_message = null, array $referrals = null, array $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-parse-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extract information from result

## Description

```php
bool ldap_parse_result(LDAP\Connection $ldap, LDAP\Result $result, int $error_code, string $matched_dn = null, string $error_message = null, array $referrals = null, array $controls = null)
```

Parses an LDAP search result.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$result`** — An `LDAP\Result` instance, returned by `ldap_list()` or `ldap_search()`.
- **`$error_code`** — A reference to a variable that will be set to the LDAP error code in the result, or `0` if no error occurred.
- **`$matched_dn`** — A reference to a variable that will be set to a matched DN if one was recognised within the request, otherwise it will be set to `null`.
- **`$error_message`** — A reference to a variable that will be set to the LDAP error message in the result, or an empty string if no error occurred.
- **`$referrals`** — A reference to a variable that will be set to an `array` set to all of the referral strings in the result, or an empty array if no referrals were returned.
- **`$controls`** — An `array` of LDAP Controls which have been sent with the response.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$result` parameter expects an `LDAP\Result` instance now; previously, a valid `ldap result` `resource` was expected. |
| 7.3.0 | Support for `$controls` added |

## Examples

**`ldap_parse_result()` example**

```php

     
<?php
$result = ldap_search($ldap, "cn=userref,dc=my-domain,dc=com", "(cn=user*)");
$errcode = $dn = $errmsg = $refs =  null;
if (ldap_parse_result($ldap, $result, $errcode, $dn, $errmsg, $refs)) {
    // do something with $errcode, $dn, $errmsg and $refs
}
?>
     
    
```
