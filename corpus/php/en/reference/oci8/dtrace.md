---
id: "en-php-guide-oci8-dtrace"
language: "php"
lang: "en"
category: "guide"
name: "oci8.dtrace"
title: "OCI8 and DTrace Dynamic Tracing"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.dtrace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# OCI8 and DTrace Dynamic Tracing

OCI8 2.0 introduced static DTrace probes that can be used on operating systems that support DTrace. See DTrace Dynamic Tracing for an overview of PHP and DTrace.

## Installing OCI8 with DTrace Support

To enable DTrace support in PHP OCI8, build OCI8 as a shared extension after setting `PHP_DTRACE`.

```text $ export PHP_DTRACE=yes $ pecl install oci8 ```

Edit php.ini, set extension_dir to the directory with the created `oci8.so` and also enable the extension by adding:

```text extension=oci8.so ```

If you install PHP OCI8 from PECL using `phpize` and `configure` (instead of `pecl`), you will still need to set `PHP_DTRACE=yes`. This is because the `--enable-dtrace` option will be ignored by the limited `configure` script of a PECL bundle.

See Installation of PECL extensions for general PECL installation instructions.

## DTrace Static Probes in PHP OCI8

| Probe Name | Probe Description | Probe Arguments |
| --- | --- | --- |
| `oci8-connect-entry` | Initiated by oci_connect(), oci_pconnect() and oci_new_connect(). Fires before database connection is established. | char *`username`, char *`dbname`, char *`charset`, long `session_mode`, int `persistent`, int `exclusive` |
| `oci8-connect-return` | Fires at the end of connection. | void *`connection` |
| `oci8-check-connection` | Fires if an Oracle error might have caused the connection to become invalid. | void *`connection`, char *`client_id`, int `is_open`, long `errcode`, unsigned long `server_status` |
| `oci8-sqltext` | Fires when oci_parse() is executed. | void *`connection`, char *`client_id`, void *`statement`, char *`sql` |
| `oci8-connection-close` | Fires when the connection to the database is completely destroyed. | void *`connection` |
| `oci8-error` | Fires if an Oracle error occurs. | int `status`, long `errcode` |
| `oci8-execute-mode` | Fires at `oci_execute()` to show the execution mode. | void *`connection`, char *`client_id`, void *`statement`, unsigned int `mode` |

These probes are useful for tracing OCI8 scripts.

The `connection` and `statement` are the pointers to internal structures used for tracking PHP connections and executed statements.

The `client_id` is the value set by `oci_set_client_identifier()`.

Core PHP also has static probes. See DTrace Static Probes in Core PHP.

| Probe Name |
| --- |
| `oci8-connect-expiry` |
| `oci8-connect-lookup` |
| `oci8-connect-p-dtor-close` |
| `oci8-connect-p-dtor-release` |
| `oci8-connect-type` |
| `oci8-sesspool-create` |
| `oci8-sesspool-stats` |
| `oci8-sesspool-type` |

These probes are useful for OCI8 maintainers. Refer to the OCI8 source code for arguments and to see when the will fire.

## Listing DTrace Static Probes in PHP OCI8

To list available probes, start a PHP process and then run: ```text # dtrace -l ```

The output will be similar to: ```text ID PROVIDER MODULE FUNCTION NAME [ . . . ] 17 phpoci22116 oci8.so php_oci_dtrace_check_connection oci8-check-connection 18 phpoci22116 oci8.so php_oci_do_connect oci8-connect-entry 19 phpoci22116 oci8.so php_oci_persistent_helper oci8-connect-expiry 20 phpoci22116 oci8.so php_oci_do_connect_ex oci8-connect-lookup 21 phpoci22116 oci8.so php_oci_pconnection_list_np_dtor oci8-connect-p-dtor-close 22 phpoci22116 oci8.so php_oci_pconnection_list_np_dtor oci8-connect-p-dtor-release 23 phpoci22116 oci8.so php_oci_do_connect oci8-connect-return 24 phpoci22116 oci8.so php_oci_do_connect_ex oci8-connect-type 25 phpoci22116 oci8.so php_oci_connection_close oci8-connection-close 26 phpoci22116 oci8.so php_oci_error oci8-error 27 phpoci22116 oci8.so php_oci_statement_execute oci8-execute-mode 28 phpoci22116 oci8.so php_oci_create_spool oci8-sesspool-create 29 phpoci22116 oci8.so php_oci_create_session oci8-sesspool-stats 30 phpoci22116 oci8.so php_oci_create_session oci8-sesspool-type 31 phpoci22116 oci8.so php_oci_statement_create oci8-sqltext ```

