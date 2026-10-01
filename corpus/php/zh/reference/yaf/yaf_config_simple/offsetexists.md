---
id: "zh-php-function-yaf-config-simple-offsetexists"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::offsetExists"
title: "检查键是否存在（ArrayAccess）"
signature: "public bool Yaf_Config_Simple::offsetExists(mixed $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查键是否存在（ArrayAccess）

## 说明

```php
public bool Yaf_Config_Simple::offsetExists(mixed $name)
```

检查配置键是否存在。此方法是 `Yaf_Config_Simple::__isset()` 的别名，当对配置对象以数组方式使用 `isset()` 时会被调用。

## 参数

- **`$name`** — 要检查的配置键。

## 返回值

如果键存在返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Config_Simple::offsetExists()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

var_dump(isset($config['database']));
var_dump($config->offsetExists('database'));
var_dump(isset($config['cache']));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(false)

   
```

## 参见

 `Yaf_Config_Simple::get()` `Yaf_Config_Simple::__isset()`
