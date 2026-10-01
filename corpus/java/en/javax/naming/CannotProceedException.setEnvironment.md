---
id: "java-en-function-cannotproceedexception-setenvironment"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.setEnvironment"
signature: "public void setEnvironment(Hashtable<?,?> environment)"
title: "CannotProceedException.setEnvironment"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.setEnvironment

```java
public void setEnvironment(Hashtable<?,?> environment)
```

Sets the environment that will be returned when getEnvironment()
 is called.

**参数**

- **environment** — A possibly null environment property set. null means no environment is being recorded for this exception.

**参见**

- #getEnvironment
