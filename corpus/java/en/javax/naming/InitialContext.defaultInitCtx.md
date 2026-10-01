---
id: "java-en-function-initialcontext-defaultinitctx"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.defaultInitCtx"
signature: "protected Context defaultInitCtx = null"
title: "InitialContext.defaultInitCtx"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.defaultInitCtx

```java
protected Context defaultInitCtx = null
```

Field holding the result of calling NamingManager.getInitialContext().
 It is set by getDefaultInitCtx() the first time getDefaultInitCtx()
 is called. Subsequent invocations of getDefaultInitCtx() return
 the value of defaultInitCtx.

**参见**

- #getDefaultInitCtx
