---
id: "en-php-guide-pdo-ibm-configuration"
language: "php"
lang: "en"
category: "guide"
name: "pdo-ibm.configuration"
title: "Runtime Configuration"
module: "pdo_ibm"
source_url: "https://www.php.net/manual/en/pdo-ibm.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| pdo_ibm.i5_dbcs_alloc | "0" | `INI_SYSTEM` | Added in PDO_IBM 1.5.0 |
| pdo_ibm.i5_override_ccsid | "0" | `INI_SYSTEM` | Added in PDO_IBM 1.5.0 |

For further details and definitions of the INI_* modes, see the `configuration.changes.modes`.

Here's a short explanation of the configuration directives.

- **`$pdo_ibm.i5_dbcs_alloc` `int`** — This options affects the internal buffer allocation strategy on IBM i. By default, this option is 0. When this option is set, buffers are allocated with a much larger size, in case the database is misleading about character size when converting between encodings. This option uses six times as much memory for buffers (to account for the largest possible UTF-8 sequences), but may be needed if truncated data is returned. - 0 - Minimum size buffers are allocated. - 1 - Larger size buffers are allocated.
- **`$pdo_ibm.i5_override_ccsid` `int`** — The ASCII CCSID to use for conversion from EBCDIC on IBM i. Setting this to 1208 will use UTF-8. By default, this is 0, which will select the default ASCII job CCSID. — To learn more about CCSIDs on IBM i, consult the [IBM documentation]().
