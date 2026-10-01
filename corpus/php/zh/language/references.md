---
id: "zh-php-syntax-language-references"
language: "php"
lang: "zh"
category: "syntax"
name: "language.references"
title: "引用的解释"
module: "language"
source_url: "https://www.php.net/manual/zh/language.references.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 引用的解释

## 引用是什么

在 PHP 中引用意味着用不同的名字访问同一个变量内容。这并不像 C 的指针：例如你不能对他们做指针运算，他们并不是实际的内存地址…… 查看`language.references.arent`了解更多信息。 替代的是，引用是符号表别名。 注意在PHP 中，变量名和变量内容是不一样的， 因此同样的内容可以有不同的名字。最接近的比喻是 Unix 的文件名和文件本身——变量名是目录条目，而变量内容则是文件本身。引用可以被看作是 Unix 文件系统中的硬链接。

## 引用做什么

使用引用执行有三种基本操作： 引用赋值 、 传引用 、 引用返回 。 本节介绍这些操作，并提供进一步阅读的链接。

### 引用赋值

PHP 的引用允许用两个变量来指向同一个内容。意思是，当这样做时： ```php <?php $a =& $b; ?> ``` 这意味着 `$a` 和 `$b` 指向了同一个变量。

> `$a` 和 `$b` 在这里是完全相同的，这并不是 `$a` 指向了 `$b` 或者相反，而是 `$a` 和 `$b` 指向了同一个地方。

> 如果对一个未定义的变量进行引用赋值、引用参数传递或引用返回，则会自动创建该变量。
>
> **对未定义的变量使用引用**
>
> ```php
>
>
> <?php
>
> function foo(&$var) {}
>
> foo($a); // 创建 $a 并赋值为 null
>
> $b = array();
> foo($b['b']);
> var_dump(array_key_exists('b', $b)); // bool(true)
>
> $c = new stdClass();
> foo($c->d);
> var_dump(property_exists($c, 'd')); // bool(true)
>
> ?>
>
>       
> ```

同样的语法可以用在返回引用的函数中： ```php <?php $foo =& find_var($bar); ?> ```

在函数内使用相同的语法 *不* 通过引用返回将会产生错误， 就像将它与 new 运算符的结果一起使用一样。 正如 对象和引用 中所述， 尽管对象是通过指针传递的，但是它们与引用不同。

> 如果在一个函数内部给一个声明为 `global` 的变量赋于一个引用，该引用只在函数内部可见。可以通过使用 `$GLOBALS` 数组避免这一点。
>
> **在函数内引用全局变量**
>
> ```php
>
>
> <?php
>
> $var1 = "Example variable";
> $var2 = "";
>
> function global_references($use_globals)
> {
>     global $var1, $var2;
>
>     if (!$use_globals) {
>         $var2 =& $var1; // 仅在函数内部可见
>     } else {
>         $GLOBALS["var2"] =& $var1; // 全局上下文可见
>     }
> }
>
> global_references(false);
> echo "var2 is set to '$var2'\n"; // var2 is set to ''
>
> global_references(true);
> echo "var2 is set to '$var2'\n"; // var2 is set to 'Example variable'
>
> ?>
>
>      
> ```
>
> 把 `global $var;` 当成是 `$var =& $GLOBALS['var'];` 的简写。从而将其它引用赋给 `$var` 只改变了本地变量的引用。

> 如果在  语句中给一个具有引用的变量赋值，被引用的对象也被改变。
>
> **引用与 foreach 语句**
>
> ```php
>
>
> <?php
>
> $ref = 0;
> $row =& $ref;
>
> foreach (array(1, 2, 3) as $row) {
>     // 做点什么
> }
>
> echo $ref; // 3 - 迭代数组的最后一个元素
>
> ?>
>
>      
> ```

虽然不是严格意义上的引用赋值，但使用语言构造 `array()` 创建的表达式也可以通过在要添加的数组元素加上 `&` 前缀来表现为这样。例如： ```php <?php $a = 1; $b = array(2, 3); $arr = array(&$a, &$b[0], &$b[1]); $arr[0]++; $arr[1]++; $arr[2]++; /* $a == 2, $b == array(3, 4); */ ?> ```

但是请注意，数组内的引用具有潜在的危险。 在右侧引用正常的赋值（不是通过引用）不会将左侧变为引用， 但是数组内部的引用会保留在这些正常赋值中。 这也适用于调用函数时按值传递数组的情况。例如： ```php <?php /* 标量变量赋值 */ $a = 1; $b =& $a; $c = $b; $c = 7; // $c 不是引用；不会改变 $a 或者 $b /* 数组变量赋值 */ $arr = array(1); $a =& $arr[0]; // $a 和 $arr[0] 设置了相同的引用 $arr2 = $arr; // 不是引用赋值！ $arr2[0]++; /* $a == 2, $arr == array(2) */ /* 尽量 $arr 不是引用，但是它的内容已经更改！ */ ?> ``` 换句话说，数组的引用行为是在逐个元素的基础上定义； 单个元素的引用行为与数组容器的引用状态分离。

### 传引用

