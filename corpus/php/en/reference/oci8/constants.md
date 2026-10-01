---
id: "en-php-guide-oci8-constants"
language: "php"
lang: "en"
category: "guide"
name: "oci8.constants"
title: "Predefined Constants"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

| Constant | Description |
| --- | --- |
| `OCI_ASSOC` (`int`) | Used with `oci_fetch_all()` and `oci_fetch_array()` to get results as an associative array. |
| `OCI_BOTH` (`int`) | Used with `oci_fetch_all()` and `oci_fetch_array()` to get results as an array with both associative and number indices. |
| `OCI_COMMIT_ON_SUCCESS` (`int`) | Statement execution mode for `oci_execute()` call. Automatically commit changes when the statement has succeeded. |
| `OCI_CRED_EXT` (`int`) | Used with `oci_connect()` for using Oracles' External or OS authentication. |
| `OCI_DEFAULT` (`int`) | See `OCI_NO_AUTO_COMMIT`. |
| `OCI_DESCRIBE_ONLY` (`int`) | Statement execution mode for `oci_execute()`. Use this mode if you want meta data such as the column names but don't want to fetch rows from the query. |
| `OCI_EXACT_FETCH` (`int`) | Obsolete. Statement fetch mode. Used when the application knows in advance exactly how many rows it will be fetching. This mode turns prefetching off for Oracle release 8 or later mode. The cursor is canceled after the desired rows are fetched which may result in reduced server-side resource usage. |
| `OCI_FETCHSTATEMENT_BY_COLUMN` (`int`) | Default mode of `oci_fetch_all()`. |
| `OCI_FETCHSTATEMENT_BY_ROW` (`int`) | Alternative mode of `oci_fetch_all()`. |
| `OCI_LOB_BUFFER_FREE` (`int`) | Used with `ocilob.flush` to free buffers used. |
| `OCI_NO_AUTO_COMMIT` (`int`) | Statement execution mode for `oci_execute()`. The transaction is not automatically committed when using this mode. For readability in new code, use this value instead of the older, equivalent `OCI_DEFAULT` constant. |
| `OCI_NUM` (`int`) | Used with `oci_fetch_all()` and `oci_fetch_array()` to get results as an enumerated array. |
| `OCI_RETURN_LOBS` (`int`) | Used with `oci_fetch_array()` to get the data value of the LOB instead of the descriptor. |
| `OCI_RETURN_NULLS` (`int`) | Used with `oci_fetch_array()` to get empty array elements if the row items value is `null`. |
| `OCI_SEEK_CUR` (`int`) | Used with `ocilob.seek` to set the seek position. |
| `OCI_SEEK_END` (`int`) | Used with `ocilob.seek` to set the seek position. |
| `OCI_SEEK_SET` (`int`) | Used with `ocilob.seek` to set the seek position. |
| `OCI_SYSDATE` (`string`) | Obsolete. |
| `OCI_SYSDBA` (`int`) | Used with `oci_connect()` to connect with the SYSDBA privilege. The php.ini setting oci8.privileged_connect should be enabled to use this. |
| `OCI_SYSOPER` (`int`) | Used with `oci_connect()` to connect with the SYSOPER privilege. The php.ini setting oci8.privileged_connect should be enabled to use this. |
| `OCI_TEMP_BLOB` (`int`) | Used with `ocilob.writetemporary` to indicate that a temporary BLOB should be created. |
| `OCI_TEMP_CLOB` (`int`) | Used with `ocilob.writetemporary` to indicate that a temporary CLOB should be created. |

