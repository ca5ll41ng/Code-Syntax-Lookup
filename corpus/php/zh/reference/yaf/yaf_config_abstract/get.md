---
id: "zh-php-function-yaf-config-abstract-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Abstract::get"
title: "获取配置值"
signature: "public mixed Yaf_Config_Abstract::get(string $name = NULL)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-abstract.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取配置值

## 说明

```php
public mixed Yaf_Config_Abstract::get(string $name = NULL)
```

根据名称获取配置值。如果省略 `$name` 或为 `null`，则返回配置对象本身，可用于遍历所有配置值。

## 参数

- **`$name`** — 配置键名。可以使用点号表示法（例如 `database.host`）来访问嵌套的值。

## 返回值

与 `$name` 关联的值。数组值会被包装成 `Yaf_Config_Abstract` 对象。如果键不存在则返回 `null`，当 `$name` 为 `null` 时返回配置对象本身。

## 示例

**`Yaf_Config_Abstract::get()` 示例**

```php


<?php
/**
 * 假设 /etc/myapp/application.ini 包含：
 * [common]
 * database.host = "localhost"
 * database.port = 3306
 */
$config = new Yaf_Config_Ini('/etc/myapp/application.ini', 'common');
echo $config->get('database.host'), "\n";

$simple = new Yaf_Config_Simple([
    'database' => ['host' => '127.0.0.1'],
]);

// 数组值会以 Yaf_Config_Abstract 实例的形式暴露
echo $simple->get('database')->host, "\n";

var_dump($config->get('missing.key'));
?>

   
```

以上示例的输出类似于：

```text


localhost
127.0.0.1
NULL

   
```

## 参见

 `Yaf_Config_Abstract::set()` `Yaf_Config_Ini::get()` `Yaf_Config_Simple::get()`
