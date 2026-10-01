---
id: "java-en-function-fileownerattributeview-setowner"
language: "java"
lang: "en"
category: "function"
name: "FileOwnerAttributeView.setOwner"
signature: "void setOwner(UserPrincipal owner) throws IOException"
title: "FileOwnerAttributeView.setOwner"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileOwnerAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOwnerAttributeView.setOwner

```java
void setOwner(UserPrincipal owner) throws IOException
```

Updates the file owner.

 

 It is implementation specific if the file owner can be a `GroupPrincipal group`. To ensure consistent and correct behavior
 across platforms it is recommended that this method should only be used
 to set the file owner to a user principal that is not a group.

**参数**

- **owner** — the new file owner

**异常**

- **IOException** — if an I/O error occurs, or the `owner` parameter is a group and this implementation does not support setting the owner to a group
