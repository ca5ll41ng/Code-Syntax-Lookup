---
id: "zh-php-syntax-language-oop5-property-hooks"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.property-hooks"
title: "属性挂钩"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.property-hooks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 属性挂钩

属性挂钩在某些其他语言中也被称为"属性访问器"，是一种拦截和覆盖属性读写行为的方式。此功能有两个用途：

1. 允许直接使用属性，而不需要 get 和 set 方法，同时保留在未来添加额外行为的可能性。这使得大多数样板式的 get/set 方法变得不再必要，即使不使用挂钩也是如此。
2. 允许属性描述对象而不需要直接存储值。

非静态属性有两个可用的挂钩：`get` 和 `set`，分别用于覆盖属性的读取和写入行为。挂钩可用于有类型和无类型的属性。

属性可以是"backed"（有后备存储）或"virtual"（虚拟的）。backed 属性是实际存储值的属性，任何没有挂钩的属性都是 backed 属性。虚拟属性是具有挂钩且这些挂钩不与属性本身交互的属性。在这种情况下，挂钩实际上等同于方法，对象不会为该属性使用任何内存空间来存储值。

属性挂钩与 `readonly` 属性不兼容。如果需要在更改行为的同时限制对 `get` 或 `set` 操作的访问，请使用非对称属性可见性。

> 版本信息
>
> 属性挂钩在 PHP 8.4 中引入。

### 基本挂钩语法

声明挂钩的通用语法如下。

**属性挂钩（完整版本）**

```php


<?php
class Example
{
    private bool $modified = false;

    public string $foo = 'default value' {
        get {
            if ($this->modified) {
                return $this->foo . ' (modified)';
            }
            return $this->foo;
        }
        set(string $value) {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}

$example = new Example();
$example->foo = 'changed';
print $example->foo;
?>

   
```

`$foo` 属性以 `{}` 结尾，而不是分号，这表示存在挂钩。同时定义了 `get` 和 `set` 挂钩，但也允许只定义其中一个。两个挂钩都有一个由 `{}` 表示的主体，可以包含任意代码。

`set` 挂钩还允许使用与方法相同的语法指定传入值的类型和名称。类型必须与属性的类型相同，或者对其逆变（更宽泛）。例如，`string` 类型的属性可以有一个接受 `string|Stringable` 的 `set` 挂钩，但不能有一个仅接受 `array` 的挂钩。

至少有一个挂钩引用了 $this->foo，即属性本身。这意味着该属性将是"backed"的。当调用 $example->foo = 'changed' 时，提供的字符串将首先被转换为小写，然后保存到后备值中。当读取属性时，之前保存的值可能会有条件地附加额外的文本。

还有许多简写语法变体可用于处理常见情况。

如果 `get` 挂钩是单个表达式，则可以省略 `{}`，替换为箭头表达式。

**属性 get 表达式**

此示例与前一个等价。

```php


<?php
class Example
{
    private bool $modified = false;

    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');

        set(string $value) {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}
?>

   
```

如果 `set` 挂钩的参数类型与属性类型相同（通常如此），则可以省略。在这种情况下，要设置的值会自动命名为 `$value`。

**属性 set 默认值**

此示例与前一个等价。

```php


<?php
class Example
{
    private bool $modified = false;

    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');

        set {
            $this->foo = strtolower($value);
            $this->modified = true;
        }
    }
}
?>

   
```

如果 `set` 挂钩只是设置传入值的修改版本，那么也可以将其简化为箭头表达式。表达式求值的结果将被设置到后备值上。

**属性 set 表达式**

```php


<?php
class Example
{
    public string $foo = 'default value' {
        get => $this->foo . ($this->modified ? ' (modified)' : '');
        set => strtolower($value);
    }
}
?>

   
```

此示例与前一个并不完全等价，因为它没有修改 $this->modified。如果 set 挂钩主体中需要多条语句，请使用大括号版本。

属性可以根据需要实现零个、一个或两个挂钩。所有简写版本都是相互独立的。也就是说，使用简写 get 搭配完整 set，或者使用简写 set 搭配显式类型，等等都是合法的。

对于 backed 属性，省略 `get` 或 `set` 挂钩意味着将使用默认的读取或写入行为。

