---
id: "java-en-function-objectinputstream-readfields"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readFields"
signature: "public ObjectInputStream.GetField readFields() throws IOException, ClassNotFoundException"
title: "ObjectInputStream.readFields"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readFields

```java
public ObjectInputStream.GetField readFields() throws IOException, ClassNotFoundException
```

Reads the persistent fields from the stream and makes them available by
 name.

**返回**

- the `GetField` object representing the persistent fields of the object being deserialized

**异常**

- **ClassNotFoundException** — if the class of a serialized object could not be found.
- **IOException** — if an I/O error occurs.
- **NotActiveException** — if the stream is not currently reading objects.

> *Since 1.2*
