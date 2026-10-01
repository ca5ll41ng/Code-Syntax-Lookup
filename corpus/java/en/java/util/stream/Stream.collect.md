---
id: "java-en-function-stream-collect"
language: "java"
lang: "en"
category: "function"
name: "Stream.collect"
signature: "<R> R collect(Supplier<R> supplier, BiConsumer<R, ? super T> accumulator, BiConsumer<R, R> combiner)"
title: "Stream.collect"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.collect

```java
<R> R collect(Supplier<R> supplier, BiConsumer<R, ? super T> accumulator, BiConsumer<R, R> combiner)
```

Performs a mutable
 reduction operation on the elements of this stream.  A mutable
 reduction is one in which the reduced value is a mutable result container,
 such as an `ArrayList`, and elements are incorporated by updating
 the state of the result rather than by replacing the result.  This
 produces a result equivalent to:
 
```
`R result = supplier.get();
     for (T element : this stream)
         accumulator.accept(result, element);
     return result;
 `
```

 

Like `reduce`, `collect` operations
 can be parallelized without requiring additional synchronization.

 

This is a terminal
 operation.

 well-suited for use with method references as arguments to `collect()`.
 For example, the following will accumulate strings into an `ArrayList`:
 
```
`List asList = stringStream.collect(ArrayList::new, ArrayList::add,
                                                ArrayList::addAll);
 `
```

 

The following will take a stream of strings and concatenates them into a
 single string:
 
```
`String concat = stringStream.collect(StringBuilder::new, StringBuilder::append,
                                          StringBuilder::append)
                                 .toString();
 `
```

**参数**

- **the** — type of the mutable result container
- **supplier** — a function that creates a new mutable result container. For a parallel execution, this function may be called multiple times and must return a fresh value each time.
- **accumulator** — an associative, non-interfering, stateless function that must fold an element into a result container.
- **combiner** — an associative, non-interfering, stateless function that accepts two partial result containers and merges them, which must be compatible with the accumulator function.  The combiner function must fold the elements from the second result container into the first result container.

**返回**

- the result of the reduction
