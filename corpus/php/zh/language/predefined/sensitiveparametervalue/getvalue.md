---
id: "zh-php-function-sensitiveparametervalue-getvalue"
language: "php"
lang: "zh"
category: "function"
name: "SensitiveParameterValue::getValue"
title: "返回敏感值"
signature: "public mixed SensitiveParameterValue::getValue()"
module: "language"
source_url: "https://www.php.net/manual/zh/sensitiveparametervalue.getvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回敏感值

## 说明

```php
public mixed SensitiveParameterValue::getValue()
```

获取敏感值。

## 参数

此函数没有参数。

## 返回值

敏感值。

## 示例

**`SensitiveParameterValue::getValue()` 示例**

```php


<?php
$s = new \SensitiveParameterValue('secret');

echo "The protected value is: ", $s->getValue(), "\n";
?>

    
```

以上示例会输出：

```text


The protected value is: secret

    
```
