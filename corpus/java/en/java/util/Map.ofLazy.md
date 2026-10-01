---
id: "java-en-function-map-oflazy"
language: "java"
lang: "en"
category: "function"
name: "Map.ofLazy"
signature: "static <K, V> Map<K, V> ofLazy(Set<? extends K> keys, Function<? super K, ? extends V> computingFunction)"
title: "Map.ofLazy"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.ofLazy

```java
static <K, V> Map<K, V> ofLazy(Set<? extends K> keys, Function<? super K, ? extends V> computingFunction)
```

{@return a new lazily computed map with the provided `keys`}
 

 The returned map is an `#unmodifiable unmodifiable` map whose
 keys are known at construction. The map's values are lazily computed via the
 provided `computingFunction` when they are first accessed
 (e.g., via `get(Object) Map::get`).
 

 The provided computing function is guaranteed to be invoked
 at most once per key, even in a multi-threaded environment. Competing
 threads accessing a value already under computation will block until a value
 is computed or the computing function completes abnormally.
 

 If evaluation of the provided computing function throws an unchecked exception (for
 a key), the lazy value is not initialized but instead transitions to an error
 state whereafter a `NoSuchElementException` is thrown with the unchecked
 exception as a cause. Subsequent `get(Object) Map::get` calls for
 the same key throw `NoSuchElementException` (without ever invoking the
 computing function again) with no cause and with a message that includes the name
 of the original unchecked exception's class.
 

 All failures are handled in this way. There are two special cases that cause
 unchecked exceptions to be thrown:
 

 If the computing function returns `null`,
 a `NoSuchElementException` (with a `NullPointerException` as
 a cause) will be thrown. Hence, just like other unmodifiable maps created via the
 `Map::of` factories, a lazy map can never contain `null` values.
 Clients that want to use nullable values can wrap elements into an
 `Optional` holder.
 

 If the computing function recursively invokes itself (for the same key) via the
 returned lazy map, a `NoSuchElementException`
 (with an `IllegalStateException` as a cause) will be thrown.
 

 The values of any `values` or `entrySet` views of
 the returned map are also lazily computed.
 

 The returned map's `Object Object methods`;
 `equals`,
 `hashCode`, and
 `toString` methods may trigger initialization of
 one or more lazy values. If initialization fails for at least one value,
 the `hashCode` and
 `toString` methods throw
 `NoSuchElementException`, and the `equals`
 throw `NoSuchElementException` if attempting to compare a value that
 could not be computed.
 

 The returned lazy map strongly references its underlying
 computing function used to compute values at least as long as there are
 uncomputed values.
 

 The returned Map is not `Serializable`.
 

 If the provided `Set` of `keys` is subsequently modified, the returned
 `Map` will not reflect such modifications.
 

 The `Set` of `keys` must use `equals`
 as its equivalence relation, or its comparison method must be consistent with
 equals, otherwise the behavior is unspecified.
 

 Here is an example involving an application that caches the values returned by some
 `expensiveOperation(int param)` for a given set of input parameters. By
 using a lazy map, we ensure that the `expensiveOperation(int param)` is
 called at most once per distinct input parameter. Once created, the retrieval of
 values is eligible for constant folding by the JVM:
 {@snippet lang = java:
 class Application {

     private static final Map CACHE
         = Map.ofLazy(Set.of(0, 1, 3, 42, 97), param -> expensiveOperation(param));

     public static Optional cachedExpensiveOperation(int param) {
         return Optional.ofNullable(CACHE.get(param));
     }

     private static double expensiveOperation(int param) {
       // Calculate the value ...
     }

      // Eligible for constant folding
      double val = cachedExpensiveOperation(42).orElseThrow();

 }
 }
 

 The returned `Map` can be thought of as a map backed by a
 `Map>` field and where the `get`
 operation is equivalent to:
 {@snippet lang = java:
 class LazyMap extends AbstractMap {

     private final Map> backingMap;

     public LazyMap(Set keys, Function computingFunction) {
         this.backingMap = keys.stream()
                 .collect(Collectors.toUnmodifiableMap(
                         Function.identity(),
                         k -> LazyConstant.of(() -> computingFunction.apply(k))));
     }

     public V get(Object key) {
         var lazyConstant = backingMap.get(key);
         return lazyConstant == null
                 ? null
                 : lazyConstant.get();
     }
 }
}
 Except, performance and storage efficiency might be better.
 

 Values in the returned map are eligible for certain performance optimizations
 such as constant folding as described in
 `#performance LazyConstant`.

            an error state, the computing function is no longer strongly referenced
            and becomes eligible for garbage collection.

**参数**

- **keys** — the (non-null) keys in the returned computed map
- **computingFunction** — to invoke whenever an associated value is first accessed
- **the** — type of keys maintained by the returned map
- **the** — type of mapped values in the returned map

**异常**

- **NullPointerException** — if the provided set of `keys` is `null`, if the set of `keys` contains a `null` element, or if the provided `computingFunction` is `null`

**参见**

- LazyConstant

> *Since 26*
