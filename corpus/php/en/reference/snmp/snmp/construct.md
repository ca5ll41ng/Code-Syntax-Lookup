---
id: "en-php-function-snmp-construct"
language: "php"
lang: "en"
category: "function"
name: "SNMP::__construct"
title: "Creates SNMP instance representing session to remote SNMP agent"
signature: "public SNMP::__construct(int $version, string $hostname, string $community, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates SNMP instance representing session to remote SNMP agent

## Description

```php
public SNMP::__construct(int $version, string $hostname, string $community, int $timeout = -1, int $retries = -1)
```

Creates SNMP instance representing session to remote SNMP agent.

## Parameters

- **`$version`** — SNMP protocol version: `SNMP::VERSION_1`, `SNMP::VERSION_2C`, `SNMP::VERSION_3`.
- **`$hostname`** — The SNMP agent. `$hostname` may be suffixed with optional SNMP agent port after colon. IPv6 addresses must be enclosed in square brackets if used with port. If FQDN is used for `$hostname` it will be resolved by PHP SNMP extension, not by Net-SNMP engine. Usage of IPv6 addresses when specifying FQDN may be forced by enclosing FQDN into square brackets. Here are some examples: | IPv4 with default port | 127.0.0.1 | | --- | --- | | IPv6 with default port | ::1 or [::1] | | IPv4 with specific port | 127.0.0.1:1161 | | IPv6 with specific port | [::1]:1161 | | FQDN with default port | host.domain | | FQDN with specific port | host.domain:1161 | | FQDN with default port, force usage of IPv6 address | [host.domain] | | FQDN with specific port, force usage of IPv6 address | [host.domain]:1161 |
- **`$community`** — The community string, or, for `SNMP::VERSION_3`, the security name. The purpose of the `$community` access string is SNMP version specific:
  | `SNMP::VERSION_1` | `public` for read-only permission or `private` for read-write |
  | --- | --- |
  | `SNMP::VERSION_2C` | `public` for read-only permission or `private` for read-write |
  | `SNMP::VERSION_3` | The security name, usually some kind of username. |

 — SNMPv3 requires to configure security-related session parameters with the `SNMP::setSecurity()` method.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of retries in case timeout occurs.

## Errors/Exceptions

`SNMP::__construct()` throws an exception when parameters count or types are wrong or unknown SNMP protocol version specified.

## Examples

**Fetching the physical location of the host**

```php


<?php

$session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
$sysdescr = $session->get("sysDescr.0");
echo "$sysdescr\n";

?>

   
```

The above example will output something similar to:

```text


STRING: Test server

   
```

## See Also

 `SNMP::close()`
