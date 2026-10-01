---
id: "en-php-guide-ref-pdo-odbc-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-odbc.installation"
title: "Installation"
module: "pdo_odbc"
source_url: "https://www.php.net/manual/en/ref.pdo-odbc.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

PDO_ODBC on UNIX systems   PDO_ODBC is included in the PHP source. You can compile the PDO_ODBC extension as either a static or shared module using the following configure commands. 
- **ibm_db2** — ```text ./configure --with-pdo-odbc=ibm-db2,/opt/IBM/db2/V8.1/ ``` To build PDO_ODBC with the ibm-db2 flavour, you have to have previously installed the DB2 application development headers on the same machine on which you are compiling PDO_ODBC. The DB2 application development headers are an installable option in the DB2 servers, and are also available as part of the DB2 Application Development Client freely available for download from the IBM developerWorks [website](). — If you do not supply a location for the DB2 libraries and headers to the configure command, PDO_ODBC defaults to `/home/db2inst1/sqllib`.
- **unixODBC** — ```text ./configure --with-pdo-odbc=unixODBC,/usr/local ``` If you do not supply a location for the unixODBC libraries and headers to the configure command, PDO_ODBC defaults to `/usr/local`.
- **generic**
  ```text

  ./configure --with-pdo-odbc=generic,/usr/local,libname,ldflags,cflags
  ```
