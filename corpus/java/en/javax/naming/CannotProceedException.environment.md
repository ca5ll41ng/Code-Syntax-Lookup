---
id: "java-en-function-cannotproceedexception-environment"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.environment"
signature: "protected Hashtable<?,?> environment = null"
title: "CannotProceedException.environment"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.environment

```java
protected Hashtable<?,?> environment = null
```

Contains the environment
 relevant for the Context or DirContext method that cannot proceed.
 

 This field is initialized to null.
 It should not be manipulated directly:  it should be accessed
 and updated using getEnvironment() and setEnvironment().

**参见**

- #getEnvironment
- #setEnvironment
