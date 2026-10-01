---
id: "zh-php-function-reserved-variables-globals"
language: "php"
lang: "zh"
category: "function"
name: "$GLOBALS"
title: "引用全局作用域中可用的全部变量"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.globals.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 引用全局作用域中可用的全部变量

## 说明

关联数组 `array`，包含当前脚本内定义成全局范围的所有变量的引用。 数组的键就是变量的名字。

## 示例

**`$GLOBALS` 范例**

```php


<?php

function test()
{
    $foo = "local variable";

    echo '$foo in global scope: ' . $GLOBALS["foo"] . "\n";
    echo '$foo in current scope: ' . $foo . "\n";
}

$foo = "Example content";
test();

?>

    
```

以上示例的输出类似于：

```text


$foo in global scope: Example content
$foo in current scope: local variable

    
```

> 从 PHP 8.1.0 起，不再支持对整个 `$GLOBALS` 数组的写访问：
>
> **写入整个 `$GLOBALS` 将会导致错误。**
>
> ```php
>
>
> <?php
> // 生成编译时错误：
> $GLOBALS = [];
> $GLOBALS += [];
> $GLOBALS =& $x;
> $x =& $GLOBALS;
> unset($GLOBALS);
> array_pop($GLOBALS);
> // ...以及对 $GLOBALS 的任何其他写入/读写操作
> ?>
>
>      
> ```

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

> 变量可用性
>
> 与所有其他超全局变量不同，`$GLOBALS`在PHP中总是可用的。

> 从 PHP 8.1.0 起，`$GLOBALS` 现在是全局符号表的只读副本。 也就是说，全局变量不能通过副本进行修改。 在之前的版本中，`$GLOBALS` 数组和 PHP 数组通常传值的行为不一样，全局变量可通过副本修改。 ```php <?php // PHP 8.1.0 之前 $a = 1; $globals = $GLOBALS; // 表面意义的按值复制 $globals['a'] = 2; var_dump($a); // int(2) // 从 PHP 8.1.0 起 // 这不再修改 $a。先前的行为违反了按值语义。 $globals = $GLOBALS; $globals['a'] = 1; // 要恢复以前的行为，请迭代其副本并将每个属性分配回 $GLOBALS。 foreach ($globals as $key => $value) { $GLOBALS[$key] = $value; } ?> ```
