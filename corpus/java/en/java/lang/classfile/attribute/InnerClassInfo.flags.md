---
id: "java-en-function-innerclassinfo-flags"
language: "java"
lang: "en"
category: "function"
name: "InnerClassInfo.flags"
signature: "default Set<AccessFlag> flags()"
title: "InnerClassInfo.flags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/InnerClassInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InnerClassInfo.flags

```java
default Set<AccessFlag> flags()
```

{@return a set of flag enums denoting access permissions and properties
 of the nested class}

**异常**

- **IllegalArgumentException** — if the flags mask has any undefined bit set

**参见**

- Class#accessFlags()
- AccessFlag.Location#INNER_CLASS
