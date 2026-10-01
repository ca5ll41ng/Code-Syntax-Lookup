---
id: "zh-php-syntax-control-structures-switch"
language: "php"
lang: "zh"
category: "syntax"
name: "control-structures.switch"
title: "switch"
module: "language"
source_url: "https://www.php.net/manual/zh/control-structures.switch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# switch

`switch` 语句类似于具有同一个表达式的一系列 `if` 语句。很多场合下需要把同一个变量（或表达式）与很多不同的值比较，并根据它等于哪个值来执行不同的代码。这正是 `switch` 语句的用途。

> 注意和其它语言不同，continue 语句作用到 switch 上的作用类似于 `break`。如果在循环中有一个 switch 并希望 continue 到外层循环中的下一轮循环，用 `continue 2`。

> 注意 switch/case 作的是松散比较。

下面的例子使用不同方法实现同样的事。一个用一系列的 `if` 和 `elseif` 语句，另一个用 `switch` 语句。例子不同，但输出相同：

**`switch` 结构**

```php


// 这是 switch 语句

switch ($i) {
    case 0:
        echo "i equals 0";
        break;
    case 1:
        echo "i equals 1";
        break;
    case 2:
        echo "i equals 2";
        break;
}

// 相当于：

if ($i == 0) {
    echo "i equals 0";
} elseif ($i == 1) {
    echo "i equals 1";
} elseif ($i == 2) {
    echo "i equals 2";
}
?>

   
```

为避免错误，理解 `switch` 是怎样执行的非常重要。`switch` 语句一行接一行地执行（实际上是语句接语句）。开始时没有代码被执行。仅当一个 `case` 语句中的值和 `switch` 表达式的值匹配时 PHP 才开始执行语句，直到 `switch` 的程序段结束或者遇到第一个 `break` 语句为止。如果不在 case 的语句段最后写上 `break` 的话，PHP 将继续执行下一个 case 中的语句段。例如： ```php <?php switch ($i) { case 0: echo "i equals 0"; case 1: echo "i equals 1"; case 2: echo "i equals 2"; } ?> ```

这里如果 `$i` 等于 0，PHP 将执行所有的 echo 语句！如果 `$i` 等于 1，PHP 将执行后面两条 echo 语句。只有当 `$i` 等于 2 时，才会得到“预期”的结果——只显示“i equals 2”。所以，别忘了 `break` 语句就很重要（即使在某些情况下故意想避免提供它们时）。

在 `switch` 语句中条件只求值一次并用来和每个 `case` 语句比较。在 `elseif` 语句中条件会再次求值。如果条件比一个简单的比较要复杂得多或者在一个很多次的循环中，那么用 `switch` 语句可能会快一些。

在一个 case 中的语句也可以为空，这样只不过将控制转移到了下一个 case 中的语句。 ```php <?php switch ($i) { case 0: case 1: case 2: echo "i is less than 3 but not negative"; break; case 3: echo "i is 3"; } ?> ```

一个 case 的特例是 `default`。它匹配了任何和其它 case 都不匹配的情况。例如： ```php <?php switch ($i) { case 0: echo "i equals 0"; break; case 1: echo "i equals 1"; break; case 2: echo "i equals 2"; break; default: echo "i is not equal to 0, 1 or 2"; } ?> ```

> 如果有多个 default 将导致 `E_COMPILE_ERROR` 错误。

> 从技术上讲，`default` case 可以按照任何顺序列出。只有在没有匹配到其它的 case 时才会使用它。但是最好按照惯例，将其作为最后一个分支放在最后。

如果没有匹配到 `case` 分支且没有 `default` 分支，则不会执行任何代码，就像 `if` 不为 true 一样。

case 的值可以使用表达式。然而，该表达式将会自我求值，然后与 switch 的值进行松散比较。这意味着它不适合用于复杂的 switch 值求值。例如： ```php <?php $target = 1; $start = 3; switch ($target) { case $start - 1: print "A"; break; case $start - 2: print "B"; break; case $start - 3: print "C"; break; case $start - 4: print "D"; break; } // 输出“B” ?> ```

对于更复杂的比较，值 `true` 可用于 switch 的值。或使用 `if`-`else` 代替 `switch`。 ```php <?php $offset = 1; $start = 3; switch (true) { case $start - $offset === 1: print "A"; break; case $start - $offset === 2: print "B"; break; case $start - $offset === 3: print "C"; break; case $start - $offset === 4: print "D"; break; } // 输出“B” ?> ```

`switch` 支持替代语法的流程控制。更多信息见流程控制的替代语法一节。 ```php <?php switch ($i): case 0: echo "i equals 0"; break; case 1: echo "i equals 1"; break; case 2: echo "i equals 2"; break; default: echo "i is not equal to 0, 1 or 2"; endswitch; ?> ```

允许使用分号代替 case 语句后的冒号，例如： ```php <?php switch($beer) { case 'tuborg'; case 'carlsberg'; case 'stella'; case 'heineken'; echo 'Good choice'; break; default; echo 'Please make a new selection...'; break; } ?> ```

### 参见

match
