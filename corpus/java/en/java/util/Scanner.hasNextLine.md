---
id: "java-en-function-scanner-hasnextline"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNextLine"
signature: "public boolean hasNextLine()"
title: "Scanner.hasNextLine"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNextLine

```java
public boolean hasNextLine()
```

Returns true if there is another line in the input of this scanner.
 This method may block while waiting for input. The scanner does not
 advance past any input.

**返回**

- true if there is a line separator in the remaining input or if the input has other remaining characters

**异常**

- **IllegalStateException** — if this scanner is closed
