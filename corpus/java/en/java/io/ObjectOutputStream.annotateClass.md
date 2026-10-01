---
id: "java-en-function-objectoutputstream-annotateclass"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.annotateClass"
signature: "protected void annotateClass(Class<?> cl) throws IOException"
title: "ObjectOutputStream.annotateClass"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.annotateClass

```java
protected void annotateClass(Class<?> cl) throws IOException
```

Subclasses may implement this method to allow class data to be stored in
 the stream. By default this method does nothing.  The corresponding
 method in ObjectInputStream is resolveClass.  This method is called
 exactly once for each unique class in the stream.  The class name and
 signature will have already been written to the stream.  This method may
 make free use of the ObjectOutputStream to save any representation of
 the class it deems suitable (for example, the bytes of the class file).
 The resolveClass method in the corresponding subclass of
 ObjectInputStream must read and use any data or objects written by
 annotateClass.

**参数**

- **cl** — the class to annotate custom data for

**异常**

- **IOException** — Any exception thrown by the underlying OutputStream.
