---
id: "zh-php-function-function-ob-list-handlers"
language: "php"
lang: "zh"
category: "function"
name: "ob_list_handlers"
title: "列出所有使用的输出处理程序"
signature: "array ob_list_handlers()"
module: "outcontrol"
source_url: "https://www.php.net/manual/zh/function.ob-list-handlers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 列出所有使用的输出处理程序

## 说明

```php
array ob_list_handlers()
```

列出所有使用的输出处理程序。

## 参数

此函数没有参数。

## 返回值

这将返回数组，其中包含正在使用的输出处理程序（如果有）。

如果启用了 output_buffering 并且未设置 output_handler，或者没有回调或 `null` 传递给 `ob_start()`，则返回`"default output handler"`。启用 output_buffering 并设置 output_handler相当于将内部（内置）函数传递给 `ob_start()`。

如果将 `callable` 传递给 `ob_start()`，则返回 `callable` 的完全限定名称。如果 `callable` 是实现 __invoke() 的对象，则返回该对象的 __invoke() 方法的完全限定名称。如果 `callable` 是 `Closure`，则返回 `"Closure::__invoke"`。

## 示例

**`ob_list_handlers()` 示例**

```php


<?php
// 使用 output_buffering=On，没有设置 output_handler
var_dump(ob_list_handlers());
ob_end_flush();

// 没有 callback 或为 null
ob_start();
var_dump(ob_list_handlers());
ob_end_flush();

// 匿名函数
ob_start(function($string) { return $string; });
var_dump(ob_list_handlers());
ob_end_flush();

// 箭头函数
ob_start(fn($string) => $string);
var_dump(ob_list_handlers());
ob_end_flush();

// first class callable
$firstClassCallable = userDefinedFunction(...);

ob_start([$firstClassCallable, '__invoke']);
var_dump(ob_list_handlers());
ob_end_flush();

// 内部（内置）函数
ob_start('print_r');
var_dump(ob_list_handlers());
ob_end_flush();

// 用户定义函数
function userDefinedFunction($string, $flags) { return $string; };

ob_start('userDefinedFunction');
var_dump(ob_list_handlers());
ob_end_flush();

class MyClass {
    public static function staticHandle($string) {
        return $string;
    }

    public static function handle($string) {
        return $string;
    }

    public function __invoke($string) {
        return $string;
    }
}

// 类或静态方法
ob_start(['MyClass','staticHandle']);
var_dump(ob_list_handlers());
ob_end_flush();

// 对象或非静态方法
ob_start([new MyClass,'handle']);
var_dump(ob_list_handlers());
ob_end_flush();

// 可调用对象
ob_start(new MyClass);
var_dump(ob_list_handlers());
ob_end_flush();
?>

    
```

以上示例会输出：

```text


array(1) {
  [0]=>
  string(22) "default output handler"
}
array(1) {
  [0]=>
  string(22) "default output handler"
}
array(1) {
  [0]=>
  string(7) "print_r"
}
array(1) {
  [0]=>
  string(19) "userDefinedFunction"
}
array(1) {
  [0]=>
  string(17) "Closure::__invoke"
}
array(1) {
  [0]=>
  string(17) "Closure::__invoke"
}
array(1) {
  [0]=>
  string(17) "Closure::__invoke"
}
array(1) {
  [0]=>
  string(21) "MyClass::staticHandle"
}
array(1) {
  [0]=>
  string(15) "MyClass::handle"
}
array(1) {
  [0]=>
  string(17) "MyClass::__invoke"
}

    
```

## 参见

`ob_end_clean()` `ob_end_flush()` `ob_get_flush()` `ob_start()`
