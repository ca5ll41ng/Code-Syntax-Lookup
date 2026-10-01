---
id: "en-php-guide-oci8-datatypes"
language: "php"
lang: "en"
category: "guide"
name: "oci8.datatypes"
title: "Supported Datatypes"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.datatypes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Supported Datatypes

| Type | Mapping |
| --- | --- |
| `SQLT_NTY` | Maps a native collection type from a PHP collection object, such as those created by `oci_new_collection()`. |
| `SQLT_BFILEE` | Maps a native descriptor, such as those created by `oci_new_descriptor()`. |
| `SQLT_CFILEE` | Maps a native descriptor, such as those created by `oci_new_descriptor()`. |
| `SQLT_CLOB` | Maps a native descriptor, such as those created by `oci_new_descriptor()`. |
| `SQLT_BLOB` | Maps a native descriptor, such as those created by `oci_new_descriptor()`. |
| `SQLT_RDD` | Maps a native descriptor, such as those created by `oci_new_descriptor()`. |
| `SQLT_NUM` | Converts the PHP parameter to a 'C' long type, and binds to that value. |
| `SQLT_RSET` | Maps a native statement handle, such as those created by `oci_parse()` or those retrieved from other OCI queries. |
| `SQLT_BOL` | Bind the PHP parameter to a PL/SQL BOOLEAN |
| `SQLT_CHR` and any other type | Converts the PHP parameter to a string type and binds as a string. |

| Type | Mapping |
| --- | --- |
| `SQLT_RSET` | Creates an oci statement resource to represent the cursor. |
| `SQLT_RDD` | Creates a ROWID object. |
| `SQLT_BLOB` | Creates a LOB object. |
| `SQLT_CLOB` | Creates a LOB object. |
| `SQLT_BFILE` | Creates a LOB object. |
| `SQLT_LNG` | Bound as SQLT_CHR, returned as a string |
| `SQLT_LBI` | Bound as `SQLT_BIN`, returned as a string |
| Any other type | Bound as `SQLT_CHR`, returned as a string |
