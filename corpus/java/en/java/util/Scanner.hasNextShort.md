---
id: "java-en-function-scanner-hasnextshort"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNextShort"
signature: "public boolean hasNextShort()"
title: "Scanner.hasNextShort"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNextShort

```java
public boolean hasNextShort()
```

Returns true if the next token in this scanner's input can be
 interpreted as a short value in the default radix using the
 `nextShort` method. The scanner does not advance past any input.

**返回**

- true if and only if this scanner's next token is a valid short value in the default radix

**异常**

- **IllegalStateException** — if this scanner is closed