> 挂钩可以在使用构造函数属性提升时定义。但是，这样做时，提供给构造函数的值必须与属性关联的类型匹配，无论 `set` 挂钩允许什么。
>
> 考虑以下示例：
>
> ```php
>
>
> <?php
> class Example
> {
>     public function __construct(
>         public private(set) DateTimeInterface $created {
>             set (string|DateTimeInterface $value) {
>                 if (is_string($value)) {
>                     $value = new DateTimeImmutable($value);
>                 }
>                 $this->created = $value;
>             }
>         },
>     ) {
>     }
> }
>
>    
> ```
>
> 引擎内部会将其分解为以下形式：
>
> ```php
>
>
> <?php
> class Example
> {
>     public private(set) DateTimeInterface $created {
>         set (string|DateTimeInterface $value) {
>             if (is_string($value)) {
>                 $value = new DateTimeImmutable($value);
>             }
>             $this->created = $value;
>         }
>     }
>
>     public function __construct(
>         DateTimeInterface $created,
>     ) {
>         $this->created = $created;
>     }
> }
>
>    
> ```
>
> 在构造函数之外设置属性时，将允许 `string` 或 DateTimeInterface 值，但构造函数只接受 DateTimeInterface。这是因为属性定义的类型（DateTimeInterface）被用作构造函数签名中的参数类型，无论 `set` 挂钩允许什么。
>
> 如果需要在构造函数中实现这种行为，则不能使用构造函数属性提升。

### 虚拟属性

虚拟属性是没有后备值的属性。如果属性的 `get` 和 `set` 挂钩都没有使用精确语法引用属性本身，则该属性就是虚拟的。也就是说，名为 $foo 的属性如果其挂钩中包含 $this->foo，则是 backed 属性。但以下不是 backed 属性，将会报错：

**无效的虚拟属性**

```php


<?php
class Example
{
    public string $foo {
        get {
            $temp = __PROPERTY__;
            return $this->$temp; // Doesn't refer to $this->foo, so it doesn't count.
        }
    }
}
?>

   
```

对于虚拟属性，如果省略了某个挂钩，那么该操作就不存在，尝试使用它将产生错误。虚拟属性不占用对象中的内存空间。虚拟属性适用于"派生"属性，例如由其他两个属性组合而成的属性。

**虚拟属性**

```php


<?php
class Rectangle
{
    // A virtual property.
    public int $area {
        get => $this->h * $this->w;
    }

    public function __construct(public int $h, public int $w) {}
}

$s = new Rectangle(4, 5);
print $s->area; // prints 20
$s->area = 30; // Error, as there is no set operation defined.
?>

   
```

在虚拟属性上同时定义 `get` 和 `set` 挂钩也是允许的。

### 作用域

所有挂钩都在被修改对象的作用域内运行。这意味着它们可以访问对象的所有 public、private 或 protected 方法，以及所有 public、private 或 protected 属性，包括可能有自己属性挂钩的属性。从挂钩中访问另一个属性不会绕过该属性上定义的挂钩。

最值得注意的含义是，非简单的挂钩可以根据需要调用任意复杂的方法。

**从挂钩中调用方法**

```php


<?php
class Person {
    public string $phone {
        set => $this->sanitizePhone($value);
    }

    private function sanitizePhone(string $value): string {
        $value = ltrim($value, '+');
        $value = ltrim($value, '1');

        if (!preg_match('/\d\d\d\-\d\d\d\-\d\d\d\d/', $value)) {
            throw new \InvalidArgumentException();
        }
        return $value;
    }
}
?>

   
```

### 引用

由于挂钩的存在会拦截属性的读写过程，因此在获取属性的引用或进行间接修改（如 $this->arrayProp['key'] = 'value';）时会产生问题。这是因为任何通过引用修改值的尝试都会绕过 set 挂钩（如果定义了的话）。

在极少数需要获取定义了挂钩的属性的引用的情况下，可以在 `get` 挂钩前加上 `&` 前缀，使其按引用返回。在同一属性上同时定义 `get` 和 `&get` 是语法错误。

不允许在 backed 属性上同时定义 `&get` 和 `set` 挂钩。如上所述，通过引用写入返回的值会绕过 `set` 挂钩。在虚拟属性上，两个挂钩之间没有必然共享的值，因此允许同时定义两者。

