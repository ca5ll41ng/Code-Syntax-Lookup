---
id: "zh-php-syntax-language-enumerations"
language: "php"
lang: "zh"
category: "syntax"
name: "language.enumerations"
title: "枚举"
module: "language"
source_url: "https://www.php.net/manual/zh/language.enumerations.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 枚举

## 枚举概览

枚举，或称 “Enum”，能够让开发者自定义类型为一系列可能的离散值中的一个。 在定义领域模型中很有用，它能够“隔离无效状态”（making invalid states unrepresentable）。

枚举以各种不同功能的形式出现在诸多语言中。 在 PHP 中， 枚举是一种特殊类型的对象。Enum 本身是一个类（Class）， 它的各种条目（case）是这个类的单例对象，意味着也是个有效对象 —— 包括类型的检测，能用对象的地方，也可以用它。

最常见的枚举例子是内置的 boolean 类型， 该枚举类型有两个有效值 `true` 和 `false`。 Enum 使开发者能够任意定义出用户自己的、足够健壮的枚举。

## 枚举基础

Enum 类似 class，它和 class、interface、trait 共享同样的命名空间。 也能用同样的方式自动加载。 一个 Enum 定义了一种新的类型，它有固定、数量有限、可能的合法值。

```php


<?php

enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}
?>

  
```

以上声明了新的枚举类型 `Suit`，仅有四个有效的值： `Suit::Hearts`、`Suit::Diamonds`、 `Suit::Clubs`、`Suit::Spades`。 变量可以赋值为以上有效值里的其中一个。 函数可以检测枚举类型，这种情况下只能传入类型的值。

```php


<?php

function pick_a_card(Suit $suit)
{
    /* ... */
}

$val = Suit::Diamonds;

// OK
pick_a_card($val);

// OK
pick_a_card(Suit::Clubs);

// TypeError: pick_a_card(): Argument #1 ($suit) must be of type Suit, string given
pick_a_card('Spades');
?>

  
```

一个枚举可以定义零个或多个`case`，且没有最大数量限制。 虽然零个 case 的 enum 没什么用处，但在语法上也是有效的。

枚举条目的语法规则适用于 PHP 中的任何标签，参见常量。

默认情况下，枚举的条目（case）本质上不是标量。 就是说 `Suit::Hearts` 不等同于 `"0"`。 其实，本质上每个条目是该名称对象的单例。具体来说：

```php


<?php

$a = Suit::Spades;
$b = Suit::Spades;

$a === $b; // true

$a instanceof Suit;  // true
?>

  
```

由于对象间的大小比较毫无意义，这也意味着 enum 值从来不会 `<` 或 `>` 其他值。当 enum 的值用于比较时，总是返回 `false`。

这类没有关联数据的条目（case），被称为“纯粹条目”（Pure Case）。 仅包含纯粹 Case 的 Enum 被称为纯粹枚举（Pure Enum）。

枚举类型里所有的纯粹条目都是自身的实例。枚举类型在内部的实现形式是 class。

所有的 case 有个只读的属性 `name`。 它大小写敏感，是 case 自身的名称。

```php


<?php

print Suit::Spades->name;
// 输出 "Spades"
?>

  
```

如果名称是动态获取的，也可以使用 `defined()` 和 `constant()` 函数来检查枚举成员是否存在或读取其值。然而，这种方法并不推荐，因为对于大多数使用场景，使用带值枚举即可满足需求。

## 带值（回退）枚举

默认情况下，枚举成员没有对应的标量值。它们仅仅是单例对象。然而，在许多情况下，枚举成员需要能够与数据库或类似的数据存储进行往返操作，因此内置一个本质上定义的标量值（从而可以轻松序列化）是非常有用的。

定义标量形式的枚举的语法如下：

```php


<?php

enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}
?>

  
```

由于有标量的条目回退（Backed）到一个更简单值，又叫回退条目（Backed Case）。 包含所有回退条目的 Enum 又叫“回退 Enum”（Backed Enum）。 回退 Enum 只能包含回退条目。 纯粹 Enum 只能包含纯粹条目。

回退枚举仅能回退到 `int` 或 `string` 里的一种类型， 且同时仅支持使用一种类型（就是说，不能联合 `int|string`）。 如果枚举为标量形式，所有的条目必须明确定义唯一的标量值。 无法自动生成标量（比如：连续的数字）。 回退条目必须是唯一的；两个回退条目不能有相同的标量。 然而，也可以用常量引用到条目，实际上是创建了个别名。 参见 枚举常量。

