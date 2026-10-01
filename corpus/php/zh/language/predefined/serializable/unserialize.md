---
id: "zh-php-function-serializable-unserialize"
language: "php"
lang: "zh"
category: "function"
name: "Serializable::unserialize"
title: "构造对象"
signature: "public void Serializable::unserialize(string $data)"
module: "language"
source_url: "https://www.php.net/manual/zh/serializable.unserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造对象

## 说明

```php
public void Serializable::unserialize(string $data)
```

在反序列化对象时被调用。

> 这个方法担当着对象构造器的角色。在此方法之后，__construct() 将*不会*被调用。

## 参数

- **`$data`** — 对象的字符串表示

## 返回值

返回没有序列化之前的原始值。

## 参见

__wakeup() __unserialize()
