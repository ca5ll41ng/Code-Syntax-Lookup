---
id: "java-en-function-scanner-nextfloat"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextFloat"
signature: "public float nextFloat()"
title: "Scanner.nextFloat"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextFloat

```java
public float nextFloat()
```

Scans the next token of the input as a `float`.
 This method will throw `InputMismatchException`
 if the next token cannot be translated into a valid float value as
 described below. If the translation is successful, the scanner advances
 past the input that matched.

 

 If the next token matches the Float regular expression defined above
 then the token is converted into a `float` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `digit Character.digit`, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `parseFloat Float.parseFloat`. If the token matches
 the localized NaN or infinity strings, then either "Nan" or "Infinity"
 is passed to `parseFloat(String) Float.parseFloat` as
 appropriate.

**返回**

- the `float` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Float regular expression, or is out of range
- **NoSuchElementException** — if input is exhausted
- **IllegalStateException** — if this scanner is closed
