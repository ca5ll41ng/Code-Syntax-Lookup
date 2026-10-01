---
id: "java-en-function-scanner-nextbigdecimal"
language: "java"
lang: "en"
category: "function"
name: "Scanner.nextBigDecimal"
signature: "public BigDecimal nextBigDecimal()"
title: "Scanner.nextBigDecimal"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.nextBigDecimal

```java
public BigDecimal nextBigDecimal()
```

Scans the next token of the input as a `java.math.BigDecimal
 BigDecimal`.

 

 If the next token matches the Decimal regular expression defined
 above then the token is converted into a `BigDecimal` value as if
 by removing all group separators, mapping non-ASCII digits into ASCII
 digits via the `digit Character.digit`, and passing the
 resulting string to the `BigDecimal`
 constructor.

**返回**

- the `BigDecimal` scanned from the input

**异常**

- **InputMismatchException** — if the next token does not match the Decimal regular expression, or is out of range
- **NoSuchElementException** — if the input is exhausted
- **IllegalStateException** — if this scanner is closed
