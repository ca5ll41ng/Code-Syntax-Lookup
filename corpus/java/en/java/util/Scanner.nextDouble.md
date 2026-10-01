---
id: "java-en-function-scanner-nextdouble"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextDouble"
signature: "public double nextDouble()"
title: "Scanner.nextDouble"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextDouble

```java
public double nextDouble()
```

Scans the next token of the input as a `double`.
 This method will throw `InputMismatchException`
 if the next token cannot be translated into a valid double value.
 If the translation is successful, the scanner advances past the input
 that matched.

 

 If the next token matches the Float regular expression defined above
 then the token is converted into a `double` value as if by
 removing all locale specific prefixes, group separators, and locale
 specific suffixes, then mapping non-ASCII digits into ASCII
 digits via `digit Character.digit`, prepending a
 negative sign (-) if the locale specific negative prefixes and suffixes
 were present, and passing the resulting string to
 `parseDouble Double.parseDouble`. If the token matches
 the localized NaN or infinity strings, then either "Nan" or "Infinity"
 is passed to `parseDouble(String) Double.parseDouble` as
 appropriate.

**返回**

- the `double` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Float regular expression, or is out of range
- **NoSuchElementException** — if the input is exhausted
- **IllegalStateException** — if this scanner is closed
