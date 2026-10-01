---
id: "zh-php-function-yaf-config-ini-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::get"
title: "获取配置值"
signature: "public mixed Yaf_Config_Ini::get(string $name = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取配置值

## 说明

```php
public mixed Yaf_Config_Ini::get(string $name = NULL)
```

根据名称获取配置值。可以使用点号表示法（例如 `database.host`）来访问嵌套的值。如果省略 `$name` 或为 `null`，则返回配置对象本身。

## 参数

- **`$name`** — 配置键名，可以使用点号表示法来访问嵌套的值。

## 返回值

与 `$name` 关联的值。数组值会被包装成 `Yaf_Config_Ini` 对象。如果键不存在则返回 `null`，当 `$name` 为 `null` 时返回配置对象本身。

## 示例

**`Yaf_Config_Ini::get()` 示例**

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

// 使用点号表示法访问嵌套的值
echo $config->get('database.host'), "\n";

// 数组值会被包装成 Yaf_Config_Ini 对象
echo $config->get('database')->port, "\n";

// 不传参数时，返回配置对象本身
echo $config->get()->application->name, "\n";

var_dump($config->get('missing.key'));
?>

   
```

以上示例的输出类似于：

```text


localhost
3306
MyApp
NULL

   
```

## 参见

 `Yaf_Config_Ini::set()` `Yaf_Config_Ini::toArray()`
