---
id: "en-php-function-mongodb-driver-serverapi-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ServerApi::__construct"
title: "Create a new ServerApi instance"
signature: "final public MongoDB\\Driver\\ServerApi::__construct(string $version, bool|null $strict = null, bool|null $deprecationErrors = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-serverapi.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new ServerApi instance

## Description

```php
final public MongoDB\Driver\ServerApi::__construct(string $version, bool|null $strict = null, bool|null $deprecationErrors = null)
```

Creates a new `MongoDB\Driver\ServerApi` instance used to declare an API version when creating a `MongoDB\Driver\Manager`.

## Parameters

- **`$version`** — A server API version. — Supported API versions are provided as constants in `MongoDB\Driver\ServerApi`. The only supported API version is `MongoDB\Driver\ServerApi::V1`.
- **`$strict`** — If the `$strict` parameter is set to `true`, the server will yield an error for any command that is not part of the specified API version. If no value is provided, the server default value (`false`) is used.
- **`$deprecationErrors`** — If the `$deprecationErrors` parameter is set to `true`, the server will yield an error when using a command that is deprecated in the specified API version. If no value is provided, the server default value (`false`) is used.
