---
id: "zh-php-guide-pdo-constants"
language: "php"
lang: "zh"
category: "guide"
name: "pdo.constants"
title: "预定义常量"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

  

## 游标

另见 `PDO::ATTR_CURSOR_NAME`。

- **`PDO::FETCH_ORI_NEXT` (`int`)** — 获取结果集的下一行。仅对可滚动游标有效。
- **`PDO::FETCH_ORI_PRIOR` (`int`)** — 获取结果集的上一行。仅对可滚动游标有效。
- **`PDO::FETCH_ORI_FIRST` (`int`)** — 获取结果集的第一行。仅对可滚动游标有效。
- **`PDO::FETCH_ORI_LAST` (`int`)** — 获取结果集的最后一行。仅对可滚动游标有效。
- **`PDO::FETCH_ORI_ABS` (`int`)** — 按行号从结果集获取指定行。仅对可滚动游标有效。
- **`PDO::FETCH_ORI_REL` (`int`)** — 根据游标在结果集的当前位置，按相对位置获取指定行。仅对可滚动游标有效。
- **`PDO::CURSOR_FWDONLY` (`int`)** — 创建带只进游标的 `PDOStatement` 对象。这是默认游标选项，因为它是 PHP 中最快且最常见的数据访问模式。
- **`PDO::CURSOR_SCROLL` (`int`)** — 创建带滚动游标的 `PDOStatement` 对象。传递 `PDO::FETCH_ORI_*` 常量以控制从结果集获取的行。

## 其它常量

- **`PDO::PARAM_BOOL` (`int`)** — 表示 bool 数据类型。
- **`PDO::PARAM_NULL` (`int`)** — 表示 SQL NULL 数据类型。
- **`PDO::PARAM_INT` (`int`)** — 表示 SQL INTEGER 数据类型
- **`PDO::PARAM_STR` (`int`)** — 表示 SQL CHAR、VARCHAR 或其它字符串类型。
- **`PDO::PARAM_STR_NATL` (`int`)** — 表示字符使用的是国家字符集（national character set）的 flag。 — 自 PHP 7.2.0 起可用
- **`PDO::PARAM_STR_CHAR` (`int`)** — 表示字符使用的是常规字符集（regular character set）的 flag。 — 自 PHP 7.2.0 起可用
- **`PDO::PARAM_LOB` (`int`)** — 表示 SQL 大对象数据类型。
- **`PDO::PARAM_STMT` (`int`)** — 表示记录集类型。目前没有任何驱动程序支持。
- **`PDO::PARAM_INPUT_OUTPUT` (`int`)** — 指定参数是存储过程的 INOUT 参数。该常量必须与某个 `PDO::PARAM_{*}` 常量进行按位或运算。
- **`PDO::ATTR_AUTOCOMMIT` (`int`)** — 如果值为 `false`，PDO 将尝试禁用自动提交，从而使连接开始一个事务。
- **`PDO::ATTR_PREFETCH` (`int`)** — 设置预取大小来为你的应用平衡速度和内存使用。并非所有的数据库/驱动组合都支持设置预取大小。较大的预取大小导致性能提高的同时也会占用更多的内存。
- **`PDO::ATTR_TIMEOUT` (`int`)** — 设置连接数据库的超时秒数。
- **`PDO::ATTR_ERRMODE` (`int`)** — 关于此属性的更多信息请参见错误及错误处理部分。
- **`PDO::ATTR_SERVER_VERSION` (`int`)** — 此为只读属性；返回 PDO 所连接的数据库服务的版本信息。
- **`PDO::ATTR_CLIENT_VERSION` (`int`)** — 此为只读属性；返回 PDO 驱动所用客户端库的版本信息。
- **`PDO::ATTR_SERVER_INFO` (`int`)** — 此为只读属性。返回一些关于 PDO 所连接的数据库服务的元信息。
- **`PDO::ATTR_CONNECTION_STATUS` (`int`)**
- **`PDO::ATTR_CASE` (`int`)** — 用类似 `PDO::CASE_{*}` 的常量强制列名为指定的大小写。
- **`PDO::ATTR_CURSOR_NAME` (`int`)** — 获取或设置使用游标的名称。当使用可滚动游标和定位更新时候非常有用。
- **`PDO::ATTR_CURSOR` (`int`)** — 选择游标类型。PDO 当前支持 `PDO::CURSOR_FWDONLY` 或 `PDO::CURSOR_SCROLL`。除非需要可滚动游标，否则应使用 `PDO::CURSOR_FWDONLY` 游标模式。
- **`PDO::ATTR_DRIVER_NAME` (`int`)** — 返回驱动名称。
  **使用 `PDO::ATTR_DRIVER_NAME`**

  ```php

   
   <?php
   if ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql') {
     echo "Running on mysql; doing something mysql specific here\n";
   }
   ?>
   
        
  ```


