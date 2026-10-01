---
id: "en-php-function-snmp-setsecurity"
language: "php"
lang: "en"
category: "function"
name: "SNMP::setSecurity"
title: "Configures security-related SNMPv3 session parameters"
signature: "public bool SNMP::setSecurity(string $securityLevel, string $authProtocol = \"\", string $authPassphrase = \"\", string $privacyProtocol = \"\", string $privacyPassphrase = \"\", string $contextName = \"\", string $contextEngineId = \"\")"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.setsecurity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Configures security-related SNMPv3 session parameters

## Description

```php
public bool SNMP::setSecurity(string $securityLevel, string $authProtocol = "", string $authPassphrase = "", string $privacyProtocol = "", string $privacyPassphrase = "", string $contextName = "", string $contextEngineId = "")
```

setSecurity configures security-related session parameters used in SNMP protocol version 3

## Parameters

- **`$securityLevel`** — The security level: `"noAuthNoPriv"`, `"authNoPriv"`, or `"authPriv"`.
- **`$authProtocol`** — The authentication protocol: `"MD5"`, `"SHA"`, `"SHA256"`, or `"SHA512"`.
- **`$authPassphrase`** — The authentication passphrase.
- **`$privacyProtocol`** — The privacy protocol: `"DES"`, or `"AES"`, also accepted as `"AES128"`. `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` are accepted when supported by the Net-SNMP library.
- **`$privacyPassphrase`** — The privacy passphrase.
- **`$contextName`** — the context name
- **`$contextEngineId`** — the context EngineID

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.6.0 | The privacy protocol now accepts `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` when supported by the Net-SNMP library. |
| 8.1.0 | The authentication protocol now accepts `"SHA256"` and `"SHA512"` when supported by the Net-SNMP library. |

## Examples

**`SNMP::setSecurity()` example**

```php


<?php
  $session = new SNMP(SNMP::VERSION_3, $hostname, $rwuser, $timeout, $retries);
  $session->setSecurity('authPriv', 'MD5', $auth_pass, 'AES', $priv_pass, '', 'aeeeff');
?>

   
```

## See Also

 `SNMP::__construct()`
