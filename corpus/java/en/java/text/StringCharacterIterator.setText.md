---
id: "java-en-function-stringcharacteriterator-settext"
language: "java"
lang: "en"
category: "function"
name: "StringCharacterIterator.setText"
signature: "public void setText(String text)"
title: "StringCharacterIterator.setText"
directive: "method"
module: "java.base/java.text"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/text/StringCharacterIterator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringCharacterIterator.setText

```java
public void setText(String text)
```

Reset this iterator to point to a new string.  This package-visible
 method is used by other java.text classes that want to avoid allocating
 new StringCharacterIterator objects every time their setText method
 is called.

**参数**

- **text** — The String to be iterated over

**异常**

- **NullPointerException** — if `text` is `null`

> *Since 1.2*
