---
id: "en-php-guide-ref-pdo-oci"
language: "php"
lang: "en"
category: "guide"
name: "ref.pdo-oci"
title: "Oracle PDO Driver (PDO_OCI)"
module: "pdo_oci"
source_url: "https://www.php.net/manual/en/ref.pdo-oci.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Oracle PDO Driver (PDO_OCI)

Oracle PDO Driver

   

  PDO_OCI DSN Connecting to Oracle databases   Description  The PDO_OCI Data Source Name (DSN) is composed of the following elements: 
- **DSN prefix** — The DSN prefix is oci:.
- **`dbname` (Oracle Instant Client)** — The URI for the Oracle Instant Client connection takes the form of dbname=//`hostname`:`port-number`/`database`. If you are connecting to a database defined in `tnsnames.ora`, use only the name of the database: dbname=`database`.
- **`charset`** — The client-side character set for the current environment handle.

     Examples  
**PDO_OCI DSN examples**

The following examples show a PDO_OCI DSN for connecting to Oracle databases:

```text

// Connect to a database defined in tnsnames.ora
oci:dbname=mydb

// Connect using the Oracle Instant Client
oci:dbname=//localhost:1521/mydb

       
```
