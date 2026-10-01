---
id: "java-en-function-codebuilder-lookupswitch"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.lookupswitch"
signature: "default CodeBuilder lookupswitch(Label defaultTarget, List<SwitchCase> cases)"
title: "CodeBuilder.lookupswitch"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.lookupswitch

```java
default CodeBuilder lookupswitch(Label defaultTarget, List<SwitchCase> cases)
```

Generates an instruction to access a jump table by key match and jump.

**参数**

- **defaultTarget** — the default jump target
- **cases** — the switch cases

**返回**

- this builder

**参见**

- Opcode#LOOKUPSWITCH
- LookupSwitchInstruction
