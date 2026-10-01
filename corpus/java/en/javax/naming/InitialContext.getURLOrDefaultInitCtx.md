---
id: "java-en-function-initialcontext-geturlordefaultinitctx"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.getURLOrDefaultInitCtx"
signature: "protected Context getURLOrDefaultInitCtx(String name) throws NamingException"
title: "InitialContext.getURLOrDefaultInitCtx"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.getURLOrDefaultInitCtx

```java
protected Context getURLOrDefaultInitCtx(String name) throws NamingException
```

Retrieves a context for resolving the string name name.
 If name name is a URL string, then attempt
 to find a URL context for it. If none is found, or if
 name is not a URL string, then return
 getDefaultInitCtx().

 See getURLOrDefaultInitCtx(Name) for description
 of how a subclass should use this method.

**参数**

- **name** — The non-null name for which to get the context.

**返回**

- A URL context for name or the cached initial context. The result cannot be null.

**异常**

- **NoInitialContextException** — If cannot find an initial context.
- **NamingException** — In a naming exception is encountered.

**参见**

- javax.naming.spi.NamingManager#getURLContext
