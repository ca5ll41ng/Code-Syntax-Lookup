---
id: "zh-php-function-yaf-dispatcher-catchexception"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::catchException"
title: "开启/关闭异常捕获"
signature: "public Yaf_Dispatcher|bool Yaf_Dispatcher::catchException(bool|null $flag = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.catchexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开启/关闭异常捕获

## 说明

```php
public Yaf_Dispatcher|bool Yaf_Dispatcher::catchException(bool|null $flag = null)
```

当 application.dispatcher.throwException 开启时（也可以通过调用 `Yaf_Dispatcher::throwException()` 来开启），Yaf 会在错误 发生时抛出异常而不是触发错误。

如果通过此方法（或通过 application.dispatcher.catchException） 额外开启了异常捕获，所有未捕获的异常都会被捕获并分发到 `ErrorController::error`（如果已定义）。

## 参数

- **`$flag`** — Yaf 是否应该捕获未捕获的异常并将它们分发到 `ErrorController::error`。
  > 自 Yaf 2.2.0 起，如果未给出该参数，则会返回当前状态。



## 返回值

`Yaf_Dispatcher` 对象自身会在给出 `$flag` 时 返回；未给出该参数时则返回 `boolean`，指示异常捕获是否开启。

## 示例

**`Yaf_Dispatcher::catchException()` 示例**

```php


<?php
/* 如果你定义了如下的 ErrorController */
class ErrorController extends Yaf_Controller_Abstract {
     /**
      * 你也可以调用 Yaf_Request_Abstract::getException 来获取
      * 未捕获的异常。
      */
     public function errorAction($exception) {
        /* 发生了一个错误 */
        switch ($exception->getCode()) {
            case YAF_ERR_NOTFOUND_MODULE:
            case YAF_ERR_NOTFOUND_CONTROLLER:
            case YAF_ERR_NOTFOUND_ACTION:
            case YAF_ERR_NOTFOUND_VIEW:
                echo 404, ":", $exception->getMessage();
                break;
            default :
                $message = $exception->getMessage();
                echo 0, ":", $exception->getMessage();
                break;
        }
     }
}
?>

   
```

以上示例的输出类似于：

```text


/* 现在如果发生了一些错误，假设访问了一个不存在的控制器
   （或者你自己抛出一个异常）： */
404:Could not find controller script **/application/controllers/No-exists-controller.php

   
```

## 参见

`Yaf_Dispatcher::throwException()` `Yaf_Dispatcher::setErrorHandler()`
