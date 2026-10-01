---
id: "java-en-function-list-oflazy"
language: "java"
lang: "en"
category: "function"
name: "List.ofLazy"
signature: "static <E> List<E> ofLazy(int size, IntFunction<? extends E> computingFunction)"
title: "List.ofLazy"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# List.ofLazy

```java
static <E> List<E> ofLazy(int size, IntFunction<? extends E> computingFunction)
```

{@return a new lazily computed list of the provided `size`}
 

 The returned list is an `#unmodifiable unmodifiable` list
 for which the elements are lazily computed via the provided
 `computingFunction` when they are first accessed
 (e.g., via `get(int) List::get`).
 

 The provided computing function is guaranteed to be
 invoked at most once per list index, even in a multi-threaded environment.
 Competing threads accessing an element already under computation will block until
 an element is computed or the computing function completes abnormally.
 

 If evaluation of the provided computing function throws an unchecked exception (for
 an index), the lazy element is not initialized but instead transitions to an error
 state whereafter a `NoSuchElementException` is thrown with the unchecked
 exception as a cause. Subsequent `get(int) List::get` calls for the
 same index throw `NoSuchElementException` (without ever invoking the
 computing function again) with no cause and with a message that includes the name
 of the original unchecked exception's class.
 

 All failures are handled in this way. There are two special cases that cause
 unchecked exceptions to be thrown:
 

 If the computing function returns `null`,
 a `NoSuchElementException` (with a `NullPointerException` as
 a cause) will be thrown. Hence, just like other unmodifiable lists created via the
 `List::of` factories, a lazy list can never contain `null`
 elements. Clients that want to use nullable elements can wrap elements into an
 `Optional` holder.
 

 If the computing function recursively invokes itself (for the same index) via the
 returned lazy list, a `NoSuchElementException`
 (with an `IllegalStateException` as a cause) will be thrown.
 

 The elements of any `subList` or
 `reversed` views of the returned list are also lazily computed.
 

 The returned list and its `subList` or
 `reversed` views implement the `RandomAccess` interface.
 

 The returned list's `Object Object methods`;
 `equals`,
 `hashCode`, and
 `toString` methods may trigger initialization of
 one or more lazy elements. If initialization fails for at least one element,
 the `hashCode` and
 `toString` methods throw
 `NoSuchElementException`, and the `equals`
 throw `NoSuchElementException` if attempting to compare an element that
 could not be computed.
 

 The returned lazy list strongly references its computing
 function used to compute elements at least as long as there are uninitialized
 elements.
 

 The returned List is not `Serializable`.
 

 Here is an example involving an application that maintains three separate
 `OrderController` components. Depending on a thread's id, one of the
 three `OrderController` components will be selected. By using a lazy list,
 we ensure that at most three `OrderController` instances are created. Once
 created, the component retrieval is eligible for constant folding by the JVM:
 {@snippet lang = java:
 class Application {

     private static final int POOL_SIZE = 3;

     static final List ORDERS
         = List.ofLazy(POOL_SIZE, _ -> new OrderController());

     public static OrderController orders() {
         long index = Thread.currentThread().threadId() % POOL_SIZE;
         return ORDERS.get((int)index);
     }

      // Eligible for constant folding
      OrderController orders = orders();
 }
 }
 

 The returned `List` can be thought of as a list backed by a
 `List>` field and where the `get`
 operation is equivalent to:
 {@snippet lang = java:
 class LazyList extends AbstractList {

     private final List> backingList;

     public LazyList(int size, IntFunction computingFunction) {
         this.backingList = IntStream.range(0, size)
                 .mapToObj(i -> LazyConstant.of(() -> computingFunction.apply(i)))
                 .toList();
     }

     public E get(int index) {
         return backingList.get(index).get();
     }
 }
}
 Except, performance and storage efficiency might be better.
 

 Elements in the returned list are eligible for certain performance optimizations
 such as constant folding as described in
 `#performance LazyConstant`.

            an error state, the computing function is no longer strongly referenced
            and becomes eligible for garbage collection.

**参数**

- **size** — the size of the returned lazy list
- **computingFunction** — to invoke whenever an element is first accessed (may not return `null`)
- **the** — type of elements in the returned list

**异常**

- **IllegalArgumentException** — if the provided `size` is negative.
- **NullPointerException** — if the provided `computingFunction` is `null`

**参见**

- LazyConstant

> *Since 26*
