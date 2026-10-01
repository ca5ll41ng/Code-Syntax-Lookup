---
id: "java-en-function-initialdircontext-initialdircontext"
language: "java"
lang: "en"
category: "function"
name: "InitialDirContext.InitialDirContext"
signature: "protected InitialDirContext(boolean lazy) throws NamingException"
title: "InitialDirContext.InitialDirContext"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/InitialDirContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialDirContext.InitialDirContext

```java
protected InitialDirContext(boolean lazy) throws NamingException
```

Constructs an initial DirContext with the option of not
 initializing it.  This may be used by a constructor in
 a subclass when the value of the environment parameter
 is not yet known at the time the `InitialDirContext`
 constructor is called.  The subclass's constructor will
 call this constructor, compute the value of the environment,
 and then call `init()` before returning.

**参数**

- **lazy** — true means do not initialize the initial DirContext; false is equivalent to calling `new InitialDirContext()`

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- InitialContext#init(Hashtable)

> *Since 1.3*
