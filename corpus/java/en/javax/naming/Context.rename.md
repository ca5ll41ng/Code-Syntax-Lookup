---
id: "java-en-function-context-rename"
language: "java"
lang: "en"
category: "function"
name: "Context.rename"
signature: "public void rename(Name oldName, Name newName) throws NamingException"
title: "Context.rename"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.rename

```java
public void rename(Name oldName, Name newName) throws NamingException
```

Binds a new name to the object bound to an old name, and unbinds
 the old name.  Both names are relative to this context.
 Any attributes associated with the old name become associated
 with the new name.
 Intermediate contexts of the old name are not changed.

**参数**

- **oldName** — the name of the existing binding; may not be empty
- **newName** — the name of the new binding; may not be empty

**异常**

- **NameAlreadyBoundException** — if `newName` is already bound
- **NamingException** — if a naming exception is encountered

**参见**

- #rename(String, String)
- #bind(Name, Object)
- #rebind(Name, Object)
