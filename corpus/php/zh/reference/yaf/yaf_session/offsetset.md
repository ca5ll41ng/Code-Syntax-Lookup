---
id: "zh-php-function-yaf-session-offsetset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::offsetSet"
title: "设置会话值（ArrayAccess）"
signature: "public void Yaf_Session::offsetSet(mixed $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置会话值（ArrayAccess）

## 说明

```php
public void Yaf_Session::offsetSet(mixed $name, mixed $value)
```

设置一个会话值。当使用数组语法写入会话对象时，会调用此方法。

## 参数

- **`$name`** — 要设置的会话键。
- **`$value`** — 要存储的值。

## 返回值

没有返回值。

## 示例

**`Yaf_Session::offsetSet()` 示例**

```php


<?php
class LoginController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // ... 根据数据库验证用户凭证
        $session = Yaf_Session::getInstance();
        $session->start();

        // 使用数组语法写入会调用 offsetSet()
        $session["user_id"] = $user->getId();
        $session["login_time"] = time();

        return $this->redirect("/dashboard");
    }
}
?>

   
```

## 参见

 `Yaf_Session::set()` `Yaf_Session::offsetGet()` `Yaf_Session::offsetUnset()`
