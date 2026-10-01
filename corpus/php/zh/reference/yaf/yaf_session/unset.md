---
id: "zh-php-function-yaf-session-unset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::__unset"
title: "移除会话键"
signature: "public void Yaf_Session::__unset(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.unset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除会话键

## 说明

```php
public void Yaf_Session::__unset(string $name)
```

移除一个会话键及其值。当对会话对象的属性使用 `unset()` 时，会调用此方法。

## 参数

- **`$name`** — 要移除的会话键。

## 返回值

没有返回值。

## 示例

**`Yaf_Session::__unset()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session->user_id = 42;

// ... 当用户注销时
unset($session->user_id);

var_dump(isset($session->user_id));
?>

   
```

以上示例的输出类似于：

```text


bool(false)

   
```

## 参见

 `Yaf_Session::del()` `Yaf_Session::offsetUnset()`
