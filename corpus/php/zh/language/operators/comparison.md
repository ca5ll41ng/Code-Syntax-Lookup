---
id: "zh-php-syntax-language-operators-comparison"
language: "php"
lang: "zh"
category: "syntax"
name: "language.operators.comparison"
title: "比较运算符"
module: "language"
source_url: "https://www.php.net/manual/zh/language.operators.comparison.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 比较运算符

比较

比较运算符，如同它们名称所暗示的，允许对两个值进行比较。还可以参考 PHP 类型比较表看不同类型相互比较的例子。

| 例子 | 名称 | 结果 |
| --- | --- | --- |
| $a == $b | 等于 | `true`，如果类型转换后 `$a` 等于 `$b`。 |
| $a === $b | 全等 | `true`，如果 `$a` 等于 `$b`，并且它们的类型也相同。 |
| $a != $b | 不等 | `true`，如果类型转换后 `$a` 不等于 `$b`。 |
| $a <> $b | 不等 | `true`，如果类型转换后 `$a` 不等于 `$b`。 |
| $a !== $b | 不全等 | `true`，如果 `$a` 不等于 `$b`，或者它们的类型不同。 |
| $a < $b | 小于 | `true`，如果 `$a` 严格小于 `$b`。 |
| $a > $b | 大于 | `true`，如果 `$a` 严格大于 `$b`。 |
| $a <= $b | 小于等于 | `true`，如果 `$a` 小于或者等于 `$b`。 |
| $a >= $b | 大于等于 | `true`，如果 `$a` 大于或者等于 `$b`。 |
| $a <=> $b | 太空船运算符（组合比较符） | 当`$a`小于、等于、大于 `$b`时 分别返回一个小于、等于、大于0的 `int` 值。 |

当两个操作对象都是 数字字符串， 或一个是数字另一个是 数字字符串， 就会自动按照数值进行比较。 此规则也适用于 switch 语句。 当比较时用的是 `===` 或 `!==`， 则不会进行类型转换——因为不仅要对比数值，还要对比类型。

> PHP 8.0.0 之前，如果 `string` 与数字或者数字字符串进行比较， 则在比较前会将 `string` 转化为数字。 在如下示例中会出现不可预料的结果： ```php <?php var_dump(0 == "a"); var_dump("1" == "01"); var_dump("10" == "1e1"); var_dump(100 == "1e2"); switch ("a") { case 0: echo "0"; break; case "a": echo "a"; break; } ?> ``` 以上示例在 PHP 7 中的输出： ```text bool(true) bool(true) bool(true) bool(true) 0 ``` 以上示例在 PHP 8 中的输出： ```text bool(false) bool(true) bool(true) bool(true) a ```

**比较运算符**

```php


<?php
// 整数
echo 1 <=> 1, ' '; // 0
echo 1 <=> 2, ' '; // -1
echo 2 <=> 1, ' '; // 1

// 浮点数
echo 1.5 <=> 1.5, ' '; // 0
echo 1.5 <=> 2.5, ' '; // -1
echo 2.5 <=> 1.5, ' '; // 1

// 字符串
echo "a" <=> "a", ' '; // 0
echo "a" <=> "b", ' '; // -1
echo "b" <=> "a", ' '; // 1

echo "a" <=> "aa", ' ';  // -1
echo "zz" <=> "aa", ' '; // 1

// 数组
echo [] <=> [], ' ';               // 0
echo [1, 2, 3] <=> [1, 2, 3], ' '; // 0
echo [1, 2, 3] <=> [], ' ';        // 1
echo [1, 2, 3] <=> [1, 2, 1], ' '; // 1
echo [1, 2, 3] <=> [1, 2, 4], ' '; // -1

// 对象
$a = (object) ["a" => "b"];
$b = (object) ["a" => "b"];
echo $a <=> $b, ' '; // 0

$a = (object) ["a" => "b"];
$b = (object) ["a" => "c"];
echo $a <=> $b, ' '; // -1

$a = (object) ["a" => "c"];
$b = (object) ["a" => "b"];
echo $a <=> $b, ' '; // 1

// 不仅仅比较值，而且也会匹配 key
$a = (object) ["a" => "b"];
$b = (object) ["b" => "b"];
echo $a <=> $b, ' '; // 1

?>

   
```

