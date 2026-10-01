---
id: "java-en-function-inflater-end"
language: "java"
lang: "en"
category: "function"
name: "Inflater.end"
signature: "public void end()"
title: "Inflater.end"
directive: "method"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/Inflater.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Inflater.end

```java
public void end()
```

Closes and releases the resources held by this `Inflater`
 and discards any unprocessed input.
 

 If the `Inflater` is already closed then invoking this method has no effect.

 acquired by the subclass.

**参见**

- #close()
