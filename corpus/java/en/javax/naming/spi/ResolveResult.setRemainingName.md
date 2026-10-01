---
id: "java-en-function-resolveresult-setremainingname"
language: "java"
lang: "en"
category: "function"
name: "ResolveResult.setRemainingName"
signature: "public void setRemainingName(Name name)"
title: "ResolveResult.setRemainingName"
directive: "method"
module: "java.naming/javax.naming.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/spi/ResolveResult.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResolveResult.setRemainingName

```java
public void setRemainingName(Name name)
```

Sets the remaining name field of this result to name.
 A copy of name is made so that modifying the copy within
 this ResolveResult does not affect name and
 vice versa.

**参数**

- **name** — The name to set remaining name to. Cannot be null.

**参见**

- #getRemainingName
- #appendRemainingName
- #appendRemainingComponent
