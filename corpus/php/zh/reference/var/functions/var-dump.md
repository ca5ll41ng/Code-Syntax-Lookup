---
id: "zh-php-function-function-var-dump"
language: "php"
lang: "zh"
category: "function"
name: "var_dump"
title: "打印变量的相关信息"
signature: "void var_dump(mixed $value, mixed $values)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.var-dump.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打印变量的相关信息

## 说明

```php
void var_dump(mixed $value, mixed $values)
```

此函数显示关于一个或多个表达式的结构信息，包括表达式的类型与值。数组和对象将递归展开值，通过缩进显示其结构。

对象的所有公共、私有和受保护的属性都会在输出中返回，除非该对象实现了 __debugInfo() 方法。

> 和直接将结果输出到浏览器一样，可使用输出控制函数来捕获当前函数的输出，然后(例如)保存到一个 `string` 中。

## 参数

- **`$value`** — 要打印的表达式。
- **`$values`** — 更多要打印的表达式。

## 返回值

没有返回值。

## 示例

**`var_dump()` 例子**

```php


<?php
$a = array(1, 2, array("a", "b", "c"));
var_dump($a);
?>

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  array(3) {
    [0]=>
    string(1) "a"
    [1]=>
    string(1) "b"
    [2]=>
    string(1) "c"
  }
}

    
```

```php


<?php

$b = 3.1;
$c = true;
var_dump($b, $c);

?>

    
```

以上示例会输出：

```text


float(3.1)
bool(true)

    
```

## 参见

`print_r()` `debug_zval_dump()` `var_export()` __debugInfo()
