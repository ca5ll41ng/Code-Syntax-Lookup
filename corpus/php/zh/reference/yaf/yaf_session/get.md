---
id: "zh-php-function-yaf-session-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::get"
title: "获取会话值"
signature: "public mixed Yaf_Session::get(string $name = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取会话值

## 说明

```php
public mixed Yaf_Session::get(string $name = NULL)
```

按名字获取会话值。如果省略 `$name` 或其值为 `null`，则返回整个会话数组。

## 参数

- **`$name`** — 要获取的会话键，传 `null` 则获取全部会话数据。

## 返回值

会话值，键不存在时返回 `null`。当 `$name` 为 `null` 时，返回完整的会话数组。

## 示例

**`Yaf_Session::get()` 示例**

```php


<?php
class ProfileController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $session = Yaf_Session::getInstance();
        $session->start();

        $userId = $session->get("user_id");
        if ($userId === null) {
            return $this->redirect("/account/login");
        }

        echo "welcome back, user #", $userId;
    }
}
?>

   
```

## 参见

 `Yaf_Session::set()` `Yaf_Session::has()` `Yaf_Session::del()`
