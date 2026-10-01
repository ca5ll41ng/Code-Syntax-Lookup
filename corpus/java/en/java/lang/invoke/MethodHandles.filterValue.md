---
id: "java-en-function-methodhandles-filtervalue"
language: "java"
lang: "en"
category: "function"
name: "MethodHandles.filterValue"
signature: "public static VarHandle filterValue(VarHandle target, MethodHandle filterToTarget, MethodHandle filterFromTarget)"
title: "MethodHandles.filterValue"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MethodHandles.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MethodHandles.filterValue

```java
public static VarHandle filterValue(VarHandle target, MethodHandle filterToTarget, MethodHandle filterFromTarget)
```

Adapts a target var handle by pre-processing incoming and outgoing values using a pair of filter functions.
 

 When calling e.g. `set` on the resulting var handle, the incoming value (of type `T`, where
 `T` is the last parameter type of the first filter function) is processed using the first filter and then passed
 to the target var handle.
 Conversely, when calling e.g. `get` on the resulting var handle, the return value obtained from
 the target var handle (of type `T`, where `T` is the last parameter type of the second filter function)
 is processed using the second filter and returned to the caller. More advanced access mode types, such as
 `COMPARE_AND_EXCHANGE` might apply both filters at the same time.
 

 For the boxing and unboxing filters to be well-formed, their types must be of the form `(A... , S) -> T` and
 `(A... , T) -> S`, respectively, where `T` is the type of the target var handle. If this is the case,
 the resulting var handle will have type `S` and will feature the additional coordinates `A...` (which
 will be appended to the coordinates of the target var handle).
 

 If the boxing and unboxing filters throw any checked exceptions when invoked, the resulting var handle will
 throw an `IllegalStateException`.
 

 The resulting var handle will feature the same access modes (see `VarHandle.AccessMode`) and
 atomic access guarantees as those featured by the target var handle.

**参数**

- **target** — the target var handle
- **filterToTarget** — a filter to convert some type `S` into the type of `target`
- **filterFromTarget** — a filter to convert the type of `target` to some type `S`

**返回**

- an adapter var handle which accepts a new type, performing the provided boxing/unboxing conversions.

**异常**

- **IllegalArgumentException** — if `filterFromTarget` and `filterToTarget` are not well-formed, that is, they have types other than `(A... , S) -> T` and `(A... , T) -> S`, respectively, where `T` is the type of the target var handle, or if it's determined that either `filterFromTarget` or `filterToTarget` throws any checked exceptions.
- **NullPointerException** — if any of the arguments is `null`.

> *Since 22*
