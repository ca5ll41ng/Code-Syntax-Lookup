---
id: "en-php-function-function-rpmvercmp"
language: "php"
lang: "en"
category: "function"
name: "rpmvercmp"
title: "RPM version comparison"
signature: "int|bool rpmvercmp(string $evr1, string $evr2, string|null $operator = null)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmvercmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# RPM version comparison

## Description

```php
int|bool rpmvercmp(string $evr1, string $evr2, string|null $operator = null)
```

Compare two RPM package versions.

## Parameters

- **`$evr1`** — First `epoch:version-release` string.
- **`$evr2`** — Second `epoch:version-release` string.
- **`$operator`** — An optional operator. The possible operators are: `<` `lt` `<=` `le` `>` `gt` `>=` `ge` `==` `=` `eq` `!=` `<>` `ne` . — This parameter is case-sensitive, values should be lowercase.

## Return Values

Returns `-1` if `$evr1` is less than `$evr2`, `1` if `$evr1` is greater than `$evr2`, and `0` if they are equal.

When using the optional `$operator` argument, the function will return `true` if the relationship is the one specified by the operator, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| PECL rpminfo 0.7.0 | Optional `$operator` was added. |
