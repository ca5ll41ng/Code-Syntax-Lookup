---
id: "en-php-function-reflectionfunction-isdisabled"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::isDisabled"
title: "Checks if function is disabled"
signature: "#[\\Deprecated(since: '8.0', message: \"as ReflectionFunction can no longer be constructed for disabled functions\")] public bool ReflectionFunction::isDisabled()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.isdisabled.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if function is disabled

## Description

```php
#[\Deprecated(since: '8.0', message: "as ReflectionFunction can no longer be constructed for disabled functions")] public bool ReflectionFunction::isDisabled()
```

Checks if the function is disabled, via the disable_functions directive.

## Parameters

This function has no parameters.

## Return Values

`true` if it's disabled, otherwise `false`

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated, as `ReflectionFunction` can no longer be constructed for disabled functions. |

## See Also

`ReflectionFunctionAbstract::isUserDefined()` disable_functions directive
