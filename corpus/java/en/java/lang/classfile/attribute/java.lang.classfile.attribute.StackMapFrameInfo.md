---
id: "java-en-function-java-lang-classfile-attribute-stackmapframeinfo"
language: "java"
lang: "en"
category: "function"
name: "java.lang.classfile.attribute.StackMapFrameInfo"
title: "StackMapFrameInfo"
directive: "type"
module: "java.base/java.lang.classfile.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/attribute/StackMapFrameInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StackMapFrameInfo

Models a stack map frame in a `StackMapTableAttribute StackMapTable`
 attribute (JVMS {@jvms 4.7.4}).  A stack map frame must appear at the
 beginning of each basic block in a method (JVMS {@jvms 4.10.1}).

 In general, a stack map frame should be defined for each target of a
 `BranchInstruction`, or unreachable code right after an unconditional
 branch instruction like `GOTO goto`.  The automatic stack map
 generation cannot handle unreachable code right after an unconditional jump;
 The `ClassFile.DeadCodeOption` allows substituting such code, or
 advanced users can provide their own stack maps for dead code.

**参见**

- StackMapTableAttribute#entries()

> *Since 24*
