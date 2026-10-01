---
id: "en-php-guide-oci8-setup"
language: "php"
lang: "en"
category: "guide"
name: "oci8.setup"
title: "Getting Started"
module: "oci8"
source_url: "https://www.php.net/manual/en/oci8.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

OCI8 3.0 is included with PHP 8. It is also available from . For PHP 7, use OCI8 2.2 from . OCI8 requires Oracle 10*g* or later Oracle client libraries.

If the Oracle Database is on the same machine as PHP, the database software already contains the necessary libraries and header files. When PHP is on a different machine, use the free [Oracle Instant Client]() libraries.

To use Oracle Instant Client, install the `Basic` or `Basic Light` Oracle Instant Client ZIP file, RPM package, or DMG package. When building OCI8 from source code, also install the Instant Client `SDK`.

You must run PHP with the same, or a more recent, version of the Oracle libraries that OCI8 was built with.

> Oracle's standard client-server network interoperability allows connections between different versions of Oracle Client and Oracle Database. For certified configurations see Oracle Support's Doc ID 207303.1. In summary, Oracle Client 19, 18 and 12.2 can connect to Oracle Database 11.2 or greater. Oracle Client 12.1 can connect to Oracle Database 10.2 or greater. Oracle Client 11.2 can connect to Oracle Database 9.2 or greater.

> Full OCI8 feature support is only available when using the most recent versions of the Oracle client libraries and database.

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Testing 

  

 }}} 

 {{{ Configuration 

  

 }}}
