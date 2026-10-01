---
id: "java-en-function-moduleexportinfo-exportsto"
language: "java"
lang: "en"
category: "function"
name: "ModuleExportInfo.exportsTo"
signature: "List<ModuleEntry> exportsTo()"
title: "ModuleExportInfo.exportsTo"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleExportInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleExportInfo.exportsTo

```java
List<ModuleEntry> exportsTo()
```

{@return the list of modules to which this package is exported, or empty
 if this is an unqualified export}

**参见**

- ModuleDescriptor.Exports#isQualified()
- ModuleDescriptor.Exports#targets()
