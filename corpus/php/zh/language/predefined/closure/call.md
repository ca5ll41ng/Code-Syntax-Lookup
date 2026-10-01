---
id: "zh-php-function-closure-call"
language: "php"
lang: "zh"
category: "function"
name: "Closure::call"
title: "绑定并调用闭包"
signature: "public mixed Closure::call(object $newThis, mixed $args)"
module: "language"
source_url: "https://www.php.net/manual/zh/closure.call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绑定并调用闭包

## 说明

 {{{ 

```php
public mixed Closure::call(object $newThis, mixed $args)
```

暂时将闭包绑定到 `$newThis`，并使用任意给定的参数调用它。

 }}} 

## 参数

 {{{ 

- **`$newThis`** — 在调用期间将闭包绑定到 `object`。
- **`$args`** — 零个或多个参数，他们将作为参数传递给闭包。

 }}} 

## 返回值

 {{{ 

返回闭包的返回值。

 }}} 

## 示例

**`Closure::call()` 示例**

```php


<?php
class Value {
    protected $value;
    public function __construct($value) {
        $this->value = $value;
    }
    public function getValue() {
        return $this->value;
    }
}
$three = new Value(3);
$four = new Value(4);
$closure = function ($delta) { var_dump($this->getValue() + $delta); };
$closure->call($three, 4);
$closure->call($four, 4);
?>

   
```

以上示例会输出：

```text


int(7)
int(8)

   
```
