---
id: "js-en-function-web-javascript-reference-global_objects-intl-segmenter"
language: "js"
lang: "en"
category: "function"
name: "Intl.Segmenter"
title: "Intl.Segmenter"
directive: "javascript-class"
module: "reference\\global_objects\\intl\\segmenter\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# Intl.Segmenter

The **`Intl.Segmenter`** object enables locale-sensitive text segmentation, enabling you to get meaningful items (graphemes, words or sentences) from a string.

`JavaScript Demo: Intl.Segmenter`

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// Expected output: 'Que'

console.log(iterator.next().value.segment);
// Expected output: ' '
```

## Constructor

- `Intl/Segmenter/Segmenter`
  - : Creates a new `Intl.Segmenter` object.

## Static methods

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance properties

These properties are defined on `Intl.Segmenter.prototype` and shared by all `Intl.Segmenter` instances.

- `Object/constructor`
  - : The constructor function that created the instance object. For `Intl.Segmenter` instances, the initial value is the `Intl/Segmenter/Segmenter` constructor.
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl.Segmenter"`. This property is used in `Object.prototype.toString()`.

## Instance methods

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and granularity options computed during initialization of this `Intl.Segmenter` object.
- `Intl/Segmenter/segment`
  - : Returns a new iterable [`Segments`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) instance representing the segments of a string according to the locale and granularity of this `Intl.Segmenter` instance.

## Examples

### Basic usage and difference from String.prototype.split()

If we were to use [`String.prototype.split(" ")`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) to segment a text in words, we would not get the correct result if the locale of the text does not use whitespaces between words (which is the case for Japanese, Chinese, Thai, Lao, Khmer, Myanmar, etc.).

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// The two sentences are not correctly segmented.
```

```js example-good
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// etc.
// ]
```

## Specifications

## Browser compatibility

## See also

- [Polyfill of `Intl.Segmenter` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-segmenter/)
- `Intl`
