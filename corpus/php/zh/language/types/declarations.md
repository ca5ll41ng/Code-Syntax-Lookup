---
id: "zh-php-syntax-language-types-declarations"
language: "php"
lang: "zh"
category: "syntax"
name: "language.types.declarations"
title: "类型声明"
module: "language"
source_url: "https://www.php.net/manual/zh/language.types.declarations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 类型声明

类型声明可以用于函数的参数、返回值， PHP 7.4.0 起还可以用于类的属性， PHP 8.3.0 起还可以用于类的常量。 如果预期类型在调用时不匹配，则会抛出一个 `TypeError` 异常。

PHP 支持各种单一类型，除了 `resource` 之外，都可以用于用户级别类型声明。这个页面包含了不同类型间的可用性变更日志以及在类型声明中用法的文档。

> 当类实现了接口方法或者重新实现了父级类中定义的方法时，必须与上述定义兼容。如果方法遵循方差规则，则兼容该方法。

### 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 新增了对类、接口、trait 和枚举常量类型的支持。 |
| 8.2.0 | 新增对 DNF 类型的支持。 |
| 8.2.0 | 新增对 literal 类型 `true` 的支持。 |
| 8.2.0 | 现在可以单独使用 `null` 和 `false`。 |
| 8.1.0 | 新增对交集类型的支持。 |
| 8.1.0 | 弃用 `void` 函数通过引用返回。 |
| 8.1.0 | 新增对返回类型 never 的支持。 |
| 8.0.0 | 新增对 mixed 类型的支持。 |
| 8.0.0 | 新增对返回类型 static 的支持。 |
| 8.0.0 | 新增对联合类型的支持。 |
| 7.4.0 | 新增对类属性类型化的支持。 |
| 7.2.0 | 新增对 object 类型的支持。 |
| 7.1.0 | 新增对 iterable 类型的支持。 |
| 7.1.0 | 新增对 void 类型的支持。 |
| 7.1.0 | 新增对可为 null 类型的支持。 |

### 原子类型使用说明

原子类型具有直接明了的行为，但存在一些细微注意事项，本节对此进行了描述。

#### 标量类型

> 标量类型（`bool`、`int`、`float`、`string`）不支持别名。别名反而会视为类或接口名。例如，使用 `boolean` 作为类型声明，将要求值是  类或接口 `boolean`，而不是类型 `bool`。
>
> ```php <?php function test(boolean $param) {} test(true); ?> ``` 以上示例在 PHP 8 中的输出： ```text Warning: "boolean" will be interpreted as a class name. Did you mean "bool"? Write "\boolean" to suppress this warning in /in/9YrUX on line 2 Fatal error: Uncaught TypeError: test(): Argument #1 ($param) must be of type boolean, bool given, called in - on line 3 and defined in -:2 Stack trace: #0 -(3): test(true) #1 {main} thrown in - on line 2 ```

#### void

> 从 PHP 8.1.0 起弃用 `void` 函数通过引用返回，因为这样的函数自相矛盾。在此之前调用时总是会发出如下 `E_NOTICE`：`Only variable references should be returned by reference`。 ```php <?php function &test(): void {} ?> ```

#### Callable 类型

此类型不能用于类属性的类型声明。

> 无法指定函数的签名。

#### 通过引用传递的参数类型

如果通过引用传递的参数有类型声明，则变量的类型*仅*在调用函数时检查，返回时不会检查。这意味着函数可以改变引用变量的类型。

**通过引用传递的参数类型**

```php


<?php
function array_baz(array &$param)
{
    $param = 1;
}
$var = [];
array_baz($var);
var_dump($var);
array_baz($var);
?>

    
```

以上示例的输出类似于：

```text


int(1)

Fatal error: Uncaught TypeError: array_baz(): Argument #1 ($param) must be of type array, int given, called in - on line 9 and defined in -:2
Stack trace:
#0 -(9): array_baz(1)
#1 {main}
  thrown in - on line 2

    
```

### 复合类型使用说明

