---
id: "zh-php-function-yaf-config-ini-set"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::set"
title: "设置配置值"
signature: "public bool Yaf_Config_Ini::set(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置配置值

## 说明

```php
public bool Yaf_Config_Ini::set(string $name, mixed $value)
```

尝试设置配置值。由于 `Yaf_Config_Ini` 始终只读，此方法总是失败并触发一条警告。

## 参数

- **`$name`** — 要设置的配置键。
- **`$value`** — 要赋的值。

## 返回值

由于 `Yaf_Config_Ini` 是只读的，始终返回 `false` 并触发一条警告。

## 示例

**`Yaf_Config_Ini::set()` 示例**

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

// 只读：赋值总是失败，并触发一条警告
var_dump($config->set('database.host', '192.0.2.10'));

echo $config->get('database.host'), "\n";
?>

   
```

以上示例的输出类似于：

```text


bool(false)
localhost

   
```

## 参见

 `Yaf_Config_Ini::get()` `Yaf_Config_Ini::readonly()`
