---
id: "zh-php-function-exception-getmessage"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getMessage"
title: "获取异常消息内容"
signature: "final public string Exception::getMessage()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.getmessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常消息内容

## 说明

```php
final public string Exception::getMessage()
```

返回异常消息内容。

## 参数

此函数没有参数。

## 返回值

返回字符串类型的异常消息内容。

## 示例

**`Exception::getMessage()`示例**

```php


<?php
try {
    throw new Exception("Some error message");
} catch(Exception $e) {
    echo $e->getMessage();
}
?>

    
```

以上示例的输出类似于：

```text


Some error message

    
```

## 参见

`Throwable::getMessage()`
