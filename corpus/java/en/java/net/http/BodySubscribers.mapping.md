---
id: "java-en-function-bodysubscribers-mapping"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.mapping"
signature: "public static <T,U> BodySubscriber<U> mapping(BodySubscriber<T> upstream, Function<? super T, ? extends U> mapper)"
title: "BodySubscribers.mapping"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.mapping

```java
public static <T,U> BodySubscriber<U> mapping(BodySubscriber<T> upstream, Function<? super T, ? extends U> mapper)
```

Returns a `BodySubscriber` whose response body value is that of
 the result of applying the given function to the body object of the
 given `upstream` `BodySubscriber`.

 

 The mapping function is executed using the client's `executor() executor`, and can therefore be used to map any
 response body type, including blocking `InputStream`.
 However, performing any blocking operation in the mapper function
 runs the risk of blocking the executor's thread for an unknown
 amount of time (at least until the blocking operation finishes),
 which may end up starving the executor of available threads.
 Therefore, in the case where mapping to the desired type might
 block (e.g. by reading on the `InputStream`), then mapping
 to a `java.util.function.Supplier Supplier` of the desired
 type and deferring the blocking operation until `get()
 Supplier::get` is invoked by the caller's thread should be preferred,
 as shown in the following example which uses a well-known JSON parser to
 convert an `InputStream` into any annotated Java type.

 

For example:
 {@snippet :
   public static  BodySubscriber> asJSON(Class targetType) {
     BodySubscriber upstream = BodySubscribers.ofInputStream();

     BodySubscriber> downstream = BodySubscribers.mapping(
           upstream,
           (InputStream is) -> () -> {
               try (InputStream stream = is) {
                   ObjectMapper objectMapper = new ObjectMapper();
                   return objectMapper.readValue(stream, targetType);
               } catch (IOException e) {
                   throw new UncheckedIOException(e);
               }
           });
    return downstream;
  } }

**参数**

- **the** — upstream body type
- **the** — type of the body subscriber returned
- **upstream** — the body subscriber to be mapped
- **mapper** — the mapping function

**返回**

- a mapping body subscriber
