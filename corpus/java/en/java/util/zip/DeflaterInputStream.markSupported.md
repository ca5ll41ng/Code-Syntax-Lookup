---
id: "java-en-function-deflaterinputstream-marksupported"
language: "java"
lang: "en"
category: "function"
name: "DeflaterInputStream.markSupported"
signature: "public boolean markSupported()"
title: "DeflaterInputStream.markSupported"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/DeflaterInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DeflaterInputStream.markSupported

```java
public boolean markSupported()
```

Always returns `false` because this input stream does not support
 the `mark mark` and `reset reset` methods.

**返回**

- false, always
