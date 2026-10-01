---
id: "en-php-guide-filter-constants-flags-generic"
language: "php"
lang: "en"
category: "guide"
name: "filter.constants.flags.generic"
title: "Generic Filter Flags"
module: "filter"
source_url: "https://www.php.net/manual/en/filter.constants.flags.generic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generic Filter Flags

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

- **`FILTER_FLAG_NONE` (`int`)** — No flags.
- **`FILTER_REQUIRE_SCALAR` (`int`)** — Flag used to require the input of the filter to be a scalar.
- **`FILTER_REQUIRE_ARRAY` (`int`)** — Flag used to require the input of the filter to be an `array`.
- **`FILTER_FORCE_ARRAY` (`int`)** — This flag wraps scalar inputs into a one element `array` for filters which operate on arrays.
- **`FILTER_NULL_ON_FAILURE` (`int`)** — Use `null` instead of `false` on failure. — Usable with any validation `FILTER_VALIDATE_{*}` filter.
- **`FILTER_THROW_ON_FAILURE` (`int`)** — Throws a Filter\FilterFailedException when a validation filter fails, instead of returning `false`. — Can be used with any validation `FILTER_VALIDATE_{*}` filter. — Available as of PHP 8.5.0.
