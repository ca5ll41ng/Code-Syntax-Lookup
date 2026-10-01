---
id: "java-en-function-formatter-ioexception"
language: "java"
lang: "en"
category: "function"
name: "Formatter.ioException"
signature: "public IOException ioException()"
title: "Formatter.ioException"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.ioException

```java
public IOException ioException()
```

Returns the `IOException` last thrown by this formatter's `Appendable`.

 

 If the destination's `append()` method never throws
 `IOException`, then this method will always return `null`.

**返回**

- The last exception thrown by the Appendable or `null` if no such exception exists.
