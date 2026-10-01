---
id: "zh-php-function-function-preg-last-error-msg"
language: "php"
lang: "zh"
category: "function"
name: "preg_last_error_msg"
title: "返回最后一个 PCRE 正则表达式执行产生的错误信息"
signature: "string preg_last_error_msg()"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-last-error-msg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一个 PCRE 正则表达式执行产生的错误信息

## 说明

```php
string preg_last_error_msg()
```

返回最后一次 PCRE 正则表达式执行产生的错误信息。

## 参数

此函数没有参数。

## 返回值

成功时返回错误信息，如果没有发生错误则返回 `"No error"`。

## 示例

**`preg_last_error_msg()` 示例**

```php


<?php

preg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');

if (preg_last_error() !== PREG_NO_ERROR) {
    echo preg_last_error_msg();
}

?>

    
```

以上示例会输出：

```text


Backtrack limit exhausted

    
```

## 参见

`preg_last_error()`