写入数组属性的索引也涉及隐式引用。因此，只有在仅定义了 `&get` 挂钩的情况下，才允许写入带有挂钩的 backed 数组属性。在虚拟属性上，写入从 `get` 或 `&get` 返回的数组是合法的，但这是否对对象产生影响取决于挂钩的实现。

覆盖整个数组属性是可以的，行为与其他任何属性相同。只有操作数组元素时需要特别注意。

### 继承

#### Final 挂钩

挂钩也可以声明为 final，在这种情况下不能被覆盖。

**Final 挂钩**

```php


<?php
class User
{
    public string $username {
        final set => strtolower($value);
    }
}

class Manager extends User
{
    public string $username {
        // This is allowed
        get => strtoupper($this->username);

        // But this is NOT allowed, because set is final in the parent.
        set => strtoupper($value);
    }
}
?>

    
```

属性也可以声明为 final。final 属性不能被子类以任何方式重新声明，这包括修改挂钩或扩大其访问权限。

在声明为 final 的属性上将挂钩声明为 final 是多余的，会被静默忽略。这与 final 方法的行为一致。

子类可以通过重新声明属性并只定义要覆盖的挂钩来定义或重新定义各个挂钩。子类也可以向之前没有挂钩的属性添加挂钩。这本质上与挂钩是方法时的行为相同。

**挂钩继承**

```php


<?php
class Point
{
    public int $x;
    public int $y;
}

class PositivePoint extends Point
{
    public int $x {
        set {
            if ($value < 0) {
                throw new \InvalidArgumentException('Too small');
            }
            $this->x = $value;
        }
    }
}
?>

    
```

每个挂钩独立于其他挂钩覆盖父类的实现。如果子类添加了挂钩，属性上设置的任何默认值都会被移除，必须重新声明。这与无挂钩属性的继承方式一致。

#### 访问父类挂钩

子类中的挂钩可以使用 parent::$prop 关键字后跟所需的挂钩来访问父类的属性。例如，parent::$propName::get()。可以理解为"访问父类中定义的 `prop`，然后运行其 get 操作"（或 set 操作，视情况而定）。

如果不以这种方式访问，父类的挂钩将被忽略。这一行为与所有方法的工作方式一致。这也提供了一种访问父类存储（如果有的话）的方式。如果父属性上没有挂钩，则会使用其默认的 get/set 行为。挂钩不能访问除自身属性上的父挂钩之外的任何其他挂钩。

上面的示例可以重写如下，这将允许 `Point` 类在未来添加自己的 `set` 挂钩而不会产生问题（在前面的示例中，添加到父类的挂钩会在子类中被忽略）。

**访问父类挂钩（set）**

```php


<?php
class Point
{
    public int $x;
    public int $y;
}

class PositivePoint extends Point
{
    public int $x {
        set {
            if ($value < 0) {
                throw new \InvalidArgumentException('Too small');
            }
            parent::$x::set($value);
        }
    }
}
?>

    
```

仅覆盖 get 挂钩的示例如下：

**访问父类挂钩（get）**

```php


<?php
class Strings
{
    public string $val;
}

class CaseFoldingStrings extends Strings
{
    public bool $uppercase = true;

    public string $val {
        get => $this->uppercase
            ? strtoupper(parent::$val::get())
            : strtolower(parent::$val::get());
    }
}
?>

    
```

### 序列化

PHP 有多种不同的方式可以序列化对象，用于公共使用或调试目的。挂钩的行为因使用场景而异。在某些情况下，会使用属性的原始后备值，绕过所有挂钩。在其他情况下，属性将"通过"挂钩进行读取或写入，就像任何其他正常的读写操作一样。

 `var_dump()`：使用原始值 `serialize()`：使用原始值 `unserialize()`：使用原始值 __serialize()/__unserialize()：自定义逻辑，使用 get/set 挂钩 数组转换：使用原始值 `var_export()`：使用 get 挂钩 `json_encode()`：使用 get 挂钩 JsonSerializable：自定义逻辑，使用 get 挂钩 `get_object_vars()`：使用 get 挂钩 `get_mangled_object_vars()`：使用原始值
