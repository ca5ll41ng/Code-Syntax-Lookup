---
id: "zh-php-function-yaf-request-abstract-getexception"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getException"
title: "获取异常"
signature: "public Exception|null Yaf_Request_Abstract::getException()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常

## 说明

```php
public Exception|null Yaf_Request_Abstract::getException()
```

获取调度过程中捕获的异常。

## 参数

此函数没有参数。

## 返回值

调度过程中捕获的 Exception；如果没有，则返回 `null`。

## 示例

**`Yaf_Request_Abstract::getException()` 示例**

```php


<?php
// 在引导类中开启异常捕获，这样调度过程中抛出的
// 任何异常都会被转发到 error 动作
Yaf_Dispatcher::getInstance()->catchException(true);

class ErrorController extends Yaf_Controller_Abstract
{
    public function errorAction($exception)
    {
        var_dump($this->getRequest()->getException() === $exception);
    }
}
?>
   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Dispatcher::catchException()`