复合类型声明有几个限制，并且在编译时执行冗余检查以避免简单的错误。

> 在 PHP 8.2 之前，也就是没引入 DNF 之前，交集类型和联合类型不能组合使用。

#### 联合类型

> 在一个联合类型中不能同时用两个单例类型 `false` 和 `true`。而是使用 `bool` 替代。

> 在 PHP 8.2.0 之前，由于 `false` 和 `null` 不能作为独立的类型使用，因此不允许仅由这些类型组成联合类型。这还包括以下类型：`false`、`false|null`, 和 `?false`。

 可为 null 类型语法糖  单个基本类型声明可以通过在类型前添加问号（`?`）来标记可为 null。因此 `?T` 和 `T|null` 是相同的。   
> 该语法自 PHP 7.1.0 起支持，且早于完整的（generalized）联合类型支持。

 
> 也可以通过设置参数的参数的默认值为 `null` 来实现允许为 null。但并不建议这么做，因为如果在子类中更改了默认值，会引发类型兼容冲突，需要将 `null` 类型添加到类型声明中。 此行为在 PHP 8.4 中也被弃用。
>
> **使参数可以为 null 的旧方法**
>
> ```php
>
>
> <?php
> class C {}
>
> function f(C $c = null) {
>     var_dump($c);
> }
>
> f(new C);
> f(null);
> ?>
>
>       
> ```
>
> 以上示例会输出：
>
> ```text
>
>
> object(C)#1 (0) {
> }
> NULL
>
>       
> ```

 

#### 重复冗余的类型

为了能捕获复合类型声明中的简单错误，不需要类加载检测到的冗余类型将导致编译时错误。包含：

- 解析出来的类型只能出现一次。例如这样的类型 `int|string|INT` 或 `Countable&Traversable&COUNTABLE` 会导致错误。
- 使用 `mixed` 或 `never` 会导致错误。
- 对于联合类型： - 使用了 `bool` 时就不能再附带使用 `false` 或者 `true`。 - 使用了 `object` 时就不能再附带使用 class 类型。 - 使用了 `iterable` 时，不能再附带使用 `array` 和 `Traversable`。
- 对于交集类型： - 使用 class-type 以外的类型会导致错误。 - 使用 `self`、`parent` 或 `static` 都会导致错误。
- DNF 类型： - 如果使用了更通用的类型，则更加严格的那个类型就是多余的。 - 使用两个相同的交集类型。

> 不过它不能确保类型最小化，因为要达到这样的效果，还要加载使用类型的 class。

例如，假设 `A` 和 `B` 都是一个类的别名， 而 `A|B` 仍然是有效的，哪怕它可以被简化为 `A` 或 `B`。 同样的，如果 B extends A {}，那 `A|B` 仍然是有效的联合类型，尽管它可以被简化为 `A`。 ```php <?php function foo(): int|INT {} // 不允许 function foo(): bool|false {} // 不允许 function foo(): int&Traversable {} // 不允许 function foo(): self&Traversable {} // 不允许 use A as B; function foo(): A|B {} // 不允许 ("use" 是名称解析的一部分) function foo(): A&B {} // 不允许 ("use" 是名称解析的一部分) class_alias('X', 'Y'); function foo(): X|Y {} // 允许 (运行时才能知道重复性) function foo(): X&Y {} // 允许 (运行时才能知道重复性) ?> ```

### 示例

**基础类类型声明**

```php


<?php
class C {}
class D extends C {}

// 没有继承 C。
class E {}

function f(C $c) {
    echo get_class($c)."\n";
}

f(new C);
f(new D);
f(new E);
?>

   
```

以上示例在 PHP 8 中的输出：

```text


C
D

Fatal error: Uncaught TypeError: f(): Argument #1 ($c) must be of type C, E given, called in /in/gLonb on line 14 and defined in /in/gLonb:8
Stack trace:
#0 -(14): f(Object(E))
#1 {main}
  thrown in - on line 8

   
```

**基础接口类型声明**

