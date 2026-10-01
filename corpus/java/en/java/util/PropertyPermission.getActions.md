---
id: "java-en-function-propertypermission-getactions"
language: "java"
lang: "en"
category: "function"
name: "PropertyPermission.getActions"
signature: "public String getActions()"
title: "PropertyPermission.getActions"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyPermission.getActions

```java
public String getActions()
```

Returns the "canonical string representation" of the actions.
 That is, this method always returns present actions in the following order:
 read, write. For example, if this PropertyPermission object
 allows both write and read actions, a call to `getActions`
 will return the string "read,write".

**返回**

- the canonical string representation of the actions.
