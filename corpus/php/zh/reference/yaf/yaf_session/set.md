---
id: "zh-php-function-yaf-session-set"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::set"
title: "设置会话值"
signature: "public bool Yaf_Session::set(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置会话值

## 说明

```php
public bool Yaf_Session::set(string $name, mixed $value)
```

设置一个会话值。

## 参数

- **`$name`** — 要设置的会话键。
- **`$value`** — 要存储的值。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yaf_Session::set()` 示例**

```php


<?php
class LoginController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // ... 根据数据库验证用户凭证
        $session = Yaf_Session::getInstance();
        $session->start();

        $session->set("user_id", $user->getId());
        $session->set("login_time", time());

        return $this->redirect("/dashboard");
    }
}
?>

   
```

## 参见

 `Yaf_Session::get()` `Yaf_Session::has()` `Yaf_Session::del()`
