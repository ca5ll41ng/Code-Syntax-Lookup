---
id: "zh-php-function-yaf-session-start"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::start"
title: "启动会话"
signature: "public Yaf_Session Yaf_Session::start()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.start.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启动会话

## 说明

```php
public Yaf_Session Yaf_Session::start()
```

如果会话尚未启动，则启动它。内部调用 PHP 原生的会话启动机制。多次调用此方法是安全的。

## 参数

此函数没有参数。

## 返回值

返回 `Yaf_Session` 实例。

## 示例

**`Yaf_Session::start()` 示例**

```php


<?php
// 通常每个请求只需启动一次，例如在 bootstrap 中
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
echo $session->get("user_id");
?>

   
```

## 参见

 `Yaf_Session::getInstance()`
