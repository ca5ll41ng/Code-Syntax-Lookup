---
id: "java-en-function-invokeinstruction-count"
language: "java"
lang: "en"
category: "function"
name: "InvokeInstruction.count"
signature: "int count()"
title: "InvokeInstruction.count"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/InvokeInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InvokeInstruction.count

```java
int count()
```

{@return the `count` value of an `invokeinterface` instruction,
 or `0` for other instructions}
 

 For an `invokeinterface` instruction, this value must be equivalent
 to the sum of `slotSize() slot sizes` of all arguments
 plus one, which is equal to the number of operand stack depth consumed by
 this interface method invocation instruction.
