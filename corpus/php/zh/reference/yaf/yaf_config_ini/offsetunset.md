---
id: "zh-php-function-yaf-config-ini-offsetunset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Ini::offsetUnset"
title: "删除配置键（ArrayAccess）"
signature: "public void Yaf_Config_Ini::offsetUnset(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-ini.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除配置键（ArrayAccess）

## 说明

```php
public void Yaf_Config_Ini::offsetUnset(mixed $name)
```

根据键删除配置项。当对配置对象以数组方式使用 `unset()` 时会调用此方法。

## 参数

- **`$name`** — 要删除的配置键。

## 返回值

没有返回值。如果配置是只读的，会触发一条警告。

## 示例

**`Yaf_Config_Ini::offsetUnset()` 示例**

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

// Yaf_Config_Ini 是只读的：会触发一条警告，不会删除任何内容
unset($config['database']);

var_dump(isset($config['database']));
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Config_Ini::offsetGet()` `Yaf_Config_Ini::offsetSet()`
