---
id: "java-en-function-cannotproceedexception-remainingnewname"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.remainingNewName"
signature: "protected Name remainingNewName = null"
title: "CannotProceedException.remainingNewName"
directive: "field"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.remainingNewName

```java
protected Name remainingNewName = null
```

Contains the remaining unresolved part of the second
 "name" argument to Context.rename().
 This information is necessary for
 continuing the Context.rename() operation.
 

 This field is initialized to null.
 It should not be manipulated directly:  it should
 be accessed and updated using getRemainingName() and setRemainingName().

**参见**

- #getRemainingNewName
- #setRemainingNewName
