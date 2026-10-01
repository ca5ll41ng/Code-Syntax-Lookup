---
id: "java-en-function-linkexception-setlinkremainingname"
language: "java"
lang: "en"
category: "function"
name: "LinkException.setLinkRemainingName"
signature: "public void setLinkRemainingName(Name name)"
title: "LinkException.setLinkRemainingName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/LinkException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkException.setLinkRemainingName

```java
public void setLinkRemainingName(Name name)
```

Sets the remaining link name field of this exception.

 `name` is a composite name. If the intent is to set
 this field using a compound name or string, you must
 "stringify" the compound name, and create a composite
 name with a single component using the string. You can then
 invoke this method using the resulting composite name.

 A copy of name is made and stored.
 Subsequent changes to name do not
 affect the copy in this NamingException and vice versa.

**参数**

- **name** — The name to set remaining link name to. This can be null. If null, it sets the remaining name field to null.

**参见**

- #getLinkRemainingName