- **`PDO::ATTR_ORACLE_NULLS` (`int`)** — 在获取数据时将空字符串转换成 SQL 中的 NULL。
- **`PDO::ATTR_PERSISTENT` (`int`)** — 请求持久连接，而非创建新连接。关于此属性的更多信息请参见连接与连接管理。
- **`PDO::ATTR_STATEMENT_CLASS` (`int`)** — 设置返回的 statement 类名。
- **`PDO::ATTR_FETCH_CATALOG_NAMES` (`int`)** — 将包含的目录名添加到结果集中的每个列名前面。目录名和列名由一个小数点分开（.）。此属性在驱动层面支持，所使用的驱动程序可能不支持此功能。
- **`PDO::ATTR_FETCH_TABLE_NAMES` (`int`)** — 将包含的表名添加到结果集中的每个列名前面。表名和列名由一个小数点分开（.）。此属性在驱动层面支持，所使用的驱动程序可能不支持此功能。
- **`PDO::ATTR_STRINGIFY_FETCHES` (`int`)** — 强制将所有获取的值（`null` 除外）视为字符串。除非将 `PDO::ATTR_ORACLE_NULLS` 设置为 `PDO::NULL_TO_STRING`，否则 `null` 值保持不变。
- **`PDO::ATTR_MAX_COLUMN_LEN` (`int`)** — 设置字段名最长的尺寸。
- **`PDO::ATTR_DEFAULT_FETCH_MODE` (`int`)**
- **`PDO::ATTR_EMULATE_PREPARES` (`int`)**
- **`PDO::ATTR_DEFAULT_STR_PARAM` (`int`)** — 设置默认 string 参数类型可以是 `PDO::PARAM_STR_NATL` 和 `PDO::PARAM_STR_CHAR`。 — 自 PHP 7.2.0 起可用。
- **`PDO::ERRMODE_SILENT` (`int`)** — 如果发生错误，则不引发错误或异常。开发人员需要显式地检查错误。PHP 8.0.0 前为默认模式。关于此属性的更多信息请参见错误与错误处理。
- **`PDO::ERRMODE_WARNING` (`int`)** — 如果发生错误，则显示 PHP `E_WARNING` 消息。关于此属性的更多信息请参见错误与错误处理。
- **`PDO::ERRMODE_EXCEPTION` (`int`)** — 如果发生错误，则抛出 `PDOException` 异常。自 PHP 8.0.0 起此为默认模式。关于此属性的更多信息请参见错误与错误处理。
- **`PDO::CASE_NATURAL` (`int`)** — 保留数据库驱动返回的列名。
- **`PDO::CASE_LOWER` (`int`)** — 强制列名小写。
- **`PDO::CASE_UPPER` (`int`)** — 强制列名大写。
- **`PDO::NULL_NATURAL` (`int`)**
- **`PDO::NULL_EMPTY_STRING` (`int`)**
- **`PDO::NULL_TO_STRING` (`int`)**
- **`PDO::ERR_NONE` (`string`)** — 对应 SQLSTATE `'00000'`，表示 SQL 语句已成功执行，未发生任何错误或警告。该常量是一个便捷常量，用于在检查 `PDO::errorCode()` 或 `PDOStatement::errorCode()` 以确定是否发生错误时提供帮助。通常情况下，通过检查引发错误条件的方法的返回值即可获知结果。
- **`PDO::PARAM_EVT_ALLOC` (`int`)** — 分配事件
- **`PDO::PARAM_EVT_FREE` (`int`)** — 解除分配事件
- **`PDO::PARAM_EVT_EXEC_PRE` (`int`)** — 在执行预处理语句之前触发的事件。
- **`PDO::PARAM_EVT_EXEC_POST` (`int`)** — 在执行预处理语句之后触发的事件。
- **`PDO::PARAM_EVT_FETCH_PRE` (`int`)** — 在从结果集中获取结果之前触发的事件。
- **`PDO::PARAM_EVT_FETCH_POST` (`int`)** — 在从结果集中获取结果之后触发的事件。
- **`PDO::PARAM_EVT_NORMALIZE` (`int`)** — 在绑定参数注册允许驱动程序正常化变量名时触发事件。
- **`PDO::SQLITE_DETERMINISTIC` (`int`)** — 指定使用 `PDO::sqliteCreateFunction()` 创建的函数是确定性的，即在单个 SQL 语句中，函数的参数不变，该函数始终返回相同的结果。（自 PHP 7.1.4 起可用。）
