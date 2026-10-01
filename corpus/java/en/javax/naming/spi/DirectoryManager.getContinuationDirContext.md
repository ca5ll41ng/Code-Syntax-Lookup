---
id: "java-en-function-directorymanager-getcontinuationdircontext"
language: "java"
lang: "en"
category: "function"
name: "DirectoryManager.getContinuationDirContext"
signature: "public static DirContext getContinuationDirContext( CannotProceedException cpe) throws NamingException"
title: "DirectoryManager.getContinuationDirContext"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/DirectoryManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DirectoryManager.getContinuationDirContext

```java
public static DirContext getContinuationDirContext( CannotProceedException cpe) throws NamingException
```

Creates a context in which to continue a `DirContext` operation.
 Operates just like `NamingManager.getContinuationContext()`,
 only the continuation context returned is a `DirContext`.

**参数**

- **cpe** — The non-null exception that triggered this continuation.

**返回**

- A non-null `DirContext` object for continuing the operation.

**异常**

- **NamingException** — If a naming exception occurred.

**参见**

- NamingManager#getContinuationContext(CannotProceedException)
