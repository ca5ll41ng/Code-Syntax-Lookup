---
id: "zh-php-function-yaf-exception-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Exception::__construct"
title: "构造一个 Yaf 异常"
signature: "public Yaf_Exception::__construct(string $message = \"\", int $code = 0)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-exception.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造一个 Yaf 异常

## 说明

```php
public Yaf_Exception::__construct(string $message = "", int $code = 0)
```

构造一个新的 Yaf_Exception。`$code` 携带用于标识失败类型的 Yaf 错误码，并通过 `Exception::getCode()` 获取。

## 参数

- **`$message`** — 异常信息。
- **`$code`** — Yaf 错误码。

## 返回值

没有返回值。

## 示例

**`Yaf_Exception::__construct()` 示例**

```php


<?php
throw new Yaf_Exception(
    "Failed to find the controller 'Product'",
    YAF_ERR_NOTFOUND_CONTROLLER /* 516 */
);
?>

   
```

以上示例的输出类似于：

```text


PHP Fatal error:  Uncaught Yaf_Exception: Failed to find the controller 'Product' in /path/to/index.php:2

   
```

## 参见

 Yaf_Exception `Yaf_Exception::getPrevious()` `Yaf_Exception_RouterFailed`
