---
id: "java-en-function-resolver-resolvetoclass"
language: "java"
lang: "en"
category: "function"
name: "Resolver.resolveToClass"
signature: "public ResolveResult resolveToClass(Name name, Class<? extends Context> contextType) throws NamingException"
title: "Resolver.resolveToClass"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/Resolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Resolver.resolveToClass

```java
public ResolveResult resolveToClass(Name name, Class<? extends Context> contextType) throws NamingException
```

Partially resolves a name.  Stops at the first
 context that is an instance of a given subtype of
 Context.

**参数**

- **name** — the name to resolve
- **contextType** — the type of object to resolve.  This should be a subtype of Context.

**返回**

- the object that was found, along with the unresolved suffix of name.  Cannot be null.

**异常**

- **javax.naming.NotContextException** — if no context of the appropriate type is found
- **NamingException** — if a naming exception was encountered

**参见**

- #resolveToClass(String, Class)
