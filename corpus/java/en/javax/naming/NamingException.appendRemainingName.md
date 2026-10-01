---
id: "java-en-function-namingexception-appendremainingname"
language: "java"
lang: "en"
category: "function"
name: "NamingException.appendRemainingName"
signature: "public void appendRemainingName(Name name)"
title: "NamingException.appendRemainingName"
directive: "method"
module: "java.naming/javax.naming"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/NamingException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# NamingException.appendRemainingName

```java
public void appendRemainingName(Name name)
```

Add components from 'name' as the last components in
 remaining name.

 `name` is a composite name. If the intent is to append
 a compound name, you should "stringify" the compound name
 then invoke the overloaded form that accepts a String parameter.

 Subsequent changes to `name` do not
 affect the remaining name field in this NamingException and vice versa.

**参数**

- **name** — The possibly null name containing ordered components to add. If name is null, this method does not do anything.

**参见**

- #setRemainingName
- #getRemainingName
- #appendRemainingComponent
