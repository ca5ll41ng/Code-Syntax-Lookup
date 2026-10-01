---
id: "en-php-syntax-class-delayedtargetvalidation"
language: "php"
lang: "en"
category: "syntax"
name: "class.delayedtargetvalidation"
title: "The DelayedTargetValidation attribute"
module: "language"
source_url: "https://www.php.net/manual/en/class.delayedtargetvalidation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DelayedTargetValidation attribute

DelayedTargetValidation

  Introduction  This attribute delays target validation errors for internal attributes from compile time to when the attribute is instantiated via the Reflection API.    When applied to a declaration, any invalid usage of internal attributes on the same target will not trigger a compile time error. Instead, the validation is deferred and performed when the attribute is instantiated via ReflectionAttribute::newInstance().    This is primarily intended for forward compatibility, allowing code to use attributes that may gain additional valid targets in future PHP versions without breaking on older versions.     Class Synopsis   `#[\Attribute(\Attribute::TARGET_ALL)]` `final` `DelayedTargetValidation`     Examples 
**Delaying validation of an invalid target**

```php

<?php

class Base {
    protected function foo(): void {}
}

class Child extends Base {

    #[\DelayedTargetValidation]
    #[\Override]
    public const NAME = 'child';

    #[\Override]
    protected function foo(): void {}
}
```

On PHP versions where `Override` is not allowed on class constants, this does not produce a compile time error.

 
**Validation occurs during reflection**

```php

<?php

$reflection = new ReflectionClassConstant(Child::class, 'NAME');

foreach ($reflection->getAttributes() as $attribute) {
    $attribute->newInstance(); // May throw if invalid
}
```

When any attribute applied to the same target (other than DelayedTargetValidation itself) is instantiated via reflection using ReflectionAttribute::newInstance(), target validation is performed and an exception may be thrown if the attribute is used on an unsupported target.

   Notes  This attribute only affects target validation of internal attributes.    It does not suppress functional validation performed by those attributes. For example, `Override` will still emit an error if a method does not actually override a parent method.     See Also  Attributes overview Override
