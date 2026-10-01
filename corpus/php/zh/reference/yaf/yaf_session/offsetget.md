---
id: "zh-php-function-yaf-session-offsetget"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::offsetGet"
title: "获取会话值（ArrayAccess）"
signature: "public mixed Yaf_Session::offsetGet(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取会话值（ArrayAccess）

## 说明

```php
public mixed Yaf_Session::offsetGet(mixed $name)
```

按键获取会话值。此方法是 `Yaf_Session::get()` 的别名，在以数组方式读取会话对象时会被调用。

## 参数

- **`$name`** — 要获取的会话键。

## 返回值

会话值，键不存在时返回 `null`。

## 示例

**`Yaf_Session::offsetGet()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $session = Yaf_Session::getInstance();
        $session->start();

        // 以数组方式读取时会调用 offsetGet()
        $userId = $session["user_id"];
        if ($userId === null) {
            return $this->redirect("/account/login");
        }

        echo "logged in as user #", $userId;
    }
}
?>

   
```

## 参见

 `Yaf_Session::get()` `Yaf_Session::offsetSet()` `Yaf_Session::offsetUnset()`
