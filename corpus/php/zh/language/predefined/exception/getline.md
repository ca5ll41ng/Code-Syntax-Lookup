---
id: "zh-php-function-exception-getline"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getLine"
title: "获取创建的异常所在文件中的行号"
signature: "final public int Exception::getLine()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.getline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取创建的异常所在文件中的行号

## 说明

```php
final public int Exception::getLine()
```

返回发生异常的代码在文件中的行号。

## 参数

此函数没有参数。

## 返回值

返回发生异常的代码在文件中的行号。

## 示例

**`Exception::getLine()`示例**

```php


<?php
try {
    throw new Exception("Some error message");
} catch(Exception $e) {
    echo "The exception was thrown on line: " . $e->getLine();
}
?>

    
```

以上示例的输出类似于：

```text


The exception was thrown on line: 3

    
```

## 参见

`Throwable::getLine()`
