---
id: "en-php-function-function-odbc-binmode"
language: "php"
lang: "en"
category: "function"
name: "odbc_binmode"
title: "Handling of binary column data"
signature: "true odbc_binmode(Odbc\\Result $statement, int $mode)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-binmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Handling of binary column data

## Description

```php
true odbc_binmode(Odbc\Result $statement, int $mode)
```

Controls handling of binary column data. ODBC SQL types affected are `BINARY`, `VARBINARY`, and `LONGVARBINARY`. The default mode can be set using the uodbc.defaultbinmode php.ini directive.

When binary SQL data is converted to character C data (`ODBC_BINMODE_CONVERT`), each byte (8 bits) of source data is represented as two ASCII characters. These characters are the ASCII character representation of the number in its hexadecimal form. For example, a binary `00000001` is converted to `"01"` and a binary `11111111` is converted to `"FF"`.

While the handling of `BINARY` and `VARBINARY` columns only depend on the binmode, the handling of `LONGVARBINARY` columns also depends on the longreadlen as well:

| binmode | longreadlen | result |
| --- | --- | --- |
| `ODBC_BINMODE_PASSTHRU` | 0 | passthru |
| `ODBC_BINMODE_RETURN` | 0 | passthru |
| `ODBC_BINMODE_CONVERT` | 0 | passthru |
| `ODBC_BINMODE_PASSTHRU` | >0 | passthru |
| `ODBC_BINMODE_RETURN` | >0 | return as is |
| `ODBC_BINMODE_CONVERT` | >0 | return as char |

If `odbc_fetch_into()` is used, passthru means that an empty string is returned for these columns. If `odbc_result()` is used, passthru means that the data are sent directly to the client (i.e. printed).

## Parameters

- **`$statement`** — The ODBC result object.
- **`$mode`** — Possible values for `$mode` are: - `ODBC_BINMODE_PASSTHRU`: Passthru BINARY data - `ODBC_BINMODE_RETURN`: Return as is - `ODBC_BINMODE_CONVERT`: Convert to char and return > Handling of binary long columns is also affected by `odbc_longreadlen()`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
