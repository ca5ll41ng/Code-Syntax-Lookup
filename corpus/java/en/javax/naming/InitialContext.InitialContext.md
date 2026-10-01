---
id: "java-en-function-initialcontext-initialcontext"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.InitialContext"
signature: "protected InitialContext(boolean lazy) throws NamingException"
title: "InitialContext.InitialContext"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.InitialContext

```java
protected InitialContext(boolean lazy) throws NamingException
```

Constructs an initial context with the option of not
 initializing it.  This may be used by a constructor in
 a subclass when the value of the environment parameter
 is not yet known at the time the `InitialContext`
 constructor is called.  The subclass's constructor will
 call this constructor, compute the value of the environment,
 and then call `init()` before returning.

**参数**

- **lazy** — true means do not initialize the initial context; false is equivalent to calling `new InitialContext()`

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #init(Hashtable)

> *Since 1.3*
