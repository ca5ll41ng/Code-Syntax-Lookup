---
id: "zh-php-function-yaf-dispatcher-throwexception"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::throwException"
title: "开启/关闭异常抛出"
signature: "public Yaf_Dispatcher|bool Yaf_Dispatcher::throwException(bool|null $flag = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.throwexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开启/关闭异常抛出

## 说明

```php
public Yaf_Dispatcher|bool Yaf_Dispatcher::throwException(bool|null $flag = null)
```

当发生意外错误时，开启/关闭异常抛出。开启后，Yaf 将抛出异常 而不是触发可捕获的错误。

你也可以使用 application.dispatcher.throwException 来达到相同的目的。

## 参数

- **`$flag`** — Yaf 是否应该在发生错误时抛出异常。
  > 自 Yaf 2.2.0 起，如果未提供该参数，则返回当前的状态。



## 返回值

返回 `Yaf_Dispatcher` 对象本身（提供了 `$flag` 时）； 未提供时，返回一个指示异常抛出是否开启的 `boolean` 值。

## 示例

**`Yaf_Dispatcher::throwException()` 示例**

```php


<?php
$config = array(
    'application' => array(
        'directory' => dirname(__FILE__),
    ),
);
$app = new Yaf_Application($config);

$app->getDispatcher()->throwException(true);

try {
    $app->run();
} catch (Yaf_Exception $e) {
    var_dump($e->getMessage());
}
?>

   
```

以上示例的输出类似于：

```text


string(59) "Could not find controller script /tmp/controllers/Index.php"

   
```

**`Yaf_Dispatcher::throwException()` 示例**

```php


<?php
$config = array(
    'application' => array(
        'directory' => dirname(__FILE__),
    ),
);
$app = new Yaf_Application($config);

$app->getDispatcher()->throwException(false);

$app->run();
?>

   
```

以上示例的输出类似于：

```text


PHP Catchable fatal error:  Yaf_Application::run(): Could not find controller script /tmp/controllers/Index.php in /tmp/1.php on line 12

   
```

## 参见

`Yaf_Dispatcher::catchException()` Yaf_Exception
