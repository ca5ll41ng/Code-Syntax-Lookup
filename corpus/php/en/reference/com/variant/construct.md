---
id: "en-php-function-variant-construct"
language: "php"
lang: "en"
category: "function"
name: "variant::__construct"
title: "variant class constructor"
signature: "public variant::__construct(mixed $value = null, int $type = VT_EMPTY, int $codepage = CP_ACP)"
module: "com"
source_url: "https://www.php.net/manual/en/variant.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# variant class constructor

## Description

```php
public variant::__construct(mixed $value = null, int $type = VT_EMPTY, int $codepage = CP_ACP)
```

Constructs a new variant object.

## Parameters

- **`$value`** — Initial value. If omitted, or set to `null` an VT_EMPTY object is created.
- **`$type`** — Specifies the content type of the variant object. Possible values are one of the `VT_{*}` `com.constants`. — PHP can detect parameters passed by reference automatically; they do not even need to be passed as variant objects. — Consult the MSDN library for additional information on the VARIANT type.
- **`$codepage`** — Specifies the codepage that is used to convert strings to unicode. See the parameter of the same name in the `class.com` class for more information.
