---
id: "zh-php-function-error-getmessage"
language: "php"
lang: "zh"
category: "function"
name: "Error::getMessage"
title: "获取错误信息"
signature: "final public string Error::getMessage()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.getmessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取错误信息

## 说明

```php
final public string Error::getMessage()
```

返回错误信息。

## 参数

此函数没有参数。

## 返回值

返回字符串错误信息。

## 示例

**`Error::getMessage()` 例子**

```php


<?php
try {
    throw new Error("Some error message");
} catch(Error $e) {
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