等值可以是常量标量表达式。PHP 8.2.0 之前，必须是文字或文字表达式。这意味着不支持常量和常量表达式。也就是说，允许 1 + 1，但不允许 1 + SOME_CONST。

回退条目有个额外的只读属性 `value`， 它是定义时指定的值。

```php


<?php

print Suit::Clubs->value;
// 输出 "C"
?>

  
```

为了确保 `value` 的只读性， 无法将变量传引用给它。 也就是说，以下会抛出错误：

```php


<?php

$suit = Suit::Clubs;
$ref = &$suit->value;
// Error: Cannot acquire reference to property Suit::$value
?>

  
```

回退枚举实现了内置的 BackedEnum interface， 暴露了两个额外的方法：

  `from(int|string): self` 能够根据标量返回对应的枚举条目。 如果找不到该值，会抛出 `ValueError`。 主要用于输入标量为可信的情况，使用一个不存在的枚举值，可以考虑为需终止应用的错误。   `tryFrom(int|string): ?self` 能够根据标量返回对应的枚举条目。 如果找不到该值，会返回 `null`。 主要用于输入标量不可信的情况，调用者需要自己实现默认值的逻辑或错误的处理。  

`from()` 和 `tryFrom()` 方法也遵循基本的严格/松散类型规则。 系统在弱类型模式下接受传入 integer 和 string，并自动强制转换对应值。 传入 float 也能运行，并且强制转换。 在严格类型模式下，为 string 回退枚举的 `from()` 传入 integer 会导致 `TypeError`，反之亦然；float 都会出现有问题。 其他所有的参数类型，在以上所有模式中都会抛出 TypeError。

```php


<?php

$record = get_stuff_from_database($id);
print $record['suit'];

$suit =  Suit::from($record['suit']);
// 无效数据抛出 ValueError："X" is not a valid scalar value for enum "Suit"
print $suit->value;

$suit = Suit::tryFrom('A') ?? Suit::Spades;
// 无效数据返回 null，因此会用 Suit::Spades 代替。
print $suit->value;
?>

  
```

手动为回退枚举定义 `from()` 或 `tryFrom()` 方法会导致 fatal 错误。

## 枚举方法

枚举（包括纯粹枚举、回退枚举）还能包含方法， 也能实现 interface。 如果 Enum 实现了 interface，则其中的条目也能接受 interface 的类型检测。

```php


<?php

interface Colorful
{
    public function color(): string;
}

enum Suit implements Colorful
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;

    // 满足 interface 契约。
    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }

    // 不是 interface 的一部分；也没问题
    public function shape(): string
    {
        return "Rectangle";
    }
}

function paint(Colorful $c)
{
   /* ... */
}

paint(Suit::Clubs);  // 正常

print Suit::Diamonds->shape(); // 输出 "Rectangle"
?>

  
```

在这例子中，`Suit` 所有的四个实例具有两个方法： `color()`、`shape()`。 目前的调用代码和类型检查，和其他对象实例的行为完全一致。

在回退枚举中，interface 的声明紧跟回退类型的声明之后。

```php


<?php

interface Colorful
{
    public function color(): string;
}

enum Suit: string implements Colorful
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';

    // 满足 interface 的契约。
    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }
}
?>

  
```

在方法中，定义了 `$this` 变量，它引用到了条目实例。

方法中可以任意复杂，但一般的实践中，往往会返回静态的值， 或者为 `$this` match 各种情况并返回不同的值。

注意，在本示例中，更好的数据模型实践是再定一个包含 Red 和 Black 枚举值的 `SuitColor` 枚举，并且返回它作为代替。 然而这会让本示例复杂化。

以上的层次在逻辑中类似于下面的 class 结构（虽然这不是它实际运行的代码）：

```php


<?php

interface Colorful
{
    public function color(): string;
}

final class Suit implements UnitEnum, Colorful
{
    public const Hearts = new self('Hearts');
    public const Diamonds = new self('Diamonds');
    public const Clubs = new self('Clubs');
    public const Spades = new self('Spades');

    private function __construct(public readonly string $name) {}

    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }

    public function shape(): string
    {
        return "Rectangle";
    }

    public static function cases(): array
    {
        // 不合法的方法，Enum 中不允许手动定义 cases() 方法
        // 参考 “枚举值清单” 章节
    }
}
?>

  
```

尽管 enum 可以包括 public、private、protected 的方法， 但由于它不支持继承，因此在实践中 private 和 protected 效果是相同的。

## 枚举静态方法

