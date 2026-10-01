---
id: "zh-php-function-yaf-application-getlasterrormsg"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::getLastErrorMsg"
title: "获取最近产生的错误的错误信息"
signature: "public string|null Yaf_Application::getLastErrorMsg()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.getlasterrormsg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最近产生的错误的错误信息

## 说明

```php
public string|null Yaf_Application::getLastErrorMsg()
```

获取分发过程中最后发生的错误的信息。

## 参数

此函数没有参数。

## 返回值

最后发生的错误的错误信息，如果尚未发生错误则为空字符串， 如果应用没有正确初始化则返回 `null`。

## 示例

**`Yaf_Application::getLastErrorMsg()` 示例**

```php


<?php
function error_handler($errno, $errstr, $errfile, $errline) {
   var_dump(Yaf_Application::app()->getLastErrorMsg());
}

$config = array(
 "application" => array(
   "directory" => "/tmp/notexists",
     "dispatcher" => array(
       "throwException" => 0, //发生错误时触发错误而不是抛出异常
      ),
  ),
);

$app = new Yaf_Application($config);
$app->getDispatcher()->setErrorHandler("error_handler", E_RECOVERABLE_ERROR);
$app->run();
?>

   
```

以上示例的输出类似于：

```text


string(69) "Could not find controller script /tmp/notexists/controllers/Index.php"

   
```

## 参见

`Yaf_Application::getLastErrorNo()` `Yaf_Application::clearLastError()`
