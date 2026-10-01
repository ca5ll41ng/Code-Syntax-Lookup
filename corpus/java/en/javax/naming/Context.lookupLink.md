---
id: "java-en-function-context-lookuplink"
language: "java"
lang: "en"
category: "function"
name: "Context.lookupLink"
signature: "public Object lookupLink(Name name) throws NamingException"
title: "Context.lookupLink"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.lookupLink

```java
public Object lookupLink(Name name) throws NamingException
```

Retrieves the named object, following links except
 for the terminal atomic component of the name.
 If the object bound to `name` is not a link,
 returns the object itself.

**参数**

- **name** — the name of the object to look up

**返回**

- the object bound to `name`, not following the terminal link (if any).

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #lookupLink(String)
