---
id: "java-en-function-moduleresolutionattribute-resolutionflags"
language: "java"
lang: "en"
category: "function"
name: "ModuleResolutionAttribute.resolutionFlags"
signature: "int resolutionFlags()"
title: "ModuleResolutionAttribute.resolutionFlags"
directive: "method"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleResolutionAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleResolutionAttribute.resolutionFlags

```java
int resolutionFlags()
```

{@return the module resolution flags}  It is a `#u2 u2` value.
 

 The value of the resolution_flags item is a mask of flags used to denote
 properties of module resolution. The flags are as follows:
 
```
 `// Optional
   0x0001 (DO_NOT_RESOLVE_BY_DEFAULT)

   // At most one of:
   0x0002 (WARN_DEPRECATED)
   0x0004 (WARN_DEPRECATED_FOR_REMOVAL)
   0x0008 (WARN_INCUBATING)
  ` 
```
