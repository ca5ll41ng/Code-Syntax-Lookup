---
id: "java-en-function-nodes-collect"
language: "java"
lang: "en"
category: "function"
name: "Nodes.collect"
signature: "public static <P_IN, P_OUT> Node<P_OUT> collect(PipelineHelper<P_OUT> helper, Spliterator<P_IN> spliterator, boolean flattenTree, IntFunction<P_OUT[]> generator)"
title: "Nodes.collect"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Nodes.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Nodes.collect

```java
public static <P_IN, P_OUT> Node<P_OUT> collect(PipelineHelper<P_OUT> helper, Spliterator<P_IN> spliterator, boolean flattenTree, IntFunction<P_OUT[]> generator)
```

Collect, in parallel, elements output from a pipeline and describe those
 elements with a `Node`.

 If the exact size of the output from the pipeline is known and the source
 `Spliterator` has the `SUBSIZED` characteristic,
 then a flat `Node` will be returned whose content is an array,
 since the size is known the array can be constructed in advance and
 output elements can be placed into the array concurrently by leaf
 tasks at the correct offsets.  If the exact size is not known, output
 elements are collected into a conc-node whose shape mirrors that
 of the computation. This conc-node can then be flattened in
 parallel to produce a flat `Node` if desired.

**参数**

- **helper** — the pipeline helper describing the pipeline
- **flattenTree** — whether a conc node should be flattened into a node describing an array before returning
- **generator** — the array generator

**返回**

- a `Node` describing the output elements
