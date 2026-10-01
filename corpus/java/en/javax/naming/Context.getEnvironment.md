---
id: "java-en-function-context-getenvironment"
language: "java"
lang: "en"
category: "function"
name: "Context.getEnvironment"
signature: "public Hashtable<?,?> getEnvironment() throws NamingException"
title: "Context.getEnvironment"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.getEnvironment

```java
public Hashtable<?,?> getEnvironment() throws NamingException
```

Retrieves the environment in effect for this context.
 See class description for more details on environment properties.

 

 The caller should not make any changes to the object returned:
 their effect on the context is undefined.
 The environment of this context may be changed using
 `addToEnvironment()` and `removeFromEnvironment()`.

**返回**

- the environment of this context; never null

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #addToEnvironment(String, Object)
- #removeFromEnvironment(String)
