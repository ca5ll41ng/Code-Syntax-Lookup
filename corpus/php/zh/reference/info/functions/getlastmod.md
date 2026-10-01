---
id: "zh-php-function-function-getlastmod"
language: "php"
lang: "zh"
category: "function"
name: "getlastmod"
title: "获取页面最后修改的时间"
signature: "int|false getlastmod()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.getlastmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取页面最后修改的时间

## 说明

```php
int|false getlastmod()
```

获取执行的主脚本的最后修改时间。

如果你对其他文件的最后修改时间的感兴趣，可考虑使用 `filemtime()`。

## 参数

此函数没有参数。

## 返回值

返回当前页面最后修改的时间。这个值是一个 Unix 时间戳，可以传入 `date()`。 错误时返回 `false`。

## 示例

**`getlastmod()` 示例**

```php


<?php
// 输出类似 'Last modified: March 04 1998 20:43:59.'
echo "Last modified: " . date ("F d Y H:i:s.", getlastmod());
?>

    
```

## 参见

`date()` `getmyuid()` `getmygid()` `get_current_user()` `getmyinode()` `getmypid()` `filemtime()`
