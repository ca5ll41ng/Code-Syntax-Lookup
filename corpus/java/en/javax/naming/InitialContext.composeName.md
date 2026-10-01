---
id: "java-en-function-initialcontext-composename"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.composeName"
signature: "public String composeName(String name, String prefix) throws NamingException"
title: "InitialContext.composeName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.composeName

```java
public String composeName(String name, String prefix) throws NamingException
```

Composes the name of this context with a name relative to
 this context.
 Since an initial context may never be named relative
 to any context other than itself, the value of the
 `prefix` parameter must be an empty name (`""`).
