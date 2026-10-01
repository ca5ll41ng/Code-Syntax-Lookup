---
id: "zh-php-function-function-usort"
language: "php"
lang: "zh"
category: "function"
name: "usort"
title: "使用用户自定义的比较函数对数组中的值进行排序"
signature: "true usort(array $array, callable $callback)"
module: "array"
source_url: "https://www.php.net/manual/zh/function.usort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用用户自定义的比较函数对数组中的值进行排序

## 说明

```php
true usort(array $array, callable $callback)
```

根据用户提供的比较函数，对 `$array` 原地排序。

> 如果两个成员完全相同，那么它们将保持原来的顺序。 在 PHP 8.0.0 之前，它们在排序数组中的相对顺序是未定义的。

> 此函数为 `$array` 中的元素赋与新的键名。这将删除原有的键名，而不是仅仅将键名重新排序。

## 参数

- **`$array`** — 输入的数组
- **`$callback`** — 在第一个参数小于，等于或大于第二个参数时，该比较函数必须相应地返回一个小于，等于或大于 0 的整数。
  > 从比较函数中返回*非整数*值，例如 `float`，将导致内部强制转换为 callback 返回值为 `int`。因此，诸如 `0.99` 和 `0.1` 之类的值都将被转换为整数值 `0`，将这些值比较的话将会是相等。



## 返回值

总是返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在返回类型为 `true`；之前是 `bool`。 |
| 8.0.0 | 如果 `$callback` 接受引用传递参数，该方法将会抛出 `E_WARNING`。 |

## 示例

**`usort()` 示例**

```php


<?php
function cmp($a, $b)
{
    if ($a == $b) {
        return 0;
    }
    return ($a < $b) ? -1 : 1;
}

$a = array(3, 2, 5, 6, 1);

usort($a, "cmp");

foreach ($a as $key => $value) {
    echo "$key: $value\n";
}
?>

    
```

以上示例会输出：

```text


0: 1
1: 2
2: 3
3: 5
4: 6

    
```

> 很明显在这个小例子中用 `sort()` 函数更合适。

**使用多维数组的 `usort()` 示例**

```php


<?php
function cmp($a, $b)
{
    return strcmp($a["fruit"], $b["fruit"]);
}

$fruits[0]["fruit"] = "lemons";
$fruits[1]["fruit"] = "apples";
$fruits[2]["fruit"] = "grapes";

usort($fruits, "cmp");

foreach ($fruits as $key => $value) {
    echo "\$fruits[$key]: " . $value["fruit"] . "\n";
}
?>

    
```

以上示例会输出：

```text


$fruits[0]: apples
$fruits[1]: grapes
$fruits[2]: lemons

    
```

当排序多维数组时，`$a` 和 `$b` 包含到数组第一个索引的引用。

**使用一个对象的成员函数的 `usort()` 示例**

```php


<?php
class TestObj {
    public string $name;

    function __construct($name)
    {
        $this->name = $name;
    }

    /* This is the static comparing function: */
    static function cmp_obj($a, $b)
    {
        return strtolower($a->name) <=> strtolower($b->name);
    }
}

$a[] = new TestObj("c");
$a[] = new TestObj("b");
$a[] = new TestObj("d");

usort($a, [TestObj::class, "cmp_obj"]);

foreach ($a as $item) {
    echo $item->name . "\n";
}
?>

    
```

以上示例会输出：

```text


b
c
d

    
```

**`usort()` 示例，使用闭包对多维数组进行排序**

```php


<?php
$array[0] = array('key_a' => 'z', 'key_b' => 'c');
$array[1] = array('key_a' => 'x', 'key_b' => 'b');
$array[2] = array('key_a' => 'y', 'key_b' => 'a');

function build_sorter($key) {
    return function ($a, $b) use ($key) {
        return strnatcmp($a[$key], $b[$key]);
    };
}

usort($array, build_sorter('key_b'));

foreach ($array as $item) {
    echo $item['key_a'] . ', ' . $item['key_b'] . "\n";
}
?>

    
```

以上示例会输出：

```text


y, a
x, b
z, c

    
```

**使用太空船运算符的 `usort()` 示例**

太空船运算符允许跨多个轴直接比较复合值。 下面的示例将对 `$people` 按姓氏排序，如果姓氏匹配，则按名字排序。

```php

     
<?php
$people[0] = ['first' => 'Adam', 'last' => 'West'];
$people[1] = ['first' => 'Alec', 'last' => 'Baldwin'];
$people[2] = ['first' => 'Adam', 'last' => 'Baldwin'];

function sorter(array $a, array $b) {
    return [$a['last'], $a['first']] <=> [$b['last'], $b['first']];
}

usort($people, 'sorter');

foreach ($people as $person) {
    print $person['last'] . ', ' . $person['first'] . PHP_EOL;
}
?>

    
```

以上示例会输出：

```text

     
Baldwin, Adam
Baldwin, Alec
West, Adam

    
```

## 参见

 `uasort()` `uksort()` 数组排序函数对比