枚举也能有静态方法。 在枚举中静态方法主要用于取代构造器，如：

```php


<?php

enum Size
{
    case Small;
    case Medium;
    case Large;

    public static function fromLength(int $cm): self
    {
        return match(true) {
            $cm < 50 => self::Small,
            $cm < 100 => self::Medium,
            default => self::Large,
        };
    }
}
?>

  
```

虽然 enum 可以包括 public、private、protected 的静态方法， 但由于它不支持继承，因此在实践中 private 和 protected 效果是相同的。

## 枚举常量

虽然 enum 可以包括 public、private、protected 的常量， 但由于它不支持继承，因此在实践中 private 和 protected 效果是相同的。

枚举常量可以引用枚举条目：

```php


<?php

enum Size
{
    case Small;
    case Medium;
    case Large;

    public const Huge = self::Large;
}
?>

  
```

## Trait

枚举也能使用 trait，行为和 class 一样。 留意在枚举中 `use` trait 不允许包含属性。 只能包含方法、静态方法和常量。包含属性的 trait 会导致 fatal 错误。

```php


<?php

interface Colorful
{
    public function color(): string;
}

trait Rectangle
{
    public function shape(): string {
        return "Rectangle";
    }
}

enum Suit implements Colorful
{
    use Rectangle;

    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;

    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }
}
?>

  
```

## 常量表达式的枚举值

由于用 enum 自身的常量表示条目，它们可当作静态值，用于绝大多数常量表达式： 属性默认值、变量默认值、参数默认值、全局和类常量。 他们不能用于其他 enum 枚举值，但通常的常量可以引用枚举条目。

然而，因为不能保证结果值绝对不变，也不能避免调用方法时带来副作用， 所以枚举里类似 `ArrayAccess` 这样的隐式魔术方法调用无法用于静态定义和常量定义。 常量表达式还是不能使用函数调用、方法调用、属性访问。

```php


<?php

// 这是完全合法的 Enum 定义
enum Direction implements ArrayAccess
{
    case Up;
    case Down;

    public function offsetExists($offset): bool
    {
        return false;
    }

    public function offsetGet($offset): mixed
    {
        return null;
    }

    public function offsetSet($offset, $value): void
    {
        throw new Exception();
    }

    public function offsetUnset($offset): void
    {
        throw new Exception();
    }
}

class Foo
{
    // 可以这样写。
    const DOWN = Direction::Down;

    // 由于它是不确定的，所以不能这么写。
    const UP = Direction::Up['short'];
    // Fatal error: Cannot use [] on enums in constant expression
}

// 由于它不是一个常量表达式，所以是完全合法的
$x = Direction::Up['short'];
var_dump("\$x is " . var_export($x, true));

$foo = new Foo();
?>

  
```

## 和对象的差异

尽管 enum 基于类和对象，但它们不完全支持对象相关的所有功能。 尤其是枚举条目不能有状态。

 禁止构造、析构函数。 不支持继承。无法 extend 一个 enum。 不支持静态属性和对象属性。 由于枚举条目是单例对象，所以不支持对象复制。 除了下面列举项，不能使用魔术方法。 枚举必须在使用前被声明。 

以下对象功能可用，功能和其他对象一致：

 Public、private、protected 方法。 Public、private、protected 静态方法。 Public、private、protected 类常量。 enum 可以 implement 任意数量的 interface。  枚举和它的条目都可以附加 注解。 目标过滤器 `TARGET_CLASS` 包括枚举自身。 目标过滤器 `TARGET_CLASS_CONST` 包括枚举条目。   魔术方法：__call、__callStatic、 __invoke。  常量 `__CLASS__` 和 `__FUNCTION__` 的功能和平时无差别 

枚举类型的魔术常量 `::class` 和对象完全一样， 它是个包含命名空间的类型名称。 由于枚举条目是枚举类型的一个实例，因此它的 `::class` 也和枚举类型一样。

此外，不能用 `new` 直接实例化枚举条目， 也不能用 `ReflectionClass::newInstanceWithoutConstructor()` 反射实例化。 这么做都会导致错误。

```php


<?php

$clovers = new Suit();
// Error: Cannot instantiate enum Suit

$horseshoes = (new ReflectionClass(Suit::class))->newInstanceWithoutConstructor()
// Error: Cannot instantiate enum Suit
?>

  
```

## 枚举值清单

无论是纯粹枚举还是回退枚举，都实现了一个叫 UnitEnum 的内部接口。 `UnitEnum` 包含了一个静态方法： `cases()`。 按照声明中的顺序，`cases()` 返回了打包的 array，包含全部定义的条目。

