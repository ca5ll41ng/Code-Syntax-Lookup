---
id: "java-en-function-formatter-close"
language: "java"
lang: "en"
category: "function"
name: "Formatter.close"
signature: "public void close()"
title: "Formatter.close"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.close

```java
public void close()
```

Closes this formatter.  If the destination implements the `java.io.Closeable` interface, its `close` method will be invoked.

 

 Closing a formatter allows it to release resources it may be holding
 (such as open files).  If the formatter is already closed, then invoking
 this method has no effect.

 

 Attempting to invoke any methods except `ioException` in
 this formatter after it has been closed will result in a `FormatterClosedException`.
