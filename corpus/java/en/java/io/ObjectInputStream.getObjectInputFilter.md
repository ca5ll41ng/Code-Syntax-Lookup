---
id: "java-en-function-objectinputstream-getobjectinputfilter"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.getObjectInputFilter"
signature: "public final ObjectInputFilter getObjectInputFilter()"
title: "ObjectInputStream.getObjectInputFilter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.getObjectInputFilter

```java
public final ObjectInputFilter getObjectInputFilter()
```

Returns the deserialization filter for this stream.
 The filter is the result of invoking the
 `getSerialFilterFactory() JVM-wide filter factory`
 either by the `ObjectInputStream() constructor` or the most recent invocation of
 `setObjectInputFilter setObjectInputFilter`.

**返回**

- the deserialization filter for the stream; may be null

> *Since 9*
