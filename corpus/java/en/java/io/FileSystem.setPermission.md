---
id: "java-en-function-filesystem-setpermission"
language: "java"
lang: "en"
category: "function"
name: "FileSystem.setPermission"
signature: "public abstract boolean setPermission(File f, int access, boolean enable, boolean owneronly)"
title: "FileSystem.setPermission"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileSystem.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileSystem.setPermission

```java
public abstract boolean setPermission(File f, int access, boolean enable, boolean owneronly)
```

Set on or off the access permission (to owner only or to all) to the file
 or directory denoted by the given abstract pathname, based on the parameters
 enable, access and oweronly.
