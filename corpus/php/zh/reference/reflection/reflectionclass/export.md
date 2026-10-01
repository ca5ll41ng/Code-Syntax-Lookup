---
id: "zh-php-function-reflectionclass-export"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::export"
title: "导出类"
signature: "public static string ReflectionClass::export(mixed $argument, bool $return = false)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出类

## 说明

```php
public static string ReflectionClass::export(mixed $argument, bool $return = false)
```

导出反射后的类。

## 参数

- **`$argument`** — 导出的反射。
- **`$return`** — 设为 `true` 时返回导出结果，设为 `false`（默认值）则忽略返回。

## 返回值

如果参数 `$return` 设为 `true`，导出结果将作为 `string` 返回，否则返回 `null`。

## 示例

**`ReflectionClass::export()` 的基本用法**

```php


<?php
class Apple {
    public $var1;
    public $var2 = 'Orange';

    public function type() {
        return 'Apple';
    }
}
ReflectionClass::export('Apple');
?>

    
```

以上示例的输出类似于：

```text


Class [ <user> class Apple ] {
  @@ php shell code 1-8

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [2] {
    Property [ <default> public $var1 ]
    Property [ <default> public $var2 ]
  }

  - Methods [1] {
    Method [ <user> public method type ] {
      @@ php shell code 5 - 7
    }
  }
}

    
```

## 参见

`ReflectionClass::getName()` `ReflectionClass::__toString()`
