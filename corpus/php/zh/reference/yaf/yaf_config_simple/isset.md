---
id: "zh-php-function-yaf-config-simple-isset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::__isset"
title: "检查键是否存在"
signature: "public bool Yaf_Config_Simple::__isset(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.isset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查键是否存在

## 说明

```php
public bool Yaf_Config_Simple::__isset(string $name)
```

检查配置键是否存在。当对配置对象使用 `isset()` 时会调用此方法。

## 参数

- **`$name`** — 要检查的配置键。

## 返回值

如果键存在返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Config_Simple::__isset()` 示例**

```php


<?php
$config = new Yaf_Config_Simple([
    'application' => ['name' => 'MyApp'],
    'database'    => ['host' => 'localhost'],
]);

var_dump(isset($config->application));
var_dump($config->__isset('application'));
var_dump(isset($config->cache));
?>

   
```

以上示例的输出类似于：

```text


bool(true)
bool(true)
bool(false)

   
```

## 参见

 `Yaf_Config_Simple::get()` `Yaf_Config_Simple::offsetExists()`
