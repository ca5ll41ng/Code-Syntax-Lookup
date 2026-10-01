---
id: "java-en-function-cannotproceedexception-setremainingnewname"
language: "java"
lang: "en"
category: "function"
name: "CannotProceedException.setRemainingNewName"
signature: "public void setRemainingNewName(Name newName)"
title: "CannotProceedException.setRemainingNewName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/CannotProceedException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CannotProceedException.setRemainingNewName

```java
public void setRemainingNewName(Name newName)
```

Sets the "remaining new name" field of this exception.
 This is the value returned by `getRemainingNewName()`.

 `newName` is a composite name. If the intent is to set
 this field using a compound name or string, you must
 "stringify" the compound name, and create a composite
 name with a single component using the string. You can then
 invoke this method using the resulting composite name.

 A copy of `newName` is made and stored.
 Subsequent changes to `name` does not
 affect the copy in this NamingException and vice versa.

**参数**

- **newName** — The possibly null name to set the "remaining new name" to. If null, it sets the remaining name field to null.

**参见**

- #getRemainingNewName
