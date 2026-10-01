---
id: "java-en-function-java-lang-classfile-attribute-moduleresolutionattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ModuleResolutionAttribute"
title: "ModuleResolutionAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleResolutionAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleResolutionAttribute

Models the `moduleResolution() ModuleResolution` attribute,
 which can appear on classes that `isModuleInfo()
 represent` module descriptors, to capture resolution metadata for modules.
 

 The specification of the `ModuleResolution` attribute is:
 
```
 `ModuleResolution_attribute {
    u2 attribute_name_index;    // "ModuleResolution"
    u4 attribute_length;        // 2
    u2 resolution_flags;

  The value of the resolution_flags item is a mask of flags used to denote
  properties of module resolution. The flags are as follows:

   // Optional
   0x0001 (DO_NOT_RESOLVE_BY_DEFAULT)

   // At most one of:
   0x0002 (WARN_DEPRECATED)
   0x0004 (WARN_DEPRECATED_FOR_REMOVAL)
   0x0008 (WARN_INCUBATING)
  `
 } 
```

 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has
 `STATELESS no data dependency`.
 

 This attribute is not predefined in the Java SE Platform.  This is a
 JDK-specific nonstandard attribute produced by the `jdk.jlink` module,
 which defines the `jlink` and `jmod` tools.

**参见**

- Attributes#moduleResolution()
- ModuleHashesAttribute
- ModuleTargetAttribute

> *Since 24*
