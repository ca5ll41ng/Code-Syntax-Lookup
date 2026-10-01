---
id: "java-en-function-objectoutput-writeobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutput.writeObject"
signature: "public void writeObject(Object obj) throws IOException"
title: "ObjectOutput.writeObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutput.writeObject

```java
public void writeObject(Object obj) throws IOException
```

Write an object to the underlying storage or stream.  The
 class that implements this interface defines how the object is
 written.

**参数**

- **obj** — the object to be written

**异常**

- **IOException** — Any of the usual Input/Output related exceptions.
