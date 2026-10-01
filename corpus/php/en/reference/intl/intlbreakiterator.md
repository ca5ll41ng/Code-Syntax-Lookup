---
id: "en-php-guide-class-intlbreakiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.intlbreakiterator"
title: "The IntlBreakIterator class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.intlbreakiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IntlBreakIterator class

IntlBreakIterator

   Introduction  A “break iterator” is an ICU object that exposes methods for locating boundaries in text (e.g. word or sentence boundaries). The PHP `IntlBreakIterator` serves as the base class for all types of ICU break iterators. Where extra functionality is available, the intl extension may expose the ICU break iterator with suitable subclasses, such as `IntlRuleBasedBreakIterator` or `IntlCodePointBreakIterator`.    This class implements IteratorAggregate. Traversing an `IntlBreakIterator` yields non-negative integer values representing the successive locations of the text boundaries, expressed as UTF-8 code units (byte) counts, taken from the beginning of the text (which has the location `0`). The keys yielded by the iterator simply form the sequence of natural numbers `{0, 1, 2, …}`.      Class Synopsis    `IntlBreakIterator`   `implements` IteratorAggregate    `public` `const` `int` `IntlBreakIterator::DONE`   `public` `const` `int` `IntlBreakIterator::WORD_NONE`   `public` `const` `int` `IntlBreakIterator::WORD_NONE_LIMIT`   `public` `const` `int` `IntlBreakIterator::WORD_NUMBER`   `public` `const` `int` `IntlBreakIterator::WORD_NUMBER_LIMIT`   `public` `const` `int` `IntlBreakIterator::WORD_LETTER`   `public` `const` `int` `IntlBreakIterator::WORD_LETTER_LIMIT`   `public` `const` `int` `IntlBreakIterator::WORD_KANA`   `public` `const` `int` `IntlBreakIterator::WORD_KANA_LIMIT`   `public` `const` `int` `IntlBreakIterator::WORD_IDEO`   `public` `const` `int` `IntlBreakIterator::WORD_IDEO_LIMIT`   `public` `const` `int` `IntlBreakIterator::LINE_SOFT`   `public` `const` `int` `IntlBreakIterator::LINE_SOFT_LIMIT`   `public` `const` `int` `IntlBreakIterator::LINE_HARD`   `public` `const` `int` `IntlBreakIterator::LINE_HARD_LIMIT`   `public` `const` `int` `IntlBreakIterator::SENTENCE_TERM`   `public` `const` `int` `IntlBreakIterator::SENTENCE_TERM_LIMIT`   `public` `const` `int` `IntlBreakIterator::SENTENCE_SEP`   `public` `const` `int` `IntlBreakIterator::SENTENCE_SEP_LIMIT`          Predefined Constants 
- **`IntlBreakIterator::DONE` `int`**
- **`IntlBreakIterator::WORD_NONE` `int`**
- **`IntlBreakIterator::WORD_NONE_LIMIT` `int`**
- **`IntlBreakIterator::WORD_NUMBER` `int`**
- **`IntlBreakIterator::WORD_NUMBER_LIMIT` `int`**
- **`IntlBreakIterator::WORD_LETTER` `int`**
- **`IntlBreakIterator::WORD_LETTER_LIMIT` `int`**
- **`IntlBreakIterator::WORD_KANA` `int`**
- **`IntlBreakIterator::WORD_KANA_LIMIT` `int`**
- **`IntlBreakIterator::WORD_IDEO` `int`**
- **`IntlBreakIterator::WORD_IDEO_LIMIT` `int`**
- **`IntlBreakIterator::LINE_SOFT` `int`**
- **`IntlBreakIterator::LINE_SOFT_LIMIT` `int`**
- **`IntlBreakIterator::LINE_HARD` `int`**
- **`IntlBreakIterator::LINE_HARD_LIMIT` `int`**
- **`IntlBreakIterator::SENTENCE_TERM` `int`**
- **`IntlBreakIterator::SENTENCE_TERM_LIMIT` `int`**
- **`IntlBreakIterator::SENTENCE_SEP` `int`**
- **`IntlBreakIterator::SENTENCE_SEP_LIMIT` `int`**

   Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
| 8.0.0 | `IntlBreakIterator` implements IteratorAggregate now. Previously, Traversable was implemented instead. |
