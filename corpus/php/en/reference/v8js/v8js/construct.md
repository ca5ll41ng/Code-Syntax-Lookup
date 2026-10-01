---
id: "en-php-function-v8js-construct"
language: "php"
lang: "en"
category: "function"
name: "V8Js::__construct"
title: "Construct a new `V8Js` object"
signature: "public V8Js::__construct(string $object_name = \"PHP\", array $variables = array(), array $extensions = array(), bool $report_uncaught_exceptions = true)"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new `V8Js` object

## Description

```php
public V8Js::__construct(string $object_name = "PHP", array $variables = array(), array $extensions = array(), bool $report_uncaught_exceptions = true)
```

Constructs a new `V8Js` object.

## Parameters

- **`$object_name`** — The name of the object passed to Javascript.
- **`$variables`** — Map of PHP variables that will be available in Javascript. Must be an associative `array` in format `array("name-for-js" => "name-of-php-variable")`. Defaults to empty array.
- **`$extensions`** — List of extensions registered using `V8Js::registerExtension()` which should be available in the Javascript context of the created `V8Js` object. > Extensions registered to be enabled automatically do not need to be listed in this array. Also if an extension has dependencies, those dependencies can be omitted as well. Defaults to empty array.
- **`$report_uncaught_exceptions`** — Controls whether uncaught Javascript exceptions are reported immediately or not. Defaults to `true`. If set to `false` the uncaught exception can be accessed using `V8Js::getPendingException()`.