引用做的第二件事是用引用传递变量。这是通过在函数内建立一个本地变量并且该变量在呼叫范围内引用了同一个内容来实现的。例如： ```php <?php function foo(&$var) { $var++; } $a=5; foo($a); ?> ``` 将使 `$a` 变成 6。这是因为在 `foo` 函数中变量 `$var` 指向了和 `$a` 指向的同一个内容。更多详细解释见引用传递。

### 引用返回

引用做的第三件事是引用返回。

## 引用不是什么

如前所述，引用不是指针。这意味着下面的结构不会产生预期的效果： ```php <?php function foo(&$var) { $var =& $GLOBALS["baz"]; } foo($bar); ?> ```

这将使 `foo` 函数中的 `$var` 变量在函数调用时和 `$bar` 绑定在一起，但接着又被重新绑定到了 `$GLOBALS["baz"]` 上面。不可能通过引用机制将 `$bar` 在函数调用范围内绑定到别的变量上面，因为在函数 `foo` 中并没有变量 `$bar`（它被表示为 `$var`，但是 `$var` 只有变量内容而没有调用符号表中的名字到值的绑定）。可以使用引用返回来引用被函数选择的变量。

## 引用传递

可以将一个变量通过引用传递给函数，这样该函数就可以修改其参数的值。语法如下： ```php <?php function foo(&$var) { $var++; } $a=5; foo($a); // 这里 $a 是 6 ?> ``` 注意在函数调用时没有引用符号——只有函数定义中有。光是函数定义就足够使参数通过引用来正确传递了。

以下内容可以通过引用传递：

- 变量，例如 `foo($a)`
- 从函数中返回的引用，例如： ```php <?php function foo(&$var) { $var++; } function &bar() { $a = 5; return $a; } foo(bar()); ?> ``` 详细解释见引用返回。

任何其它表达式都不能通过引用传递，结果未定义。例如下面引用传递的例子是无效的： ```php <?php function foo(&$var) { $var++; } function bar() // 注意缺少 & { $a = 5; return $a; } foo(bar()); // 导致 notice 信息 foo($a = 5) // 表达式，不是变量 foo(5) // 导致致命错误 class Foobar {} foo(new Foobar()) // 自 PHP 7.0.7 起生成通知 // 注意：只有变量应该通过引用传递 ?> ```

## 引用返回

引用返回用在当想用函数找到引用应该被绑定在哪一个变量上面时。 *不要*用返回引用来增加性能，引擎足够聪明来自己进行优化。 仅在有合理的技术原因时才返回引用！ 使用此语法返回引用： ```php <?php class Foo { public $value = 42; public function &getValue() { return $this->value; } } $obj = new Foo(); $myValue = &$obj->getValue(); // $myValue 是对 $obj->value 的引用，即 42 $obj->value = 2; echo $myValue; // 打印 $obj->value 的新值，即 2 ?> ``` 本例中 `getValue` 函数所返回的对象的属性将被赋值， 而不是拷贝，就和没有用引用语法一样。

> 和参数传递不同，这里必须在两个地方都用 `&` 符号——指出返回的是一个引用，而不是通常的一个拷贝，同样也指出 `$myValue` 是作为引用的绑定，而不是通常的赋值。

> 如果试图这样从函数返回引用：`return ($this->value);`，这将*不会*起作用， 因为在试图返回一个*表达式*的结果而不是一个引用的变量。 只能从函数返回引用变量——没别的方法。

要使用返回的引用，必须使用引用赋值： ```php <?php function &collector() { static $collection = array(); return $collection; } $collection = &collector(); // 现在，$collection 是引用变量，引用了函数内部的静态数组 $collection[] = 'foo'; print_r(collector()); // Array // ( // [0] => foo // ) ?> ```

> 如果赋值操作未使用 `&` 符号，例如 $collection = collector();，则 `$collection` 变量将接收值的副本，而非函数返回的引用。

要将返回的引用传递给另外一个需要引用的函数，可以使用如下语法： ```php <?php function &collector() { static $collection = array(); return $collection; } array_push(collector(), 'foo'); ?> ```

> 注意 `array_push(&collector(), 'foo');` 将 *不* 起作用，它会导致 Fatal 错误。

## 取消引用

当 unset 一个引用，只是断开了变量名和变量内容之间的绑定。这并不意味着变量内容被销毁了。例如： ```php <?php $a = 1; $b =& $a; unset($a); ?> ``` 不会 unset `$b`，只是 `$a`。

再拿这个和 Unix 的 unlink 调用来类比一下可能有助于理解。

## 引用定位

许多 PHP 的语法结构是通过引用机制实现的，所以上述有关引用绑定的一切也都适用于这些结构。 一些结构，例如引用传递和返回，已经在上面提到了。 其它使用引用的结构有：

### global 引用

当用 global $var 声明一个变量时实际上建立了一个到全局变量的引用。 也就是说和这样做是相同的： ```php <?php $var =& $GLOBALS["var"]; ?> ```

这意味着，例如，unset `$var` 不会 unset 全局变量。

### `$this`

在一个对象的方法中，`$this` 永远是调用它的对象的引用。
