---
id: "zh-php-function-yaf-session-count"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::count"
title: "统计会话条目的数量"
signature: "public int Yaf_Session::count()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计会话条目的数量

## 说明

```php
public int Yaf_Session::count()
```

返回会话中条目的数量。

## 参数

此函数没有参数。

## 返回值

以整数形式返回会话条目的数量。

## 示例

**`Yaf_Session::count()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
$session->set("cart_items", 3);

var_dump(count($session));
?>

   
```

以上示例的输出类似于：

```text


int(2)

   
```

## 参见

 `Yaf_Session::get()` `Yaf_Session::has()`
