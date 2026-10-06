---
id: "js-en-function-web-javascript-reference-errors-regex_invalid_group"
language: "js"
lang: "en"
category: "function"
name: "SyntaxError: invalid regexp group"
title: "SyntaxError: invalid regexp group"
directive: "javascript-error"
module: "reference\\errors\\regex_invalid_group\\index.md"
source_url: "https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Errors/Regex_invalid_group"
license: "CC-BY-SA-2.5"
updated: "2026-10-06"
---

# SyntaxError: invalid regexp group

The JavaScript exception "invalid regexp group" occurs when the sequence `(?` does not start a valid group syntax. Recognized group syntaxes that start with `(?` include:

- `(?:` for [non-capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- `(?=` for [positive lookahead](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- `(?!` for negative lookahead
- `(?<=` for [positive lookbehind](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- `(?<!` for negative lookbehind
- `(?<` for [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- `(?-i:`, `(?i:`, `(?m:`, `(?ims-:`, etc. for [modifiers](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)

`(?` followed by any other character would cause this error.

## Message

```plain
SyntaxError: Invalid regular expression: /(?1)/: Invalid group (V8-based)
SyntaxError: invalid regexp group (Firefox)
SyntaxError: Invalid regular expression: unrecognized character after (? (Safari)
```

## Error type

`SyntaxError`

## What went wrong?

`?` is not an [atom](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#atoms), so it does not make sense to appear at the start of a [capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) (`?` is a [quantifier](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) and should be placed after an atom). Maybe you want to match the `?` character literally, in which case you should escape it with a backslash (`\?`). Maybe you remembered the regex syntax wrong, and you intend to use one of the recognized group syntaxes listed above. Maybe you are using a feature that is not supported by the current JavaScript engine.

## Examples

### Invalid cases

```js example-bad
/Hello(?|!)/;
// This is Perl syntax
/(?[\p{Thai}&\p{Digit}])/;
```

### Valid cases

```js example-good
/Hello(\?|!)/;
// This is JavaScript syntax for character set operations
/[\p{Script=Thai}&&\p{Nd}]/v;
```

## See also

- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modifier: `(?ims-ims:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
