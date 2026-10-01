---
id: "en-php-guide-ibm-db2-constants"
language: "php"
lang: "en"
category: "guide"
name: "ibm-db2.constants"
title: "Predefined Constants"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/ibm-db2.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`DB2_BINARY` (`int`)** — Specifies that binary data shall be returned as is. This is the default mode.
- **`DB2_CONVERT` (`int`)** — Specifies that binary data shall be converted to a hexadecimal encoding and returned as an ASCII string.
- **`DB2_PASSTHRU` (`int`)** — Specifies that binary data shall be converted to a `null` value.
- **`DB2_SCROLLABLE` (`int`)** — Specifies a scrollable cursor for a statement resource. This mode enables random access to rows in a result set, but currently is supported only by IBM DB2 Universal Database.
- **`DB2_FORWARD_ONLY` (`int`)** — Specifies a forward-only cursor for a statement resource. This is the default cursor type and is supported on all database servers.
- **`DB2_PARAM_IN` (`int`)** — Specifies the PHP variable should be bound as an IN parameter for a stored procedure.
- **`DB2_PARAM_OUT` (`int`)** — Specifies the PHP variable should be bound as an OUT parameter for a stored procedure.
- **`DB2_PARAM_INOUT` (`int`)** — Specifies the PHP variable should be bound as an INOUT parameter for a stored procedure.
- **`DB2_PARAM_FILE` (`int`)** — Specifies that the column should be bound directly to a file for input.
- **`DB2_AUTOCOMMIT_ON` (`int`)** — Specifies that autocommit should be turned on.
- **`DB2_AUTOCOMMIT_OFF` (`int`)** — Specifies that autocommit should be turned off.
- **`DB2_DOUBLE` (`int`)** — Specifies that the variable should be bound as a DOUBLE, FLOAT, or REAL data type.
- **`DB2_LONG` (`int`)** — Specifies that the variable should be bound as a SMALLINT, INTEGER, or BIGINT data type.
- **`DB2_CHAR` (`int`)** — Specifies that the variable should be bound as a CHAR or VARCHAR data type.
- **`DB2_CASE_NATURAL` (`int`)** — Specifies that column names will be returned in their natural case.
- **`DB2_CASE_LOWER` (`int`)** — Specifies that column names will be returned in lower case.
- **`DB2_CASE_UPPER` (`int`)** — Specifies that column names will be returned in upper case.
- **`DB2_DEFERRED_PREPARE_ON` (`int`)** — Specifies that deferred prepare should be turned on for the specified statement resource.
- **`DB2_DEFERRED_PREPARE_OFF` (`int`)** — Specifies that deferred prepare should be turned off for the specified statement resource.
