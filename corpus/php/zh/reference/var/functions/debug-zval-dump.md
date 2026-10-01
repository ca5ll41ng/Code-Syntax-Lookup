---
id: "zh-php-function-function-debug-zval-dump"
language: "php"
lang: "zh"
category: "function"
name: "debug_zval_dump"
title: "将表示内部 zval 结构的字符串转储到输出"
signature: "void debug_zval_dump(mixed $value, mixed $values)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.debug-zval-dump.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将表示内部 zval 结构的字符串转储到输出

## 说明

```php
void debug_zval_dump(mixed $value, mixed $values)
```

将表示内部 zval（Zend 值）结构的字符串转储到输出。这对于理解或调试 Zend 引擎或 PHP 扩展的实现细节非常有用。

## 参数

- **`$value`** — 要转储的变量或值。
- **`$values`** — 要进一步转储的变量或值。

## 返回值

没有返回值。

## 示例

**`debug_zval_dump()` 示例**

```php


<?php
$var1 = 'Hello';
$var1 .= ' World';
$var2 = $var1;

debug_zval_dump($var1);
?>

    
```

以上示例会输出：

```text


string(11) "Hello World" refcount(3)

    
```

> 理解 `refcount`
>
> 如果没有深入了解过引擎实现，该函数显示的 `refcount` 值可能会令人惊讶。
>
> Zend 引擎使用引用计数来实现两个不同的目的：
>
> 使用叫做“写时复制”的技术来优化内存使用，其中拥有相同值的多个变量指向内存中的同一个副本。当其中修改其中一个变量时，它会指向内存中的一个新副本，并且原始副本的引用计数会减少 1。 跟踪已分配或通过引用传递的变量（参见引用解释）。这个 refcount 存储在单独的 reference zval 上，指向当前值的 zval。这个额外的 zval 目前不会在 `debug_zval_dump()` 中显示。
>
> 因为 `debug_zval_dump()` 将输入作为普通参数传递，通过值传递，所以将使用写时复制技术来传递它们：而不是复制数据，refcount 将在函数调用的生命周期内增加 1。如果函数在接收参数后修改了它，那么将会进行复制；由于没有修改参数，所以在调用范围内显示的 refcount 会比较高。
>
> 参数传递也会阻止 `debug_zval_dump()` 显示通过引用分配的变量。为了说明这一点，对上面示例进行略微修改： ```php <?php $var1 = 'Hello'; $var1 .= ' World'; // Point three variables as references to the same value $var2 =& $var1; $var3 =& $var1; debug_zval_dump($var1); ?> ``` 以上示例会输出： ```text string(11) "Hello World" refcount(2) ```
>
> 尽管 `$var1`、`$var2` 和 `$var3` 是通过引用链接，但只有 *value* 传递给了 `debug_zval_dump()`。这个值在引用集合中使用了一次，在 `debug_zval_dump()` 内部使用了一次，所以显示的引用计数为 2。
>
> 由于引擎针对不同数据类型进行的优化，还会出现进一步的复杂情况。比如一些像整数之类的类型，不使用"写时复制"，因此根本不会显示 refcount。在其他情况下，refcount 显示了内部使用的额外副本，比如当字面字符串或数组作为代码指令的一部分存储时。

## 参见

`var_dump()` `debug_backtrace()` 引用解释 [引用解释（作者：Derick Rethans）]()
