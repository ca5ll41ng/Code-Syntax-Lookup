---
id: "en-php-guide-intl-numberformatter-constants"
language: "php"
lang: "en"
category: "guide"
name: "intl.numberformatter-constants"
title: "Predefined Constants"
module: "intl"
source_url: "https://www.php.net/manual/en/intl.numberformatter-constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

## Format Types

These styles are used by the `numfmt_create()` to define the type of the formatter.

- **`NumberFormatter::PATTERN_DECIMAL` `int`** — Decimal format defined by pattern
- **`NumberFormatter::DECIMAL` `int`** — Decimal format
- **`NumberFormatter::DECIMAL_COMPACT_SHORT` `int`** — Decimal format expressed using compact notation (short form), e.g. "23K", "45B". Available as of PHP 8.5.0 and ICU 56.
- **`NumberFormatter::DECIMAL_COMPACT_LONG` `int`** — Decimal format expressed using compact notation (long form), e.g. "23 thousand", "45 billion". Available as of PHP 8.5.0 and ICU 56.
- **`NumberFormatter::CURRENCY` `int`** — Currency format
- **`NumberFormatter::CURRENCY_ISO` `int`** — ISO currency format (e.g., "USD1.00"). Available as of PHP 8.5.0.
- **`NumberFormatter::CURRENCY_PLURAL` `int`** — Pluralized currency format (e.g., "1.00 US dollar" and "3.00 US dollars"). Available as of PHP 8.5.0.
- **`NumberFormatter::CASH_CURRENCY` `int`** — Currency symbol given CASH usage, e.g., "NT$3" instead of "NT$3.23". Available as of PHP 8.5.0 and ICU 54
- **`NumberFormatter::CURRENCY_STANDARD` `int`** — Currency symbol, e.g., "$1.00", using non-accounting style for negative values (e.g. minus sign). Available as of PHP 8.5.0 and ICU 56.
- **`NumberFormatter::PERCENT` `int`** — Percent format
- **`NumberFormatter::SCIENTIFIC` `int`** — Scientific format
- **`NumberFormatter::SPELLOUT` `int`** — Spellout rule-based format
- **`NumberFormatter::ORDINAL` `int`** — Ordinal rule-based format
- **`NumberFormatter::DURATION` `int`** — Duration rule-based format
- **`NumberFormatter::PATTERN_RULEBASED` `int`** — Rule-based format defined by pattern
- **`NumberFormatter::CURRENCY_ACCOUNTING` `int`** — Currency format for accounting, e.g., `($3.00)` for negative currency amount instead of `-$3.00`. Available as of PHP 7.4.1 and ICU 53.
- **`NumberFormatter::DEFAULT_STYLE` `int`** — Default format for the locale
- **`NumberFormatter::IGNORE` `int`** — Alias for PATTERN_DECIMAL

## Number Format Specifiers

These constants define how the numbers are parsed or formatted. They should be used as arguments to `numfmt_format()` and `numfmt_parse()`.

- **`NumberFormatter::TYPE_DEFAULT` `int`** — Derive the type from variable type
- **`NumberFormatter::TYPE_INT32` `int`** — Format/parse as 32-bit integer
- **`NumberFormatter::TYPE_INT64` `int`** — Format/parse as 64-bit integer
- **`NumberFormatter::TYPE_DOUBLE` `int`** — Format/parse as floating point value
- **`NumberFormatter::TYPE_CURRENCY` `int`** — Format/parse as currency value. Deprecated as of PHP 8.3.0

## Number Format Attributes

Number format attribute used by `numfmt_get_attribute()` and `numfmt_set_attribute()`.

- **`NumberFormatter::PARSE_INT_ONLY` `int`** — Parse integers only.
- **`NumberFormatter::GROUPING_USED` `int`** — Use grouping separator.
- **`NumberFormatter::DECIMAL_ALWAYS_SHOWN` `int`** — Always show decimal point.
- **`NumberFormatter::MAX_INTEGER_DIGITS` `int`** — Maximum integer digits.
- **`NumberFormatter::MIN_INTEGER_DIGITS` `int`** — Minimum integer digits.
- **`NumberFormatter::INTEGER_DIGITS` `int`** — Integer digits.
- **`NumberFormatter::MAX_FRACTION_DIGITS` `int`** — Maximum fraction digits.
- **`NumberFormatter::MIN_FRACTION_DIGITS` `int`** — Minimum fraction digits.
- **`NumberFormatter::FRACTION_DIGITS` `int`** — Fraction digits.
- **`NumberFormatter::MULTIPLIER` `int`** — Multiplier.
- **`NumberFormatter::GROUPING_SIZE` `int`** — Grouping size.
- **`NumberFormatter::ROUNDING_MODE` `int`** — Rounding Mode.
- **`NumberFormatter::ROUNDING_INCREMENT` `int`** — Rounding increment.
- **`NumberFormatter::FORMAT_WIDTH` `int`** — The width to which the output of format() is padded.
- **`NumberFormatter::PADDING_POSITION` `int`** — The position at which padding will take place. See pad position constants for possible argument values.
- **`NumberFormatter::SECONDARY_GROUPING_SIZE` `int`** — Secondary grouping size.
- **`NumberFormatter::SIGNIFICANT_DIGITS_USED` `int`** — Use significant digits.
- **`NumberFormatter::MIN_SIGNIFICANT_DIGITS` `int`** — Minimum significant digits.
- **`NumberFormatter::MAX_SIGNIFICANT_DIGITS` `int`** — Maximum significant digits.
- **`NumberFormatter::LENIENT_PARSE` `int`** — Lenient parse mode used by rule-based formats.

