---
id: "zh-php-function-yaf-session-del"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Session::del"
title: "删除会话键"
signature: "public bool Yaf_Session::del(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-session.del.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除会话键

## 说明

```php
public bool Yaf_Session::del(string $name)
```

删除会话键及其对应的值。

## 参数

- **`$name`** — 要删除的会话键。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yaf_Session::del()` 示例**

```php


<?php
class VerifyController extends Yaf_Controller_Abstract
{
    public function captchaAction()
    {
        $session = Yaf_Session::getInstance();
        $session->start();

        $expected = $session->get("captcha_code");

        // 一次性验证码：使用后立即删除
        $session->del("captcha_code");

        if ($expected === null
            || $this->getRequest()->getPost("code") !== $expected) {
            echo "invalid captcha";
        }
    }
}
?>

   
```

## 参见

 `Yaf_Session::get()` `Yaf_Session::set()` `Yaf_Session::has()`
