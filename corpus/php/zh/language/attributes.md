---
id: "zh-php-syntax-language-attributes"
language: "php"
lang: "zh"
category: "syntax"
name: "language.attributes"
title: "注解"
module: "language"
source_url: "https://www.php.net/manual/zh/language.attributes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注解

## 注解概览

PHP 注解为类、方法、函数、参数、属性和常量提供了结构化且机器可读的元数据。它们可以通过反射 API 在运行时进行检查，从而实现动态行为而无需修改代码。注解提供了声明式的方式来为代码添加元数据注释。

注解使得功能实现与其使用之间实现解耦。接口通过强制定义方法来规范结构，而注解则为方法、函数、属性和常量在内的多个元素提供元数据。与接口不同，接口强制实现方法，而注解则在不改变代码结构的情况下为其添加注释。

注解可以通过提供元数据而非强制结构来补充或替代可选的接口方法。以表示应用程序中操作的 `ActionHandler` 接口为例。某些实现可能需要设置步骤，而其他实现则不需要。与其强制所有实现（implementing）`ActionHandler` 的类都定义 `setUp()` 方法，不如使用注解来表明设置需求。这种方法提高了灵活性，并允许在必要时多次应用属性。

**用注解实现接口的可选方法**

```php


<?php
interface ActionHandler
{
    public function execute();
}

#[Attribute]
class SetUp {}

class CopyFile implements ActionHandler
{
    public string $fileName;
    public string $targetDirectory;

    #[SetUp]
    public function fileExists()
    {
        if (!file_exists($this->fileName)) {
            throw new RuntimeException("File does not exist");
        }
    }

    #[SetUp]
    public function targetDirectoryExists()
    {
        if (!file_exists($this->targetDirectory)) {
            mkdir($this->targetDirectory);
        } elseif (!is_dir($this->targetDirectory)) {
            throw new RuntimeException("Target directory $this->targetDirectory is not a directory");
        }
    }

    public function execute()
    {
        copy($this->fileName, $this->targetDirectory . '/' . basename($this->fileName));
    }
}

function executeAction(ActionHandler $actionHandler)
{
    $reflection = new ReflectionObject($actionHandler);

    foreach ($reflection->getMethods() as $method) {
        $attributes = $method->getAttributes(SetUp::class);

        if (count($attributes) > 0) {
            $methodName = $method->getName();

            $actionHandler->$methodName();
        }
    }

    $actionHandler->execute();
}

$copyAction = new CopyFile();
$copyAction->fileName = "/tmp/foo.jpg";
$copyAction->targetDirectory = "/home/user";

executeAction($copyAction);

     
```

## 注解语法

注解语法由几个关键组件组成。属性声明以 `#[` 开始，以 `]` 结束。内部可以列出一个或多个注解，注解之间用逗号分隔。注解名称如使用命名空间基础中所述，可以是未限定、限定或完全限定的。注解的参数是可选的，并用圆括号 `()` 括起来。参数只能是字面值或常量表达式，同时支持位置参数和命名参数语法。

注解名称及其参数会解析为类，并在通过反射 API 请求注解实例时，将参数传递给其构造方法。因此，建议为每个注解都引入对应的类。

**注解语法**

```php


<?php
// a.php
namespace MyExample;

use Attribute;

#[Attribute]
class MyAttribute
{
    const VALUE = 'value';

    private $value;

    public function __construct($value = null)
    {
        $this->value = $value;
    }
}

// b.php

namespace Another;

use MyExample\MyAttribute;

#[MyAttribute]
#[\MyExample\MyAttribute]
#[MyAttribute(1234)]
#[MyAttribute(value: 1234)]
#[MyAttribute(MyAttribute::VALUE)]
#[MyAttribute(array("key" => "value"))]
#[MyAttribute(100 + 200)]
class Thing
{
}

#[MyAttribute(1234), MyAttribute(5678)]
class AnotherThing
{
}

    
```

## 使用反射 API 读取注解

要访问类、方法、函数、参数、属性以及类常量中的注解，可以使用反射 API 提供的 `getAttributes()` 方法。该方法返回包含 `ReflectionAttribute` 实例的数组。这些实例可用于查询注解名称和参数，并可用于实例化所表示注解的对象。

将反射注解表示与其实际实例分离，可以更好地控制错误处理，例如缺失的注解类、参数拼写错误或缺少值等问题。注解类的对象只有在调用 `ReflectionAttribute::newInstance()` 之后才会实例化，从而确保参数验证在此时进行。

**通过反射 API 读取注解**

```php


<?php

#[Attribute]
class MyAttribute
{
    public $value;

    public function __construct($value)
    {
        $this->value = $value;
    }
}

#[MyAttribute(value: 1234)]
class Thing
{
}

function dumpAttributeData($reflection) {
    $attributes = $reflection->getAttributes();

    foreach ($attributes as $attribute) {
       var_dump($attribute->getName());
       var_dump($attribute->getArguments());
       var_dump($attribute->newInstance());
    }
}

dumpAttributeData(new ReflectionClass(Thing::class));
/*
string(11) "MyAttribute"
array(1) {
  ["value"]=>
  int(1234)
}
object(MyAttribute)#3 (1) {
  ["value"]=>
  int(1234)
}
*/


    
```

无需遍历反射实例上的所有注解，可以通过将注解类名作为参数传递，来仅检索特定注解类的注解。

**使用反射 API 读取指定的注解**

```php


<?php

function dumpMyAttributeData($reflection) {
    $attributes = $reflection->getAttributes(MyAttribute::class);

    foreach ($attributes as $attribute) {
       var_dump($attribute->getName());
       var_dump($attribute->getArguments());
       var_dump($attribute->newInstance());
    }
}

dumpMyAttributeData(new ReflectionClass(Thing::class));

     
```

## 声明注解类

建议为每个注解定义单独的类。在最简单的情况下，带有 `#[Attribute]` 声明的空类即可满足需求。可以使用 `use` 语句从全局命名空间导入该注解。

**简单的 Attribute 类**

```php


<?php

namespace Example;

use Attribute;

#[Attribute]
class MyAttribute
{
}

   
```

要限制注解可以应用的声明类型，可以将位掩码作为第一个参数传递给 `#[Attribute]` 声明。

**目标限定使用的注解**

```php


<?php

namespace Example;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION)]
class MyAttribute
{
}

    
```

在另一个类型中声明 `MyAttribute` 会在调用 `ReflectionAttribute::newInstance()` 时抛出异常。

可以指定以下目标：

 `Attribute::TARGET_CLASS` `Attribute::TARGET_FUNCTION` `Attribute::TARGET_METHOD` `Attribute::TARGET_PROPERTY` `Attribute::TARGET_CLASS_CONSTANT` `Attribute::TARGET_PARAMETER` `Attribute::TARGET_ALL` 

默认情况下，每个声明中一个注解只能使用一次。要允许注解可重复使用，可以在 `#[Attribute]` 声明的位掩码中使用 `Attribute::IS_REPEATABLE` flag 进行指定。

**使用 IS_REPEATABLE 允许注解在声明中出现多次**

```php


<?php

namespace Example;

use Attribute;

#[Attribute(Attribute::TARGET_METHOD | Attribute::TARGET_FUNCTION | Attribute::IS_REPEATABLE)]
class MyAttribute
{
}

    
```
