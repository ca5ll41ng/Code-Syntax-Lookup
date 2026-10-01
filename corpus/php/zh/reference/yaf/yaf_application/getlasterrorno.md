---
id: "zh-php-function-yaf-application-getlasterrorno"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::getLastErrorNo"
title: "获取最后产生的错误的错误代码"
signature: "public int|null Yaf_Application::getLastErrorNo()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.getlasterrorno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最后产生的错误的错误代码

## 说明

```php
public int|null Yaf_Application::getLastErrorNo()
```

获取分发过程中最后发生的错误的错误代码， 它是 YAF_ERR_* 常量之一。

## 参数

此函数没有参数。

## 返回值

最后发生的错误的错误代码，如果尚未发生错误则为 `0`， 如果应用没有正确初始化则返回 `null`。

## 示例

**`Yaf_Application::getLastErrorNo()` 示例**

```php


<?php
function error_handler($errno, $errstr, $errfile, $errline) {
   var_dump(Yaf_Application::app()->getLastErrorNo());
   var_dump(Yaf_Application::app()->getLastErrorNo() == YAF_ERR_NOTFOUND_CONTROLLER);
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


int(516)
bool(true)

   
```
