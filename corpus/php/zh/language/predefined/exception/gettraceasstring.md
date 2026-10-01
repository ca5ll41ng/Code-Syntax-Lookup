---
id: "zh-php-function-exception-gettraceasstring"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getTraceAsString"
title: "获取字符串类型的异常追踪信息"
signature: "final public string Exception::getTraceAsString()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.gettraceasstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取字符串类型的异常追踪信息

## 说明

```php
final public string Exception::getTraceAsString()
```

以字符串类型返回异常追踪信息。

## 参数

此函数没有参数。

## 返回值

以字符串类型返回异常追踪信息。

## 示例

**`Exception::getTraceAsString()`示例**

```php


<?php
function test() {
    throw new Exception;
}

try {
    test();
} catch(Exception $e) {
    echo $e->getTraceAsString();
}
?>

    
```

以上示例的输出类似于：

```text


#0 /home/bjori/tmp/ex.php(7): test()
#1 {main}

    
```

## 参见

`Throwable::getTraceAsString()`
