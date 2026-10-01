---
id: "zh-php-function-function-php-strip-whitespace"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "php_strip_whitespace"
title: "返回删除注释和空格后的PHP源码"
signature: "string php_strip_whitespace(string $filename)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.php-strip-whitespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回删除注释和空格后的PHP源码

## 说明

```php
string php_strip_whitespace(string $filename)
```

返回删除注释和空格后 `$filename` 的PHP源码。这对实际代码数量和注释数量的对比很有用。 此函数与 命令行 下执行 php -w 相似。

## 参数

- **`$filename`** — PHP文件的路径。

## 返回值

在成功时返回过滤后的代码，或者在失败时返回空字符串。

> 此函数遵守 short_open_tag ini 指令的值。

## 示例

**`php_strip_whitespace()` 的例子**

```php


<?php
// PHP comment here

/*
 * Another PHP comment
 */

echo        php_strip_whitespace(__FILE__);
// Newlines are considered whitespace, and are removed too:
do_nothing();
?>

    
```

以上示例会输出：

```text


<?php
 echo php_strip_whitespace(__FILE__); do_nothing(); ?>

    
```

可以注意到PHP的注释已不存在，成为第一个echo语句前的换行和空格。
