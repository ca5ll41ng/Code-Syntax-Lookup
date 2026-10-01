---
id: "zh-php-syntax-class-override"
language: "php"
lang: "zh"
category: "syntax"
name: "class.override"
title: "Override 注解"
module: "language"
source_url: "https://www.php.net/manual/zh/class.override.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Override 注解

Override

  简介  此注解用于表明某个方法或属性意图重写父类中的方法或属性，或实现接口中定义的方法或属性。    如果父类或实现的接口中不存在同名方法或属性，则会引发编译时错误。    此注解不能用于 __construct() 方法，该方法不进行签名检查。     类摘要   `#[\Attribute]` `final` `Override`  方法     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.5.0 | `Override` 可以应用于属性。 |

   示例 
**与方法一起使用**

```php

<?php

class Base {
    protected function foo(): void {}
}

final class Extended extends Base {
    #[\Override]
    protected function boo(): void {}
}

?>

    
```

上述示例在 PHP 8.3 中的输出类似于：

```text

Fatal error: Extended::boo() has #[\Override] attribute, but no matching parent method exists

    
```

 
**与属性一起使用**

```php

<?php

class Base {
    protected string $foo;
}

final class Extended extends Base {
    #[\Override]
    protected string $boo;
}

?>

    
```

上述示例在 PHP 8.5 中的输出类似于：

```text

Fatal error: Extended::$boo has #[\Override] attribute, but no matching parent property exists

    
```

   参见  注解概览
