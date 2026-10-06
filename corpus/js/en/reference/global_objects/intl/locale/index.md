---
id: "js-en-function-web-javascript-reference-global_objects-intl-locale"
language: "js"
lang: "en"
category: "function"
name: "Intl.Locale"
title: "Intl.Locale"
directive: "javascript-class"
module: "reference\\global_objects\\intl\\locale\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Intl.Locale

The **`Intl.Locale`** object is a standard built-in property of the Intl object that represents a Unicode locale identifier.

`JavaScript Demo: Intl.Locale`

```js interactive-example
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## Description

The **`Intl.Locale`** object was created to allow for easier manipulation of Unicode locales. Unicode represents locales with a string, called a _locale identifier_. The locale identifier consists of a _language identifier_ and _extension tags_. Language identifiers are the core of the locale, consisting of _language_, _script_, _region_, and _variants_ subtags. Additional information about the locale is stored in the optional _extension tags_. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

Traditionally, the Intl API used strings to represent locales, just as Unicode does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags. The following properties of `Intl.Locale` correspond to Unicode locale identifier subtags:

| Property                                                     | Corresponding subtag               |
| ------------------------------------------------------------ | ---------------------------------- |
| `Intl/Locale/language`               | Language ID, first part            |
| `Intl/Locale/script`                   | Language ID, part after `language` |
| `Intl/Locale/region`                   | Language ID, part after `script`   |
| `Intl/Locale/variants`               | Language ID, part after `region`   |
| `Intl/Locale/calendar`               | `ca` (extension)                   |
| `Intl/Locale/caseFirst`             | `kf` (extension)                   |
| `Intl/Locale/collation`             | `co` (extension)                   |
| `Intl/Locale/hourCycle`             | `hc` (extension)                   |
| `Intl/Locale/numberingSystem` | `nu` (extension)                   |
| `Intl/Locale/numeric`                 | `kn` (extension)                   |

The information above is exactly provided as-is when the `Locale` object is constructed, without consulting any external database. The `Intl.Locale` object additionally provides some methods that return information about the locale's real-world information, such as available calendars, collations, and numbering systems.

## Constructor

- `Intl/Locale/Locale`
  - : Creates a new `Locale` object.

## Instance properties

These properties are defined on `Intl.Locale.prototype` and shared by all `Intl.Locale` instances.

- `Intl/Locale/baseName`
  - : Returns basic, core information about the `Locale` in the form of a substring of the complete data string.
- `Intl/Locale/calendar`
  - : Returns the part of the `Locale` that indicates the Locale's calendar era.
- `Intl/Locale/caseFirst`
  - : Returns whether case is taken into account for the locale's collation rules.
- `Intl/Locale/collation`
  - : Returns the collation type for the `Locale`, which is used to order strings according to the locale's rules.
- `Object/constructor`
  - : The constructor function that created the instance object. For `Intl.Locale` instances, the initial value is the `Intl/Locale/Locale` constructor.
- `Intl/Locale/hourCycle`
  - : Returns the time keeping format convention used by the locale.
- `Intl/Locale/language`
  - : Returns the language associated with the locale.
- `Intl/Locale/numberingSystem`
  - : Returns the numeral system used by the locale.
- `Intl/Locale/numeric`
  - : Returns whether the locale has special collation handling for numeric characters.
- `Intl/Locale/region`
  - : Returns the region of the world (usually a country) associated with the locale.
- `Intl/Locale/script`
  - : Returns the script used for writing the particular language used in the locale.
- `Intl/Locale/variants`
  - : Returns the variants subtags (such as different orthographies) associated with the locale.
- `Intl.Locale.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl.Locale"`. This property is used in `Object.prototype.toString()`.

## Instance methods

- `Intl/Locale/getCalendars`
  - : Returns an `Array` of available calendar identifiers, according to the locale's rules.
- `Intl/Locale/getCollations`
  - : Returns an `Array` of the collation types for the `Locale`.
- `Intl/Locale/getHourCycles`
  - : Returns an `Array` of hour cycle identifiers, indicating either the 12-hour clock ("h12"), the Japanese 12-hour clock ("h11"), the 24-hour clock ("h23"), or the unused format "h24".
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Returns an `Array` of numbering system identifiers available according to the locale's rules.
- `Intl/Locale/getTextInfo`
  - : Returns the part indicating the ordering of characters `ltr` (left-to-right) or `rtl` (right-to-left).
- `Intl/Locale/getTimeZones`
  - : Returns an `Array` of time zone identifiers, associated with the `Locale`.
- `Intl/Locale/getWeekInfo`
  - : Returns [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) according to the locale rules.
- `Intl/Locale/maximize`
  - : Gets the most likely values for the language, script, and region of the locale based on existing values.
- `Intl/Locale/minimize`
  - : Attempts to remove information about the locale that would be added by calling `Intl/Locale/maximize`.
- `Intl/Locale/toString`
  - : Returns the Locale's full locale identifier string.

## Examples

### Basic usage

At its very simplest, the `Intl/Locale/Locale` constructor takes a locale identifier string as its argument:

```js
const us = new Intl.Locale("en-US");
```

### Using the Locale constructor with an options object

The constructor also takes an optional configuration object argument, which can contain any of several extension types. For example, set the `Intl/Locale/hourCycle` property of the configuration object to your desired hour cycle type, and then pass it into the constructor:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Intl.Locale` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-locale/)
- `Intl`
- [Canonical Unicode Locale Identifiers](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in the Unicode locale data markup language spec
