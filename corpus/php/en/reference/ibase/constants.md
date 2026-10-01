---
id: "en-php-guide-ibase-constants"
language: "php"
lang: "en"
category: "guide"
name: "ibase.constants"
title: "Predefined Constants"
module: "ibase"
source_url: "https://www.php.net/manual/en/ibase.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

The following constants can be passed to `ibase_trans()` to specify transaction behaviour.

| Constant | Description |
| --- | --- |
| IBASE_DEFAULT | The default transaction settings are to be used. This default is determined by the client library, which defines it as IBASE_WRITE\|IBASE_CONCURRENCY\|IBASE_WAIT in most cases. |
| IBASE_READ | Starts a read-only transaction. |
| IBASE_WRITE | Starts a read-write transaction. |
| IBASE_CONSISTENCY | Starts a transaction with the isolation level set to 'consistency', which means the transaction cannot read from tables that are being modified by other concurrent transactions. |
| IBASE_CONCURRENCY | Starts a transaction with the isolation level set to 'concurrency' (or 'snapshot'), which means the transaction has access to all tables, but cannot see changes that were committed by other transactions after the transaction was started. |
| IBASE_COMMITTED | Starts a transaction with the isolation level set to 'read committed'. This flag should be combined with either `IBASE_REC_VERSION` or `IBASE_REC_NO_VERSION`. This isolation level allows access to changes that were committed after the transaction was started. If `IBASE_REC_NO_VERSION` was specified, only the latest version of a row can be read. If `IBASE_REC_VERSION` was specified, a row can even be read when a modification to it is pending in a concurrent transaction. |
| IBASE_WAIT | Indicated that a transaction should wait and retry when a conflict occurs. |
| IBASE_NOWAIT | Indicated that a transaction should fail immediately when a conflict occurs. |

The following constants can be passed to `ibase_fetch_row()`, `ibase_fetch_assoc()` or `ibase_fetch_object()` to specify fetch behaviour.

| Constant | Description |
| --- | --- |
| IBASE_FETCH_BLOBS | Also available as `IBASE_TEXT`for backward compatibility. Causes BLOB contents to be fetched inline, instead of being fetched as BLOB identifiers. |
| IBASE_FETCH_ARRAYS | Causes arrays to be fetched inline. Otherwise, array identifiers are returned. Array identifiers can only be used as arguments to INSERT operations, as no functions to handle array identifiers are currently available. |
| IBASE_UNIXTIME | Causes date and time fields not to be returned as strings, but as UNIX timestamps (the number of seconds since the epoch, which is 1-Jan-1970 0:00 UTC). Might be problematic if used with dates before 1970 on some systems. |

The following constants are used to pass requests and options to the service API functions (`ibase_server_info()`, `ibase_db_info()`, `ibase_backup()`, `ibase_restore()` and `ibase_maintain_db()`). Please refer to the Firebird/InterBase manuals for the meaning of these options.

- **`IBASE_BKP_IGNORE_CHECKSUMS`** — Options to `ibase_backup()`
- **`IBASE_BKP_IGNORE_LIMBO`** — Options to `ibase_backup()`
- **`IBASE_BKP_METADATA_ONLY`** — Options to `ibase_backup()`
- **`IBASE_BKP_NO_GARBAGE_COLLECT`** — Options to `ibase_backup()`
- **`IBASE_BKP_OLD_DESCRIPTIONS`** — Options to `ibase_backup()`
- **`IBASE_BKP_NON_TRANSPORTABLE`** — Options to `ibase_backup()`
- **`IBASE_BKP_CONVERT`** — Options to `ibase_backup()`
- **`IBASE_RES_DEACTIVATE_IDX`** — Options to `ibase_restore()`
- **`IBASE_RES_NO_SHADOW`** — Options to `ibase_restore()`
- **`IBASE_RES_NO_VALIDITY`** — Options to `ibase_restore()`
- **`IBASE_RES_ONE_AT_A_TIME`** — Options to `ibase_restore()`
- **`IBASE_RES_REPLACE`**
- **`IBASE_RES_CREATE`** — Options to `ibase_restore()`
- **`IBASE_RES_USE_ALL_SPACE`** — Options to `ibase_restore()`
- **`IBASE_PRP_PAGE_BUFFERS`**
- **`IBASE_PRP_SWEEP_INTERVAL`**
- **`IBASE_PRP_SHUTDOWN_DB`**
- **`IBASE_PRP_DENY_NEW_TRANSACTIONS`**
- **`IBASE_PRP_DENY_NEW_ATTACHMENTS`**
- **`IBASE_PRP_RESERVE_SPACE`**
- **`IBASE_PRP_RES_USE_FULL`**
- **`IBASE_PRP_RES`**
- **`IBASE_PRP_WRITE_MODE`**
- **`IBASE_PRP_WM_ASYNC`**
- **`IBASE_PRP_WM_SYNC`**
- **`IBASE_PRP_ACCESS_MODE`**
- **`IBASE_PRP_AM_READONLY`**
- **`IBASE_PRP_AM_READWRITE`**
- **`IBASE_PRP_SET_SQL_DIALECT`**
- **`IBASE_PRP_ACTIVATE`**
- **`IBASE_PRP_DB_ONLINE`**
- **`IBASE_RPR_CHECK_DB`**
- **`IBASE_RPR_IGNORE_CHECKSUM`**
- **`IBASE_RPR_KILL_SHADOWS`**
- **`IBASE_RPR_MEND_DB`**
- **`IBASE_RPR_VALIDATE_DB`**
- **`IBASE_RPR_FULL`**
- **`IBASE_RPR_SWEEP_DB`** — Options to `ibase_maintain_db()`
- **`IBASE_STS_DATA_PAGES`**
- **`IBASE_STS_DB_LOG`**
- **`IBASE_STS_HDR_PAGES`**
- **`IBASE_STS_IDX_PAGES`**
- **`IBASE_STS_SYS_RELATIONS`** — Options to `ibase_db_info()`
- **`IBASE_SVC_SERVER_VERSION`** — Options to `ibase_server_info()`
- **`IBASE_SVC_IMPLEMENTATION`** — Options to `ibase_server_info()`
- **`IBASE_SVC_GET_ENV`** — Options to `ibase_server_info()`
- **`IBASE_SVC_GET_ENV_LOCK`**
- **`IBASE_SVC_GET_ENV_MSG`**
- **`IBASE_SVC_USER_DBPATH`**
- **`IBASE_SVC_SVR_DB_INFO`**
- **`IBASE_SVC_GET_USERS`** — Options to `ibase_server_info()`
