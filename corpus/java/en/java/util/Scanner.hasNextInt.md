---
id: "java-en-function-scanner-hasnextint"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNextInt"
signature: "public boolean hasNextInt()"
title: "Scanner.hasNextInt"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNextInt

```java
public boolean hasNextInt()
```

Returns true if the next token in this scanner's input can be
 interpreted as an int value in the default radix using the
 `nextInt` method. The scanner does not advance past any input.

**返回**

- true if and only if this scanner's next token is a valid int value

**异常**

- **IllegalStateException** — if this scanner is closed
