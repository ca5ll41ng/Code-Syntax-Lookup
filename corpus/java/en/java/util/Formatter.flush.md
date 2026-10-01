---
id: "java-en-function-formatter-flush"
language: "java"
lang: "en"
category: "function"
name: "Formatter.flush"
signature: "public void flush()"
title: "Formatter.flush"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.flush

```java
public void flush()
```

Flushes this formatter.  If the destination implements the `java.io.Flushable` interface, its `flush` method will be invoked.

 

 Flushing a formatter writes any buffered output in the destination
 to the underlying stream.

**异常**

- **FormatterClosedException** — If this formatter has been closed by invoking its `close` method
