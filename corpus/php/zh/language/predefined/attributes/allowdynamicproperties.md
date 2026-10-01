---
id: "zh-php-syntax-class-allowdynamicproperties"
language: "php"
lang: "zh"
category: "syntax"
name: "class.allowdynamicproperties"
title: "AllowDynamicProperties 注解"
module: "language"
source_url: "https://www.php.net/manual/zh/class.allowdynamicproperties.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# AllowDynamicProperties 注解

AllowDynamicProperties

  简介  此注解用于标记 class，允许动态属性。   
> 虽然注解本身不会被继承，但 `AllowDynamicProperties` 注解的效果*会*被继承。使用此注解标记的类，其子类即使没有显式声明该注解， 也同样允许动态属性。

   类摘要   `#[\Attribute]` `final` `AllowDynamicProperties`  方法     示例  从 PHP 8.2.0 起弃用动态属性，因此在不使用此注解标记类的情况下使用动态属性将发出弃用通知。   
**AllowDynamicProperties 与不存在的属性**

```php

<?php
class DefaultBehaviour { }

#[\AllowDynamicProperties]
class ClassAllowsDynamicProperties { }

$o1 = new DefaultBehaviour();
$o2 = new ClassAllowsDynamicProperties();

$o1->nonExistingProp = true;
$o2->nonExistingProp = true;
?>

    
```

以上示例在 PHP 8.2 中的输出：

```text

Deprecated: Creation of dynamic property DefaultBehaviour::$nonExistingProp is deprecated in file on line 10

    
```

 
**继承类中的 AllowDynamicProperties 与不存在的属性**

```php

<?php
class DefaultBehaviour { }

#[\AllowDynamicProperties]
class ClassAllowsDynamicProperties { }

class InheritedClassAllowsDynamicProperties extends ClassAllowsDynamicProperties { }

$o1 = new DefaultBehaviour();
$o2 = new InheritedClassAllowsDynamicProperties();

$o1->nonExistingProp = true;
$o2->nonExistingProp = true;
?>

    
```

以上示例在 PHP 8.2 中的输出：

```text

Deprecated: Creation of dynamic property DefaultBehaviour::$nonExistingProp is deprecated in file on line 12

    
```

   参见 注解概览
