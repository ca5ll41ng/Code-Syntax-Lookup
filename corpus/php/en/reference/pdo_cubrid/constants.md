---
id: "en-php-guide-pdo-cubrid-constants"
language: "php"
lang: "en"
category: "guide"
name: "pdo-cubrid.constants"
title: "Predefined Constants"
module: "pdo_cubrid"
source_url: "https://www.php.net/manual/en/pdo-cubrid.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this driver, and will only be available when the extension has been either compiled into PHP or dynamically loaded at runtime. In addition, these driver-specific constants should only be used if you are using this driver. Using driver-specific attributes with another driver may result in unexpected behaviour. `PDO::getAttribute()` may be used to obtain the `PDO::ATTR_DRIVER_NAME` attribute to check the driver, if your code can run against multiple drivers.

The following constants can be used when setting the database attribute. They can be passed to `PDO::getAttribute()` or `PDO::setAttribute()`.

| Constant | Description |
| --- | --- |
| `PDO::CUBRID_ATTR_ISOLATION_LEVEL` | Transaction isolation level for the database connection. |
| `PDO::CUBRID_ATTR_LOCK_TIMEOUT` | Transaction timeout in seconds. |
| `PDO::CUBRID_ATTR_MAX_STRING_LENGTH` | Read only. The maximum string length for bit, varbit, char, varchar, nchar, nchar varying data types when using CUBRID PDO API. |

The following constants can be used when setting the transaction isolation level. They can be passed to `PDO::getAttribute()` or returned by `PDO::setAttribute()`.

| Constant | Description |
| --- | --- |
| `PDO::TRAN_COMMIT_CLASS_UNCOMMIT_INSTANCE` | The lowest isolation level (1). A dirty, non-repeatable or phantom read may occur for the tuple and a non-repeatable read may occur for the table as well. |
| `PDO::TRAN_COMMIT_CLASS_COMMIT_INSTANCE` | A relatively low isolation level (2). A dirty read does not occur, but non-repeatable or phantom read may occur. |
| `PDO::TRAN_REP_CLASS_UNCOMMIT_INSTANCE` | The default isolation of CUBRID (3). A dirty, non-repeatable or phantom read may occur for the tuple, but repeatable read is ensured for the table. |
| `PDO::TRAN_REP_CLASS_COMMIT_INSTANCE` | A relatively low isolation level (4). A dirty read does not occur, but non-repeatable or phantom read may. |
| `PDO::TRAN_REP_CLASS_REP_INSTANCE` | A relatively high isolation level (5). A dirty or non-repeatable read does not occur, but a phantom read may. |
| `PDO::TRAN_SERIALIZABLE` | The highest isolation level (6). Problems concerning concurrency (e.g. dirty read, non-repeatable read, phantom read, etc.) do not occur. |

The following constants can be used when getting schema information. They can be passed to `PDO::cubrid_schema()`.

| Constant | Description |
| --- | --- |
| `PDO::CUBRID_SCH_TABLE` | Get name and type of table in CUBRID. |
| `PDO::CUBRID_SCH_VIEW` | Get name and type of view in CUBRID. |
| `PDO::CUBRID_SCH_QUERY_SPEC` | Get the query definition of view. |
| `PDO::CUBRID_SCH_ATTRIBUTE` | Get the attributes of table column. |
| `PDO::CUBRID_SCH_TABLE_ATTRIBUTE` | Get the attributes of table. |
| `PDO::CUBRID_SCH_METHOD` | Get the instance method. The instance method is a method called by a class instance. It is used more often than the class method because most operations are executed in the instance. |
| `PDO::CUBRID_SCH_TABLE_METHOD` | Get the class method. The class method is a method called by a class object. It is usually used to create a new class instance or to initialize it. It is also used to access or update class attributes. |
| `PDO::CUBRID_SCH_METHOD_FILE` | Get the information of the file where the method of the table is defined. |
| `PDO::CUBRID_SCH_SUPER_TABLE` | Get the name and type of table which table inherites attributes from. |
| `PDO::CUBRID_SCH_SUB_TABLE` | Get the name and type of table which inherites attributes from this table. |
| `PDO::CUBRID_SCH_CONSTRAINT` | Get the table constraints. |
| `PDO::CUBRID_SCH_TRIGGER` | Get the table triggers. |
| `PDO::CUBRID_SCH_TABLE_PRIVILEGE` | Get the privilege information of table. |
| `PDO::CUBRID_SCH_COL_PRIVILEGE` | Get the privilege information of column. |
| `PDO::CUBRID_SCH_DIRECT_SUPER_TABLE` | Get the direct super table of table. |
| `PDO::CUBRID_SCH_PRIMARY_KEY` | Get the table primary key. |
| `PDO::CUBRID_SCH_IMPORTED_KEYS` | Get imported keys of table. |
| `PDO::CUBRID_SCH_EXPORTED_KEYS` | Get exported keys of table. |
| `PDO::CUBRID_SCH_CROSS_REFERENCE` | Get reference relationship of two tables. |
