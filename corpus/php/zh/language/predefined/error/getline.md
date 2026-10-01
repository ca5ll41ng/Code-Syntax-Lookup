---
id: "zh-php-function-error-getline"
language: "php"
lang: "zh"
category: "function"
name: "Error::getLine"
title: "获取错误发生时的行号"
signature: "final public int Error::getLine()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.getline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取错误发生时的行号

## 说明

```php
final public int Error::getLine()
```

获取错误发生时的行号。

## 参数

此函数没有参数。

## 返回值

返回错误发生时的行号。

## 示例

**`Error::getLine()` 例子**

```php


<?php
try {
    throw new Error("Some error message");
} catch(Error $e) {
    echo "The error was created on line: " . $e->getLine();
}
?>

    
```

以上示例的输出类似于：

```text


The error was created on line: 3

    
```

## 参见

`Throwable::getLine()`
