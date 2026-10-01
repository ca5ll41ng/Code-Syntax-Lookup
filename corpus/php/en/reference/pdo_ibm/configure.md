---
id: "en-php-guide-ref-pdo-ibm-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-ibm.installation"
title: "Installation"
module: "pdo_ibm"
source_url: "https://www.php.net/manual/en/ref.pdo-ibm.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

To build the PDO_IBM extension, the DB2 Client v9.1 or later must be installed on the same system as PHP. The DB2 Client can be downloaded from the IBM [Application Development Site]().

> Note
>
> The DB2 Client v9.1 or later supports direct access to DB2 for Linux, UNIX, and Windows v8 and v9.1 servers.
>
> The DB2 Client v9.1 also supports access to DB2 UDB for i5 and DB2 UDB for z/OS servers using the separately purchased [DB2 Connect product]().

PDO_IBM is a  extension, so follow the instructions in `install.pecl` to install the PDO_IBM extension. Issue the configure command to point to the location of the DB2 Client header files and libraries as follows:

```text


bash$ ./configure --with-pdo-ibm=/path/to/sqllib[,shared]

  
```

The configure command defaults to the value of the DB2DIR environment variable.
