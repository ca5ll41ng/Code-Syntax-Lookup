---
id: "zh-php-function-function-preg-last-error"
language: "php"
lang: "zh"
category: "function"
name: "preg_last_error"
title: "返回最后一个PCRE正则执行产生的错误代码"
signature: "int preg_last_error()"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一个PCRE正则执行产生的错误代码

## 说明

```php
int preg_last_error()
```

返回最后一次PCRE正则执行的错误代码。

**`preg_last_error()` 示例**

```php


<?php

preg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');

if (preg_last_error() == PREG_BACKTRACK_LIMIT_ERROR) {
    echo 'Backtrack limit was exhausted!';
}

?>

    
```

以上示例会输出：

```text


Backtrack limit was exhausted!

    
```

## 参数

此函数没有参数。

## 返回值

返回下面常量中的一个(查看它们自身的解释): `PREG_NO_ERROR` `PREG_INTERNAL_ERROR` `PREG_BACKTRACK_LIMIT_ERROR` （参见 pcre.backtrack_limit） `PREG_RECURSION_LIMIT_ERROR` （参见 pcre.recursion_limit） `PREG_BAD_UTF8_ERROR` `PREG_BAD_UTF8_OFFSET_ERROR` `PREG_JIT_STACKLIMIT_ERROR`

## 参见

`preg_last_error_msg()`
