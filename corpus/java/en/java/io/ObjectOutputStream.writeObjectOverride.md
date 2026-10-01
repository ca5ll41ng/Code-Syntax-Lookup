---
id: "java-en-function-objectoutputstream-writeobjectoverride"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeObjectOverride"
signature: "protected void writeObjectOverride(Object obj) throws IOException"
title: "ObjectOutputStream.writeObjectOverride"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeObjectOverride

```java
protected void writeObjectOverride(Object obj) throws IOException
```

Method used by subclasses to override the default writeObject method.
 This method is called by trusted subclasses of ObjectOutputStream that
 constructed ObjectOutputStream using the protected no-arg constructor.
 The subclass is expected to provide an override method with the modifier
 "final".

**参数**

- **obj** — object to be written to the underlying stream

**异常**

- **IOException** — if there are I/O errors while writing to the underlying stream

**参见**

- #ObjectOutputStream()
- #writeObject(Object)

> *Since 1.2*
