---
id: "zh-php-function-yaf-config-ini-offsetset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::offsetSet"
title: "设置配置值（ArrayAccess）"
signature: "public void Yaf_Config_Ini::offsetSet(mixed $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置配置值（ArrayAccess）

## 说明

```php
public void Yaf_Config_Ini::offsetSet(mixed $name, mixed $value)
```

尝试以数组方式设置配置值。此方法是 `Yaf_Config_Ini::set()` 的别名。由于 `Yaf_Config_Ini` 始终只读，该操作总是失败并触发一条警告。

## 参数

- **`$name`** — 要设置的配置键。
- **`$value`** — 要赋的值。

## 返回值

没有返回值。由于 `Yaf_Config_Ini` 是只读的，会触发一条警告。

## 示例

**`Yaf_Config_Ini::offsetSet()` 示例**

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

// Yaf_Config_Ini 是只读的：会触发一条警告，原值保持不变
$config['database.host'] = '192.0.2.10';

echo $config['database.host'], "\n";
?>

   
```

以上示例的输出类似于：

```text


localhost

   
```

## 参见

 `Yaf_Config_Ini::set()` `Yaf_Config_Ini::offsetGet()` `Yaf_Config_Ini::readonly()`
