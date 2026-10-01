---
id: "java-en-function-accessmode-valuefrommethodname"
language: "java"
lang: "en"
category: "function"
name: "AccessMode.valueFromMethodName"
signature: "public static AccessMode valueFromMethodName(String methodName)"
title: "AccessMode.valueFromMethodName"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/VarHandle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AccessMode.valueFromMethodName

```java
public static AccessMode valueFromMethodName(String methodName)
```

Returns the `AccessMode` value associated with the specified
 `VarHandle` signature-polymorphic method name.

**参数**

- **methodName** — the signature-polymorphic method name

**返回**

- the `AccessMode` value

**异常**

- **IllegalArgumentException** — if there is no `AccessMode` value associated with method name (indicating the method name does not correspond to a `VarHandle` signature-polymorphic method name).

**参见**

- #methodName()
