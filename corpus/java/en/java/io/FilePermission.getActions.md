---
id: "java-en-function-filepermission-getactions"
language: "java"
lang: "en"
category: "function"
name: "FilePermission.getActions"
signature: "public String getActions()"
title: "FilePermission.getActions"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FilePermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FilePermission.getActions

```java
public String getActions()
```

Returns the "canonical string representation" of the actions.
 That is, this method always returns present actions in the following order:
 read, write, execute, delete, readlink. For example, if this FilePermission
 object allows both write and read actions, a call to `getActions`
 will return the string "read,write".

**返回**

- the canonical string representation of the actions.
