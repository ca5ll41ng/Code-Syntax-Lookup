---
id: "zh-php-function-yaf-session-has"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::has"
title: "检查会话键是否存在"
signature: "public bool Yaf_Session::has(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.has.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查会话键是否存在

## 说明

```php
public bool Yaf_Session::has(string $name)
```

检查会话键是否存在。

## 参数

- **`$name`** — 要检查的会话键。

## 返回值

键存在时返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Session::has()` 示例**

```php


<?php
class BaseController extends Yaf_Controller_Abstract
{
    public function requireLogin()
    {
        $session = Yaf_Session::getInstance();
        $session->start();

        if (!$session->has("user_id")) {
            $this->redirect("/account/login");
            return false;
        }

        return true;
    }
}
?>

   
```

## 参见

 `Yaf_Session::get()` `Yaf_Session::set()` `Yaf_Session::del()`
