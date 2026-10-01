---
id: "python-en-function-graphlib-topologicalsorter"
language: "python"
lang: "en"
category: "function"
name: "TopologicalSorter"
signature: "TopologicalSorter(graph=None)"
directive: "class"
module: "graphlib"
source_url: "https://docs.python.org/3/library/graphlib.html#graphlib.TopologicalSorter"
license: "PSF"
updated: "2026-10-01"
---

# TopologicalSorter

Provides functionality to topologically sort a graph of `hashable` nodes.

A topological order is a linear ordering of the vertices in a graph such that
for every directed edge u -> v from vertex u to vertex v, vertex u comes
before vertex v in the ordering. For instance, the vertices of the graph may
represent tasks to be performed, and the edges may represent constraints that
one task must be performed before another; in this example, a topological
ordering is just a valid sequence for the tasks. A complete topological
ordering is possible if and only if the graph has no directed cycles, that
is, if it is a directed acyclic graph.

If the optional *graph* argument is provided it must be a dictionary
representing a directed acyclic graph where the keys are nodes and the values
are iterables of all predecessors of that node in the graph (the nodes that
have edges that point to the value in the key). Additional nodes can be added
to the graph using the `~TopologicalSorter.add` method.

In the general case, the steps required to perform the sorting of a given
graph are as follows:

* Create an instance of the `TopologicalSorter` with an optional
  initial graph.
* Add additional nodes to the graph.
* Call `~TopologicalSorter.prepare` on the graph.
* While `~TopologicalSorter.is_active` is `True`, iterate over
  the nodes returned by `~TopologicalSorter.get_ready` and
  process them. Call `~TopologicalSorter.done` on each node as it
  finishes processing.

In case just an immediate sorting of the nodes in the graph is required and
no parallelism is involved, the convenience method
`TopologicalSorter.static_order` can be used directly:

```python

>>> graph = {"D": {"B", "C"}, "C": {"A"}, "B": {"A"}}
>>> ts = TopologicalSorter(graph)
>>> tuple(ts.static_order())
('A', 'C', 'B', 'D')
```

The class is designed to easily support parallel processing of the nodes as
they become ready. For instance::

    topological_sorter = TopologicalSorter()

    # Add nodes to 'topological_sorter'...

    topological_sorter.prepare()
    while topological_sorter.is_active():
        for node in topological_sorter.get_ready():
            # Worker threads or processes take nodes to work on off the
            # 'task_queue' queue.
            task_queue.put(node)

        # When the work for a node is done, workers put the node in
        # 'finalized_tasks_queue' so we can get more nodes to work on.
        # The definition of 'is_active()' guarantees that, at this point, at
        # least one node has been placed on 'task_queue' that hasn't yet
        # been passed to 'done()', so this blocking 'get()' must (eventually)
        # succeed.  After calling 'done()', we loop back to call 'get_ready()'
        # again, so put newly freed nodes on 'task_queue' as soon as
        # logically possible.
        node = finalized_tasks_queue.get()
        topological_sorter.done(node)

method:: add(node, *predecessors)

method:: prepare()

method:: is_active()

method:: done(*nodes)

method:: get_ready()

method:: static_order()

> *Added in 3.9*
