---
id: "zh-php-syntax-language-oop5-lazy-objects"
language: "php"
lang: "zh"
category: "syntax"
name: "language.oop5.lazy-objects"
title: "延迟对象"
module: "language"
source_url: "https://www.php.net/manual/zh/language.oop5.lazy-objects.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 延迟对象

延迟对象是指其初始化推迟到状态被观察或修改时才进行的对象。一些用例示例包括依赖项注入组件（仅在需要时提供完全初始化的延迟服务）、ORM（提供仅在访问时才从数据库获取数据的延迟实体）或 JSON 解析器（延迟解析直到访问元素）。

支持两种延迟对象策略：幽灵对象（Ghost Object）和虚拟代理（Virtual Proxies），以下称为"延迟幽灵"和"延迟代理"。 在这两种策略中，延迟对象都附加到初始化程序或工厂，当第一次观察或修改其状态时会自动调用。从抽象的角度来看，延迟幽灵对象与非延迟幽灵对象没有区别：都可以在不知道自己是延迟的情况下使用，从而允许将其传递给不知道延迟的代码并由其使用。延迟代理同样是透明的，但在使用它们的标识（identity）时必须小心，因为代理和其真实实例具有不同的标识。

> 版本信息
>
> 延迟对象在 PHP 8.4 中引入。

### 创建延迟对象

可以创建任何用户定义类或 `stdClass` 类的延迟实例（不支持其他内部类），或重置这些类的实例以使其成为延迟实例。创建延迟对象的入口点是 `ReflectionClass::newLazyGhost()` 和 `ReflectionClass::newLazyProxy()` 方法。

这两种方法都接受函数，在对象需要初始化时调用该函数。该函数的预期行为因所使用的策略而异，如每种方法的参考文档中所述。

**创建延迟幽灵**

```php


<?php
class Example
{
    public function __construct(public int $prop)
    {
        echo __METHOD__, "\n";
    }
}

$reflector = new ReflectionClass(Example::class);
$lazyObject = $reflector->newLazyGhost(function (Example $object) {
    // 在这里初始化对象
    $object->__construct(1);
});

var_dump($lazyObject);
var_dump(get_class($lazyObject));

// 触发初始化
var_dump($lazyObject->prop);
?>

   
```

以上示例会输出：

```text


lazy ghost object(Example)#3 (0) {
["prop"]=>
uninitialized(int)
}
string(7) "Example"
Example::__construct
int(1)

   
```

**创建延迟代理**

```php


<?php
class Example
{
    public function __construct(public int $prop)
    {
        echo __METHOD__, "\n";
    }
}

$reflector = new ReflectionClass(Example::class);
$lazyObject = $reflector->newLazyProxy(function (Example $object) {
    // 创建并返回真实实例
    return new Example(1);
});

var_dump($lazyObject);
var_dump(get_class($lazyObject));

// 触发器初始化
var_dump($lazyObject->prop);
?>

   
```

以上示例会输出：

```text


lazy proxy object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
string(7) "Example"
Example::__construct
int(1)

   
```

对延迟对象属性的任何访问都会触发其初始化（包括通过 `ReflectionProperty` 访问）。但是，某些属性可能是预先知道的，并且在访问时不应触发初始化：

**立即初始化属性**

```php


<?php
class BlogPost
{
    public function __construct(
        public int $id,
        public string $title,
        public string $content,
    ) { }
}

$reflector = new ReflectionClass(BlogPost::class);

$post = $reflector->newLazyGhost(function ($post) {
    $data = fetch_from_store($post->id);
    $post->__construct($data['id'], $data['title'], $data['content']);
});

// 如果没有这行，下面调用 ReflectionProperty::setValue() 时将触发初始化
$reflector->getProperty('id')->skipLazyInitialization($post);
$reflector->getProperty('id')->setValue($post, 123);

// 或者直接使用它：
$reflector->getProperty('id')->setRawValueWithoutLazyInitialization($post, 123);

// 无需触发初始化即可访问 id 属性
var_dump($post->id);
?>

   
```

`ReflectionProperty::skipLazyInitialization()` 和 `ReflectionProperty::setRawValueWithoutLazyInitialization()` 方法提供了在访问属性时绕过延迟初始化的方法。

### 关于延迟对象策略

*延迟幽灵*，就地初始化的对象，并且一旦初始化，就跟从未延迟化的对象没有区别。当需要控制对象的实例化和初始化时，此策略是合适的，如果是其中任何一个由另一方管理，则不适合。

*延迟代理*一旦初始化，便充当真实实例的代理：对已初始化延迟代理的任何操作都将转发给真实实例。真实实例的创建可以委托给另一方，这使得此策略在延迟幽灵不适合的情况下非常有用。尽管延迟代理几乎与延迟幽灵一样透明，但在使用其身份时需要谨慎，因为代理和真实实例具有不同的身份。

### 延迟对象的生命周期

对象可以使用 `ReflectionClass::newLazyGhost()` 或 `ReflectionClass::newLazyProxy()` 在实例化时设置为延迟，或者使用 `ReflectionClass::resetAsLazyGhost()` 或 `ReflectionClass::resetAsLazyProxy()` 在实例化后设置为延迟。之后可以通过下列操作之一初始化延迟对象：

  以触发自动初始化的方式与对象进行交互。参阅初始化触发器。   使用 `ReflectionProperty::skipLazyInitialization()` 或 `ReflectionProperty::setRawValueWithoutLazyInitialization()` 将其所有属性标注为非延迟。   明确调用 `ReflectionClass::initializeLazyObject()` 或 `ReflectionClass::markLazyObjectAsInitialized()`。  

