---
id: "zh-php-syntax-class-sensitiveparameter"
language: "php"
lang: "zh"
category: "syntax"
name: "class.sensitiveparameter"
title: "SensitiveParameter 注解"
module: "language"
source_url: "https://www.php.net/manual/zh/class.sensitiveparameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SensitiveParameter 注解

SensitiveParameter

  简介   该注解用于标记敏感参数，如果出现在栈跟踪中，则应编辑其值。     类摘要   `#[\Attribute]` `final` `SensitiveParameter`  方法     示例  
```php

<?php

function defaultBehavior(
    string $secret,
    string $normal
) {
    throw new Exception('Error!');
}

function sensitiveParametersWithAttribute(
    #[\SensitiveParameter]
    string $secret,
    string $normal
) {
    throw new Exception('Error!');
}

try {
    defaultBehavior('password', 'normal');
} catch (Exception $e) {
    echo $e, PHP_EOL, PHP_EOL;
}

try {
    sensitiveParametersWithAttribute('password', 'normal');
} catch (Exception $e) {
    echo $e, PHP_EOL, PHP_EOL;
}

?>

    
```

 上述示例在 PHP 8.2 中的输出类似于：  
```text

Exception: Error! in example.php:7
Stack trace:
#0 example.php(19): defaultBehavior('password', 'normal')
#1 {main}

Exception: Error! in example.php:15
Stack trace:
#0 example.php(25): sensitiveParametersWithAttribute(Object(SensitiveParameterValue), 'normal')
#1 {main}

    
```

    参见   注解概览 `SensitiveParameterValue`
