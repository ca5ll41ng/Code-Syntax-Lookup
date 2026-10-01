---
id: "java-en-function-builder-setflags"
language: "java"
lang: "en"
category: "function"
name: "Builder.setFlags"
signature: "public Builder setFlags(Set<AclEntryFlag> flags)"
title: "Builder.setFlags"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setFlags

```java
public Builder setFlags(Set<AclEntryFlag> flags)
```

Sets the flags component of this builder. On return, the flags
 component of this builder is a copy of the given set.

**参数**

- **flags** — the flags component

**返回**

- this builder

**异常**

- **ClassCastException** — if the set contains elements that are not of type `AclEntryFlag`
