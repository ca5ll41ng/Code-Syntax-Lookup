---
id: "zh-php-function-sensitiveparametervalue-debuginfo"
language: "php"
lang: "zh"
category: "function"
name: "SensitiveParameterValue::__debugInfo"
title: "保护敏感值免于意外暴露"
signature: "public array SensitiveParameterValue::__debugInfo()"
module: "language"
source_url: "https://www.php.net/manual/zh/sensitiveparametervalue.debuginfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 保护敏感值免于意外暴露

## 说明

```php
public array SensitiveParameterValue::__debugInfo()
```

在使用 `var_dump()` 时返回空 `array` 以保护敏感值免于意外暴露。

## 参数

此函数没有参数。

## 返回值

空 `array`。

## 示例

**将 `SensitiveParameterValue` 对象传递给 `var_dump()`**

```php


<?php
$s = new \SensitiveParameterValue('secret');

var_dump($s);
?>

    
```

以上示例会输出：

```text


object(SensitiveParameterValue)#1 (0) {
}

    
```
