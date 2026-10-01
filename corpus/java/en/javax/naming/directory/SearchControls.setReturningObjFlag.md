---
id: "java-en-function-searchcontrols-setreturningobjflag"
language: "java"
lang: "en"
category: "function"
name: "SearchControls.setReturningObjFlag"
signature: "public void setReturningObjFlag(boolean on)"
title: "SearchControls.setReturningObjFlag"
directive: "method"
module: "java.naming/javax.naming.directory"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/directory/SearchControls.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SearchControls.setReturningObjFlag

```java
public void setReturningObjFlag(boolean on)
```

Enables/disables returning objects returned as part of the result.

 If disabled, only the name and class of the object is returned.
 If enabled, the object will be returned.

**参数**

- **on** — if true, objects will be returned; if false, objects will not be returned.

**参见**

- #getReturningObjFlag
