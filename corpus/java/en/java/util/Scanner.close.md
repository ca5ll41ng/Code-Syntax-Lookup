---
id: "java-en-function-scanner-close"
language: "java"
lang: "en"
category: "function"
name: "Scanner.close"
signature: "public void close()"
title: "Scanner.close"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Scanner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Scanner.close

```java
public void close()
```

Closes this scanner.

 

 If this scanner has not yet been closed then if its underlying
 `java.lang.Readable readable` also implements the `java.io.Closeable` interface then the readable's `close` method
 will be invoked.  If this scanner is already closed then invoking this
 method will have no effect.

 

Attempting to perform search operations after a scanner has
 been closed will result in an `IllegalStateException`.
