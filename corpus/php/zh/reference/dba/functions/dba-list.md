---
id: "zh-php-function-function-dba-list"
language: "php"
lang: "zh"
category: "function"
name: "dba_list"
title: "列出所有打开的数据库文件"
signature: "array dba_list()"
module: "dba"
source_url: "https://www.php.net/manual/zh/function.dba-list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出所有打开的数据库文件

## 说明

```php
array dba_list()
```

`dba_list()` 列出所有打开的数据库文件。

## 参数

此函数没有参数。

## 返回值

一个关联数组，形式为 `resourceid => filename`。
