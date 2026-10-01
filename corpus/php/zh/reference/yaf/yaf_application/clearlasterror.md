---
id: "zh-php-function-yaf-application-clearlasterror"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::clearLastError"
title: "清除最后的错误信息"
signature: "public Yaf_Application|null Yaf_Application::clearLastError()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.clearlasterror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 清除最后的错误信息

## 说明

```php
public Yaf_Application|null Yaf_Application::clearLastError()
```

清除最后一次错误的代码和信息，将其重置为 `0` 和空字符串。这在错误处理器中很有用， 已处理的错误不应该被再次报告。

## 参数

此函数没有参数。

## 返回值

成功时返回 `Yaf_Application` 对象本身， 如果应用没有正确初始化则返回 `null`。

## 示例

**`Yaf_Application::clearLastError()` 示例**

```php


<?php
function error_handler($errno, $errstr, $errfile, $errline) {
   Yaf_Application::app()->clearLastError();
   var_dump(Yaf_Application::app()->getLastErrorNo());
}

$config = array(
 "application" => array(
   "directory" => "/tmp/notexists",
     "dispatcher" => array(
       "throwException" => 0, //trigger error instead of throwing an exception when an error occurs
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


int(0)

   
```

## 参见

`Yaf_Application::getLastErrorNo()` `Yaf_Application::getLastErrorMsg()`
