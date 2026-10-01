---
id: "java-en-function-namingexception-setresolvedname"
language: "java"
lang: "en"
category: "function"
name: "NamingException.setResolvedName"
signature: "public void setResolvedName(Name name)"
title: "NamingException.setResolvedName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.setResolvedName

```java
public void setResolvedName(Name name)
```

Sets the resolved name field of this exception.

 `name` is a composite name. If the intent is to set
 this field using a compound name or string, you must
 "stringify" the compound name, and create a composite
 name with a single component using the string. You can then
 invoke this method using the resulting composite name.

 A copy of `name` is made and stored.
 Subsequent changes to `name` do not
 affect the copy in this NamingException and vice versa.

**参数**

- **name** — The possibly null name to set resolved name to. If null, it sets the resolved name field to null.

**参见**

- #getResolvedName