| Constant | Description |
| --- | --- |
| `OCI_B_BFILE` (`int`) | Used with `oci_bind_by_name()` when binding BFILEs. |
| `OCI_B_BIN` (`int`) | Used with `oci_bind_by_name()` to bind RAW values. |
| `OCI_B_BLOB` (`int`) | Used with `oci_bind_by_name()` when binding BLOBs. |
| `OCI_B_BOL` (`int`) | Used with `oci_bind_by_name()` to bind a PL/SQL BOOLEAN variable. |
| `OCI_B_CFILEE` (`int`) | Used with `oci_bind_by_name()` when binding CFILEs. |
| `OCI_B_CLOB` (`int`) | Used with `oci_bind_by_name()` when binding CLOBs. |
| `OCI_B_CURSOR` (`int`) | Used with `oci_bind_by_name()` when binding cursors, previously allocated with `oci_new_descriptor()`. |
| `OCI_B_INT` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of INTEGER. |
| `OCI_B_NTY` (`int`) | Used with `oci_bind_by_name()` when binding named data types. |
| `OCI_B_NUM` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of NUMBER. |
| `OCI_B_ROWID` (`int`) | Used with `oci_bind_by_name()` when binding ROWIDs. |
| `SQLT_AFC` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of CHAR. |
| `SQLT_AVC` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of VARCHAR2. |
| `SQLT_BDOUBLE` (`int`) | Not supported. |
| `SQLT_BFILEE` (`int`) | The same as `OCI_B_BFILE`. |
| `SQLT_BFLOAT` (`int`) | Not supported. |
| `SQLT_BIN` (`int`) | The same as `OCI_B_BIN`. |
| `SQLT_BLOB` (`int`) | The same as `OCI_B_BLOB`. |
| `SQLT_BOL` (`int`) | The same as `OCI_B_BOL`. |
| `SQLT_CFILEE` (`int`) | The same as `OCI_B_CFILEE`. |
| `SQLT_CHR` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of VARCHAR2. Also used with `oci_bind_by_name()`. |
| `SQLT_CLOB` (`int`) | The same as `OCI_B_CLOB`. |
| `SQLT_FLT` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of FLOAT. |
| `SQLT_INT` (`int`) | The same as `OCI_B_INT`. |
| `SQLT_LBI` (`int`) | Used with `oci_bind_by_name()` to bind LONG RAW values. |
| `SQLT_LNG` (`int`) | Used with `oci_bind_by_name()` to bind LONG values. |
| `SQLT_LVC` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of LONG VARCHAR. |
| `SQLT_NTY` (`int`) | The same as `OCI_B_NTY`. |
| `SQLT_NUM` (`int`) | The same as `OCI_B_NUM`. |
| `SQLT_ODT` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of LONG. |
| `SQLT_RDD` (`int`) | The same as `OCI_B_ROWID`. |
| `SQLT_RSET` (`int`) | The same as `OCI_B_CURSOR`. |
| `SQLT_STR` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of STRING. |
| `SQLT_UIN` (`int`) | Not supported. |
| `SQLT_VCS` (`int`) | Used with `oci_bind_array_by_name()` to bind arrays of VARCHAR. |

| Constant | Description |
| --- | --- |
| `OCI_DTYPE_FILE` (`int`) | This flag tells `oci_new_descriptor()` to initialize a new FILE descriptor. |
| `OCI_DTYPE_LOB` (`int`) | This flag tells `oci_new_descriptor()` to initialize a new LOB descriptor. |
| `OCI_DTYPE_ROWID` (`int`) | This flag tells `oci_new_descriptor()` to initialize a new ROWID descriptor. |
| `OCI_D_FILE` (`int`) | The same as `OCI_DTYPE_FILE`. |
| `OCI_D_LOB` (`int`) | The same as `OCI_DTYPE_LOB`. |
| `OCI_D_ROWID` (`int`) | The same as `OCI_DTYPE_ROWID`. |

- **`OCI_FO_ABORT` (`int`)** — Failover was unsuccessful and there is no option of retrying.
- **`OCI_FO_BEGIN` (`int`)** — Failover has detected a lost connection and failover is starting.
- **`OCI_FO_END` (`int`)** — Failover completed successfully.
- **`OCI_FO_ERROR` (`int`)** — Failover was unsuccessful but it gives the application the opportunity to handle the error and return `OCI_FO_RETRY` to retry failover.
- **`OCI_FO_NONE` (`int`)** — The user has not requested a failover type.
- **`OCI_FO_REAUTH` (`int`)** — An Oracle user has been re-authenticated.
- **`OCI_FO_RETRY` (`int`)** — The failover should be attempted again by Oracle. In case of an error while failing over to a new connection, TAF is able to retry the failover. Typically, the application code should sleep for a while before returning `OCI_FO_RETRY`.
- **`OCI_FO_SELECT` (`int`)** — The user has requested SELECT failover as well. It allows users with open cursors to continue fetching from them after failure.
- **`OCI_FO_SESSION` (`int`)** — The user has requested only session failover. For example, if a user's connection is lost, then a new session is automatically created for the user on the backup. This type of failover does not attempt to recover SELECTs.
- **`OCI_FO_TXNAL` (`int`)** — The user has requested a transaction failover.
