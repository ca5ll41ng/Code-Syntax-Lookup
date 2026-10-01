---
id: "zh-php-function-yaf-exception-getprevious"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Exception::getPrevious"
title: "获取前一个异常"
signature: "public Throwable Yaf_Exception::getPrevious()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-exception.getprevious.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取前一个异常

## 说明

```php
public Throwable Yaf_Exception::getPrevious()
```

此方法继承自 Throwable 基类体系，如果存在前一个异常（链式关联的），则将其返回。

## 参数

此函数没有参数。

## 返回值

如果存在，返回前一个 Throwable，否则返回 `null`。

## 示例

**`Yaf_Exception::getPrevious()` 示例**

```php


<?php
try {
    $previous = new RuntimeException("Failed to open view script", 1024);
    throw new Yaf_Exception(
        "Failed to dispatch the request",
        YAF_ERR_DISPATCH_FAILED,
        $previous
    );
} catch (Yaf_Exception $e) {
    var_dump($e->getCode());
    $prev = $e->getPrevious();
    var_dump(get_class($prev));
    var_dump($prev->getMessage());
    var_dump($prev->getCode());
}
?>

   
```

以上示例的输出类似于：

```text


int(514)
string(16) "RuntimeException"
string(26) "Failed to open view script"
int(1024)

   
```

## 参见

 `Yaf_Exception::__construct()` Yaf_Exception
