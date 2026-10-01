---
id: "java-en-function-context-addtoenvironment"
language: "java"
lang: "en"
category: "function"
name: "Context.addToEnvironment"
signature: "public Object addToEnvironment(String propName, Object propVal) throws NamingException"
title: "Context.addToEnvironment"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.addToEnvironment

```java
public Object addToEnvironment(String propName, Object propVal) throws NamingException
```

Adds a new environment property to the environment of this
 context.  If the property already exists, its value is overwritten.
 See class description for more details on environment properties.

**参数**

- **propName** — the name of the environment property to add; may not be null
- **propVal** — the value of the property to add; may not be null

**返回**

- the previous value of the property, or null if the property was not in the environment before

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #getEnvironment()
- #removeFromEnvironment(String)
