---
id: "zh-php-guide-class-pdo"
language: "php"
lang: "zh"
category: "guide"
name: "class.pdo"
title: "PDO 类"
module: "pdo"
source_url: "https://www.php.net/manual/zh/class.pdo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PDO 类

PDO

   简介  代表 PHP 和数据库服务之间的连接      类摘要    `PDO`  常量  `public` `const` `int` `PDO::PARAM_NULL`   `public` `const` `int` `PDO::PARAM_BOOL` 5   `public` `const` `int` `PDO::PARAM_INT` 1   `public` `const` `int` `PDO::PARAM_STR` 2   `public` `const` `int` `PDO::PARAM_LOB` 3   `public` `const` `int` `PDO::PARAM_STMT` 4   `public` `const` `int` `PDO::PARAM_INPUT_OUTPUT`   `public` `const` `int` `PDO::PARAM_STR_NATL`   `public` `const` `int` `PDO::PARAM_STR_CHAR`   `public` `const` `int` `PDO::PARAM_EVT_ALLOC`   `public` `const` `int` `PDO::PARAM_EVT_FREE`   `public` `const` `int` `PDO::PARAM_EVT_EXEC_PRE`   `public` `const` `int` `PDO::PARAM_EVT_EXEC_POST`   `public` `const` `int` `PDO::PARAM_EVT_FETCH_PRE`   `public` `const` `int` `PDO::PARAM_EVT_FETCH_POST`   `public` `const` `int` `PDO::PARAM_EVT_NORMALIZE`   `public` `const` `int` `PDO::FETCH_DEFAULT`   `public` `const` `int` `PDO::FETCH_LAZY`   `public` `const` `int` `PDO::FETCH_ASSOC`   `public` `const` `int` `PDO::FETCH_NUM`   `public` `const` `int` `PDO::FETCH_BOTH`   `public` `const` `int` `PDO::FETCH_OBJ`   `public` `const` `int` `PDO::FETCH_BOUND`   `public` `const` `int` `PDO::FETCH_COLUMN`   `public` `const` `int` `PDO::FETCH_CLASS`   `public` `const` `int` `PDO::FETCH_INTO`   `public` `const` `int` `PDO::FETCH_FUNC`   `public` `const` `int` `PDO::FETCH_GROUP`   `public` `const` `int` `PDO::FETCH_UNIQUE`   `public` `const` `int` `PDO::FETCH_KEY_PAIR`   `public` `const` `int` `PDO::FETCH_CLASSTYPE`   `public` `const` `int` `PDO::FETCH_SERIALIZE`   `public` `const` `int` `PDO::FETCH_PROPS_LATE`   `public` `const` `int` `PDO::FETCH_NAMED`   `public` `const` `int` `PDO::ATTR_AUTOCOMMIT`   `public` `const` `int` `PDO::ATTR_PREFETCH`   `public` `const` `int` `PDO::ATTR_TIMEOUT`   `public` `const` `int` `PDO::ATTR_ERRMODE`   `public` `const` `int` `PDO::ATTR_SERVER_VERSION`   `public` `const` `int` `PDO::ATTR_CLIENT_VERSION`   `public` `const` `int` `PDO::ATTR_SERVER_INFO`   `public` `const` `int` `PDO::ATTR_CONNECTION_STATUS`   `public` `const` `int` `PDO::ATTR_CASE`   `public` `const` `int` `PDO::ATTR_CURSOR_NAME`   `public` `const` `int` `PDO::ATTR_CURSOR`   `public` `const` `int` `PDO::ATTR_ORACLE_NULLS`   `public` `const` `int` `PDO::ATTR_PERSISTENT`   `public` `const` `int` `PDO::ATTR_STATEMENT_CLASS`   `public` `const` `int` `PDO::ATTR_FETCH_TABLE_NAMES`   `public` `const` `int` `PDO::ATTR_FETCH_CATALOG_NAMES`   `public` `const` `int` `PDO::ATTR_DRIVER_NAME`   `public` `const` `int` `PDO::ATTR_STRINGIFY_FETCHES`   `public` `const` `int` `PDO::ATTR_MAX_COLUMN_LEN`   `public` `const` `int` `PDO::ATTR_EMULATE_PREPARES`   `public` `const` `int` `PDO::ATTR_DEFAULT_FETCH_MODE`   `public` `const` `int` `PDO::ATTR_DEFAULT_STR_PARAM`   `public` `const` `int` `PDO::ERRMODE_SILENT`   `public` `const` `int` `PDO::ERRMODE_WARNING`   `public` `const` `int` `PDO::ERRMODE_EXCEPTION`   `public` `const` `int` `PDO::CASE_NATURAL`   `public` `const` `int` `PDO::CASE_LOWER`   `public` `const` `int` `PDO::CASE_UPPER`   `public` `const` `int` `PDO::NULL_NATURAL`   `public` `const` `int` `PDO::NULL_EMPTY_STRING`   `public` `const` `int` `PDO::NULL_TO_STRING`   `public` `const` `string` `PDO::ERR_NONE`   `public` `const` `int` `PDO::FETCH_ORI_NEXT`   `public` `const` `int` `PDO::FETCH_ORI_PRIOR`   `public` `const` `int` `PDO::FETCH_ORI_FIRST`   `public` `const` `int` `PDO::FETCH_ORI_LAST`   `public` `const` `int` `PDO::FETCH_ORI_ABS`   `public` `const` `int` `PDO::FETCH_ORI_REL`   `public` `const` `int` `PDO::CURSOR_FWDONLY`   `public` `const` `int` `PDO::CURSOR_SCROLL`  方法      更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现已类型化。 |
