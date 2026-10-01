---
id: "zh-php-function-exception-getcode"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getCode"
title: "获取异常代码"
signature: "final public int Exception::getCode()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.getcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常代码

## 说明

```php
final public int Exception::getCode()
```

返回异常代码。

## 参数

此函数没有参数。

## 返回值

`Exception` 返回整型（`int`）的异常代码，但在其他类中可能返回其他类型(比如在 `PDOException` 中返回 `string`)。

## 示例

**`Exception::getCode()`示例**

```php


<?php
try {
    throw new Exception("Some error message", 30);
} catch(Exception $e) {
    echo "The exception code is: " . $e->getCode();
}
?>

    
```

以上示例的输出类似于：

```text


The exception code is: 30

    
```

## 参见

`Throwable::getCode()`
