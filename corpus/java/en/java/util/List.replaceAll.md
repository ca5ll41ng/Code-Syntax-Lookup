---
id: "java-en-function-list-replaceall"
language: "java"
lang: "en"
category: "function"
name: "List.replaceAll"
signature: "default void replaceAll(UnaryOperator<E> operator)"
title: "List.replaceAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.replaceAll

```java
default void replaceAll(UnaryOperator<E> operator)
```

Replaces each element of this list with the result of applying the
 operator to that element (optional operation).  Errors or runtime
 exceptions thrown by the operator are relayed to the caller.

 The default implementation is equivalent to, for this `list`:
 
```
`final ListIterator li = list.listIterator();
     while (li.hasNext()) {
         li.set(operator.apply(li.next()));
     `
 }
```

 If the list's list-iterator does not support the `set` operation
 then an `UnsupportedOperationException` will be thrown when
 replacing the first element.

**参数**

- **operator** — the operator to apply to each element

**异常**

- **UnsupportedOperationException** — if the `replaceAll` operation is not supported by this list
- **NullPointerException** — if the specified operator is null or if the operator result is a null value and this list does not permit null elements (optional)

> *Since 1.8*
