---
id: "zh-php-function-yaf-session-getinstance"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::getInstance"
title: "获取会话单例"
signature: "public static Yaf_Session Yaf_Session::getInstance()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.getinstance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取会话单例

## 说明

```php
public static Yaf_Session Yaf_Session::getInstance()
```

返回单例 `Yaf_Session` 实例，必要时先创建它。首次访问时会话会自动启动。

## 参数

此函数没有参数。

## 返回值

`Yaf_Session` 单例实例，如果会话无法启动则返回 `null`。

## 示例

**`Yaf_Session::getInstance()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();
$session->set("user_id", 42);

// …… 之后，在应用的其他位置
$same = Yaf_Session::getInstance();

var_dump($same === $session);
var_dump($same->get("user_id"));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
int(42)

   
```

## 参见

 `Yaf_Session::start()` `Yaf_Session::get()` `Yaf_Session::set()`
