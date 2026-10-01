---
id: "java-en-function-moduleattribute-uses"
language: "java"
lang: "en"
category: "function"
name: "ModuleAttribute.uses"
signature: "List<ClassEntry> uses()"
title: "ModuleAttribute.uses"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleAttribute.uses

```java
List<ClassEntry> uses()
```

{@return the services used by this module}  Services may be discovered via
 `ServiceLoader`.

**参见**

- ModuleDescriptor#uses()
