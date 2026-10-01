---
id: "zh-php-function-errorexception-getseverity"
language: "php"
lang: "zh"
category: "function"
name: "ErrorException::getSeverity"
title: "获取异常的严重程度"
signature: "final public int ErrorException::getSeverity()"
module: "language"
source_url: "https://www.php.net/manual/zh/errorexception.getseverity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常的严重程度

## 说明

```php
final public int ErrorException::getSeverity()
```

返回异常的严重程度。

## 参数

此函数没有参数。

## 返回值

返回异常的严重级别。

## 示例

**`ErrorException::getSeverity()` 例子**

```php


<?php
try {
    throw new ErrorException("Exception message", 0, E_USER_ERROR);
} catch(ErrorException $e) {
    echo "This exception severity is: " . $e->getSeverity();
    var_dump($e->getSeverity() === E_USER_ERROR);
}
?>

    
```

以上示例的输出类似于：

```text


This exception severity is: 256
bool(true)

    
```
