---
id: "zh-php-function-yaf-session-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::__construct"
title: "Yaf_Session 构造方法"
signature: "private Yaf_Session::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Session 构造方法

## 说明

```php
private Yaf_Session::__construct()
```

构造方法是私有的：`Yaf_Session` 实现了单例模式，不能直接实例化。请使用 `Yaf_Session::getInstance()` 获取会话实例。

## 参数

此函数没有参数。

## 返回值

不返回值。

## 示例

**`Yaf_Session::__construct()` 示例**

```php


<?php
// 构造方法是私有的，因此 Yaf_Session 不能用
// "new" 来实例化。通过单例来访问：
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
echo $session->get("user_id");
?>

   
```

## 参见

 `Yaf_Session::getInstance()` `Yaf_Session::start()`
