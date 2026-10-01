---
id: "en-php-guide-ref-pdo-cubrid-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-cubrid.installation"
title: "Installation"
module: "pdo_cubrid"
source_url: "https://www.php.net/manual/en/ref.pdo-cubrid.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

To build the PDO_CUBRID extension, the CUBRID DBMS must be installed on the same system as PHP. PDO_CUBRID is a  extension, so follow the instructions in `install.pecl` to install the PDO_CUBRID extension. Issue the configure command to point to the location of the CUBRID base dir as follows:

```text


   $ ./configure --with-pdo-cubrid=/path/to/CUBRID[,shared]

  
```

The configure command defaults to the value of the CUBRID environment variable.

A DLL for this PECL extension is currently unavailable. See also the building on Windows section. Detailed information about installation on Linux and Windows manually, please read build-guide.html in PECL package CUBRID for reference.