The Provider column values consist of `phpoci` and the process id of the currently running PHP process.

The Function column refers to PHP's internal C implementation function names where each provider is located.

If a PHP process is not running, then no PHP probes will be shown.

## DTrace with PHP OCI8 Example

This example shows the basics of the DTrace D scripting language.

**`user_oci8_probes.d` for tracing all user-level PHP OCI8 Static Probes with DTrace**

```text


#!/usr/sbin/dtrace -Zs

#pragma D option quiet

php*:::oci8-connect-entry
{
    printf("%lld: PHP connect-entry\n", walltimestamp);
    printf("  credentials=\"%s@%s\"\n", arg0 ? copyinstr(arg0) : "", arg1 ? copyinstr(arg1) : "");
    printf("  charset=\"%s\"\n", arg2 ? copyinstr(arg2) : "");
    printf("  session_mode=%ld\n", (long)arg3);
    printf("  persistent=%d\n", (int)arg4);
    printf("  exclusive=%d\n", (int)arg5);
}

php*:::oci8-connect-return
{
    printf("%lld: PHP oci8-connect-return\n", walltimestamp);
    printf("  connection=0x%p\n", (void *)arg0);
}

php*:::oci8-connection-close
{
    printf("%lld: PHP oci8-connect-close\n", walltimestamp);
    printf("  connection=0x%p\n", (void *)arg0);
}

php*:::oci8-error
{
    printf("%lld: PHP oci8-error\n", walltimestamp);
    printf("  status=%d\n", (int)arg0);
    printf("  errcode=%ld\n", (long)arg1);
}

php*:::oci8-check-connection
{
    printf("%lld: PHP oci8-check-connection\n", walltimestamp);
    printf("  connection=0x%p\n", (void *)arg0);
    printf("  client_id=\"%s\"\n", arg1 ? copyinstr(arg1) : "");
    printf("  is_open=%d\n", arg2);
    printf("  errcode=%ld\n", (long)arg3);
    printf("  server_status=%lu\n", (unsigned long)arg4);
}

php*:::oci8-sqltext
{
    printf("%lld: PHP oci8-sqltext\n", walltimestamp);
    printf("  connection=0x%p\n", (void *)arg0);
    printf("  client_id=\"%s\"\n", arg1 ? copyinstr(arg1) : "");
    printf("  statement=0x%p\n", (void *)arg2);
    printf("  sql=\"%s\"\n", arg3 ? copyinstr(arg3) : "");
}

php*:::oci8-execute-mode
{
    printf("%lld: PHP oci8-execute-mode\n", walltimestamp);
    printf("  connection=0x%p\n", (void *)arg0);
    printf("  client_id=\"%s\"\n", arg1 ? copyinstr(arg1) : "");
    printf("  statement=0x%p\n", (void *)arg2);
    printf("  mode=0x%x\n", arg3);
}

    
```

This script uses the `-Z` option to `dtrace`, allowing it to be run when there is no PHP process executing. If this option were omitted the script would immediately terminate when no PHP executable was running because it knows none of the probes to be monitored are in existence.

On multi-CPU machines the probe ordering might not appear to be sequential. This depends on which CPU was processing the probes, and how threads migrate across CPUs. Displaying probe time stamps helps reduce confusion.

The script traces all user-level PHP OCI8 static probe points throughout the duration of a running PHP script. Run the D script: ```text # ./user_oci8_probes.d ```

Run a PHP script or application. The monitoring D script will output each probe's arguments as it fires. For example, a simple PHP script that queries a table might produce the following trace output: ```text 1381794982092854582: PHP connect-entry credentials="hr@localhost/pdborcl" charset="" session_mode=0 persistent=0 exclusive=0 1381794982183158766: PHP oci8-connect-return connection=0x7f4a7907bfb8 1381794982183594576: PHP oci8-sqltext connection=0x7f4a7907bfb8 client_id="Chris" statement=0x7f4a7907c2a0 sql="select * from employees" 1381794982183783706: PHP oci8-execute-mode connection=0x7f4a7907bfb8 client_id="Chris" statement=0x7f4a7907c2a0 mode=0x20 1381794982444344390: PHP oci8-connect-close connection=0x7f4a7907bfb8 ```

When monitoring is complete, the D script can be terminated with a CTRLC.

## See Also

 DTrace Dynamic Tracing
