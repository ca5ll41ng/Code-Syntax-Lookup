---
id: "java-en-function-context-unbind"
language: "java"
lang: "en"
category: "function"
name: "Context.unbind"
signature: "public void unbind(Name name) throws NamingException"
title: "Context.unbind"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.unbind

```java
public void unbind(Name name) throws NamingException
```

Unbinds the named object.
 Removes the terminal atomic name in name
 from the target context--that named by all but the terminal
 atomic part of name.

 

 This method is idempotent.
 It succeeds even if the terminal atomic name
 is not bound in the target context, but throws
 `NameNotFoundException`
 if any of the intermediate contexts do not exist.

 

 Any attributes associated with the name are removed.
 Intermediate contexts are not changed.

**参数**

- **name** — the name to unbind; may not be empty

**异常**

- **NameNotFoundException** — if an intermediate context does not exist
- **NamingException** — if a naming exception is encountered

**参见**

- #unbind(String)
