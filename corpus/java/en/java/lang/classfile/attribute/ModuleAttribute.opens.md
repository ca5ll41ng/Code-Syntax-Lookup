---
id: "java-en-function-moduleattribute-opens"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttribute.opens"
signature: "List<ModuleOpenInfo> opens()"
title: "ModuleAttribute.opens"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttribute.opens

```java
List<ModuleOpenInfo> opens()
```

{@return the packages opened by this module}

 Opening a package to another module allows that other module to gain
 the same full privilege access as members in this module.  See `privateLookupIn` for more details.

**参见**

- ModuleDescriptor#opens()
