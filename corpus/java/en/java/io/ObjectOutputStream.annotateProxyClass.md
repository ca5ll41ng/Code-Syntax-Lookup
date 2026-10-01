---
id: "java-en-function-objectoutputstream-annotateproxyclass"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.annotateProxyClass"
signature: "protected void annotateProxyClass(Class<?> cl) throws IOException"
title: "ObjectOutputStream.annotateProxyClass"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.annotateProxyClass

```java
protected void annotateProxyClass(Class<?> cl) throws IOException
```

Subclasses may implement this method to store custom data in the stream
 along with descriptors for dynamic proxy classes.

 

This method is called exactly once for each unique proxy class
 descriptor in the stream.  The default implementation of this method in
 `ObjectOutputStream` does nothing.

 

The corresponding method in `ObjectInputStream` is
 `resolveProxyClass`.  For a given subclass of
 `ObjectOutputStream` that overrides this method, the
 `resolveProxyClass` method in the corresponding subclass of
 `ObjectInputStream` must read any data or objects written by
 `annotateProxyClass`.

**参数**

- **cl** — the proxy class to annotate custom data for

**异常**

- **IOException** — any exception thrown by the underlying `OutputStream`

**参见**

- ObjectInputStream#resolveProxyClass(String[])

> *Since 1.3*
