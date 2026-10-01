---
id: "python-en-function-asyncio-llapi-index-asyncio-llapi-index"
language: "python"
lang: "en"
category: "function"
name: "asyncio-llapi-index"
title: "==================="
directive: "module"
module: "asyncio-llapi-index"
source_url: "https://docs.python.org/3/library/asyncio-llapi-index.html#module-asyncio-llapi-index"
license: "PSF"
updated: "2026-10-01"
---

# ===================

currentmodule:: asyncio

**=================== Low-level API Index**

This page lists all low-level asyncio APIs.

**Obtaining the Event Loop**

list-table::

#### Examples

* `Using asyncio.get_running_loop()`.

**Event Loop Methods**

See also the main documentation section about the
`asyncio-event-loop-methods`.

#### Lifecycle

list-table::

#### Debugging

list-table::

#### Scheduling Callbacks

list-table::

#### Thread/Interpreter/Process Pool

list-table::

#### Tasks and Futures

list-table::

#### DNS

list-table::

#### Networking and IPC

list-table::

#### Sockets

list-table::

#### Unix Signals

list-table::

#### Subprocesses

list-table::

#### Error Handling

list-table::

#### Examples

* `Using asyncio.new_event_loop() and loop.run_forever()`.

* `Using loop.call_later()`.

* Using `loop.create_connection()` to implement
  `an echo-client`.

* Using `loop.create_connection()` to
  `connect a socket`.

* `Using add_reader() to watch an FD for read events`.

* `Using loop.add_signal_handler()`.

* `Using loop.subprocess_exec()`.

**Transports**

All transports implement the following methods:

list-table::

Transports that can receive data (TCP and Unix connections,
pipes, etc).  Returned from methods like
`loop.create_connection`, `loop.create_unix_connection`,
`loop.connect_read_pipe`, etc:

#### Read Transports

list-table::

Transports that can Send data (TCP and Unix connections,
pipes, etc).  Returned from methods like
`loop.create_connection`, `loop.create_unix_connection`,
`loop.connect_write_pipe`, etc:

#### Write Transports

list-table::

Transports returned by `loop.create_datagram_endpoint`:

#### Datagram Transports

list-table::

Low-level transport abstraction over subprocesses.
Returned by `loop.subprocess_exec` and
`loop.subprocess_shell`:

#### Subprocess Transports

list-table::

**Protocols**

Protocol classes can implement the following **callback methods**:

list-table::

#### Streaming Protocols (TCP, Unix Sockets, Pipes)

list-table::

#### Buffered Streaming Protocols

list-table::

#### Datagram Protocols

list-table::

#### Subprocess Protocols

list-table::
