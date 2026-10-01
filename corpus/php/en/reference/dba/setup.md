---
id: "en-php-guide-dba-setup"
language: "php"
lang: "en"
category: "guide"
name: "dba.setup"
title: "Getting Started"
module: "dba"
source_url: "https://www.php.net/manual/en/dba.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

The behaviour of various aspects depends on the implementation of the underlying database. Functions such as `dba_optimize()` and `dba_sync()` will do what they promise for one database and will do nothing for others. You have to download and install supported dba-Handlers.

| Handler | Notes |
| --- | --- |
| `dbm` | Dbm is the oldest (original) type of Berkeley DB style databases. You should avoid it, if possible. We do not support the compatibility functions built into DB2 and gdbm, because they are only compatible on the source code level, but cannot handle the original dbm format. |
| `ndbm` | Ndbm is a newer type and more flexible than dbm. It still has most of the arbitrary limits of dbm (therefore it is deprecated). |
| `gdbm` | Gdbm is the [GNU database manager](). |
| `db2` | DB2 is for [Oracle Berkeley DB 2](). It is described as "a programmatic toolkit that provides high-performance built-in database support for both standalone and client/server applications." |
| `db3` | DB3 is for [Oracle Berkeley DB 3](). |
| `db4` | DB4 is for [Oracle Berkeley DB 4 or 5](). This option can be used with BDB 5 as of PHP 5.3.3. |
| `cdb` | Cdb is "a fast, reliable, lightweight package for creating and reading constant databases." It is from the author of qmail and can be found at [](). Since it is constant, we support only reading operations. We support writing (not updating) through the internal cdb library. |
| `cdb_make` | We support creation (not updating) of cdb files when the bundled cdb library is used. |
| `flatfile` | This is available for compatibility with the deprecated `dbm` extension only and should be avoided. However you may use this where files were created in this format. That happens when configure could not find any external library. |
| `inifile` | This is available to be able to modify php.ini files from within PHP scripts. When working with ini files you can pass arrays of the form array(0=>group,1=>value_name) or strings of the form "[group]value_name" where group is optional. As the functions `dba_firstkey()` and `dba_nextkey()` return string representations of the key there is the function `dba_key_split()` which allows to convert the string keys into array keys without losing `false`. |
| `qdbm` | The qdbm library can be downloaded from [](). |
| `tcadb` | The Tokyo Cabinet library can be downloaded from [](). |
| `lmdb` | This is available since PHP 7.2.0. The Lightning Memory-Mapped Database library can be downloaded from [](). |

When invoking the `dba_open()` or `dba_popen()` functions, one of the handler names must be supplied as an argument. The actually available list of handlers is displayed by invoking `phpinfo()` or `dba_handlers()`.

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

## Runtime Configuration

The behaviour of these functions is affected by settings in php.ini.

|  |  |  |  |
| --- | --- | --- | --- |
| dba.default_handler | DBA_DEFAULT | `INI_ALL` |  |

Here's a short explanation of the configuration directives.

- **`$dba.default_handler` `string`** — The name of the default handler

 }}} 

 {{{ Resources 

## Resource Types

Prior to PHP 8.4.0, most DBA functions operate on or return resources (e.g. `dba_open()` returns a positive DBA link identifier required by most DBA functions).

 }}}
