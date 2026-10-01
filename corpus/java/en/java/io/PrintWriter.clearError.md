---
id: "java-en-function-printwriter-clearerror"
language: "java"
lang: "en"
category: "function"
name: "PrintWriter.clearError"
signature: "protected void clearError()"
title: "PrintWriter.clearError"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintWriter.clearError

```java
protected void clearError()
```

Clears the error state of this stream.

 

 This method will cause subsequent invocations of `checkError` to return `false` until another write
 operation fails and invokes `setError`.

> *Since 1.6*
