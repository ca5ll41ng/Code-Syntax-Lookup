---
id: "java-en-function-scanner-hasnextbigdecimal"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNextBigDecimal"
signature: "public boolean hasNextBigDecimal()"
title: "Scanner.hasNextBigDecimal"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNextBigDecimal

```java
public boolean hasNextBigDecimal()
```

Returns true if the next token in this scanner's input can be
 interpreted as a `BigDecimal` using the
 `nextBigDecimal` method. The scanner does not advance past any
 input.

**返回**

- true if and only if this scanner's next token is a valid `BigDecimal`

**异常**

- **IllegalStateException** — if this scanner is closed
