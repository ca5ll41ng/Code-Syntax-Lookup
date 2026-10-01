---
id: "java-en-function-java-lang-classfile-attribute-moduletargetattribute"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.ModuleTargetAttribute"
title: "ModuleTargetAttribute"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/ModuleTargetAttribute.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ModuleTargetAttribute

Models the `moduleTarget() ModuleTarget` attribute, which
 can appear on classes that `isModuleInfo() represent`
 module descriptors, to represent constraints on the target platform.
 

 The specification of the `ModuleTarget` attribute is:
 
```
 `TargetPlatform_attribute {
   // index to CONSTANT_utf8_info structure in constant pool representing
   // the string "ModuleTarget"
   u2 attribute_name_index;
   u4 attribute_length;

   // index to CONSTANT_utf8_info structure with the target platform
   u2 target_platform_index;
 `
 } 
```

 

 This attribute only appears on classes, and does not permit `allowMultiple multiple instances` in a class.  It has a
 data dependency on the `CP_REFS constant pool`.
 

 This attribute is not predefined in the Java SE Platform.  This is a
 JDK-specific nonstandard attribute produced by the `jdk.jlink` module,
 which defines the `jlink` and `jmod` tools.

**参见**

- Attributes#moduleTarget()
- ModuleHashesAttribute
- ModuleResolutionAttribute

> *Since 24*