```php


<?php
interface I { public function f(); }
class C implements I { public function f() {} }

// 没有实现（implement）I。
class E {}

function f(I $i) {
    echo get_class($i)."\n";
}

f(new C);
f(new E);
?>

   
```

以上示例在 PHP 8 中的输出：

```text


C

Fatal error: Uncaught TypeError: f(): Argument #1 ($i) must be of type I, E given, called in - on line 13 and defined in -:8
Stack trace:
#0 -(13): f(Object(E))
#1 {main}
  thrown in - on line 8

   
```

**基础返回类型声明**

```php


<?php
function sum($a, $b): float {
    return $a + $b;
}

// Note that a float will be returned.
var_dump(sum(1, 2));
?>

   
```

以上示例会输出：

```text


float(3)

   
```

**返回对象**

```php


<?php
class C {}

function getC(): C {
    return new C;
}

var_dump(getC());
?>

   
```

以上示例会输出：

```text


object(C)#1 (0) {
}

   
```

**可为 null 参数类型声明**

```php

    
<?php
class C {}

function f(?C $c) {
    var_dump($c);
}

f(new C);
f(null);
?>

   
```

以上示例会输出：

```text

    
object(C)#1 (0) {
}
NULL

   
```

**可为 null 返回类型声明**

```php

    
<?php
function get_item(): ?string {
    if (isset($_GET['item'])) {
        return $_GET['item'];
    } else {
        return null;
    }
}
?>

   
```

**类属性类型化声明**

```php


<?php
class User {
    public static string $foo = 'foo';

    public int $id;
    public string $username;

    public function __construct(int $id, string $username) {
        $this->id = $id;
        $this->username = $username;
    }
}
?>

   
```

 TODO Move this into its own declare page 

### 严格类型

默认如果可能，PHP 会强制转化不合适的类型为想要的标量类型。 比如，参数想要 `string`，传入的是 `int`， 则会获取 `string` 类型的变量。

可以按文件开启严格模式。 在严格模式下，只能接受完全匹配的类型，否则会抛出 `TypeError`。 唯一的例外是 `int` 值也可以传入声明为 `float` 的类型。

> 通过内部函数调用函数时，不会受 `strict_types` 声明影响。

要开启严格模式，使用  开启 `strict_types`：

> 文件开启严格类型后的*内部*调用函数将应用严格类型， 而不是在声明函数的文件内开启。 如果文件没有声明开启严格类型，而被调用的函数所在文件有严格类型声明， 那将遵循调用者的设置（开启类型强制转化）， 值也会强制转化。

> 只有为标量类型的声明开启严格类型。

**参数值的严格类型**

```php


<?php
declare(strict_types=1);

function sum(int $a, int $b) {
    return $a + $b;
}

var_dump(sum(1, 2));
var_dump(sum(1.5, 2.5));
?>

   
```

以上示例在 PHP 8 中的输出：

```text


int(3)

Fatal error: Uncaught TypeError: sum(): Argument #1 ($a) must be of type int, float given, called in - on line 9 and defined in -:4
Stack trace:
#0 -(9): sum(1.5, 2.5)
#1 {main}
  thrown in - on line 4

   
```

**参数值的类型强制转化**

```php


<?php
function sum(int $a, int $b) {
    return $a + $b;
}

var_dump(sum(1, 2));

// 以下会强制转化为整型，注意以下内容输出！
var_dump(sum(1.5, 2.5));
?>

   
```

以上示例会输出：

```text


int(3)
int(3)

   
```

**返回值的严格类型**

```php


<?php
declare(strict_types=1);

function sum($a, $b): int {
    return $a + $b;
}

var_dump(sum(1, 2));
var_dump(sum(1, 2.5));
?>

   
```

以上示例会输出：

```text


int(3)

Fatal error: Uncaught TypeError: sum(): Return value must be of type int, float returned in -:5
Stack trace:
#0 -(9): sum(1, 2.5)
#1 {main}
  thrown in - on line 5

   
```
