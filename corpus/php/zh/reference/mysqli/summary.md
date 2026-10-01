---
id: "zh-php-guide-mysqli-summary"
language: "php"
lang: "zh"
category: "guide"
name: "mysqli.summary"
title: "MySQLi 扩展的函数概述"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.summary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MySQLi 扩展的函数概述

| mysqli 类 |
| --- |
| 面向对象接口 | 面向过程接口 | 别名 (勿使用) | 描述 |
| *属性* |
| $mysqli::affected_rows | `mysqli_affected_rows()` | N/A | 获取上次 Mysql 操作受影响的行数 |
| $mysqli::client_info | `mysqli_get_client_info()` | N/A | 返回 Mysql 客户端版本信息，类型为 string |
| $mysqli::client_version | `mysqli_get_client_version()` | N/A | 返回 Mysql 客户端版本信息，类型为 integer |
| $mysqli::connect_errno | `mysqli_connect_errno()` | N/A | 返回最后一次连接数据库的错误代码 |
| $mysqli::connect_error | `mysqli_connect_error()` | N/A | 返回最后一次连接数据库的错误描述，类型为字符串 |
| $mysqli::errno | `mysqli_errno()` | N/A | 返回最近一次函数调用所产生的错误代码 |
| $mysqli::error | `mysqli_error()` | N/A | 返回最近一次错误代码的描述，类型是字符串 |
| $mysqli::field_count | `mysqli_field_count()` | N/A | 返回最近一次查询中，包含的列的数量 |
| $mysqli::host_info | `mysqli_get_host_info()` | N/A | 返回字符串，表示数据库连接所使用的类型 |
| $mysqli::protocol_version | `mysqli_get_proto_info()` | N/A | 返回使用的 MySQL 协议的版本信息 |
| $mysqli::server_info | `mysqli_get_server_info()` | N/A | 返回 MySQL 服务器的版本 |
| $mysqli::server_version | `mysqli_get_server_version()` | N/A | 返回 MySQL 服务器的版本，类型为 integer |
| $mysqli::info | `mysqli_info()` | N/A | 获取最近一次数据库查询的信息 |
| $mysqli::insert_id | `mysqli_insert_id()` | N/A | 返回上次查询中所使用的自动生成的 ID |
| $mysqli::sqlstate | `mysqli_sqlstate()` | N/A | 返回上次 MySQL 操作的数据库状态错误（SQLSTATE error） |
| $mysqli::warning_count | `mysqli_warning_count()` | N/A | 根据数据库链接，返回最后一次数据库查询内警告的数量 |
| *Methods* |
| `mysqli::autocommit()` | `mysqli_autocommit()` | N/A | 打开或关闭数据库的自动提交（auto-committing）功能 |
| `mysqli::change_user()` | `mysqli_change_user()` | N/A | 更改指定数据库连接所使用的用户 |
| `mysqli::character_set_name()` | `mysqli_character_set_name()` | N/A | 返回数据库连接的默认字符集 |
| `mysqli::close()` | `mysqli_close()` | N/A | 关闭先前打开的数据库连接 |
| `mysqli::commit()` | `mysqli_commit()` | N/A | 提交当前的数据库事务 |
| `mysqli::__construct()` | `mysqli_connect()` | N/A | 打开新连接到 MySQL 服务器［注意：静态方法] |
| `mysqli::debug()` | `mysqli_debug()` | N/A | 执行调试操作 |
| `mysqli::dump_debug_info()` | `mysqli_dump_debug_info()` | N/A | 将调试信息转储到日志中 |
| `mysqli::get_charset()` | `mysqli_get_charset()` | N/A | 返回包含字符集信息的对象 |
| `mysqli::get_connection_stats()` | `mysqli_get_connection_stats()` | N/A | 返回客户端连接的统计信息。仅可用于 mysqlnd。 |
| `mysqli::get_client_info()` | `mysqli_get_client_info()` | N/A | 返回 MySQL 客户端版本的字符串信息 |
| N/A | `mysqli_get_client_stats()` | N/A | 返回每个客户端进程的统计信息。 仅可用于 mysqlnd。 |
| `mysqli::get_server_info()` | `mysqli_get_server_info()` | N/A | 返回 MySQLi 连接上的 MySQL 服务器的版本字符串 |
| `mysqli::get_warnings()` | `mysqli_get_warnings()` | N/A | 文档暂缺 |
| `mysqli::init()` | `mysqli_init()` | N/A | 初始化 MySQLi，返回对象，可供 mysqli_real_connect 使用。 |
| `mysqli::kill()` | `mysqli_kill()` | N/A | 请求服务器杀死一个 MySQL 线程 |
| `mysqli::more_results()` | `mysqli_more_results()` | N/A | 检查多语句查询内是否还有更多查询结果 |
| `mysqli::multi_query()` | `mysqli_multi_query()` | N/A | 在数据库内执行多语句查询 |
| `mysqli::next_result()` | `mysqli_next_result()` | N/A | 从 multi_query 中准备下一个结果集 |
| `mysqli::options()` | `mysqli_options()` | `mysqli_set_opt()` | 设置选项 |
| `mysqli::ping()` | `mysqli_ping()` | N/A | Ping 服务器链接，如果链接已经断开，尝试重连 |
| `mysqli::prepare()` | `mysqli_prepare()` | N/A | 准备（prepare）需要执行的 SQL 语句 |
| `mysqli::query()` | `mysqli_query()` | N/A | 在数据库内执行查询 |
| `mysqli::real_connect()` | `mysqli_real_connect()` | N/A | 打开一个 MySQL 服务端的连接 |
| `mysqli::real_escape_string()`, `mysqli::escape_string()` | `mysqli_real_escape_string()` | `mysqli_escape_string()` | 转义特殊字符，用于 SQL 语句，该转换会考虑连接中当前的字符集 |
| `mysqli::real_query()` | `mysqli_real_query()` | N/A | 执行 SQL 查询 |
| `mysqli::refresh()` | `mysqli_refresh()` | N/A | 刷新表或缓存，或重置复制（replication）服务器信息 |
| `mysqli::rollback()` | `mysqli_rollback()` | N/A | 回滚当前事务 |
| `mysqli::select_db()` | `mysqli_select_db()` | N/A | 为数据库查询设置默认数据库 |
| `mysqli::set_charset()` | `mysqli_set_charset()` | N/A | 设置默认的客户端字符集 |
| `mysqli::ssl_set()` | `mysqli_ssl_set()` | N/A | 使用 SSL 建立安全连接 |
| `mysqli::stat()` | `mysqli_stat()` | N/A | 获取当前系统状态 |
| `mysqli::stmt_init()` | `mysqli_stmt_init()` | N/A | 初始化语句并且返回供 mysqli_stmt_prepare 使用的对象 |
| `mysqli::store_result()` | `mysqli_store_result()` | N/A | 传输最后一个查询的结果集 |
| `mysqli::thread_id()` | `mysqli_thread_id()` | N/A | 返回当前连接的线程ID |
| `mysqli::thread_safe()` | `mysqli_thread_safe()` | N/A | 返回是否设定了线程安全 |
| `mysqli::use_result()` | `mysqli_use_result()` | N/A | 初始化一个结果集的取回 |

