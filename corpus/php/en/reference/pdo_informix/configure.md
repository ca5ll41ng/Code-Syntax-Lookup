---
id: "en-php-guide-ref-pdo-informix-installation"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-informix.installation"
title: "Installation"
module: "pdo_informix"
source_url: "https://www.php.net/manual/en/ref.pdo-informix.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

To build the PDO_INFORMIX extension, the Informix Client SDK 2.81 UC1 or higher must be installed on the same system as PHP. The Informix Client SDK is available from the [IBM Informix Support Site]().

PDO_INFORMIX is a  extension, so follow the instructions in `install.pecl` to install the PDO_INFORMIX extension. Issue the configure command to point to the location of the Informix Client SDK header files and libraries as follows:

```text


   bash$ ./configure --with-pdo-informix=/path/to/SDK[,shared]

  
```

The configure command defaults to the value of the INFORMIXDIR environment variable.
