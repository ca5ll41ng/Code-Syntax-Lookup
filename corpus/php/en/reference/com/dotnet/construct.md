---
id: "en-php-function-dotnet-construct"
language: "php"
lang: "en"
category: "function"
name: "dotnet::__construct"
title: "dotnet class constructor"
signature: "public dotnet::__construct(string $assembly_name, string $datatype_name, int $codepage = CP_ACP)"
module: "com"
source_url: "https://www.php.net/manual/en/dotnet.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# dotnet class constructor

## Description

```php
public dotnet::__construct(string $assembly_name, string $datatype_name, int $codepage = CP_ACP)
```

Constructs a new dotnet object.

## Parameters

- **`$assembly_name`** — Specifies which assembly should be loaded.
- **`$datatype_name`** — Specifies which class in that assembly to instantiate.
- **`$codepage`** — Codepage to use for unicode string transformations; see the `class.com` class for more details on code pages.
