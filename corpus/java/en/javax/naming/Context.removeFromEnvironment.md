---
id: "java-en-function-context-removefromenvironment"
language: "java"
lang: "en"
category: "function"
name: "Context.removeFromEnvironment"
signature: "public Object removeFromEnvironment(String propName) throws NamingException"
title: "Context.removeFromEnvironment"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.removeFromEnvironment

```java
public Object removeFromEnvironment(String propName) throws NamingException
```

Removes an environment property from the environment of this
 context.  See class description for more details on environment
 properties.

**参数**

- **propName** — the name of the environment property to remove; may not be null

**返回**

- the previous value of the property, or null if the property was not in the environment

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #getEnvironment()
- #addToEnvironment(String, Object)
