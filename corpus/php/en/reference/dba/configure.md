---
id: "en-php-guide-dba-installation"
language: "php"
lang: "en"
category: "guide"
name: "dba.installation"
title: "Installation"
module: "dba"
source_url: "https://www.php.net/manual/en/dba.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

By using the --enable-dba=shared configuration option you can build a dynamic loadable module to enable PHP for basic support of dbm-style databases. You also have to add support for at least one of the following handlers by specifying the --with-XXXX or --enable-XXXX configure switch to your PHP configure line.

> After configuring and compiling PHP you must execute the following test from commandline: `php run-tests.php ext/dba`. This shows whether your combination of handlers works. Most problematic are `dbm` and `ndbm` which conflict with many installations. The reason for this is that on several systems these libraries are part of more than one other library. The configuration test only prevents you from configuring malfunctioning single handlers but not combinations.

| Handler | Configure Switch |
| --- | --- |
| `dbm` | To enable support for dbm add --with-dbm[=DIR]. 
> dbm normally is a wrapper which often results in failures. This means you should only use dbm if you are sure it works and if you really need this format. |
| `ndbm` | To enable support for ndbm add --with-ndbm[=DIR]. 
> ndbm normally is a wrapper which often results in failures. This means you should only use ndbm if you are sure it works and if you really need this format. |
| `gdbm` | To enable support for gdbm add --with-gdbm[=DIR]. |
| `db2` | To enable support for Oracle Berkeley DB 2 add --with-db2[=DIR]. 
> db2 conflicts with db3 and db4. |
| `db3` | To enable support for Oracle Berkeley DB 3 add --with-db3[=DIR]. 
> db3 conflicts with db2 and db4. |
| `db4` | To enable support for Oracle Berkeley DB 4 or 5 add --with-db4[=DIR]. 
> db4 conflicts with db2 and db3.

 
> The db libraries with versions 4.1 through 4.1.24 cannot be used in any PHP version.
>
> Support for BDB 5 was added in PHP 5.3.3. |
| `cdb` | To enable support for cdb add --with-cdb[=DIR]. 
> You can omit DIR to use the bundled cdb library that adds the cdb_make handler which allows creation of cdb files and allows to access cdb files on the network using PHP's streams. |
| `flatfile` | To enable support for flatfile add --enable-flatfile. Before PHP 5.2.1 the --with-flatfile had to be used instead. 
> This was added to add compatibility with deprecated `dbm` extension. Use this handler only when you cannot install one of the libraries required by the other handlers and when you cannot use bundled cdb handler. |
| `inifile` | To enable support for `inifile` add --enable-inifile. Before PHP 5.2.1 the --with-inifile had to be used instead. 
> This was added to allow to read and set microsoft style `.ini` files (like the php.ini file). |
| `qdbm` | To enable support for qdbm add --with-qdbm[=DIR]. 
> qdbm conflicts with dbm and gdbm.

 
> The qdbm library can be downloaded from [](). |
| `tcadb` | To enable support for Tokyo Cabinet add --with-tcadb[=DIR]. 
> The Tokyo Cabinet library can be downloaded from [](). |
| `lmdb` | To enable support for the Lightning Memory-Mapped Database add --with-lmdb[=DIR]. 
> This was added in PHP 7.2.0. The Lightning Memory-Mapped Database library can be downloaded from [](). |
