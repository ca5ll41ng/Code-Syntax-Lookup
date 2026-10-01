---
id: "java-en-function-scanner-nextshort"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextShort"
signature: "public short nextShort()"
title: "Scanner.nextShort"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextShort

```java
public short nextShort()
```

Scans the next token of the input as a `short`.

 

 An invocation of this method of the form
 `nextShort()` behaves in exactly the same way as the
 invocation `nextShort`, where `radix`
 is the default radix of this scanner.

**返回**

- the `short` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Integer regular expression, or is out of range
- **NoSuchElementException** — if input is exhausted
- **IllegalStateException** — if this scanner is closed