由于延迟对象在所有属性均标记为非惰性时才会初始化，因此如果没有属性可以标记为延迟，则上述方法不会将对象标记为延迟。

### 初始化触发器

延迟对象设计为对其使用者完全透明，因此观察或修改对象状态的常规操作将在执行操作之前自动触发初始化。这包括但不限于以下操作：

  读取或写入属性。   测试属性是否已设置或已清除。   通过 `ReflectionProperty::getValue()`、`ReflectionProperty::getRawValue()`、`ReflectionProperty::setValue()`, 或 `ReflectionProperty::setRawValue()` 访问或修改属性。   使用 `ReflectionObject::getProperties()`、`ReflectionObject::getProperty()`、`get_object_vars()` 列出属性。   使用 foreach 迭代未实现 Iterator 或 IteratorAggregate 的对象属性。   使用 `serialize()`、`json_encode()` 等序列化对象。   克隆对象。  

方法调用不访问对象状态的话不会触发初始化。同样，如果这些方法或函数不访问对象的状态，则调用魔术方法或挂钩函数与对象的交互也不会触发初始化。

#### 非触发操作

以下特定方法或低级操作允许访问或修改延迟对象而无需触发初始化：

  使用 `ReflectionProperty::skipLazyInitialization()` 或 `ReflectionProperty::setRawValueWithoutLazyInitialization()` 将属性标注为非延迟。   使用 `get_mangled_object_vars()` 或将对象转换为数组来检索属性的内部表示。   当设置了 `ReflectionClass::SKIP_INITIALIZATION_ON_SERIALIZE` 时使用 `serialize()`，除非使用 __serialize() 或 __sleep() 触发初始化。   调用 `ReflectionObject::__toString()`。   使用 `var_dump()` 或 `debug_zval_dump()`，除非使用 __debugInfo() 触发初始化。  

### 初始化序列

本节概述了根据所使用的执行策略触发初始化时的操作顺序。

#### 幽灵对象

  对象标记为非延迟。   没有使用 `ReflectionProperty::skipLazyInitialization()` 或 `ReflectionProperty::setRawValueWithoutLazyInitialization()` 初始化的属性将设置为他们的默认值（如果有）。在此阶段，该对象类似于使用 `ReflectionClass::newInstanceWithoutConstructor()` 创建的对象，但排除已初始化的属性。   然后，将对象作为第一个参数调用其初始化函数。该函数需要（但不是必须）初始化对象状态，并且必须返回 `null` 或没有值。此时对象不再是延迟，因此该函数可以直接访问其属性。  

初始化后，该对象与从未延迟过的对象没有区别。

#### 代理对象

  对象标记为非延迟。   与幽灵对象不同，在此阶段不会修改对象的属性。   会将对象作为工厂函数的第一个参数进行调用，并且必须返回兼容类的非延迟实例（参见 `ReflectionClass::newLazyProxy()`）。   返回的实例称为*真实实例*，并附加到代理对象上。   会丢弃代理对象的属性值，如同调用了 `unset()`。  

初始化后，访问代理对象上的任何属性将得到与访问真实实例上对应属性相同的结果；访问代理对象上的所有属性都会转发到真实实例，包括已声明、动态、不存在的属性，或使用 `ReflectionProperty::skipLazyInitialization()` 或 `ReflectionProperty::setRawValueWithoutLazyInitialization()` 标记的属性。

代理对象本身*不会*替换（replaced）或替代（substituted）为真实实例。

虽然工厂函数会将代理对象作为第一个参数接收，但并不期望对代理对象进行修改（尽管允许修改，但在最终初始化步骤中这些修改将会丢失）。不过，代理对象可以用于根据已初始化属性的值、类、对象本身或其标识来做出决策。例如，在创建真实实例时，初始化程序可能会使用某个已初始化属性的值。

#### 通用行为

初始化程序或工厂函数的作用域和 `$this` 上下文保持不变，同时适用常规的可见性约束。

初始化成功后，对象将不再引用初始化程序或工厂函数，如果它没有其他引用，就可以将对象释放。

如果初始化程序抛出异常，对象状态将恢复到初始化前的状态，并且该对象再次被标记为延迟初始化。换句话说，对象自身的所有影响都将会撤销。其他副作用（例如对其他对象的影响），则不会撤销。这可防止在出现故障的情况下暴露部分初始化的实例。

### 克隆

克隆延迟对象会在创建克隆之前触发其初始化，从而产生已初始化的对象。

对于代理对象，代理及其真实实例都会克隆，并返回代理的克隆。`__clone` 方法会在真实实例上调用，而不是在代理上调用。克隆的代理和真实实例在初始化时会保持连接，因此对代理克隆的访问将转发到克隆的真实实例。

此行为可确保克隆对象和原始对象保持不同的状态。克隆后对原始对象或其初始化程序状态的更改不会影响克隆。克隆代理及其真实实例（而不是仅返回真实实例的克隆），可确保克隆操作始终返回同一类的对象。

### 析构方法

对于延迟幽灵，只有对象初始化后才会调用析构方法。对于延迟代理，只有存在真实实例时才会调用析构方法。

`ReflectionClass::resetAsLazyGhost()` 和 `ReflectionClass::resetAsLazyProxy()` 方法可能会调用已重置对象的析构方法。
