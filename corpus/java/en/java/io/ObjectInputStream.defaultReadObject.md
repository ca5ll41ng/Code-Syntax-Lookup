---
id: "java-en-function-objectinputstream-defaultreadobject"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.defaultReadObject"
signature: "public void defaultReadObject() throws IOException, ClassNotFoundException"
title: "ObjectInputStream.defaultReadObject"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.defaultReadObject

```java
public void defaultReadObject() throws IOException, ClassNotFoundException
```

Read the non-static and non-transient fields of the current class from
 this stream.  This may only be called from the readObject method of the
 class being deserialized. It will throw the NotActiveException if it is
 called otherwise.

**异常**

- **ClassNotFoundException** — if the class of a serialized object could not be found.
- **IOException** — if an I/O error occurs.
- **NotActiveException** — if the stream is not currently reading objects.
