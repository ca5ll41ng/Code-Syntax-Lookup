---
id: "zh-php-function-function-boolval"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "boolval"
title: "获取变量的布尔值"
signature: "bool boolval(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.boolval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取变量的布尔值

## 说明

```php
bool boolval(mixed $value)
```

返回 `$value` 的 `bool` 值。

## 参数

- **`$value`** — 标量值会被转化成 `bool` 值。

## 返回值

`$value` 的 `bool` 值。

## 示例

**`boolval()` examples**

```php


<?php
echo '0:        '.(boolval(0) ? 'true' : 'false')."\n";
echo '42:       '.(boolval(42) ? 'true' : 'false')."\n";
echo '0.0:      '.(boolval(0.0) ? 'true' : 'false')."\n";
echo '4.2:      '.(boolval(4.2) ? 'true' : 'false')."\n";
echo '"":       '.(boolval("") ? 'true' : 'false')."\n";
echo '"string": '.(boolval("string") ? 'true' : 'false')."\n";
echo '"0":      '.(boolval("0") ? 'true' : 'false')."\n";
echo '"1":      '.(boolval("1") ? 'true' : 'false')."\n";
echo '[1, 2]:   '.(boolval([1, 2]) ? 'true' : 'false')."\n";
echo '[]:       '.(boolval([]) ? 'true' : 'false')."\n";
echo 'stdClass: '.(boolval(new stdClass) ? 'true' : 'false')."\n";
?>

    
```

以上示例会输出：

```text


0:        false
42:       true
0.0:      false
4.2:      true
"":       false
"string": true
"0":      false
"1":      true
[1, 2]:   true
[]:       false
stdClass: true

    
```

## 参见

`floatval()` `intval()` `strval()` `settype()` `is_bool()` 类型转换的判别
