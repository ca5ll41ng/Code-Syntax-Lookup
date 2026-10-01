---
id: "java-en-function-scanner-nextlong"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextLong"
signature: "public long nextLong()"
title: "Scanner.nextLong"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextLong

```java
public long nextLong()
```

Scans the next token of the input as a `long`.

 

 An invocation of this method of the form
 `nextLong()` behaves in exactly the same way as the
 invocation `nextLong(radix)`, where `radix`
 is the default radix of this scanner.

**返回**

- the `long` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Integer regular expression, or is out of range
- **NoSuchElementException** — if input is exhausted
- **IllegalStateException** — if this scanner is closed