| MySQL_STMT |
| --- |
| 面向对象接口 | 面向过程接口 | 别名 (勿使用) | 描述 |
| *属性* |
| $mysqli_stmt::affected_rows | `mysqli_stmt_affected_rows()` | N/A | 返回受上次执行语句影响的总行数：修改、删除或插入 |
| $mysqli_stmt::errno | `mysqli_stmt_errno()` | N/A | 返回最近一次语句调用的错误代码 |
| $mysqli_stmt::error | `mysqli_stmt_error()` | N/A | 返回最后一条语句错误的字符串描述 |
| $mysqli_stmt::field_count | `mysqli_stmt_field_count()` | N/A | 返回语句内的字段数量 - 文档暂缺 |
| $mysqli_stmt::insert_id | `mysqli_stmt_insert_id()` | N/A | 获取上次 INSERT 操作生成的ID |
| $mysqli_stmt::num_rows | `mysqli_stmt_num_rows()` | N/A | 返回语句结果集中的行数 |
| $mysqli_stmt::param_count | `mysqli_stmt_param_count()` | N/A | 返回语句中参数的数量 |
| $mysqli_stmt::sqlstate | `mysqli_stmt_sqlstate()` | N/A | 返回上次执行 SQL 语句的 SQLSTATE 错误代码 |
| *方法* |
| `mysqli_stmt::attr_get()` | `mysqli_stmt_attr_get()` | N/A | 用于获取语句属性的当前值 |
| `mysqli_stmt::attr_set()` | `mysqli_stmt_attr_set()` | N/A | 用于修改 prepared 语句的行为 |
| `mysqli_stmt::bind_param()` | `mysqli_stmt_bind_param()` | N/A | 绑定变量参数到 prepared 语句 |
| `mysqli_stmt::bind_result()` | `mysqli_stmt_bind_result()` | N/A | 绑定变量参数到 prepared 语句，用于结果存储 |
| `mysqli_stmt::close()` | `mysqli_stmt_close()` | N/A | 关闭 prepared 语句 |
| `mysqli_stmt::data_seek()` | `mysqli_stmt_data_seek()` | N/A | 定位到结果集中的任意行 |
| `mysqli_stmt::execute()` | `mysqli_stmt_execute()` | `mysqli_execute()` | 执行 prepared 查询 |
| `mysqli_stmt::fetch()` | `mysqli_stmt_fetch()` | N/A | 获取 prepared 语句中的结果，到指定变量中 |
| `mysqli_stmt::free_result()` | `mysqli_stmt_free_result()` | N/A | 释放给定语句处理存储的结果集所占内存 |
| `mysqli_stmt::get_result()` | `mysqli_stmt_get_result()` | N/A | 获取 prepared 语句中的结果。 仅可用于 mysqlnd。 |
| `mysqli_stmt::get_warnings()` | `mysqli_stmt_get_warnings()` | N/A | 暂无文档 |
| `mysqli_stmt::more_results()` | `mysqli_stmt_more_results()` | N/A | 检查多语句查询中是否还有更多结果 |
| `mysqli_stmt::next_result()` | `mysqli_stmt_next_result()` | N/A | 读取多语句查询中下一条结果 |
| `mysqli_stmt::num_rows()` | `mysqli_stmt_num_rows()` | N/A | 参见 $mysqli_stmt::num_rows 中的属性 |
| `mysqli_stmt::prepare()` | `mysqli_stmt_prepare()` | N/A | 准备执行 SQL 语句 |
| `mysqli_stmt::reset()` | `mysqli_stmt_reset()` | N/A | 重置 prepare 语句 |
| `mysqli_stmt::result_metadata()` | `mysqli_stmt_result_metadata()` | N/A | 返回 prepare 语句结果集内的元数据 |
| `mysqli_stmt::send_long_data()` | `mysqli_stmt_send_long_data()` | N/A | 以块形式发送数据 |
| `mysqli_stmt::store_result()` | `mysqli_stmt_store_result()` | N/A | 从 prepare 语句中传输储存结果集 |

