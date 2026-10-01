---
id: "en-php-guide-odbc-installation"
language: "php"
lang: "en"
category: "guide"
name: "odbc.installation"
title: "Installation"
module: "uodbc"
source_url: "https://www.php.net/manual/en/odbc.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

- **--with-adabas[=DIR]** — Include Adabas D support. DIR is the Adabas base install directory, defaults to `/usr/local`.
- **--with-sapdb[=DIR]** — Include SAP DB support. DIR is SAP DB base install directory, defaults to `/usr/local`.
- **--with-solid[=DIR]** — Include Solid support. DIR is the Solid base install directory, defaults to `/usr/local/solid`.
- **--with-ibm-db2[=DIR]** — Include IBM DB2 support. DIR is the DB2 base install directory, defaults to `/home/db2inst1/sqllib`.
- **--with-empress[=DIR]** — Include Empress support. DIR is the Empress base install directory, defaults to `$EMPRESSPATH`. This option only supports Empress Version 8.60 and above.
- **--with-empress-bcs[=DIR]** — Include `"Empress Local Access"` support. DIR is the Empress base install directory, defaults to `$EMPRESSPATH`. This option only supports Empress Version 8.60 and above.
- **--with-birdstep[=DIR]** — Include Birdstep support. DIR is the Birdstep base install directory, defaults to `/usr/local/birdstep`.
- **--with-custom-odbc[=DIR]** — Include a user defined ODBC support. The DIR is ODBC install base directory, which defaults to `/usr/local`. Make sure to define CUSTOM_ODBC_LIBS and have some `odbc.h` in your include dirs. E.g., you should define following for Sybase SQL Anywhere 5.5.00 on QNX, prior to run configure script: CPPFLAGS="-DODBC_QNX -DSQLANY_BUG" LDFLAGS=-lunix CUSTOM_ODBC_LIBS="-ldblib -lodbc".
- **--with-iodbc[=DIR]** — Include iODBC support. DIR is the iODBC base install directory, defaults to `/usr/local`.
- **--with-esoob[=DIR]** — Include Easysoft OOB support. DIR is the OOB base install directory, defaults to `/usr/local/easysoft/oob/client`.
- **--with-unixODBC[=DIR]** — Include unixODBC support. DIR is the unixODBC base install directory, defaults to `/usr/local`.
- **--with-openlink[=DIR]** — Include OpenLink ODBC support. DIR is the OpenLink base install directory, defaults to `/usr/local`. This is the same as iODBC.
- **--with-dbmaker[=DIR]** — Include DBMaker support. DIR is the DBMaker base install directory, defaults to where the latest version of DBMaker is installed (such as `/home/dbmaker/3.6`).

Windows users must enable `php_odbc.dll` in order to use this extension.
