---
id: "java-en-function-scanner-nextbyte"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextByte"
signature: "public byte nextByte()"
title: "Scanner.nextByte"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextByte

```java
public byte nextByte()
```

Scans the next token of the input as a `byte`.

 

 An invocation of this method of the form
 `nextByte()` behaves in exactly the same way as the
 invocation `nextByte(radix)`, where `radix`
 is the default radix of this scanner.

**返回**

- the `byte` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Integer regular expression, or is out of range
- **NoSuchElementException** — if input is exhausted
- **IllegalStateException** — if this scanner is closed
