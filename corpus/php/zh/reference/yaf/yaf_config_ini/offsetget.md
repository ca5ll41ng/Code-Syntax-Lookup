---
id: "zh-php-function-yaf-config-ini-offsetget"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::offsetGet"
title: "获取配置值（ArrayAccess）"
signature: "public mixed Yaf_Config_Ini::offsetGet(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取配置值（ArrayAccess）

## 说明

```php
public mixed Yaf_Config_Ini::offsetGet(mixed $name)
```

根据键获取配置值。此方法是 `Yaf_Config_Ini::get()` 的别名，当以数组方式读取配置对象时会被调用。

## 参数

- **`$name`** — 要获取的配置键。

## 返回值

返回 `$name` 对应的值，如果键不存在则返回 `null`。

## 示例

**`Yaf_Config_Ini::offsetGet()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * application.name = "MyApp"
 * database.host    = "localhost"
 * database.port    = 3306
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');

echo $config['application.name'], "\n"; // 点号写法，与 get() 一致
echo $config['database']['host'], "\n"; // 嵌套访问
var_dump($config['cache.enable']);      // 键不存在
?>

   
```

以上示例的输出类似于：

```text


MyApp
localhost
NULL

   
```

## 参见

 `Yaf_Config_Ini::get()` `Yaf_Config_Ini::offsetSet()` `Yaf_Config_Ini::offsetUnset()`
