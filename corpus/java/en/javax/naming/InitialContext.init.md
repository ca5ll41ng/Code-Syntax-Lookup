---
id: "java-en-function-initialcontext-init"
language: "java"
lang: "en"
category: "function"
name: "InitialContext.init"
signature: "protected void init(Hashtable<?,?> environment) throws NamingException"
title: "InitialContext.init"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/InitialContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InitialContext.init

```java
protected void init(Hashtable<?,?> environment) throws NamingException
```

Initializes the initial context using the supplied environment.
 Environment properties are discussed in the class description.

 

 This method will modify `environment` and save
 a reference to it.  The caller may no longer modify it.

**参数**

- **environment** — environment used to create the initial context. Null indicates an empty environment.

**异常**

- **NamingException** — if a naming exception is encountered

**参见**

- #InitialContext(boolean)

> *Since 1.3*
