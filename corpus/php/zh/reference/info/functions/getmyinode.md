---
id: "zh-php-function-function-getmyinode"
language: "php"
lang: "zh"
category: "function"
name: "getmyinode"
title: "获取当前脚本的索引节点（inode）"
signature: "int|false getmyinode()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getmyinode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前脚本的索引节点（inode）

## 说明

```php
int|false getmyinode()
```

获取当前脚本的索引节点（inode）。

## 参数

此函数没有参数。

## 返回值

以整型返回当前脚本的索引节点（inode），或在错误时返回 `false`。

## 参见

`getmygid()` `getmyuid()` `getmypid()` `get_current_user()` `getlastmod()`
