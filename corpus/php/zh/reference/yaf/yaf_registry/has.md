---
id: "zh-php-function-yaf-registry-has"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Registry::has"
title: "检测条目是否存在"
signature: "public static bool Yaf_Registry::has(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-registry.has.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测条目是否存在

## 说明

```php
public static bool Yaf_Registry::has(string $name)
```

检测注册表中是否存在某个值。

## 参数

- **`$name`** — 注册表条目的名称。

## 返回值

如果存在给定名称的条目，则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Registry::has()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initRedis(Yaf_Dispatcher $dispatcher)
    {
        /* 如果之前的引导过程已经完成了这项工作，就跳过 */
        if (Yaf_Registry::has("redis")) {
            return;
        }

        $config = Yaf_Application::app()->getConfig()->redis;

        $redis = new Redis();
        $redis->connect($config->host, $config->port);

        Yaf_Registry::set("redis", $redis);
    }
}
?>

   
```

## 参见

 `Yaf_Registry::get()` `Yaf_Registry::set()` `Yaf_Registry::del()`
