---
id: "java-en-function-urlclassloader-close"
language: "java"
lang: "en"
category: "function"
name: "URLClassLoader.close"
signature: "public void close() throws IOException"
title: "URLClassLoader.close"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URLClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URLClassLoader.close

```java
public void close() throws IOException
```

Closes this URLClassLoader, so that it can no longer be used to load
 new classes or resources that are defined by this loader.
 Classes and resources defined by any of this loader's parents in the
 delegation hierarchy are still accessible. Also, any classes or resources
 that are already loaded, are still accessible.
 

 In the case of jar: and file: URLs, it also closes any files
 that were opened by it. If another thread is loading a
 class when the `close` method is invoked, then the result of
 that load is undefined.
 

 The method makes a best effort attempt to close all opened files,
 by catching `IOException`s internally. Unchecked exceptions
 and errors are not caught. Calling close on an already closed
 loader has no effect.

**异常**

- **IOException** — if closing any file opened by this class loader resulted in an IOException. Any such exceptions are caught internally. If only one is caught, then it is re-thrown. If more than one exception is caught, then the second and following exceptions are added as suppressed exceptions of the first one caught, which is then re-thrown.

> *Since 1.7*
