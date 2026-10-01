---
id: "java-en-function-characterrange-flags"
language: "java"
lang: "en"
category: "function"
name: "CharacterRange.flags"
signature: "int flags()"
title: "CharacterRange.flags"
directive: "method"
module: "java.base/java.lang.classfile.instruction"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/classfile/instruction/CharacterRange.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharacterRange.flags

```java
int flags()
```

A flags word, indicating the kind of range.  Multiple flag bits
 may be set.  Valid flags include:
 
 
- `FLAG_STATEMENT`
 
- `FLAG_BLOCK`
 
- `FLAG_ASSIGNMENT`
 
- `FLAG_FLOW_CONTROLLER`
 
- `FLAG_FLOW_TARGET`
 
- `FLAG_INVOKE`
 
- `FLAG_CREATE`
 
- `FLAG_BRANCH_TRUE`
 
- `FLAG_BRANCH_FALSE`

**返回**

- the flags

**参见**

- CharacterRangeInfo#flags()
