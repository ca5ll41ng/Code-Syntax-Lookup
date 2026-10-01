---
id: "zh-php-guide-mysqli-constants"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.constants"
title: "预定义常量"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`MYSQLI_READ_DEFAULT_GROUP` (`int`)** — 从 `my.cnf` 或由 `MYSQLI_READ_DEFAULT_FILE` 指定的文件中读取命名区块（named group）的配置。
- **`MYSQLI_READ_DEFAULT_FILE` (`int`)** — 从指定的选项文件中读取配置，而非从默认的 `my.cnf`。
- **`MYSQLI_OPT_CAN_HANDLE_EXPIRED_PASSWORDS` (`int`)** — 向服务器表明客户端可以为过期密码处理沙盒模式。可与 `mysqli_options()` 一起使用。
- **`MYSQLI_OPT_LOAD_DATA_LOCAL_DIR` (`int`)** — 如果启用，此选项将指定在 `LOAD DATA LOCAL` 语句中允许客户端指定 `LOCAL` 数据加载的目录。
- **`MYSQLI_OPT_CONNECT_TIMEOUT` (`int`)** — 连接超时（秒）。
- **`MYSQLI_OPT_READ_TIMEOUT` (`int`)** — Command execution result timeout in seconds. Available as of PHP 7.2.0.
- **`MYSQLI_OPT_LOCAL_INFILE` (`int`)** — 启用命令 `LOAD LOCAL INFILE`。
- **`MYSQLI_OPT_INT_AND_FLOAT_NATIVE` (`int`)** — Convert integer and float columns back to PHP numbers. Only valid for mysqlnd.
- **`MYSQLI_OPT_NET_CMD_BUFFER_SIZE` (`int`)** — The size of the internal command/network buffer. Only valid for mysqlnd.
- **`MYSQLI_OPT_NET_READ_BUFFER_SIZE` (`int`)** — Maximum read chunk size in bytes when reading the body of a MySQL command packet. Only valid for mysqlnd.
- **`MYSQLI_OPT_SSL_VERIFY_SERVER_CERT` (`int`)**
- **`MYSQLI_INIT_COMMAND` (`int`)** — Command to execute when connecting to MySQL server. Will automatically be re-executed when reconnecting.
- **`MYSQLI_CLIENT_CAN_HANDLE_EXPIRED_PASSWORDS` (`int`)** — 向服务器表明客户端可以为过期密码处理沙盒模式。可与 `mysqli_real_connect()` 一起使用。
- **`MYSQLI_CLIENT_FOUND_ROWS` (`int`)** — 返回匹配的行数，而不是受影响的行数。
- **`MYSQLI_CLIENT_SSL_VERIFY_SERVER_CERT` (`int`)** — 验证服务器证书。
- **`MYSQLI_CLIENT_SSL` (`int`)** — Use SSL (encrypted protocol). This option should not be set by application programs; it is set internally in the MySQL client library.
- **`MYSQLI_CLIENT_COMPRESS` (`int`)** — 使用压缩协议。
- **`MYSQLI_CLIENT_INTERACTIVE` (`int`)** — Allow `interactive_timeout` seconds (instead of `wait_timeout` seconds) of inactivity before closing the connection. The client's session `wait_timeout` variable will be set to the value of the session `interactive_timeout` variable.
- **`MYSQLI_CLIENT_IGNORE_SPACE` (`int`)** — Allow spaces after function names. Makes all functions names reserved words.
- **`MYSQLI_CLIENT_NO_SCHEMA` (`int`)** — Don't allow the `db_name.tbl_name.col_name` syntax.
- **`MYSQLI_CLIENT_MULTI_QUERIES`** — 允许在单个 `mysqli_query()` 调用中进行多个以分号分隔的查询。
- **`MYSQLI_STORE_RESULT` (`int`)** — 使用缓冲的结果集合。值为 `0`。
- **`MYSQLI_STORE_RESULT_COPY_DATA` (`int`)** — 从 PHP 8.1 起，此常量不再有效。在 PHP 8.1 之前，此常量用于将结果从 `mysqlnd` 内部缓冲区复制到要获取的 PHP 变量中。默认情况下，`mysqlnd` 将使用引用逻辑来避免复制和重复保存在内存中的结果。对于某些结果集（例如，包含许多小行的结果集），复制方法可以减少总体内存使用量，因为保存结果的 PHP 变量可能会更早释放。仅适用于 `mysqlnd`。自 PHP 8.4.0 起弃用。
- **`MYSQLI_USE_RESULT` (`int`)** — 使用无缓冲的结果集合。值为 `1`。
- **`MYSQLI_ASSOC` (`int`)** — 列数据以字段名作为数组索引返回至数组中。
- **`MYSQLI_NUM` (`int`)** — Columns are returned into the array having an enumerated index.
- **`MYSQLI_BOTH` (`int`)** — Columns are returned into the array having both a numerical index and the fieldname as the associative index.
- **`MYSQLI_NOT_NULL_FLAG` (`int`)** — 表示字段定义为 `NOT NULL`。
- **`MYSQLI_PRI_KEY_FLAG` (`int`)** — 字段是主键索引的一部分。
- **`MYSQLI_UNIQUE_KEY_FLAG` (`int`)** — 字段是唯一索引的一部分。
- **`MYSQLI_MULTIPLE_KEY_FLAG` (`int`)** — 字段是普通索引的一部分。
- **`MYSQLI_BLOB_FLAG` (`int`)** — 字段定义为 `BLOB`。
- **`MYSQLI_UNSIGNED_FLAG` (`int`)** — 字段定义为 `UNSIGNED`。
- **`MYSQLI_ZEROFILL_FLAG` (`int`)** — 字段定义为 `ZEROFILL`。
- **`MYSQLI_AUTO_INCREMENT_FLAG` (`int`)** — 字段定义为 `AUTO_INCREMENT`。
- **`MYSQLI_TIMESTAMP_FLAG` (`int`)** — 字段定义为 `TIMESTAMP`。
- **`MYSQLI_SET_FLAG` (`int`)** — 字段定义为 `SET`。
- **`MYSQLI_NUM_FLAG` (`int`)** — 字段定义为 `NUMERIC`。
- **`MYSQLI_PART_KEY_FLAG` (`int`)** — 字段是多列索引的一部分。
- **`MYSQLI_GROUP_FLAG` (`int`)** — 字段是 `GROUP BY` 的一部分。
- **`MYSQLI_NO_DEFAULT_VALUE_FLAG` (`int`)** — 列的定义中没有 `DEFAULT` 子句。这不适用于 `NULL` 或 `AUTO_INCREMENT` 列，因为这些列的默认值有 `NULL` 默认值和隐式默认值。
- **`MYSQLI_TYPE_DECIMAL` (`int`)** — 字段定义为 `DECIMAL`.
- **`MYSQLI_TYPE_NEWDECIMAL` (`int`)** — 精度数学 `DECIMAL` 或 `NUMERIC` 字段。
- **`MYSQLI_TYPE_BIT` (`int`)** — 字段定义为 `BIT`。
- **`MYSQLI_TYPE_TINY` (`int`)** — 字段定义为 `TINYINT`。
- **`MYSQLI_TYPE_SHORT` (`int`)** — 字段定义为 `SMALLINT`。
- **`MYSQLI_TYPE_LONG` (`int`)** — 字段定义为 `INT`。
- **`MYSQLI_TYPE_FLOAT` (`int`)** — 字段定义为 `FLOAT`。
- **`MYSQLI_TYPE_DOUBLE` (`int`)** — 字段定义为 `DOUBLE`。
- **`MYSQLI_TYPE_NULL` (`int`)** — 字段定义为 `DEFAULT NULL`。
- **`MYSQLI_TYPE_TIMESTAMP` (`int`)** — 字段定义为 `TIMESTAMP`。
- **`MYSQLI_TYPE_LONGLONG` (`int`)** — 字段定义为 `BIGINT`。
- **`MYSQLI_TYPE_INT24` (`int`)** — 字段定义为 `MEDIUMINT`。
- **`MYSQLI_TYPE_DATE` (`int`)** — 字段定义为 `DATE`。
- **`MYSQLI_TYPE_TIME` (`int`)** — 字段定义为 `TIME`。
- **`MYSQLI_TYPE_DATETIME` (`int`)** — 字段定义为 `DATETIME`。
- **`MYSQLI_TYPE_YEAR` (`int`)** — 字段定义为 `YEAR`。
- **`MYSQLI_TYPE_NEWDATE` (`int`)** — 字段定义为 `DATE`。
- **`MYSQLI_TYPE_INTERVAL` (`int`)** — `MYSQLI_TYPE_ENUM` 的别名。自 PHP 8.4.0 起移除。
- **`MYSQLI_TYPE_ENUM` (`int`)** — 字段定义为 `ENUM`。
- **`MYSQLI_TYPE_SET` (`int`)** — 字段定义为 `SET`。
- **`MYSQLI_TYPE_TINY_BLOB` (`int`)** — 字段定义为 `TINYBLOB`。
- **`MYSQLI_TYPE_MEDIUM_BLOB` (`int`)** — 字段定义为 `MEDIUMBLOB`。
- **`MYSQLI_TYPE_LONG_BLOB` (`int`)** — 字段定义为 `LONGBLOB`。
- **`MYSQLI_TYPE_BLOB` (`int`)** — 字段定义为 `BLOB`。
- **`MYSQLI_TYPE_VAR_STRING` (`int`)** — 字段定义为 `VARCHAR`。
- **`MYSQLI_TYPE_STRING` (`int`)** — 字段定义为 `CHAR` 或 `BINARY`。
- **`MYSQLI_TYPE_CHAR` (`int`)** — 字段定义为 `TINYINT`。对于 `CHAR`，参阅 `MYSQLI_TYPE_STRING`。
- **`MYSQLI_TYPE_GEOMETRY` (`int`)** — 字段定义为 `GEOMETRY`。
- **`MYSQLI_TYPE_JSON` (`int`)** — 字段定义为 `JSON`。仅对 mysqlnd 和 MySQL 5.7.8 及更高版本有效。
- **`MYSQLI_TYPE_VECTOR` (`int`)** — 定义该字段为 `VECTOR` 类型。
- **`MYSQLI_NEED_DATA` (`int`)** — More data available for bind variable.
- **`MYSQLI_ENUM_FLAG` (`int`)** — 字段定义为 `ENUM`。
- **`MYSQLI_BINARY_FLAG` (`int`)** — 字段定义为 `BINARY`。
- **`MYSQLI_CURSOR_TYPE_FOR_UPDATE` (`int`)** — 自 PHP 8.4.0 起移除。
- **`MYSQLI_CURSOR_TYPE_NO_CURSOR` (`int`)**
- **`MYSQLI_CURSOR_TYPE_READ_ONLY` (`int`)**
- **`MYSQLI_CURSOR_TYPE_SCROLLABLE` (`int`)** — 自 PHP 8.4.0 起移除。
- **`MYSQLI_STMT_ATTR_CURSOR_TYPE` (`int`)**
- **`MYSQLI_STMT_ATTR_PREFETCH_ROWS` (`int`)** — 自 PHP 8.4.0 起移除。
- **`MYSQLI_STMT_ATTR_UPDATE_MAX_LENGTH` (`int`)**
- **`MYSQLI_SET_CHARSET_NAME` (`int`)**
- **`MYSQLI_REPORT_INDEX` (`int`)** — 如果在查询中没有使用索引或使用了坏索引，则会报告。
- **`MYSQLI_REPORT_ERROR` (`int`)** — 报告来自 mysqli 函数调用的错误。
- **`MYSQLI_REPORT_STRICT` (`int`)** — 抛出 `mysqli_sql_exception` 错误而不是警告。
- **`MYSQLI_REPORT_ALL` (`int`)** — 启用所有选项（报告所有）。
- **`MYSQLI_REPORT_OFF` (`int`)** — 关闭报告功能。
- **`MYSQLI_DEBUG_TRACE_ENABLED` (`int`)** — 如果 `mysqli_debug()` 功能启用，设置为 1。
- **`MYSQLI_SERVER_PUBLIC_KEY` (`int`)**
- **`MYSQLI_REFRESH_GRANT` (`int`)** — 刷新授权表。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_LOG` (`int`)** — 刷新日志，就像执行 `FLUSH LOGS` SQL 语句。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_TABLES` (`int`)** — 刷新表缓存，就像执行 `FLUSH TABLES` SQL 语句。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_HOSTS` (`int`)** — 刷新主机缓存，就像执行刷新 `FLUSH HOSTS` SQL 语句一样。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_REPLICA` (`int`)** — `MYSQLI_REFRESH_SLAVE` 常量的别名。自 PHP 8.1.0 起可用。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_STATUS` (`int`)** — 重置状态变量，如执行 `FLUSH STATUS` SQL 语句。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_THREADS` (`int`)** — 刷新线程缓存。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_SLAVE` (`int`)** — 在从复制服务器上：重置主服务器信息，并重新启动从服务器。就像执行 `RESET SLAVE` SQL 语句一样。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_MASTER` (`int`)** — 在主复制服务器上：删除二进制日志索引中列出的二进制日志文件，并截断索引文件。就像执行 `RESET MASTER` SQL 语句一样。自 PHP 8.4.0 起弃用。
- **`MYSQLI_REFRESH_BACKUP_LOG` (`int`)** — 关闭并重新打开备份日志文件。自 PHP 8.4.0 起弃用。
- **`MYSQLI_TRANS_COR_AND_CHAIN` (`int`)** — 追加“AND CHAIN”到 `mysqli_commit()` 或 `mysqli_rollback()`。
- **`MYSQLI_TRANS_COR_AND_NO_CHAIN` (`int`)** — 追加“AND NO CHAIN”到 `mysqli_commit()` 或 `mysqli_rollback()`。
- **`MYSQLI_TRANS_COR_RELEASE` (`int`)** — 追加“RELEASE”到 `mysqli_commit()` 或 `mysqli_rollback()`。
- **`MYSQLI_TRANS_COR_NO_RELEASE` (`int`)** — 追加“NO RELEASE”到 `mysqli_commit()` 或 `mysqli_rollback()`。
- **`MYSQLI_TRANS_START_READ_ONLY` (`int`)** — 使用 `mysqli_begin_transaction()` 作为“START TRANSACTION READ ONLY”启动事务。
- **`MYSQLI_TRANS_START_READ_WRITE` (`int`)** — 使用 `mysqli_begin_transaction()` 作为“START TRANSACTION READ WRITE”启动事务。
- **`MYSQLI_TRANS_START_WITH_CONSISTENT_SNAPSHOT` (`int`)** — “START TRANSACTION WITH CONSISTENT SNAPSHOT” 启动事务。
- **`MYSQLI_CLIENT_SSL_DONT_VERIFY_SERVER_CERT` (`int`)** — 需要 MySQL 5.6.5 及其以上版本。
- **`MYSQLI_IS_MARIADB` (`bool`)** — mysqli 扩展是否针对 MariaDB 客户端库编译。自 PHP 8.1.2 起有效。
- **`MYSQLI_ASYNC` (`int`)** — 查询是异步执行，不会立即返回结果集。仅适用于 `mysqlnd`。
- **`MYSQLI_ON_UPDATE_NOW_FLAG` (`int`)** — 如果更新了某个字段，将获取当前时间值。
