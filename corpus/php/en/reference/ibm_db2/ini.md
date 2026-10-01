---
id: "en-php-guide-ibm-db2-configuration"
language: "php"
lang: "en"
category: "guide"
name: "ibm-db2.configuration"
title: "Runtime Configuration"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/ibm-db2.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| ibm_db2.binmode | "1" | `INI_ALL` |  |
| ibm_db2.i5_all_pconnect | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.6.5. |
| ibm_db2.i5_allow_commit | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.4.9. |
| ibm_db2.i5_blank_userid | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.i5_char_trim | "0" | `INI_SYSTEM` | Available as of ibm_db2 2.1.0. |
| ibm_db2.i5_dbcs_alloc | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.5.0. |
| ibm_db2.i5_guard_profile | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.i5_ignore_userid | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.8.0. |
| ibm_db2.i5_job_sort | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.8.4. |
| ibm_db2.i5_log_verbose | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.i5_max_pconnect | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.i5_override_ccsid | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.i5_servermode_subsystem | NULL | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.i5_sys_naming | "0" | `INI_SYSTEM` | Available as of ibm_db2 1.9.7. |
| ibm_db2.instance_name | NULL | `INI_SYSTEM` | Available as of ibm_db2 1.0.2. |

Here's a short explanation of the configuration directives.

- **`$ibm_db2.binmode` `int`** — This option controls the mode used for converting to and from binary data in the PHP application. - 1 (DB2_BINARY) - 2 (DB2_CONVERT) - 3 (DB2_PASSTHRU)
- **`$ibm_db2.i5_all_pconnect` `int`** — This option forces all connections to be persistent on IBM i. Basically, all `db2_connect()` calls transparently become `db2_pconnect()` calls. By default, this option is `0`. This option is provided as a convenience for cases where persistent connections are faster. It should not be used in new applications. - 0 - Persistent and non-persistent connections can be made. - 1 - All connections are persistent.
- **`$ibm_db2.i5_allow_commit` `int`** — This option controls the transaction isolation mode used. By default, this option is `0`, so commitment control isn't used. This option can be overridden when connecting if the array key `$i5_commit` is set in the connection options array passed to `db2_connect()` or `db2_pconnect()`. - 0 - commitment control is not used - 1 - read uncommitted, dirty reads possible. - 2 - read committed, dirty reads are not possible. - 3 - repeatable read, dirty reads and non-repeatable reads are not possible - 4 - serializeable, dirty reads, non-repeatable reads, and phantoms are not possible
- **`$ibm_db2.i5_blank_userid` `int`** — This controls if a blank user ID should be allowed on IBM i. By default, this option is `0`. Unlike `$ibm_db2.i5_ignore_userid`, this option doesn't force all user IDs to be empty or change job behaviour, but simply allows an empty user ID to be passed, for connecting to Db2 as the current user. - 0 - Don't allow a blank user ID to be passed. - 1 - Allow a blank user ID to be passed.
- **`$ibm_db2.i5_char_trim` `int`** — This option controls if the end of strings are trimmed on IBM i. Since many tables use fixed column sizes padded with spaces, this is provided as a convenience. By default, this option is `0`. - 0 - Columns are not trimmed. - 1 - Spaces at the end of returned character columns are removed.
- **`$ibm_db2.i5_dbcs_alloc` `int`** — This options affects the internal buffer allocation strategy on IBM i. By default, this option is `0`. When this option is set, buffers are allocated with a much larger size, in case the database underestimates a string's size when converting between encodings. This option uses six times as much memory for buffers (to account for the largest possible UTF-8 sequences), but may be needed if truncated data is returned. - 0 - Minimum size buffers are allocated. - 1 - Larger size buffers are allocated.
- **`$ibm_db2.i5_guard_profile` `int`** — This option checks if the database user profile was switched when connecting to a persistent database connection on IBM i, and if so, disconnects from the database. By default, this option is set to `0`. - 0 - Don't check for profile swaps. - 1 - Check for profile swaps and disconnect if so.
- **`$ibm_db2.i5_log_verbose` `int`** — This option sets if SQL diagnostic messages like warnings and errors are always sent to the PHP error log on IBM i. Normally, only a brief message on failure is sent (such as "statement execute failed") to the PHP error log, as this option is set to `0` by default. Note that you can still and should call i.e. `db2_stmt_errormsg()` manually as part of checking if functions fail. - 0 - Only logs brief messages. - 1 - Logs the SQL diagnostic message in addition to the brief message.
- **`$ibm_db2.i5_ignore_userid` `int`** — This option ignores the user ID when connecting to the database when running on IBM i, and runs SQL/CLI functionality inside of the PHP job, instead of a separate job. By default, this option is `0`. When enabled, it no longer uses a separate database server job, and always uses the current user profile for the database, ignoring the username and password passed to `db2_connect()` and `db2_pconnect()`. - 0 - Uses the specified credentials, and use an SQL/CLI server job. - 1 - Always use blank credentials, and run SQL/CLI in the PHP job.
- **`$ibm_db2.i5_job_sort` `int`** — Controls the job sort option on IBM i. By default, this option is `0`. This corresponds to the IBM i SQL/CLI `SQL_ATTR_CONN_SORT_SEQUENCE` attribute. - 0 - Uses the `*HEX` sort option, sorting by bytes. - 1 - Uses the job sort sequence set for the PHP job. - 2 - Uses the job sort sequence set for the database job.
- **`$ibm_db2.i5_max_pconnect` `int`** — This will affect how many times a persistent connection can be reused when running on IBM i. By default, this is set to `0`, which means a persistent connection can always be reused. This option can help work around issues in a long-running database job (i.e. if a procedure is leaking memory), but is obviously not a long-term fix.
- **`$ibm_db2.i5_override_ccsid` `int`** — The PASE CCSID to use for character conversions from EBCDIC on IBM i. By default, this is `0`, which will select the default PASE job CCSID, which comes from the PASE locale settings. For example, setting this to `1208` will use UTF-8. This should only be modified if the PASE job CCSID isn't the expected CCSID, and the locale cannot be modified. — To learn more about CCSIDs on IBM i, consult the [IBM documentation](). To learn how locales on IBM i PASE are mapped to CCSIDs, consult the [IBM documentation]().
- **`$ibm_db2.i5_sys_naming` `int`** — This option controls the naming mode when connecting to an IBM i system. By default, this option is `0`. The naming mode affects how names are resolved and the allowed syntax for names. When set to `0`, this uses periods to qualify names and uses the default library or user ID to resolve names. When set to `1`, this uses slashes to qualify names and uses the job library list to resolve names. - 0 - Uses the SQL naming mode ("SCHEMA.TABLE"). - 1 - Uses the system naming mode ("LIBRARY/FILE"). — To learn more about naming modes on IBM i, consult the [IBM documentation]().
- **`$ibm_db2.i5_servermode-subsystem` `string`** — This option changes which subsystem database server jobs run under on IBM i. By default, this option is `null`, so jobs will run under the default subsystem for QSQSRVR jobs.
- **`$ibm_db2.instance_name` `string`** — On Linux and UNIX operating systems, this option defines the name of the instance to use for cataloged database connections. By default, this option is `null`. If this option is set, its value overrides the `DB2INSTANCE` environment variable setting. — This option is ignored on Windows operating systems.
