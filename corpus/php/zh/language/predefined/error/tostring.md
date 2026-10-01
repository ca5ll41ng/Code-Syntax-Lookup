---
id: "zh-php-function-error-tostring"
language: "php"
lang: "zh"
category: "function"
name: "Error::__toString"
title: "error 的字符串表达"
signature: "public string Error::__toString()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# error 的字符串表达

## 说明

```php
public string Error::__toString()
```

返回 Error 的 `string`表达形式。

## 参数

此函数没有参数。

## 返回值

返回 Error 的 `string`表达形式。

## 示例

**`Error::__toString()` 例子**

```php


<?php
try {
    throw new Error("Some error message");
} catch(Error $e) {
    echo $e;
}
?>

    
```

以上示例的输出类似于：

```text


Error: Some error message in /home/bjori/tmp/ex.php:3
Stack trace:
#0 {main}

    
```

## 参见

`Throwable::__toString()`