对于多种类型，比较运算符根据下表比较（按顺序）。

| 运算数 1 类型 | 运算数 2 类型 | 结果 |
| --- | --- | --- |
| `null` 或 `string` | `string` | 将 `null` 转换为 ""，进行数字或词汇比较 |
| `bool` 或 `null` | 任何其它类型 | 转换为 `bool`，`false` < `true` |
| `object` | `object` | 内置类可以定义自己的比较，不同类不能比较，相同的类查看对象比较 |
| `string`、`resource`、`int`、`float` | `string`、`resource`、`int`、`float` | 将字符串和资源转换成数字，按普通数学比较 |
| `array` | `array` | 成员越少的数组越小，如果运算数 1 中的键不存在于运算数 2 中则数组无法比较，否则挨个值比较（见下例） |
| `object` | 任何其它类型 | `object` 总是更大 |
| `array` | 任何其它类型 | `array` 总是更大 |

**Boolean/null comparison**

```php


<?php
// Bool 和 null 总是作为 bool 比较
var_dump(1 == TRUE);  // TRUE——等同于 (bool) 1 == TRUE
var_dump(0 == FALSE); // TRUE——等同于 (bool) 0 == FALSE
var_dump(100 < TRUE); // FALSE——等同于 (bool) 100 < TRUE
var_dump(-10 < FALSE);// FALSE——等同于 (bool) -10 < FALSE
var_dump(min(-100, -10, NULL, 10, 100)); // NULL——(bool) NULL < (bool) -100 即 FALSE < TRUE
?>

   
```

**标准数组比较代码**

```php


<?php
// 数组是用标准比较运算符或者太空船运算符进行比较的
function standard_array_compare($op1, $op2)
{
    if (count($op1) < count($op2)) {
        return -1; // $op1 < $op2
    } elseif (count($op1) > count($op2)) {
        return 1; // $op1 > $op2
    }
    foreach ($op1 as $key => $val) {
        if (!array_key_exists($key, $op2)) {
            return 1;
        } elseif ($val < $op2[$key]) {
            return -1;
        } elseif ($val > $op2[$key]) {
            return 1;
        }
    }
    return 0; // $op1 == $op2
}
?>

   
```

> 比较浮点数
>
> 由于浮点数 `float` 的内部表达方式，不应比较两个浮点数`float`是否相等。
>
> 更多信息参见 `float`。

> 请注意，在比较不同类型的值时，类型转换并不总是很明显，尤其是比较 `integer` 与 `boolean` 或者 `integer` 与 `string`。因此，在大多数情况下，通常建议使用 `===` 和 `!==` 进行比较而不是 `==` 和 `!=`。

### 不能比较的值

虽然恒等比较（`===` 和 `!==`）可以应用于任意值，其它比较运算符应该仅用于可比较的值。不能比较的值的比较的结果是不确定的，不应依赖。

### 参见

`strcasecmp()` `strcmp()` 数组运算符 类型

### 三元运算符

另一个条件运算符是“?:”（或三元）运算符 。

**赋默认值**

```php


<?php
// 三元运算符的例子
$action = (empty($_POST['action'])) ? 'default' : $_POST['action'];

// 以上等同于以下的  if/else 语句
if (empty($_POST['action'])) {
    $action = 'default';
} else {
    $action = $_POST['action'];
}
?>

    
```

表达式 `(expr1) ? (expr2) : (expr3)` 在 {expr1} 求值为 `true` 时的值为 {expr2}，在 {expr1} 求值为 `false` 时的值为 {expr3}。

