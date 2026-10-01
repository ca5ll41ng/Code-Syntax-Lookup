---
id: "en-php-guide-ibm-db2-setup"
language: "php"
lang: "en"
category: "guide"
name: "ibm-db2.setup"
title: "Getting Started"
module: "ibm_db2"
source_url: "https://www.php.net/manual/en/ibm-db2.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Getting Started

{{{ Requirements 

## Requirements

To connect to IBM DB2 Universal Database for Linux, UNIX, and Windows, or IBM Cloudscape, or Apache Derby, you must install an IBM DB2 Universal Database client on the same computer on which you are running PHP. The extension has been developed and tested with DB2 Version 8.2.

To connect to IBM DB2 Universal Database for z/OS or iSeries, you also require IBM DB2 Connect or the equivalent DRDA gateway software.

## Requirements on Linux or Unix

The user invoking the PHP executable or SAPI must specify the DB2 instance before accessing these functions. You can set the name of the DB2 instance in php.ini using the `ibm_db2.instance_name` configuration option, or you can source the DB2 instance profile before invoking the PHP executable.

If you created a DB2 instance named `db2inst1` in `/home/db2inst1/`, for example, you can add the following line to php.ini:

```text


ibm_db2.instance_name=db2inst1

    
```

If you do not set this option in php.ini, you must issue the following command to modify your environment variables to enable access to DB2:

```text


bash$ source /home/db2inst1/sqllib/db2profile

    
```

To enable your PHP-enabled Web server to access these functions, you must either set the `ibm_db2.instance_name` configuration option in php.ini, or source the DB2 instance environment in your Web server start script (typically `/etc/init.d/httpd` or `/etc/init.d/apache`).

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}} 

 {{{ Resources 

## Resource Types

The ibm_db2 extension returns connection resources, statement resources, and result set resources.

 }}}
