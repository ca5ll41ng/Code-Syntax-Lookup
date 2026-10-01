---
id: "java-en-function-initialcontext-getdefaultinitctx"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.getDefaultInitCtx"
signature: "protected Context getDefaultInitCtx() throws NamingException"
title: "InitialContext.getDefaultInitCtx"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.getDefaultInitCtx

```java
protected Context getDefaultInitCtx() throws NamingException
```

Retrieves the initial context by calling
 NamingManager.getInitialContext()
 and cache it in defaultInitCtx.
 Set gotDefault so that we know we've tried this before.

**返回**

- The non-null cached initial context.

**异常**

- **NoInitialContextException** — If cannot find an initial context.
- **NamingException** — If a naming exception was encountered.
