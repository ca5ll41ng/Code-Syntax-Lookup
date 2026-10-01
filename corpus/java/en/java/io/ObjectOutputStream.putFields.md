---
id: "java-en-function-objectoutputstream-putfields"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.putFields"
signature: "public ObjectOutputStream.PutField putFields() throws IOException"
title: "ObjectOutputStream.putFields"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.putFields

```java
public ObjectOutputStream.PutField putFields() throws IOException
```

Retrieve the object used to buffer persistent fields to be written to
 the stream.  The fields will be written to the stream when writeFields
 method is called.

**返回**

- an instance of the class Putfield that holds the serializable fields

**异常**

- **IOException** — if I/O errors occur

> *Since 1.2*
