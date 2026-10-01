---
id: "zh-php-syntax-language-operators-array"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.array"
title: "数组运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 数组运算符

数组

| 例子 | 名称 | 结果 |
| --- | --- | --- |
| $a + $b | 联合 | `$a` 和 `$b` 的联合。 |
| $a == $b | 相等 | 如果 `$a` 和 `$b` 具有相同的键／值对则为 `true`。 |
| $a === $b | 全等 | 如果 `$a` 和 `$b` 具有相同的键／值对并且顺序和类型都相同则为 `true`。 |
| $a != $b | 不等 | 如果 `$a` 不等于 `$b` 则为 `true`。 |
| $a <> $b | 不等 | 如果 `$a` 不等于 `$b` 则为 `true`。 |
| $a !== $b | 不全等 | 如果 `$a` 不全等于 `$b` 则为 `true`。 |

`+` 运算符把右边的数组元素附加到左边的数组后面，两个数组中都有的键名，则只用左边数组中的，右边的被忽略。

**数组追加运算符**

```php


<?php
$a = array("a" => "apple", "b" => "banana");
$b = array("a" => "pear", "b" => "strawberry", "c" => "cherry");

$c = $a + $b; // $a 和 $b 的并集
echo "Union of \$a and \$b: \n";
var_dump($c);

$c = $b + $a; // $b 和 $a 的并集
echo "Union of \$b and \$a: \n";
var_dump($c);

$a += $b; //  $a += $b 的并集是 $a 和 $b
echo "Union of \$a += \$b: \n";
var_dump($a);
?>

   
```

以上示例会输出：

```php


Union of $a and $b:
array(3) {
  ["a"]=>
  string(5) "apple"
  ["b"]=>
  string(6) "banana"
  ["c"]=>
  string(6) "cherry"
}
Union of $b and $a:
array(3) {
  ["a"]=>
  string(4) "pear"
  ["b"]=>
  string(10) "strawberry"
  ["c"]=>
  string(6) "cherry"
}
Union of $a += $b:
array(3) {
  ["a"]=>
  string(5) "apple"
  ["b"]=>
  string(6) "banana"
  ["c"]=>
  string(6) "cherry"
}

   
```

数组中的单元如果具有相同的键名和值则比较时相等。

**比较数组**

```php


<?php
$a = array("apple", "banana");
$b = array(1 => "banana", "0" => "apple");

var_dump($a == $b); // bool(true)
var_dump($a === $b); // bool(false)
?>

   
```

### 参见

数组类型 数组函数
