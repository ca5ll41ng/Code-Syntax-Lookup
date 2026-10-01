---
id: "zh-php-function-function-list"
language: "php"
lang: "zh"
category: "function"
name: "list"
title: "把数组中的值赋给一组变量"
signature: "array list(mixed $var, [mixed $vars = ...])"
module: "array"
source_url: "https://www.php.net/manual/zh/function.list.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把数组中的值赋给一组变量

## 说明

```php
array list(mixed $var, [mixed $vars = ...])
```

像 `array()` 一样，这不是真正的函数，而是语言结构。 `list()` 可以在单次操作内为一组变量赋值。仅数组和实现了 ArrayAccess 的对象可以解包。`list()` 表达式不能为空。

> 在 PHP 7.1.0 之前的版本，`list()` 仅能用于数字索引的数组，并假定数字索引从 0 开始。

自 PHP 7.1.0 起，`list()` 还可以包含指定的 key，从而允许使用非整数或非连续 key 解构数组。有关数组解构的更多详细信息，请参阅数组解构部分。

> 尝试访问未定义的数组 key 与访问其他未定义变量相同：将发出 `E_WARNING` 级别的错误消息（在 PHP 8.0.0 之前为 `E_NOTICE` 级别），并且结果为 `null`。
>
> 尝试解包标量会将所有变量赋值为 `null`。尝试解包未实现 ArrayAccess 的对象会导致严重错误。

## 参数

- **`$var`** — 一个变量。

- **`$vars`** — 更多变量。

## 返回值

返回指定的数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 支持在数组解构时传引用。 |
| 7.1.0 | 现在可以指定 `list()` 中的键。 这就可以解构非数字键或者无顺序的数组。 |

## 示例

**`list()` 示例**

```php


<?php

$info = array('coffee', 'brown', 'caffeine');

// 列出所有变量
list($drink, $color, $power) = $info;
echo "$drink is $color and $power makes it special.\n";

// 列出他们的其中一个
list($drink, , $power) = $info;
echo "$drink has $power.\n";

// 或者让我们跳到仅第三个
list( , , $power) = $info;
echo "I need $power!\n";

// list() 不能对字符串起作用
list($bar) = "abcde";
var_dump($bar); // NULL
?>

    
```

**使用 `list()` 的示例**

```php


<?php
$result = $pdo->query("SELECT id, name FROM employees");
while (list($id, $name) = $result->fetch(PDO::FETCH_NUM)) {
    echo "id: $id, name: $name\n";
}
?>

    
```

**使用嵌套的 `list()`**

```php


<?php

list($a, list($b, $c)) = array(1, array(2, 3));

var_dump($a, $b, $c);

?>

    
```

以上示例会输出：

```text


int(1)
int(2)
int(3)

    
```

`list()` 使用 array 索引的顺序和它何时定义无关。

**`list()` 和索引顺序定义**

```php


<?php
$foo = array(2 => 'a', 'foo' => 'b', 0 => 'c');
$foo[1] = 'd';
list($x, $y, $z) = $foo;
var_dump($foo, $x, $y, $z);

    
```

得到以下输出（注意比较 `list()` 所写的元素顺序）：

```text


array(4) {
  [2]=>
  string(1) "a"
  ["foo"]=>
  string(1) "b"
  [0]=>
  string(1) "c"
  [1]=>
  string(1) "d"
}
string(1) "c"
string(1) "d"
string(1) "a"

    
```

**带键的 `list()`**

从 PHP 7.1.0 开始，`list()` 可以包含显式的键，可赋值到任意表达式。 可以混合使用数字和字符串键。但是不能混合有键和无键不能混用。

```php


<?php
$data = [
    ["id" => 1, "name" => 'Tom'],
    ["id" => 2, "name" => 'Fred'],
];
foreach ($data as ["id" => $id, "name" => $name]) {
    echo "id: $id, name: $name\n";
}
echo PHP_EOL;
list(1 => $second, 3 => $fourth) = [1, 2, 3, 4];
echo "$second, $fourth\n";

    
```

以上示例会输出：

```text


id: 1, name: Tom
id: 2, name: Fred

2, 4

    
```

## 参见

`each()` `array()` `extract()`
