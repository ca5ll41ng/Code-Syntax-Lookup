---
id: "zh-php-function-exception-getfile"
language: "php"
lang: "zh"
category: "function"
name: "Exception::getFile"
title: "创建异常时的程序文件名称"
signature: "final public string Exception::getFile()"
module: "language"
source_url: "https://www.php.net/manual/zh/exception.getfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建异常时的程序文件名称

## 说明

```php
final public string Exception::getFile()
```

获取创建异常的程序文件名称。

## 参数

此函数没有参数。

## 返回值

返回发生异常的程序文件名称。

## 示例

**`Exception::getFile()`示例**

```php


<?php
try {
    throw new Exception;
} catch(Exception $e) {
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
