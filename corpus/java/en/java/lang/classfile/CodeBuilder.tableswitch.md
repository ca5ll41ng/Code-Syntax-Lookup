---
id: "java-en-function-codebuilder-tableswitch"
language: "java"
lang: "en"
category: "function"
name: "CodeBuilder.tableswitch"
signature: "default CodeBuilder tableswitch(int low, int high, Label defaultTarget, List<SwitchCase> cases)"
title: "CodeBuilder.tableswitch"
directive: "method"
module: "java.base/java.lang.classfile"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/CodeBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CodeBuilder.tableswitch

```java
default CodeBuilder tableswitch(int low, int high, Label defaultTarget, List<SwitchCase> cases)
```

Generates an instruction to access a jump table by index and jump.

**参数**

- **low** — the minimum key, inclusive
- **high** — the maximum key, inclusive
- **defaultTarget** — the default jump target
- **cases** — the switch cases

**返回**

- this builder

**异常**

- **IllegalArgumentException** — if the low value is greater than the high value, or if there are too many targets between the low and high values

**参见**

- Opcode#TABLESWITCH
- TableSwitchInstruction
