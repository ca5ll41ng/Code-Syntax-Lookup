---
id: "java-en-function-objectoutputstream-defaultwriteobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.defaultWriteObject"
signature: "public void defaultWriteObject() throws IOException"
title: "ObjectOutputStream.defaultWriteObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.defaultWriteObject

```java
public void defaultWriteObject() throws IOException
```

Write the non-static and non-transient fields of the current class to
 this stream.  This may only be called from the writeObject method of the
 class being serialized. It will throw the NotActiveException if it is
 called otherwise.

**异常**

- **IOException** — if I/O errors occur while writing to the underlying `OutputStream`
