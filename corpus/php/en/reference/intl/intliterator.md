---
id: "en-php-guide-class-intliterator"
language: "php"
lang: "en"
category: "guide"
name: "class.intliterator"
title: "The IntlIterator class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.intliterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IntlIterator class

IntlIterator

   Introduction  This class represents iterator objects throughout the intl extension whenever the iterator cannot be identified with any other object provided by the extension. The distinct iterator object used internally by the `foreach` construct can only be obtained (in the relevant part here) from objects, so objects of this class serve the purpose of providing the hook through which this internal object can be obtained. As a convenience, this class also implements the `Iterator` interface, allowing the collection of values to be navigated using the methods defined in that interface. Both these methods and the internal iterator objects provided to `foreach` are backed by the same state (e.g. the position of the iterator and its current value).    Subclasses may provide richer functionality.      Class Synopsis    `IntlIterator`   `implements` Iterator
