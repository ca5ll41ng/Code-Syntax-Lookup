---
id: "java-en-function-cannotproceedexception-getenvironment"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.getEnvironment"
signature: "public Hashtable<?,?> getEnvironment()"
title: "CannotProceedException.getEnvironment"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.getEnvironment

```java
public Hashtable<?,?> getEnvironment()
```

Retrieves the environment that was in effect when this exception
 was created.

**返回**

- Possibly null environment property set. null means no environment was recorded for this exception.

**参见**

- #setEnvironment
