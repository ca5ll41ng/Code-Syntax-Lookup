---
id: "zh-php-function-yaf-session-offsetunset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::offsetUnset"
title: "移除会话键（ArrayAccess）"
signature: "public void Yaf_Session::offsetUnset(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 移除会话键（ArrayAccess）

## 说明

```php
public void Yaf_Session::offsetUnset(mixed $name)
```

移除一个会话键及其值。当对会话对象使用数组语法调用 `unset()` 时，会调用此方法。

## 参数

- **`$name`** — 要移除的会话键。

## 返回值

没有返回值。

## 示例

**`Yaf_Session::offsetUnset()` 示例**

```php


<?php
$session = Yaf_Session::getInstance();
$session->start();

$session["captcha_code"] = "8X2Q";

// ... 验证码校验通过后，删除这个一次性验证码
unset($session["captcha_code"]);

var_dump(isset($session["captcha_code"]));
?>

   
```

以上示例的输出类似于：

```text


bool(false)

   
```

## 参见

 `Yaf_Session::del()` `Yaf_Session::offsetGet()` `Yaf_Session::offsetSet()`
