---
id: "zh-php-function-exception-tostring"
language: "php"
lang: "zh"
category: "function"
name: "Exception::__toString"
title: "将异常对象转换为字符串"
signature: "public string Exception::__toString()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将异常对象转换为字符串

## 说明

```php
public string Exception::__toString()
```

返回转换为字符串（`string`）类型的异常。

## 参数

此函数没有参数。

## 返回值

返回转换为字符串（`string`）类型的异常。

## 示例

**`Exception::__toString()`示例**

```php


<?php
try {
    throw new Exception("Some error message");
} catch(Exception $e) {
    echo $e;
}
?>

    
```

以上示例的输出类似于：

```text


exception 'Exception' with message 'Some error message' in /home/bjori/tmp/ex.php:3
Stack trace:
#0 {main}

    
```

## 参见

`Throwable::__toString()`
