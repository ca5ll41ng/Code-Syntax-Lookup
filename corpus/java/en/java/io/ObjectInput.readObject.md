---
id: "java-en-function-objectinput-readobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectInput.readObject"
signature: "public Object readObject() throws ClassNotFoundException, IOException"
title: "ObjectInput.readObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInput.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInput.readObject

```java
public Object readObject() throws ClassNotFoundException, IOException
```

Read and return an object. The class that implements this interface
 defines where the object is "read" from.

**返回**

- the object read from the stream

**异常**

- **java.lang.ClassNotFoundException** — If the class of a serialized object cannot be found.
- **IOException** — If any of the usual Input/Output related exceptions occur.
