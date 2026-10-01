---
id: "java-en-function-scanner-nextbiginteger"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextBigInteger"
signature: "public BigInteger nextBigInteger()"
title: "Scanner.nextBigInteger"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextBigInteger

```java
public BigInteger nextBigInteger()
```

Scans the next token of the input as a `java.math.BigInteger
 BigInteger`.

 

 An invocation of this method of the form
 `nextBigInteger()` behaves in exactly the same way as the
 invocation `nextBigInteger(radix)`, where `radix`
 is the default radix of this scanner.

**返回**

- the `BigInteger` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Integer regular expression, or is out of range
- **NoSuchElementException** — if the input is exhausted
- **IllegalStateException** — if this scanner is closed
