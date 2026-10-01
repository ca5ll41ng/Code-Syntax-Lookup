---
id: "java-en-function-tableswitchinstruction-of"
language: "java"
lang: "en"
category: "function"
name: "TableSwitchInstruction.of"
signature: "static TableSwitchInstruction of(int lowValue, int highValue, Label defaultTarget, List<SwitchCase> cases)"
title: "TableSwitchInstruction.of"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/TableSwitchInstruction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TableSwitchInstruction.of

```java
static TableSwitchInstruction of(int lowValue, int highValue, Label defaultTarget, List<SwitchCase> cases)
```

{@return a table switch instruction}

**参数**

- **lowValue** — the low value of the switch target range, inclusive
- **highValue** — the high value of the switch target range, inclusive
- **defaultTarget** — the default target of the switch
- **cases** — the cases of the switch; duplicate or out of bound case handling is not specified

**异常**

- **IllegalArgumentException** — if the low value is greater than the high value, or if there are too many targets between the low and high values
