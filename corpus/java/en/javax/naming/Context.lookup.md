---
id: "java-en-function-context-lookup"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["ldap"],"cwe":["CWE-90"],"params":[0]}
name: "Context.lookup"
signature: "public Object lookup(Name name) throws NamingException"
title: "Context.lookup"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.lookup

```java
public Object lookup(Name name) throws NamingException
```

Retrieves the named object.
 If `name` is empty, returns a new instance of this context
 (which represents the same naming context as this context, but its
 environment may be modified independently and it may be accessed
 concurrently).

**参数**

- **name** — the name of the object to look up

**返回**

- the object bound to `name`

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #lookup(String)
- #lookupLink(Name)