```php


<?php

Suit::cases();
// 产生： [Suit::Hearts, Suit::Diamonds, Suit::Clubs, Suit::Spades]
?>

  
```

为 Enum 手动定义 `cases()` 方法会导致 fatal 错误。

## 序列化

枚举的序列化不同于对象。 尤其是它们有新的序列化代码： `"E"`，指示了 enum 条目名称。 然后反序列化动作能够设置变量为现有的单例值。 确保那样：

```php


<?php

Suit::Hearts === unserialize(serialize(Suit::Hearts));

print serialize(Suit::Hearts);
// E:11:"Suit:Hearts";
?>

  
```

如果枚举和它的条目在反序列化时，无法匹配序列化的值， 会导致 warning 警告，并返回 `false`。

把纯粹枚举序列化为 JSON 将会导致错误。 把回退枚举序列化为 JSON 时，仅会用标量值的形式，以合适的类型表达。 可通过实现 `JsonSerializable` 来重载序列化行为。

对于 `print_r()`，输出的枚举条目略微不同于对象， 能减少迷惑。

```php


<?php

enum Foo {
    case Bar;
}

enum Baz: int {
    case Beep = 5;
}

print_r(Foo::Bar);
print_r(Baz::Beep);

/* 产生

Foo Enum (
    [name] => Bar
)
Baz Enum:int {
    [name] => Beep
    [value] => 5
}
*/
?>

  
```

## 为什么枚举不可扩展

类在方法有契约：

```php



<?php

class A {}
class B extends A {}

function foo(A $a) {}

function bar(B $b) {
    foo($b);
}
?>

 
```

这段代码类型安全，因为 B 遵循 A 的契约，并通过协变/逆变的逻辑，将会保留任何对方法的期望，除了异常。

枚举在其选项上有契约，而不是方法：

```php


<?php

enum ErrorCode {
    case SOMETHING_BROKE;
}

function quux(ErrorCode $errorCode)
{
    // 编写时，此代码似乎涵盖了所有情况
    match ($errorCode) {
        ErrorCode::SOMETHING_BROKE => true,
    };
}

?>

  
```

在函数 quux 中，match 语句可以进行静态分析，以涵盖 ErrorCode 中的所有情况。

但是想一下，如果允许扩展枚举：

```php


<?php

// 当枚举不是 final 时考虑做的实验代码。
// 注意在 PHP 中实际不起作用。
enum MoreErrorCode extends ErrorCode {
    case PEBKAC;
}

function fot(MoreErrorCode $errorCode) {
    quux($errorCode);
}

fot(MoreErrorCode::PEBKAC);

?>

 
```

根据正常的继承规则，继承另一个类的类将通过类型检查。

问题在于 quux() 中的 match 语句不再涵盖所有情况。因为它不知道 MoreErrorCode::PEBKAC，所以匹配语句会抛出异常。

因此，枚举是 final，不能扩展。

## 示例

**值受限的基本用法**

```php


<?php

enum SortOrder
{
    case Asc;
    case Desc;
}

function query($fields, $filter, SortOrder $order = SortOrder::Asc)
{
     /* ... */
}
?>

    
```

由于确保 `$order` 不是 `SortOrder::Asc` 就是 `SortOrder::Desc`，所以 `query()` 函数能安全处理。 因为其他任意值都会导致 `TypeError`， 所以不需要额外的错误检查。

**值排他的高级用法**

```php


<?php

enum UserStatus: string
{
    case Pending = 'P';
    case Active = 'A';
    case Suspended = 'S';
    case CanceledByUser = 'C';

    public function label(): string
    {
        return match($this) {
            self::Pending => 'Pending',
            self::Active => 'Active',
            self::Suspended => 'Suspended',
            self::CanceledByUser => 'Canceled by user',
        };
    }
}
?>

    
```

这个例子中，用户的状态是 `UserStatus::Pending`、 `UserStatus::Active`、`UserStatus::Suspended`、 `UserStatus::CanceledByUser` 中的一个，具有独占性。 函数可以根据 `UserStatus` 设置参数类型，仅支持这四种值。

所有四个值都有一个 `label()` 方法，返回了人类可读的字符串。 它独立于等同于标量的“机器名”。 机器名用于类似数据库字段或 HTML 选择框这样的地方。

```php


<?php

foreach (UserStatus::cases() as $case) {
    printf('<option value="%s">%s</option>\n', $case->value, $case->label());
}
?>

    
```
