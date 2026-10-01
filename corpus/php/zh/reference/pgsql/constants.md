---
id: "zh-php-guide-pgsql-constants"
language: "php"
lang: "zh"
category: "guide"
name: "pgsql.constants"
title: "预定义常量"
module: "pgsql"
source_url: "https://www.php.net/manual/zh/pgsql.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`PGSQL_LIBPQ_VERSION` (`string`)** — 仅包含数字和小数点的简短 libpq 版本号。
- **`PGSQL_LIBPQ_VERSION_STR` (`string`)** — PHP 8.0.0 之前为包含编译信息的长 libpq 版本号。自 PHP 8.0.0 起，此值与 `PGSQL_LIBPQ_VERSION` 相同，并且弃用 `PGSQL_LIBPQ_VERSION_STR`。
- **`PGSQL_ASSOC` (`int`)** — 传递给 `pg_fetch_array()`。返回字段名和值的关联数组。
- **`PGSQL_NUM` (`int`)** — 传递给 `pg_fetch_array()`。返回字段编号和值的数字索引数组。
- **`PGSQL_BOTH` (`int`)** — 传递给 `pg_fetch_array()`。返回字段值数组，这些字段值既有数字索引（按字段编号）也有关联索引（按字段名称）。
- **`PGSQL_CONNECT_FORCE_NEW` (`int`)** — 传递给 `pg_connect()` 以强制创建新连接，而不是重新使用现有的相同连接。
- **`PGSQL_CONNECT_ASYNC` (`int`)** — 传递给 `pg_connect()` 以创建异步连接。
- **`PGSQL_CONNECTION_AUTH_OK` (`int`)**
- **`PGSQL_CONNECTION_AWAITING_RESPONSE` (`int`)**
- **`PGSQL_CONNECTION_BAD` (`int`)** — 由 `pg_connection_status()` 返回，表示数据库连接处于无效状态。
- **`PGSQL_CONNECTION_MADE` (`int`)**
- **`PGSQL_CONNECTION_OK` (`int`)** — 由 `pg_connection_status()` 返回，表示数据库连接处于有效状态。
- **`PGSQL_CONNECTION_SETENV` (`int`)**
- **`PGSQL_CONNECTION_SSL_STARTUP` (`int`)**
- **`PGSQL_CONNECTION_STARTED` (`int`)**
- **`PGSQL_SEEK_SET` (`int`)** — 传递给 `pg_lo_seek()`。寻找操作是从对象的开头开始的。
- **`PGSQL_SEEK_CUR` (`int`)** — 传递给 `pg_lo_seek()`。寻找操作是从当前位置开始的。
- **`PGSQL_SEEK_END` (`int`)** — 传递给 `pg_lo_seek()`。寻找操作是从对象的末尾开始。
- **`PGSQL_EMPTY_QUERY` (`int`)** — 由 `pg_result_status()` 返回。发送到服务器的字符串为空。
- **`PGSQL_COMMAND_OK` (`int`)** — 由 `pg_result_status()` 返回。成功完成命令不返回任何数据。
- **`PGSQL_TUPLES_OK` (`int`)** — 由 `pg_result_status()` 返回。成功完成一个返回数据的命令（例如 `SELECT` 或 `SHOW`）。
- **`PGSQL_TUPLES_CHUNK` (`int`)** — 由 `pg_result_status()` 返回。表示命令执行完毕，以分块模式返回数据。当设置了 `pg_set_chunked_rows_size()` 时，将返回 `SELECT` 命令。结果集分为多个块，每个块包含预定义的行数。自 PHP 8.4.0 和 libpq 17 起可用。
- **`PGSQL_COPY_OUT` (`int`)** — 由 `pg_result_status()` 返回。开始复制（从服务器）数据传输。
- **`PGSQL_COPY_IN` (`int`)** — 由 `pg_result_status()` 返回。开始复制（到服务器）数据传输。
- **`PGSQL_BAD_RESPONSE` (`int`)** — 由 `pg_result_status()` 返回。无法理解服务器的响应。
- **`PGSQL_NONFATAL_ERROR` (`int`)** — 由 `pg_result_status()` 返回。发生非致命错误（通知或警告）。
- **`PGSQL_FATAL_ERROR` (`int`)** — 由 `pg_result_status()` 返回。发生致命错误。
- **`PGSQL_TRANSACTION_IDLE` (`int`)** — 由 `pg_transaction_status()` 返回。当前连接处于空闲状态，不在事务中。
- **`PGSQL_TRANSACTION_ACTIVE` (`int`)** — 由 `pg_transaction_status()` 返回。连接正在执行命令。查询（query）已通过连接发送但尚未完成。
- **`PGSQL_TRANSACTION_INTRANS` (`int`)** — 由 `pg_transaction_status()` 返回。连接处于空闲状态且处于事务块中。
- **`PGSQL_TRANSACTION_INERROR` (`int`)** — 由 `pg_transaction_status()` 返回。连接处于空闲状态且处于失败的事务块中。
- **`PGSQL_TRANSACTION_UNKNOWN` (`int`)** — 由 `pg_transaction_status()` 返回。连接损坏。
- **`PGSQL_DIAG_SEVERITY` (`int`)** — 传递给 `pg_result_error_field()`。严重程度；字段内容是 `ERROR`、`FATAL` 或 `PANIC`（在 error 消息中）或 `WARNING`、`NOTICE`、`DEBUG`、`INFO` 或 `LOG`（在 notice 消息中），或其中之一的本地化翻译。始终存在。
- **`PGSQL_DIAG_SQLSTATE` (`int`)** — 传递给 `pg_result_error_field()`。error 的 SQLSTATE 代码。SQLSTATE 代码标识已发生的错误类型；前端应用程序可以使用它来执行特定操作（例如错误处理）以响应特定的数据库错误。该字段不可本地化，并且始终存在。
- **`PGSQL_DIAG_MESSAGE_PRIMARY` (`int`)** — 传递给 `pg_result_error_field()`。 人可读的主要错误消息（通常是一行）。始终存在。
- **`PGSQL_DIAG_MESSAGE_DETAIL` (`int`)** — 传递给 `pg_result_error_field()`。 详细信息：可选的次要错误消息，其中包含有关该问题的更多详细信息。可能会有多行。
- **`PGSQL_DIAG_MESSAGE_HINT` (`int`)** — 传递给 `pg_result_error_field()`。 提示：关于如何处理该问题的可选建议。这与细节不同，因为它提供建议（可能不合适）而不是确凿的事实。可能会有多行。
- **`PGSQL_DIAG_STATEMENT_POSITION` (`int`)** — 传递给 `pg_result_error_field()`。 包含十进制整数的字符串，指示错误游标位置作为原始语句字符串的索引。第一个字符的索引为 1，位置以字符而不是字节为单位进行测量。
- **`PGSQL_DIAG_INTERNAL_POSITION` (`int`)** — 传递给 `pg_result_error_field()`。该字段的定义与 `PG_DIAG_STATEMENT_POSITION` 字段相同，但当光标位置引用内部生成的命令（而不是客户端提交的命令）时，会使用该常量。 当此字段出现时，`PG_DIAG_INTERNAL_QUERY` 字段将始终出现。
- **`PGSQL_DIAG_INTERNAL_QUERY` (`int`)** — 传递给 `pg_result_error_field()`。 失败的内部生成命令的文本。例如，这可能是由 PL/pgSQL 函数发出的 SQL 查询。
- **`PGSQL_DIAG_CONTEXT` (`int`)** — 传递给 `pg_result_error_field()`。 错误发生时的上下文指示。目前包括活动过程语言函数和内部生成的查询调用堆栈回溯。跟踪是每行一个条目，最近的条目在前。
- **`PGSQL_DIAG_SOURCE_FILE` (`int`)** — 传递给 `pg_result_error_field()`。 报告错误的 PostgreSQL 源代码位置的文件名。
- **`PGSQL_DIAG_SOURCE_LINE` (`int`)** — 传递给 `pg_result_error_field()`。 报告错误的 PostgreSQL 源代码位置的行号。
- **`PGSQL_DIAG_SOURCE_FUNCTION` (`int`)** — 传递给 `pg_result_error_field()`。 报告错误的 PostgreSQL 源代码函数的名称。
- **`PGSQL_DIAG_SCHEMA_NAME` (`int`)** — 自 PHP 7.3.0 起可用。
- **`PGSQL_DIAG_TABLE_NAME` (`int`)** — 自 PHP 7.3.0 起可用。
- **`PGSQL_DIAG_COLUMN_NAME` (`int`)** — 自 PHP 7.3.0 起可用。
- **`PGSQL_DIAG_DATATYPE_NAME` (`int`)** — 自 PHP 7.3.0 起可用。
- **`PGSQL_DIAG_CONSTRAINT_NAME` (`int`)** — 自 PHP 7.3.0 起可用。
- **`PGSQL_ERRORS_TERSE` (`int`)** — 传递给 `pg_set_error_verbosity()`。指定返回的消息，仅包括严重性、主要文本和位置；通常适合单行。
- **`PGSQL_ERRORS_DEFAULT` (`int`)** — 传递给 `pg_set_error_verbosity()`。默认模式生成的消息包括上述内容以及所有的详细信息、提示或上下文字段（这些可能会有多行）。
- **`PGSQL_ERRORS_VERBOSE` (`int`)** — 传递给 `pg_set_error_verbosity()`。详细模式包括所有可用字段。
- **`PGSQL_ERRORS_SQLSTATE` (`int`)** — 传递给 `pg_set_error_verbosity()`。仅包括错误严重性和 `SQLSTATE` 错误代码。如果没有可用的错误代码，则输出类似于 `PGSQL_ERRORS_TERSE` 模式。在 PostgreSQL 11.1 之前，输出始终与 `PGSQL_ERRORS_TERSE` 模式相同。
- **`PGSQL_NOTICE_LAST` (`int`)** — 用于 `pg_last_notice()`。自 PHP 7.1.0 起可用。
- **`PGSQL_NOTICE_ALL` (`int`)** — 用于 `pg_last_notice()`。自 PHP 7.1.0 起可用。
- **`PGSQL_NOTICE_CLEAR` (`int`)** — 用于 `pg_last_notice()`。自 PHP 7.1.0 起可用。
- **`PGSQL_STATUS_LONG` (`int`)** — 传递给 `pg_result_status()`。表示需要的数字结果代码。
- **`PGSQL_STATUS_STRING` (`int`)** — 传递给 `pg_result_status()`。表示需要的文本结果命令标记。
- **`PGSQL_CONV_IGNORE_DEFAULT` (`int`)** — 传递给 `pg_convert()`。转换期间忽略表中的默认值。
- **`PGSQL_CONV_FORCE_NULL` (`int`)** — 传递给 `pg_convert()`。使用 SQL `NULL` 代替空 `string`。
- **`PGSQL_CONV_IGNORE_NOT_NULL` (`int`)** — 传递给 `pg_convert()`。不会将 `null` 转换为 SQL `NOT NULL` 列。
- **`PGSQL_DML_NO_CONV` (`int`)** — 传递给 `pg_insert()`、`pg_select()`、`pg_update()` 和 `pg_delete()`。所有参数按原样传递。如果参数包含用户提供的数据，则需要使用 `pg_escape_string()` 手动转义。
- **`PGSQL_DML_EXEC` (`int`)** — 传递给 `pg_insert()`、`pg_select()`、`pg_update()` 和 `pg_delete()`。通过这些函数执行查询。
- **`PGSQL_DML_ASYNC` (`int`)** — 传递给 `pg_insert()`、`pg_select()`、`pg_update()` 和 `pg_delete()`。通过这些函数执行异步查询。
- **`PGSQL_DML_STRING` (`int`)** — 传递给 `pg_insert()`、`pg_select()`、`pg_update()` 和 `pg_delete()`。返回执行的查询字符串。
- **`PGSQL_DML_ESCAPE` (`int`)** — 传递给 `pg_insert()`、`pg_select()`、`pg_update()` 和 `pg_delete()`。将转义应用于所有参数，而不是在内部调用 `pg_convert()`。此选项省略元数据查找。查询可能与 `pg_query()` 和 `pg_send_query()` 一样快。
- **`PGSQL_POLLING_FAILED` (`int`)** — 由 `pg_connect_poll()` 返回，表示尝试连接失败。
- **`PGSQL_POLLING_READING` (`int`)** — 由 `pg_connect_poll()` 返回，表示该连接正在等待 PostgreSQL 套接字可读。
- **`PGSQL_POLLING_WRITING` (`int`)** — 由 `pg_connect_poll()` 返回，表示该连接正在等待 PostgreSQL 套接字可写。
- **`PGSQL_POLLING_OK` (`int`)** — 由 `pg_connect_poll()` 返回，表示连接已准备就绪，可以使用。
- **`PGSQL_POLLING_ACTIVE` (`int`)** — 由 `pg_connect_poll()` 返回，表示该连接当前处于活动状态。
- **`PGSQL_DIAG_SEVERITY_NONLOCALIZED` (`int`)** — 严重程度；字段内容是 ERROR、FATAL 或 PANIC（在错误消息中）或 WARNING、NOTICE、DEBUG、INFO 或 LOG（在通知消息中）。这与 PG_DIAG_SEVERITY 字段相同，只是内容从未本地化。这仅存在于 9.6 及更高版本/PHP 7.3.0 及更高版本中。
- **`PGSQL_SHOW_CONTEXT_NEVER` (`int`)** — 跟 `pg_set_error_context_visibility()` 一起使用，上下文永远不会显示。自 PHP 8.3.0 起可用。
- **`PGSQL_SHOW_CONTEXT_ERRORS` (`int`)** — 跟 `pg_set_error_context_visibility()` 一起使用，上下文字段仅包含在错误消息中。这是默认行为。自 PHP 8.3.0 起可用。
- **`PGSQL_SHOW_CONTEXT_ALWAYS` (`int`)** — 跟 `pg_set_error_context_visibility()` 一起使用，上下文字段包含在 error、notice 和 warning 消息中。自 PHP 8.3.0 起可用。
- **`PGSQL_TRACE_SUPPRESS_TIMESTAMPS` (`int`)** — 跟 `pg_trace()` 一起使用，时间戳不包含在跟踪消息中。自 PHP 8.4.20 起可用。
- **`PGSQL_TRACE_REGRESS_MODE` (`int`)** — 跟 `pg_trace()` 一起使用，比如 OID 等字段包含在跟踪消息中。自 PHP 8.3.0 起可用。
