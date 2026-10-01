---
id: "zh-php-syntax-control-structures-declare"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.declare"
title: "declare"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.declare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# declare

`declare` 结构用来设定一段代码的执行指令。`declare` 的语法和其它流程控制结构相似： ```text declare (directive) statement ```

`directive` 部分允许设定 `declare` 代码段的行为。 目前只认识三个指令： `ticks` `encoding` `strict_types`

因为本指令是在文件编译时处理的，所以指令只接受字面量的值。 无法使用变量和常量。下面为你演示： ```php <?php // 这样是有效的： declare(ticks=1); // 这样是无效的： const TICK_VALUE = 1; declare(ticks=TICK_VALUE); ?> ```

`declare` 代码段中的 `statement` 部分将被执行——怎样执行以及执行中有什么副作用出现取决于 `directive` 中设定的指令。

`declare` 结构也可用于全局范围，影响到其后的所有代码（但如果有 `declare` 结构的文件被其它文件包含，则对包含它的父文件不起作用）。 ```php <?php // 两者相等： // 可以这样用： declare(ticks=1) { // 这里写完整的脚本 } // 也可以这样用： declare(ticks=1); // 这里写完整的脚本 ?> ```

### Ticks

Tick（时钟周期）是一个在 `declare` 代码段中解释器每执行 `N` 条可计时的低级语句就会发生的事件。`N` 的值是在 `declare` 中的 `directive` 部分用 ticks=`N` 来指定的。

不是所有语句都可计时。通常条件表达式和参数表达式都不可计时。

在每个 tick 中出现的事件是由 `register_tick_function()` 来指定的。更多细节见下面的例子。注意每个 tick 中可以出现多个事件。

**Tick 的用法示例**

```php


<?php

declare(ticks=1);

// 每次 tick 事件都会调用该函数
function tick_handler()
{
    echo "tick_handler() called\n";
}

register_tick_function('tick_handler'); // 引起 tick 事件

$a = 1; // 引起 tick 事件

if ($a > 0) {
    $a += 2; // 引起 tick 事件
    print $a; // 引起 tick 事件
}

?>

   
```

参见 `register_tick_function()` 和 `unregister_tick_function()`。

### Encoding

可以用 `encoding` 指令来对每段脚本指定其编码方式。

**对脚本指定编码方式**

```php


<?php
declare(encoding='ISO-8859-1');
// 在这里写代码
?>

   
```

> 当和命名空间结合起来时 declare 的唯一合法语法是 `declare(encoding='...');`，其中 `...` 是编码的值。而 `declare(encoding='...') {}` 将在与命名空间结合时产生解析错误。

参见 zend.script_encoding。
