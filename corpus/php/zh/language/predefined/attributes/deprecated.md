---
id: "zh-php-syntax-class-deprecated"
language: "php"
lang: "zh"
category: "syntax"
name: "class.deprecated"
title: "Deprecated 属性"
module: "language"
source_url: "https://www.php.net/manual/zh/class.deprecated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deprecated 属性

Deprecated

  简介  此属性用于将功能标记为已弃用。使用已弃用的功能将导致发出 `E_USER_DEPRECATED` 错误。     类摘要   `#[\Attribute]` `final` `Deprecated`  属性  `public` `readonly` `string|null` `message`   `public` `readonly` `string|null` `since`  方法     属性 
- **`message`** — 可选的消息，说明弃用的原因和可能的替代功能。将包含在发出的弃用消息中。
- **`since`** — 可选的字符串，指示功能从何时起被弃用。内容不会被 PHP 验证，可以包含版本号、日期或任何被认为合适的值。将包含在发出的弃用消息中。 — PHP 自身的功能将使用 Major.Minor 作为 `since` 值，例如 `'8.4'`。

   示例  
```php

<?php

#[\Deprecated(message: "use safe_replacement() instead", since: "1.5")]
function unsafe_function()
{
   echo "This is unsafe", PHP_EOL;
}

unsafe_function();

?>

    
```

 上述示例在 PHP 8.4 中的输出类似于：  
```text

Deprecated: Function unsafe_function() is deprecated since 1.5, use safe_replacement() instead in example.php on line 9
This is unsafe

    
```

    参见  注解概述 `ReflectionFunctionAbstract::isDeprecated()` `ReflectionClassConstant::isDeprecated()` `E_USER_DEPRECATED`
