---
id: "java-en-function-context-close"
language: "java"
lang: "en"
category: "function"
name: "Context.close"
signature: "public void close() throws NamingException"
title: "Context.close"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/Context.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Context.close

```java
public void close() throws NamingException
```

Closes this context.
 This method releases this context's resources immediately, instead of
 waiting for them to be released automatically by the garbage collector.

 

 This method is idempotent:  invoking it on a context that has
 already been closed has no effect.  Invoking any other method
 on a closed context is not allowed, and results in undefined behaviour.

**异常**

- **NamingException** — if a naming exception is encountered