| mysqli_result |
| --- |
| 面向对象接口 | 面向过程接口 | 别名 (勿使用) | 描述 |
| *属性* |
| $mysqli_result::current_field | `mysqli_field_tell()` | N/A | 获取当前字段在结果集指针中的开始位置 |
| $mysqli_result::field_count | `mysqli_num_fields()` | N/A | 获取结果中字段数量 |
| $mysqli_result::lengths | `mysqli_fetch_lengths()` | N/A | 返回结果集中当前行的列长度 |
| $mysqli_result::num_rows | `mysqli_num_rows()` | N/A | 获取结果中行的数量 |
| *方法* |
| `mysqli_result::data_seek()` | `mysqli_data_seek()` | N/A | 将结果中的结果指针调整到任意行 |
| `mysqli_result::fetch_all()` | `mysqli_fetch_all()` | N/A | 抓取所有的结果行并且以关联数据，数值索引数组，或者两者皆有的方式返回结果集。 仅可用于 mysqlnd。 |
| `mysqli_result::fetch_array()` | `mysqli_fetch_array()` | N/A | 以一个关联数组，数值索引数组，或者两者皆有的方式抓取一行结果 |
| `mysqli_result::fetch_assoc()` | `mysqli_fetch_assoc()` | N/A | 以一个关联数组方式抓取一行结果 |
| `mysqli_result::fetch_column()` | `mysqli_fetch_column()` | N/A | 从结果集的下一行中获取单个列 |
| `mysqli_result::fetch_field_direct()` | `mysqli_fetch_field_direct()` | N/A | 抓取一个单字段的元数据 |
| `mysqli_result::fetch_field()` | `mysqli_fetch_field()` | N/A | 返回结果集中的下一个字段 |
| `mysqli_result::fetch_fields()` | `mysqli_fetch_fields()` | N/A | 返回一个代表结果集字段的对象数组 |
| `mysqli_result::fetch_object()` | `mysqli_fetch_object()` | N/A | 以一个对象的方式返回一个结果集中的当前行 |
| `mysqli_result::fetch_row()` | `mysqli_fetch_row()` | N/A | 以一个枚举数组方式返回一行结果 |
| `mysqli_result::field_seek()` | `mysqli_field_seek()` | N/A | 设置结果指针到特定的字段开始位置 |
| `mysqli_result::free()`, mysqli_result::close, mysqli_result::free_result | `mysqli_free_result()` | N/A | 释放与一个结果集相关的内存 |

| MySQL_Driver |
| --- |
| 面向对象接口 | 面向过程接口 | 别名 (勿使用) | 描述 |
| *属性* |
| $mysqli_driver::mysqli_report | `mysqli_report()` | N/A | 设置 mysqli 错误报告模式 |
| *方法* |
| `mysqli_driver::embedded_server_end()` | `mysqli_embedded_server_end()` | N/A | 文档暂缺 |
| `mysqli_driver::embedded_server_start()` | `mysqli_embedded_server_start()` | N/A | 文档暂缺 |

> 提供函数的别名，目的仅为向下兼容。不要在新项目中使用！
