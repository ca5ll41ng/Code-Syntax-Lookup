---
id: "zh-php-function-error-getfile"
language: "php"
lang: "zh"
category: "function"
name: "Error::getFile"
title: "获取错误发生时的文件"
signature: "final public string Error::getFile()"
module: "language"
source_url: "https://www.php.net/manual/zh/error.getfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取错误发生时的文件

## 说明

```php
final public string Error::getFile()
```

获取错误发生时的文件名称。

## 参数

此函数没有参数。

## 返回值

返回错误发生时的文件名。

## 示例

**`Error::getFile()` 例子**

```php


<?php
try {
    throw new Error;
} catch(Error $e) {
    echo $e->getFile();
}
?>

    
```

以上示例的输出类似于：

```text


/home/bjori/tmp/ex.php

    
```

## 参见

`Throwable::getFile()`
