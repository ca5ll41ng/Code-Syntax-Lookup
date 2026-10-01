---
id: "zh-php-function-yaf-session-current"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::current"
title: "获取当前会话条目的值"
signature: "public mixed Yaf_Session::current()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前会话条目的值

## 说明

```php
public mixed Yaf_Session::current()
```

返回迭代时当前会话条目的值。

## 参数

此函数没有参数。

## 返回值

当前会话条目的值。

## 示例

**`Yaf_Session::current()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
$session->set("is_vip", true);

foreach ($session as $key => $value) {
    // 迭代时 Yaf_Session::current() 会依次返回每个值
    echo "$key => ";
    var_dump($value);
}
?>

   
```

以上示例的输出类似于：

```text


user_id => int(42)
is_vip => bool(true)

   
```

## 参见

 `Yaf_Session::key()` `Yaf_Session::next()` `Yaf_Session::rewind()` `Yaf_Session::valid()`
