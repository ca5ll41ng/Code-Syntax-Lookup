---
id: "zh-php-function-yaf-registry-set"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Registry::set"
title: "向注册表添加条目"
signature: "public static bool Yaf_Registry::set(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-registry.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向注册表添加条目

## 说明

```php
public static bool Yaf_Registry::set(string $name, mixed $value)
```

向注册表中存储一个值。设置一个已经存在的名称会覆盖它之前的值。

## 参数

- **`$name`** — 注册表条目的名称。
- **`$value`** — 要存储的值；可以是任意类型，包括对象。

## 返回值

成功时返回 `true`，失败时返回 `false`。

## 示例

**`Yaf_Registry::set()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initRedis(Yaf_Dispatcher $dispatcher)
    {
        $config = Yaf_Application::app()->getConfig()->redis;

        $redis = new Redis();
        $redis->connect($config->host, $config->port);

        /* 现在，该连接对整个应用可用 */
        Yaf_Registry::set("redis", $redis);
    }
}
?>

   
```

## 参见

 `Yaf_Registry::get()` `Yaf_Registry::has()` `Yaf_Registry::del()`
