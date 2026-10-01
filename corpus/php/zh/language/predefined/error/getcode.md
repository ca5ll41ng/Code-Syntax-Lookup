---
id: "zh-php-function-error-getcode"
language: "php"
lang: "zh"
category: "function"
name: "Error::getCode"
title: "获取错误代码"
signature: "final public int Error::getCode()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.getcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取错误代码

## 说明

```php
final public int Error::getCode()
```

返回错误代码。

## 参数

此函数没有参数。

## 返回值

返回 `int` 的错误代码

## 示例

**`Error::getCode()` 例子**

```php


<?php
try {
    throw new Error("Some error message", 30);
} catch(Error $e) {
    echo "The Error code is: " . $e->getCode();
}
?>

    
```

以上示例的输出类似于：

```text


The Error code is: 30

    
```

## 参见

`Throwable::getCode()`
