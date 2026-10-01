---
id: "java-en-function-stream-mapmulti"
language: "java"
lang: "en"
category: "function"
name: "Stream.mapMulti"
signature: "default <R> Stream<R> mapMulti(BiConsumer<? super T, ? super Consumer<R>> mapper)"
title: "Stream.mapMulti"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Stream.mapMulti

```java
default <R> Stream<R> mapMulti(BiConsumer<? super T, ? super Consumer<R>> mapper)
```

Returns a stream consisting of the results of replacing each element of
 this stream with multiple elements, specifically zero or more elements.
 Replacement is performed by applying the provided mapping function to each
 element in conjunction with a `Consumer consumer` argument
 that accepts replacement elements. The mapping function calls the consumer
 zero or more times to provide the replacement elements.

 

This is an intermediate
 operation.

 

If the `Consumer consumer` argument is used outside the scope of
 its application to the mapping function, the results are undefined.

 The default implementation invokes `flatMap flatMap` on this stream,
 passing a function that behaves as follows. First, it calls the mapper function
 with a `Consumer` that accumulates replacement elements into a newly created
 internal buffer. When the mapper function returns, it creates a stream from the
 internal buffer. Finally, it returns this stream to `flatMap`.

 This method is similar to `flatMap flatMap` in that it applies a one-to-many
 transformation to the elements of the stream and flattens the result elements
 into a new stream. This method is preferable to `flatMap` in the following
 circumstances:
 
 
- When replacing each stream element with a small (possibly zero) number of
 elements. Using this method avoids the overhead of creating a new Stream instance
 for every group of result elements, as required by `flatMap`.
 
- When it is easier to use an imperative approach for generating result
 elements than it is to return them in the form of a Stream.
 

 

If a lambda expression is provided as the mapper function argument, additional type
 information may be necessary for proper inference of the element type `` of
 the returned stream. This can be provided in the form of explicit type declarations for
 the lambda parameters or as an explicit type argument to the `mapMulti` call.

 

**Examples**

 

Given a stream of `Number` objects, the following
 produces a list containing only the `Integer` objects:
 
```
`Stream numbers = ... ;
     List integers = numbers.mapMulti((number, consumer) -> {
             if (number instanceof Integer i)
                 consumer.accept(i);
         `)
         .collect(Collectors.toList());
 }
```

 

If we have an `Iterable` and need to recursively expand its elements
 that are themselves of type `Iterable`, we can use `mapMulti` as follows:
 
```
`class C {
     static void expandIterable(Object e, Consumer c) {
         if (e instanceof Iterable<?> elements) {
             for (Object ie : elements) {
                 expandIterable(ie, c);
             `
         } else if (e != null) {
             c.accept(e);
         }
     }

     public static void main(String[] args) {
         var nestedList = List.of(1, List.of(2, List.of(3, 4)), 5);
         Stream expandedStream = nestedList.stream().mapMulti(C::expandIterable);
     }
 }
 }
```

**参数**

- **The** — element type of the new stream
- **mapper** — a non-interfering, stateless function that generates replacement elements

**返回**

- the new stream

**参见**

- #flatMap flatMap

> *Since 16*
