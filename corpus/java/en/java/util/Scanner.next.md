---
id: "java-en-function-scanner-next"
language: "java"
lang: "en"
category: "function"
name: "Scanner.next"
signature: "public String next()"
title: "Scanner.next"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.next

```java
public String next()
```

Finds and returns the next complete token from this scanner.
 A complete token is preceded and followed by input that matches
 the delimiter pattern. This method may block while waiting for input
 to scan, even if a previous invocation of `hasNext` returned
 `true`.

**返回**

- the next token

**异常**

- **NoSuchElementException** — if no more tokens are available
- **IllegalStateException** — if this scanner is closed

**参见**

- java.util.Iterator
