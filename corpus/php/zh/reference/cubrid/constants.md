---
id: "zh-php-guide-cubrid-constants"
language: "php"
lang: "zh"
category: "guide"
name: "cubrid.constants"
title: "预定义常量"
module: "cubrid"
source_url: "https://www.php.net/manual/zh/cubrid.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

以下常量可在执行 SQL 语句时使用，可传递给 `cubrid_prepare()` 和 `cubrid_execute()`。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_INCLUDE_OID` | Determine whether to get OID during query execution. |
| `CUBRID_ASYNC` | Execute the query in asynchronous mode. |
| `CUBRID_EXEC_QUERY_ALL` | Execute the query in synchronous mode. This flag must be set when executing multiple SQL statements. |

以下常量可在获取结果时用于指定获取行为，可传递给 `cubrid_fetch()` 和 `cubrid_fetch_array()`。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_NUM` | Get query result as a numeric array (0-default). |
| `CUBRID_ASSOC` | Get query result as an associative array. |
| `CUBRID_BOTH` | Get query result as both numeric and associative arrays (default value). |
| `CUBRID_OBJECT` | Get query result an object. |
| `CUBRID_LOB` | The constant CUBRID_LOB can be used when you want to operate the lob object. It can be passed to `cubrid_fetch()`, `cubrid_fetch_row()`, `cubrid_fetch_array()`, `cubrid_fetch_assoc()` and `cubrid_fetch_object()`. |

以下常量可在查询结果中定位游标时使用，可传递给或由 `cubrid_move_cursor()` 返回。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_CURSOR_FIRST` | Move current cursor to the first position in the result. |
| `CUBRID_CURSOR_CURRENT` | Move current cursor as a default value if the origin is not specified. |
| `CUBRID_CURSOR_LAST` | Move current cursor to the last position in the result. |
| `CUBRID_CURSOR_SUCCESS` | Returned value of `cubrid_move_cursor()` function in case of success. This flag has been removed from 8.4.1. |
| `CUBRID_NO_MORE_DATA` | Returned value of `cubrid_move_cursor()` function in case of failure. This flag has been removed from 8.4.1. |
| `CUBRID_CURSOR_ERROR` | Returned value of `cubrid_move_cursor()` function in case of failure. This flag has been removed from 8.4.1. |

以下常量可在设置数据库连接的自动提交模式时使用，可传递给 `cubrid_set_autocommit()` 或由 `cubrid_get_autocommit()` 返回。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_AUTOCOMMIT_TRUE` | Enable the auto-commit mode. |
| `CUBRID_AUTOCOMMIT_FALSE` | Disable the auto-commit mode. |

以下常量可在设置数据库参数时使用，可传递给 `cubrid_set_db_parameter()`。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_PARAM_ISOLATION_LEVEL` | Transaction isolation level for the database connection. |
| `CUBRID_PARAM_LOCK_TIMEOUT` | Transaction timeout in seconds. |

以下常量可在设置事务隔离级别时使用，可传递给 `cubrid_set_db_parameter()` 或由 `cubrid_get_db_parameter()` 返回。

| 常量 | 说明 |
| --- | --- |
| `TRAN_COMMIT_CLASS_UNCOMMIT_INSTANCE` | The lowest isolation level (1). A dirty, non-repeatable or phantom read may occur for the tuple and a non-repeatable read may occur for the table as well. |
| `TRAN_COMMIT_CLASS_COMMIT_INSTANCE` | A relatively low isolation level (2). A dirty read does not occur, but non-repeatable or phantom read may occur. |
| `TRAN_REP_CLASS_UNCOMMIT_INSTANCE` | The default isolation of CUBRID (3). A dirty, non-repeatable or phantom read may occur for the tuple, but repeatable read is ensured for the table. |
| `TRAN_REP_CLASS_COMMIT_INSTANCE` | A relatively low isolation level (4). A dirty read does not occur, but non-repeatable or phantom read may. |
| `TRAN_REP_CLASS_REP_INSTANCE` | A relatively high isolation level (5). A dirty or non-repeatable read does not occur, but a phantom read may. |
| `TRAN_SERIALIZABLE` | The highest isolation level (6). Problems concerning concurrency (e.g. dirty read, non-repeatable read, phantom read, etc.) do not occur. |

以下常量可在获取模式信息时使用，可传递给 `cubrid_schema()`。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_SCH_CLASS` | Get name and type of table in CUBRID. |
| `CUBRID_SCH_VCLASS` | Get name and type of view in CUBRID. |
| `CUBRID_SCH_QUERY_SPEC` | Get the query definition of view. |
| `CUBRID_SCH_ATTRIBUTE` | Get the attributes of table column. |
| `CUBRID_SCH_CLASS_ATTRIBUTE` | Get the attributes of table. |
| `CUBRID_SCH_METHOD` | Get the instance method. The instance method is a method called by a class instance. It is used more often than the class method because most operations are executed in the instance. |
| `CUBRID_SCH_CLASS_METHOD` | Get the class method. The class method is a method called by a class object. It is usually used to create a new class instance or to initialize it. It is also used to access or update class attributes. |
| `CUBRID_SCH_METHOD_FILE` | Get the information of the file where the method of the table is defined. |
| `CUBRID_SCH_SUPERCLASS` | Get the name and type of table which table inherites attributes from. |
| `CUBRID_SCH_SUBCLASS` | Get the name and type of table which inherites attributes from this table. |
| `CUBRID_SCH_CONSTRAINT` | Get the table constraints. |
| `CUBRID_SCH_TRIGGER` | Get the table triggers. |
| `CUBRID_SCH_CLASS_PRIVILEGE` | Get the privilege information of table. |
| `CUBRID_SCH_ATTR_PRIVILEGE` | Get the privilege information of column. |
| `CUBRID_SCH_DIRECT_SUPER_CLASS` | Get the direct super table of table. |
| `CUBRID_SCH_PRIMARY_KEY` | Get the table primary key. |
| `CUBRID_SCH_IMPORTED_KEYS` | Get imported keys of table. |
| `CUBRID_SCH_EXPORTED_KEYS` | Get exported keys of table. |
| `CUBRID_SCH_CROSS_REFERENCE` | Get reference relationship of two tables. |

以下常量可在报告错误时使用，可由 `cubrid_error_code_facility()` 返回。

| 常量 | 说明 |
| --- | --- |
| `CUBRID_FACILITY_DBMS` | The error occurred in CUBRID dbms. |
| `CUBRID_FACILITY_CAS` | The error occurred in CUBRID broker cas. |
| `CUBRID_FACILITY_CCI` | The error occurred in CUBRID cci. |
| `CUBRID_FACILITY_CLIENT` | The error occurred in CUBRID PHP client. |
