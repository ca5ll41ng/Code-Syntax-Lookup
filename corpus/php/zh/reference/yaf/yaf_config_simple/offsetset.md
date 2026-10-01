---
id: "zh-php-function-yaf-config-simple-offsetset"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::offsetSet"
title: "设置配置值（ArrayAccess）"
signature: "public void Yaf_Config_Simple::offsetSet(mixed $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置配置值（ArrayAccess）

## 说明

```php
public void Yaf_Config_Simple::offsetSet(mixed $name, mixed $value)
```

以数组语法设置配置值。该方法是 `Yaf_Config_Simple::set()` 的别名。如果配置是只读的，赋值会静默失败。

## 参数

- **`$name`** — 要设置的配置键。
- **`$value`** — 要赋的值。

## 返回值

没有返回值。如果配置是只读的，赋值会失败。

## 示例

**`Yaf_Config_Simple::offsetSet()` 示例**

```php


<?php
$config = new Yaf_Config_Simple(['env' => 'development']);

// 默认可写
$config['env'] = 'production';
$config['cache'] = ['enable' => true];
echo $config['env'], "\n";
var_dump($config['cache']['enable']);

// 对只读配置的赋值会静默失败
$frozen = new Yaf_Config_Simple(['env' => 'development'], true);
$frozen['env'] = 'production';
echo $frozen['env'], "\n";
?>

   
```

以上示例的输出类似于：

```text


production
bool(true)
development

   
```

## 参见

 `Yaf_Config_Simple::set()` `Yaf_Config_Simple::offsetGet()` `Yaf_Config_Simple::offsetUnset()`
