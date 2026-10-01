---
id: "zh-php-function-function-iterator-apply"
language: "php"
lang: "zh"
category: "function"
name: "iterator_apply"
title: "为迭代器中每个元素调用函数"
signature: "int iterator_apply(Traversable $iterator, callable $callback, array|null $args = null)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.iterator-apply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为迭代器中每个元素调用函数

## 说明

```php
int iterator_apply(Traversable $iterator, callable $callback, array|null $args = null)
```

循环迭代每个元素时调用函数。

## 参数

- **`$iterator`** — 要迭代的迭代对象。
- **`$callback`** — 每个元素要调用的回调函数。此函数仅接收指定的 `$args`，因此默认为 null。如果 `count($args) === 3`，则回调函数是三个参数。 > 为了遍历 `$iterator`，此函数必须返回 `true`。
- **`$args`** — 参数 `array`；`$args` 的每个元素都会作为单独的参数传递给回调 `$callback`。

## 返回值

返回已迭代的元素个数。

## 示例

**`iterator_apply()` 示例**

```php


<?php
function print_caps(Iterator $iterator) {
    echo strtoupper($iterator->current()) . "\n";
    return TRUE;
}

$it = new ArrayIterator(array("Apples", "Bananas", "Cherries"));
iterator_apply($it, "print_caps", array($it));
?>

    
```

以上示例会输出：

```text


APPLES
BANANAS
CHERRIES

    
```

 <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function issue E_* level errors, and/or throw exceptions. </para> </refsect1> <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title><function>iterator_apply</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should be here. </para> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例的输出类似于：</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## 参见

`array_walk()`
