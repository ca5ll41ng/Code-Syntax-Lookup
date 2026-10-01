---
id: "zh-php-function-function-gethostname"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "gethostname"
title: "获取主机名"
signature: "string|false gethostname()"
module: "network"
source_url: "https://www.php.net/manual/zh/function.gethostname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取主机名

## 说明

```php
string|false gethostname()
```

`gethostname()` 可以获取本地机器的标准主机名。

## 参数

此函数没有参数。

## 返回值

成功时返回主机名称字符串，失败时返回 `false`。

## 示例

**简单的 `gethostname()` 例子**

```php


<?php
echo gethostname(); // 可能会输出：sandie
?>

    
```

## 参见

`gethostbyname()` `gethostbyaddr()` `php_uname()`