## Number Format Text Attributes

Number format text attribute used by `numfmt_get_text_attribute()` and `numfmt_set_text_attribute()`.

- **`NumberFormatter::POSITIVE_PREFIX` `int`** — Positive prefix.
- **`NumberFormatter::POSITIVE_SUFFIX` `int`** — Positive suffix.
- **`NumberFormatter::NEGATIVE_PREFIX` `int`** — Negative prefix.
- **`NumberFormatter::NEGATIVE_SUFFIX` `int`** — Negative suffix.
- **`NumberFormatter::PADDING_CHARACTER` `int`** — The character used to pad to the format width.
- **`NumberFormatter::CURRENCY_CODE` `int`** — The ISO currency code.
- **`NumberFormatter::DEFAULT_RULESET` `int`** — The default rule set. This is only available with rule-based formatters.
- **`NumberFormatter::PUBLIC_RULESETS` `int`** — The public rule sets. This is only available with rule-based formatters. This is a read-only attribute. The public rulesets are returned as a single string, with each ruleset name delimited by ';' (semicolon).

## Symbol Format Specifiers

Number format symbols used by `numfmt_get_symbol()` and `numfmt_set_symbol()`.

- **`NumberFormatter::DECIMAL_SEPARATOR_SYMBOL` `int`** — The decimal separator.
- **`NumberFormatter::GROUPING_SEPARATOR_SYMBOL` `int`** — The grouping separator.
- **`NumberFormatter::PATTERN_SEPARATOR_SYMBOL` `int`** — The pattern separator.
- **`NumberFormatter::PERCENT_SYMBOL` `int`** — The percent sign.
- **`NumberFormatter::ZERO_DIGIT_SYMBOL` `int`** — Zero.
- **`NumberFormatter::DIGIT_SYMBOL` `int`** — Character representing a digit in the pattern.
- **`NumberFormatter::MINUS_SIGN_SYMBOL` `int`** — The minus sign.
- **`NumberFormatter::PLUS_SIGN_SYMBOL` `int`** — The plus sign.
- **`NumberFormatter::CURRENCY_SYMBOL` `int`** — The currency symbol.
- **`NumberFormatter::INTL_CURRENCY_SYMBOL` `int`** — The international currency symbol.
- **`NumberFormatter::MONETARY_SEPARATOR_SYMBOL` `int`** — The monetary separator.
- **`NumberFormatter::EXPONENTIAL_SYMBOL` `int`** — The exponential symbol.
- **`NumberFormatter::PERMILL_SYMBOL` `int`** — Per mill symbol.
- **`NumberFormatter::PAD_ESCAPE_SYMBOL` `int`** — Escape padding character.
- **`NumberFormatter::INFINITY_SYMBOL` `int`** — Infinity symbol.
- **`NumberFormatter::NAN_SYMBOL` `int`** — Not-a-number symbol.
- **`NumberFormatter::SIGNIFICANT_DIGIT_SYMBOL` `int`** — Significant digit symbol.
- **`NumberFormatter::MONETARY_GROUPING_SEPARATOR_SYMBOL` `int`** — The monetary grouping separator.

## Rounding Modes

Rounding mode values used by `numfmt_get_attribute()` and `numfmt_set_attribute()` with `NumberFormatter::ROUNDING_MODE` attribute.

- **`NumberFormatter::ROUND_AWAY_FROM_ZERO`** —  `NumberFormatter::ROUND_UP`.
- **`NumberFormatter::ROUND_CEILING` `int`** — Rounding mode to round towards positive infinity.
- **`NumberFormatter::ROUND_DOWN` `int`** — Rounding mode to round towards zero.
- **`NumberFormatter::ROUND_FLOOR` `int`** — Rounding mode to round towards negative infinity.
- **`NumberFormatter::ROUND_HALFDOWN` `int`** — Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which case round down.
- **`NumberFormatter::ROUND_HALFEVEN` `int`** — Rounding mode to round towards the "nearest neighbor" unless both neighbors are equidistant, in which case, round towards the even neighbor.
- **`NumberFormatter::ROUND_HALFODD`** — Rounding mode to round towards the "odd neighbor".
- **`NumberFormatter::ROUND_HALFUP` `int`** — Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which case round up.
- **`NumberFormatter::ROUND_TOWARD_ZERO`** —  `NumberFormatter::ROUND_DOWN`.
- **`NumberFormatter::ROUND_UP` `int`** — Rounding mode to round away from zero.

## Padding Specifiers

Pad position values used by `numfmt_get_attribute()` and `numfmt_set_attribute()` with `NumberFormatter::PADDING_POSITION` attribute.

- **`NumberFormatter::PAD_AFTER_PREFIX` `int`** — Pad characters inserted after the prefix.
- **`NumberFormatter::PAD_AFTER_SUFFIX` `int`** — Pad characters inserted after the suffix.
- **`NumberFormatter::PAD_BEFORE_PREFIX` `int`** — Pad characters inserted before the prefix.
- **`NumberFormatter::PAD_BEFORE_SUFFIX` `int`** — Pad characters inserted before the suffix.
