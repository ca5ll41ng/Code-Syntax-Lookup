---
id: "zh-php-function-yaf-session-rewind"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::rewind"
title: "将会话迭代器重置到第一个条目"
signature: "public void Yaf_Session::rewind()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将会话迭代器重置到第一个条目

## 说明

```php
public void Yaf_Session::rewind()
```

将内部迭代器回退到第一个会话条目。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Session::rewind()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->set("user_id", 42);
$session->set("lang", "en");

foreach ($session as $key => $value) {
    echo "$key => $value", PHP_EOL;
}

// 新的 foreach 会隐式地再次调用 rewind()
foreach ($session as $key => $value) {
    echo "$key => $value", PHP_EOL;
}
?>

   
```

以上示例的输出类似于：

```text


user_id => 42
lang => en
user_id => 42
lang => en

   
```

## 参见

 `Yaf_Session::current()` `Yaf_Session::key()` `Yaf_Session::next()` `Yaf_Session::valid()`
