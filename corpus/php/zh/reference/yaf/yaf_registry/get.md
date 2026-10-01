---
id: "zh-php-function-yaf-registry-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Registry::get"
title: "从注册表中检索条目"
signature: "public static mixed Yaf_Registry::get(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-registry.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从注册表中检索条目

## 说明

```php
public static mixed Yaf_Registry::get(string $name)
```

从注册表中检索一个值。

## 参数

- **`$name`** — 注册表条目的名称。

## 返回值

以 `$name` 存储的值；如果不存在该名称的条目，则返回 `null`。

## 示例

**`Yaf_Registry::get()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $redis = Yaf_Registry::get("redis");
        if ($redis === null) {
            throw new Exception("the redis connection is not registered");
        }

        $this->getView()->assign("visits", $redis->get("site:visits"));

        return true;
    }
}
?>

   
```

## 参见

 `Yaf_Registry::set()` `Yaf_Registry::has()` `Yaf_Registry::del()`
