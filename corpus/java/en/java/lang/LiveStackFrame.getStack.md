---
id: "java-en-function-livestackframe-getstack"
language: "java"
lang: "en"
category: "function"
name: "LiveStackFrame.getStack"
signature: "public Object[] getStack()"
title: "LiveStackFrame.getStack"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LiveStackFrame.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LiveStackFrame.getStack

```java
public Object[] getStack()
```

Gets the operand stack of this stack frame.

 

 The 0-th element of the returned array represents the top of the operand stack.
 This method returns an empty array if the operand stack is empty.

 

Each entry on the operand stack can hold a value of any Java Virtual
 Machine Type.
 For a value of primitive type, the element in the returned array is
 a `PrimitiveSlot` object; otherwise, the element is the `Object`
 on the operand stack.

**返回**

- the operand stack of this stack frame.