可以省略三元运算符中间那部分。表达式 `expr1 ?: expr3` 等同于如果 {expr1} 求值为 `true` 时返回 {expr1} 的结果，否则返回 {expr3}。{expr1} 在这里仅执行一次。

> 注意三元运算符是个语句，因此其求值不是变量，而是语句的结果。如果想通过引用返回一个变量这点就很重要。在一个通过引用返回的函数中语句 `return $var == 42 ? $a : $b;` 将不起作用，以后的 PHP 版本会为此发出一条警告。

> 建议避免将三元运算符堆积在一起使用。和其他语言相比， 当在单个表达式中使用多个未加括号的三元运算符时会造成 PHP 运算结果不清晰。 甚至在 PHP 8.0.0 之前，三元运算符是从左到右执行的， 而大多数其他编程语言是从右到左的。 自 PHP 7.4.0 起，弃用依靠左联。 PHP 8.0.0 起，三元运算符是非关联的。
>
> **不清晰的三元运算符行为**
>
> ```php
>
>
> <?php
> // 乍看起来下面的输出是 'true'
> echo (true ? 'true' : false ? 't' : 'f');
>
> // 然而，上面语句的实际输出是't'，因为在 PHP 8.0.0 之前三元运算符是左联的
>
> // 下面是与上面等价的语句，但更清晰
> echo ((true ? 'true' : 'false') ? 't' : 'f');
>
> // 这里可以看到第一个表达式的计算结果是 “true”，第二个表达式的计算结果为 (bool) true，
> // 因此返回第二个三元表达式的 true 分支。
> ?>
>
>      
> ```

> 然而，短三元运算符（`?:`）的链接是稳定且合理的。他将第一个参数进行求值，结果为非假值。注意，未定义的值将会引发警告。
>
> **Short-ternary chaining**
>
> ```php
>
>
> <?php
> echo 0 ?: 1 ?: 2 ?: 3, PHP_EOL; //1
> echo 0 ?: 0 ?: 2 ?: 3, PHP_EOL; //2
> echo 0 ?: 0 ?: 0 ?: 3, PHP_EOL; //3
> ?>
>
>      
> ```

### NULL 合并运算符

另一个简略运算符是 "??" （NULL 合并）运算符。

**设置默认值**

```php


<?php
// NULL 合并运算符的例子
$action = $_POST['action'] ?? 'default';

// 以上例子等同于于以下 if/else 语句
if (isset($_POST['action'])) {
    $action = $_POST['action'];
} else {
    $action = 'default';
}
?>

    
```

当 {expr1} 为 `null`，表达式 `(expr1) ?? (expr2)` 等同于 {expr2}，否则为 {expr1}。

尤其要注意，当不存在左侧的值时，此运算符也和 `isset()` 一样不会产生警告。 对于 array 键尤其有用。

> 请注意：NULL 合并运算符是一个表达式，产生的也是表达式结果，而不是变量。 返回引用变量时需要强调这一点。 因此，在返回引用的函数里就无法使用这样的语句：`return $foo ?? $bar;`，还会提示警告。

> null 合并运算符的优先级较低。这意味着如果将它与其它运算符（比如字符串链接或者算术运算符）混合使用，可能需要括号。
>
> ```php
>
>
> <?php
> // $name 未定义，引发警告。
> print 'Mr. ' . $name ?? 'Anonymous';
>
> // 打印 "Mr. Anonymous"
> print 'Mr. ' . ($name ?? 'Anonymous');
> ?>
>
>    
> ```

> 请注意，NULL 合并运算符支持简单的嵌套：
>
> **嵌套 NULL 合并运算符**
>
> ```php
>
>
> <?php
>
> $foo = null;
> $bar = null;
> $baz = 1;
> $qux = 2;
>
> echo $foo ?? $bar ?? $baz ?? $qux; // 输出 1
>
> ?>
>
>      
> ```
