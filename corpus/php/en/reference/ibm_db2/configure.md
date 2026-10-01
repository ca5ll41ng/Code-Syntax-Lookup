---
id: "en-php-guide-ibm-db2-installation"
language: "php"
lang: "en"
category: "guide"
name: "ibm-db2.installation"
title: "Installation"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/ibm-db2.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Installation

To build the ibm_db2 extension, the DB2 application development header files and libraries must be installed on the system. DB2 does not install these by default, so it may be necessary to return to the DB2 installer and add this option. The DB2 Application Development Client includes the header files and is freely available for download from the IBM DB2 Universal Database [support site]().

If the DB2 application development header files and libraries are added to a Linux or Unix operating system on which DB2 was already installed, the command db2iupdt -e must be issued to update the symbolic links to the header files and libraries in the DB2 instances.

ibm_db2 is a  extension, so follow the instructions in `install.pecl` to install the ibm_db2 extension for PHP. Issue the configure command to point to the location of the DB2 header files and libraries as follows:

```text


bash$ ./configure --with-IBM_DB2=/path/to/DB2

  
```

The configure command defaults to `/opt/IBM/db2/V8.1`.

> Note for IIS users
>
> If the ibm_db2 driver is being used with Microsoft Internet Information Server (IIS), it may be necessary to do the following:
>
> Install DB2 with extended operating system security. Add the PHP binary path to the PATH system environment variable (default C:\php\). Create another system environment variable equal to the path where the PHP.INI file is located (eg: PHPRC = C:\php\). Add the IUSR_COMPUTERNAME to the DB2USERS group.
