---
id: "java-en-function-cannotproceedexception-getremainingnewname"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.getRemainingNewName"
signature: "public Name getRemainingNewName()"
title: "CannotProceedException.getRemainingNewName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.getRemainingNewName

```java
public Name getRemainingNewName()
```

Retrieves the "remaining new name" field of this exception, which is
 used when this exception is thrown during a rename() operation.

**返回**

- The possibly null part of the new name that has not been resolved. It is a composite name. It can be null, which means the remaining new name field has not been set.

**参见**

- #setRemainingNewName
