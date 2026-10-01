---
id: "en-php-guide-class-reflectionconstant"
language: "php"
lang: "en"
category: "guide"
name: "class.reflectionconstant"
title: "The ReflectionConstant class"
module: "reflection"
source_url: "https://www.php.net/manual/en/class.reflectionconstant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The ReflectionConstant class

ReflectionConstant

  Introduction  The `ReflectionConstant` class reports information about a global constant.     Class Synopsis   `ReflectionConstant`   `implements` Reflector    `public` `string` `name`        Properties 
- **`name`** — Name of the constant. Read-only, throws `ReflectionException` in attempt to write.

   Changelog 
|  |  |
| --- | --- |
| 8.5.0 | The class is no longer final. |

   See Also  `ReflectionClassConstant`
