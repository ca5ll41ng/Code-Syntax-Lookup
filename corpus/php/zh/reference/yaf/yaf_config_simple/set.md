---
id: "zh-php-function-yaf-config-simple-set"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Config_Simple::set"
title: "设置配置值"
signature: "public bool Yaf_Config_Simple::set(string $name, mixed $value)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-config-simple.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置配置值

## 说明

```php
public bool Yaf_Config_Simple::set(string $name, mixed $value)
```

设置配置值。如果配置是只读的，则失败并返回 `false`。

## 参数

- **`$name`** — 要设置的配置键。
- **`$value`** — 要赋的值。

## 返回值

成功时返回 `true`，如果配置是只读的则返回 `false`。

## 示例

**`Yaf_Config_Simple::set()` 示例**

```php


<?php
$config = new Yaf_Config_Simple(['env' => 'development']);

var_dump($config->set('env', 'production'));
echo $config->env, "\n";

// 只读配置会拒绝修改
$frozen = new Yaf_Config_Simple(['env' => 'development'], true);
var_dump($frozen->set('env', 'production'));
echo $frozen->env, "\n";
?>

   
```

以上示例的输出类似于：

```text


bool(true)
production
bool(false)
development

   
```

## 参见

 `Yaf_Config_Simple::get()` `Yaf_Config_Simple::readonly()`
