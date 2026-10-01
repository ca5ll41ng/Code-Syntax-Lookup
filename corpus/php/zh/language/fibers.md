---
id: "zh-php-syntax-language-fibers"
language: "php"
lang: "zh"
category: "syntax"
name: "language.fibers"
title: "纤程"
module: "language"
source_url: "https://www.php.net/manual/zh/language.fibers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 纤程

纤程概述  纤程（Fiber）表示一组有完整栈、可中断的功能。 纤程可以在调用堆栈中的任何位置被挂起，在纤程内暂停执行，直到稍后恢复。    纤程可以暂停整个执行堆栈，所以该函数的直接调用者不需要改变调用这个函数的方式。    你可以在调用堆栈的任意地方使用 `Fiber::suspend()` 中断执行（也就是说，`Fiber::suspend()` 的调用位置可以在一个深度嵌套的函数中，甚至可以不存在）。    与无栈的 `Generator` 不同, 每一个 `Fiber` 拥有自己的调用栈，并允许在一个深度前度的函数调用中将它们暂停。 声明了中断（interruption）点的函数（即调用 `Fiber::suspend()`） 不需要改变自己的返回类型，不像使用  一样需要返回一个 `Generator` 实例。    纤程可以在任意函数调用中被暂停，包括那些在 PHP VM 中被调用的函数。 例如被用于 `array_map()` 的函数或者提供 `Iterator` 对象以被  调用的方法。    纤程一旦被暂停，可以使用 `Fiber::resume()` 传递任意值、或者使用 `Fiber::throw()` 向纤程抛出一个异常以恢复运行。这个值或者异常将会在 `Fiber::suspend()` 中被返回（抛出）。   
> 在 PHP 8.4.0 之前，不允许在对象析构方法执行期间切换纤程。

 
**基础用法**

 {{{ 

```php

    
<?php
$fiber = new Fiber(function (): void {
   $value = Fiber::suspend('fiber');
   echo "Value used to resume fiber: ", $value, PHP_EOL;
});

$value = $fiber->start();

echo "Value from fiber suspending: ", $value, PHP_EOL;

$fiber->resume('test');
?>

   
```

以上示例会输出：

```text

    
Value from fiber suspending: fiber
Value used to resume fiber: test

   
```
