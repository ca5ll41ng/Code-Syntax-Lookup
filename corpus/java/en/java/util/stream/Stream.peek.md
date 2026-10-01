---
id: "java-en-function-stream-peek"
language: "java"
lang: "en"
category: "function"
name: "Stream.peek"
signature: "Stream<T> peek(Consumer<? super T> action)"
title: "Stream.peek"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.peek

```java
Stream<T> peek(Consumer<? super T> action)
```

Returns a stream consisting of the elements of this stream, additionally
 performing the provided action on each element as elements are consumed
 from the resulting stream.

 

This is an intermediate
 operation.

 

For parallel stream pipelines, the action may be called at
 whatever time and in whatever thread the element is made available by the
 upstream operation.  If the action modifies shared state,
 it is responsible for providing the required synchronization.

 to see the elements as they flow past a certain point in a pipeline:
 
```
`Stream.of("one", "two", "three", "four")
         .filter(e -> e.length() > 3)
         .peek(e -> System.out.println("Filtered value: " + e))
         .map(String::toUpperCase)
         .peek(e -> System.out.println("Mapped value: " + e))
         .collect(Collectors.toList());
 `
```

 

In cases where the stream implementation is able to optimize away the
 production of some or all the elements (such as with short-circuiting
 operations like `findFirst`, or in the example described in
 `count`), the action will not be invoked for those elements.

**参数**

- **action** — a  non-interfering action to perform on the elements as they are consumed from the stream

**返回**

- the new stream
