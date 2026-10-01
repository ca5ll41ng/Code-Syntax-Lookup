---
id: "java-en-function-set-oflazy"
language: "java"
lang: "en"
category: "function"
name: "Set.ofLazy"
signature: "static <E> Set<E> ofLazy(Set<? extends E> elementCandidates, Predicate<? super E> computingFunction)"
title: "Set.ofLazy"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.ofLazy

```java
static <E> Set<E> ofLazy(Set<? extends E> elementCandidates, Predicate<? super E> computingFunction)
```

{@return a new lazily computed set whose logical membership for each distinct
          element candidate in the set of `elementCandidates` is
          computed via the provided `computingFunction` on demand}
 

 In the following, the term membership status is used to indicate whether
 an element belongs to the returned set or not. That is, if the membership status
 for element `E` is `true`, then `E` is a member of the
 returned set. Conversely, if the membership status for element `E` is
 `false`, then `E` is not a member of the returned set.
 

 The returned set is an `#unmodifiable unmodifiable` set. The
 elements in the returned set are derived from the element candidates given at
 construction in combination with evaluating each element's membership status. The
 set's element membership statuses are lazily computed via the provided
 `computingFunction` when first accessed (e.g., via
 `contains(Object) Set::contains`). Once the membership status has
 been successfully computed for an element candidate, the associated membership
 status is initialized (i.e., either as a logical member or as
 a logical non-member).
 

 The provided computing function is guaranteed to be invoked at most once per
 element candidate, even in a multi-threaded environment. Competing threads
 accessing an element candidate already under membership status computation will
 block until the membership status of the element candidate is computed or the
 computing function completes abnormally.
 

 If evaluation of the provided computing function throws an unchecked exception (for
 an element candidate), the lazy membership status is not initialized but instead
 transitions to an error state whereafter a `NoSuchElementException` is
 thrown with the unchecked exception as a cause. Subsequent
 `contains(Object) Set::contains` calls for the same membership
 candidate throw `NoSuchElementException` (without ever invoking the
 computing function again) with no cause and with a message that includes the name
 of the original unchecked exception's class.
 

 All failures are handled in this way. There is a special case that causes
 unchecked exceptions to be thrown:
 

 If the computing function recursively invokes itself (for the same membership
 candidate) via the returned lazy set, a `NoSuchElementException`
 (with an `IllegalStateException` as a cause) will be thrown.
 

 The returned set's `Object Object methods`;
 `equals`,
 `hashCode`, and
 `toString` methods may trigger initialization of
 one or more lazy elements. If initialization fails for at least one element,
 the `hashCode` and
 `toString` methods throw
 `NoSuchElementException`, and the `equals`
 throw `NoSuchElementException` if attempting to compare an element that
 could not be computed.
 

 The returned lazy set strongly references its underlying
 computing function used to compute membership status at least as long as there are
 uncomputed element candidates.
 

 The returned Set is not `Serializable`.
 

 If the provided `Set` of `elementCandidates` is subsequently modified,
 the returned `Set` will not reflect such modifications.
 

 The `Set` of `elementCandidates` must use
 `equals` as its equivalence relation, or its
 comparison method must be consistent with `equals()`, otherwise the behavior
 is unspecified.
 

 Here is an example involving an application that manages various configurable
 options -- commonly referred to as "switches" -- that control its behavior. The
 state of these switches can be determined through the command line, a configuration
 file, or even a database connection. By using a lazy set, we ensure that the states
 of these switches are evaluated only once. Once computed, the results are eligible
 for constant folding by the JVM:
 {@snippet lang = java:
 class Application {

     enum Option {VERBOSE, DRY_RUN, STRICT}

     // Lazily initialized Set of Options
     static final Set OPTIONS =
             Set.ofLazy(EnumSet.allOf(Option.class), Application::isEnabled);

     // Return true when the given Option is enabled
     private static boolean isEnabled(Option option) {
         // Parse command line, read configuration file, load database
         ...
     }

     public static void process() {
         // The if condition (and subsequent eliminated branch) is
         // eligible for constant folding (and code elimination).
         if (OPTIONS.contains(Option.DRY_RUN)) {
             // Skip processing in DRY_RUN mode
             return;
         }
         // Actual processing logic
     }

 }
 }
 

 The returned `Set` can be thought of as a set backed by a
 `Map>` field and where the `contains`
 operation is equivalent to:
 {@snippet lang = java:
 class LazySet extends AbstractCollection implements Set {

     private final Map> backingMap;

     public LazySet(Set elementCandidates, Predicate computingFunction) {
         this.backingMap = elementCandidates.stream()
                 .collect(Collectors.toUnmodifiableMap(
                         Function.identity(),
                         k -> LazyConstant.of(() -> computingFunction.test(k))));
     }

     public boolean contains(Object o) {
         var lazyConstant = backingMap.get(o);
         return lazyConstant == null
                 ? false
                 : lazyConstant.get();
     }
 }
}
 Except, performance and storage efficiency might be better.
 

 Elements in the returned set are eligible for certain performance optimizations
 such as constant folding as described in
 `#performance LazyConstant`.

            successfully or transitioned to an error state, the computing function
            is no longer strongly referenced and becomes eligible for garbage
            collection.

**参数**

- **elementCandidates** — the (non-null) element candidates to be evaluated
- **computingFunction** — to invoke whenever the membership status of an element candidate is first computed
- **the** — type of elements maintained by the returned set

**异常**

- **NullPointerException** — if the provided set of `elementCandidates` is `null`, if the set of `elementCandidates` contains a `null` element, or if the provided `computingFunction` is `null`

**参见**

- LazyConstant

> *Since 27*
