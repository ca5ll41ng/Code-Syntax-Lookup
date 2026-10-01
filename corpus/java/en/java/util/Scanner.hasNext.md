---
id: "java-en-function-scanner-hasnext"
language: "java"
lang: "en"
category: "function"
name: "Scanner.hasNext"
signature: "public boolean hasNext()"
title: "Scanner.hasNext"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.hasNext

```java
public boolean hasNext()
```

Returns true if this scanner has another token in its input.
 This method may block while waiting for input to scan.
 The scanner does not advance past any input.

**返回**

- true if and only if this scanner has another token

**异常**

- **IllegalStateException** — if this scanner is closed

**参见**

- java.util.Iterator
