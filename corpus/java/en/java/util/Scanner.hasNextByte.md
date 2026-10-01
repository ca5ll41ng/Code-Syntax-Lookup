---
id: "java-en-function-scanner-hasnextbyte"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNextByte"
signature: "public boolean hasNextByte()"
title: "Scanner.hasNextByte"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNextByte

```java
public boolean hasNextByte()
```

Returns true if the next token in this scanner's input can be
 interpreted as a byte value in the default radix using the
 `nextByte` method. The scanner does not advance past any input.

**返回**

- true if and only if this scanner's next token is a valid byte value

**异常**

- **IllegalStateException** — if this scanner is closed
