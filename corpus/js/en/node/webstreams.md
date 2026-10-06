---
id: "js-en-function-node-webstreams"
language: "js"
lang: "en"
category: "function"
name: "node:webstreams"
title: "Web Streams API"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/webstreams.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Web Streams API

<h1>Web Streams API</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>An implementation of the <a href="https://streams.spec.whatwg.org/">WHATWG Streams Standard</a>.</p>
<h2>Overview</h2>
<p>The <a href="https://streams.spec.whatwg.org/">WHATWG Streams Standard</a> (or &quot;web streams&quot;) defines an API for handling
streaming data. It is similar to the Node.js <a href="stream.md">Streams</a> API but emerged later
and has become the &quot;standard&quot; API for streaming data across many JavaScript
environments.</p>
<p>There are three primary types of objects:</p>
<ul>
<li><code>ReadableStream</code> - Represents a source of streaming data.</li>
<li><code>WritableStream</code> - Represents a destination for streaming data.</li>
<li><code>TransformStream</code> - Represents an algorithm for transforming streaming data.</li>
</ul>
<h3>Example <code>ReadableStream</code></h3>
<p>This example creates a simple <code>ReadableStream</code> that pushes the current
<code>performance.now()</code> timestamp once every second forever. An async iterable
is used to read the data from the stream.</p>
<pre><code class="language-mjs">import {
  ReadableStream,
} from 'node:stream/web';

import {
  setInterval as every,
} from 'node:timers/promises';

import {
  performance,
} from 'node:perf_hooks';

const SECOND = 1000;

const stream = new ReadableStream({
  async start(controller) {
    for await (const _ of every(SECOND))
      controller.enqueue(performance.now());
  },
});

for await (const value of stream)
  console.log(value);
</code></pre>
<pre><code class="language-cjs">const {
  ReadableStream,
} = require('node:stream/web');

const {
  setInterval: every,
} = require('node:timers/promises');

const {
  performance,
} = require('node:perf_hooks');

const SECOND = 1000;

const stream = new ReadableStream({
  async start(controller) {
    for await (const _ of every(SECOND))
      controller.enqueue(performance.now());
  },
});

(async () =&gt; {
  for await (const value of stream)
    console.log(value);
})();
</code></pre>
<h3>Node.js streams interoperability</h3>
<p>Node.js streams can be converted to web streams and vice versa via the <code>toWeb</code> and <code>fromWeb</code> methods present on <a href="stream.md#class-streamreadable"><code>stream.Readable</code></a>, <a href="stream.md#class-streamwritable"><code>stream.Writable</code></a> and <a href="stream.md#class-streamduplex"><code>stream.Duplex</code></a> objects.</p>
<p>For more details refer to the relevant documentation:</p>
<ul>
<li><a href="stream.md#streamreadabletowebstreamreadable-options"><code>stream.Readable.toWeb</code></a></li>
<li><a href="stream.md#streamreadablefromwebreadablestream-options"><code>stream.Readable.fromWeb</code></a></li>
<li><a href="stream.md#streamwritabletowebstreamwritable"><code>stream.Writable.toWeb</code></a></li>
<li><a href="stream.md#streamwritablefromwebwritablestream-options"><code>stream.Writable.fromWeb</code></a></li>
<li><a href="stream.md#streamduplextowebstreamduplex-options"><code>stream.Duplex.toWeb</code></a></li>
<li><a href="stream.md#streamduplexfromwebpair-options"><code>stream.Duplex.fromWeb</code></a></li>
</ul>
<h2>API</h2>
<h3><code>ReadableStreamTee(stream[, cloneForBranch2])</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>stream</code> {ReadableStream}</li>
<li><code>cloneForBranch2</code> {boolean} When <code>true</code>, chunks enqueued into the second
branch are cloned from chunks enqueued into the first branch. <strong>Default:</strong>
<code>false</code>.</li>
<li>Returns: {ReadableStream[]} Two {ReadableStream} branches.</li>
</ul>
<p>Runs the WHATWG <code>ReadableStreamTee</code> abstract operation on <code>stream</code>.</p>
<p>This differs from <code>readableStream.tee()</code> only when <code>cloneForBranch2</code> is
<code>true</code>. The <code>tee()</code> method always passes <code>false</code>, while other web platform
specifications, such as Fetch body cloning, pass <code>true</code> so that the second
branch receives cloned chunks and consumption of one branch cannot mutate chunks
seen by the other.</p>
<h3>Class: <code>ReadableStream</code></h3>
<h4><code>new ReadableStream([underlyingSource [, strategy]])</code></h4>
<ul>
<li><code>underlyingSource</code> {Object}
<ul>
<li><code>start</code> {Function} A user-defined function that is invoked immediately when
the <code>ReadableStream</code> is created.
<ul>
<li><code>controller</code> {ReadableStreamDefaultController|ReadableByteStreamController}</li>
<li>Returns: <code>undefined</code> or a promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>pull</code> {Function} A user-defined function that is called repeatedly when the
<code>ReadableStream</code> internal queue is not full. The operation may be sync or
async. If async, the function will not be called again until the previously
returned promise is fulfilled.
<ul>
<li><code>controller</code> {ReadableStreamDefaultController|ReadableByteStreamController}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>cancel</code> {Function} A user-defined function that is called when the
<code>ReadableStream</code> is canceled.
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>type</code> {string} Must be <code>'bytes'</code> or <code>undefined</code>.</li>
<li><code>autoAllocateChunkSize</code> {number} Used only when <code>type</code> is equal to
<code>'bytes'</code>. When set to a non-zero value a view buffer is automatically
allocated to <code>ReadableByteStreamController.byobRequest</code>. When not set
one must use stream's internal queues to transfer data via the default
reader <code>ReadableStreamDefaultReader</code>.</li>
</ul>
</li>
<li><code>strategy</code> {Object}
<ul>
<li><code>highWaterMark</code> {number} The maximum internal queue size before backpressure
is applied.</li>
<li><code>size</code> {Function} A user-defined function used to identify the size of each
chunk of data.
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: {number}</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4><code>readableStream.locked</code></h4>
<ul>
<li>Type: {boolean} Set to <code>true</code> if there is an active reader for this
{ReadableStream}.</li>
</ul>
<p>The <code>readableStream.locked</code> property is <code>false</code> by default, and is
switched to <code>true</code> while there is an active reader consuming the
stream's data.</p>
<h4><code>readableStream.cancel([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code> once cancelation has
been completed.</li>
</ul>
<h4><code>readableStream.getReader([options])</code></h4>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>mode</code> {string} <code>'byob'</code> or <code>undefined</code></li>
</ul>
</li>
<li>Returns: {ReadableStreamDefaultReader|ReadableStreamBYOBReader}</li>
</ul>
<pre><code class="language-mjs">import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream();

const reader = stream.getReader();

console.log(await reader.read());
</code></pre>
<pre><code class="language-cjs">const { ReadableStream } = require('node:stream/web');

const stream = new ReadableStream();

const reader = stream.getReader();

reader.read().then(console.log);
</code></pre>
<p>Causes the <code>readableStream.locked</code> to be <code>true</code>.</p>
<h4><code>readableStream.pipeThrough(transform[, options])</code></h4>
<ul>
<li><code>transform</code> {Object}
<ul>
<li><code>readable</code> {ReadableStream} The <code>ReadableStream</code> to which
<code>transform.writable</code> will push the potentially modified data
it receives from this <code>ReadableStream</code>.</li>
<li><code>writable</code> {WritableStream} The <code>WritableStream</code> to which this
<code>ReadableStream</code>'s data will be written.</li>
</ul>
</li>
<li><code>options</code> {Object}
<ul>
<li><code>preventAbort</code> {boolean} When <code>true</code>, errors in this <code>ReadableStream</code>
will not cause <code>transform.writable</code> to be aborted.</li>
<li><code>preventCancel</code> {boolean} When <code>true</code>, errors in the destination
<code>transform.writable</code> do not cause this <code>ReadableStream</code> to be
canceled.</li>
<li><code>preventClose</code> {boolean} When <code>true</code>, closing this <code>ReadableStream</code>
does not cause <code>transform.writable</code> to be closed.</li>
<li><code>signal</code> {AbortSignal} Allows the transfer of data to be canceled
using an {AbortController}.</li>
</ul>
</li>
<li>Returns: {ReadableStream} From <code>transform.readable</code>.</li>
</ul>
<p>Connects this {ReadableStream} to the pair of {ReadableStream} and
{WritableStream} provided in the <code>transform</code> argument such that the
data from this {ReadableStream} is written in to <code>transform.writable</code>,
possibly transformed, then pushed to <code>transform.readable</code>. Once the
pipeline is configured, <code>transform.readable</code> is returned.</p>
<p>Causes the <code>readableStream.locked</code> to be <code>true</code> while the pipe operation
is active.</p>
<pre><code class="language-mjs">import {
  ReadableStream,
  TransformStream,
} from 'node:stream/web';

const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('a');
  },
});

const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

const transformedStream = stream.pipeThrough(transform);

for await (const chunk of transformedStream)
  console.log(chunk);
  // Prints: A
</code></pre>
<pre><code class="language-cjs">const {
  ReadableStream,
  TransformStream,
} = require('node:stream/web');

const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('a');
  },
});

const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

const transformedStream = stream.pipeThrough(transform);

(async () =&gt; {
  for await (const chunk of transformedStream)
    console.log(chunk);
    // Prints: A
})();
</code></pre>
<h4><code>readableStream.pipeTo(destination[, options])</code></h4>
<ul>
<li><code>destination</code> {WritableStream} A {WritableStream} to which this
<code>ReadableStream</code>'s data will be written.</li>
<li><code>options</code> {Object}
<ul>
<li><code>preventAbort</code> {boolean} When <code>true</code>, errors in this <code>ReadableStream</code>
will not cause <code>destination</code> to be aborted.</li>
<li><code>preventCancel</code> {boolean} When <code>true</code>, errors in the <code>destination</code>
will not cause this <code>ReadableStream</code> to be canceled.</li>
<li><code>preventClose</code> {boolean} When <code>true</code>, closing this <code>ReadableStream</code>
does not cause <code>destination</code> to be closed.</li>
<li><code>signal</code> {AbortSignal} Allows the transfer of data to be canceled
using an {AbortController}.</li>
</ul>
</li>
<li>Returns: A promise fulfilled with <code>undefined</code></li>
</ul>
<p>Causes the <code>readableStream.locked</code> to be <code>true</code> while the pipe operation
is active.</p>
<h4><code>readableStream.tee()</code></h4>
<ul>
<li>Returns: {ReadableStream[]}</li>
</ul>
<p>Returns a pair of new {ReadableStream} instances to which this
<code>ReadableStream</code>'s data will be forwarded. Each will receive the
same data.</p>
<p>Causes the <code>readableStream.locked</code> to be <code>true</code>.</p>
<h4><code>readableStream.values([options])</code></h4>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>preventCancel</code> {boolean} When <code>true</code>, prevents the {ReadableStream}
from being closed when the async iterator abruptly terminates.
<strong>Default</strong>: <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Creates and returns an async iterator usable for consuming this
<code>ReadableStream</code>'s data.</p>
<p>Causes the <code>readableStream.locked</code> to be <code>true</code> while the async iterator
is active.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';

const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream.values({ preventCancel: true }))
  console.log(Buffer.from(chunk).toString());
</code></pre>
<h4>Async Iteration</h4>
<p>The {ReadableStream} object supports the async iterator protocol using
<code>for await</code> syntax.</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';

const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream)
  console.log(Buffer.from(chunk).toString());
</code></pre>
<p>The async iterator will consume the {ReadableStream} until it terminates.</p>
<p>By default, if the async iterator exits early (via either a <code>break</code>,
<code>return</code>, or a <code>throw</code>), the {ReadableStream} will be closed. To prevent
automatic closing of the {ReadableStream}, use the <code>readableStream.values()</code>
method to acquire the async iterator and set the <code>preventCancel</code> option to
<code>true</code>.</p>
<p>The {ReadableStream} must not be locked (that is, it must not have an existing
active reader). During the async iteration, the {ReadableStream} will be locked.</p>
<h4>Transferring with <code>postMessage()</code></h4>
<p>A {ReadableStream} instance can be transferred using a {MessagePort}.</p>
<pre><code class="language-js">const stream = new ReadableStream(getReadableSourceSomehow());

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) =&gt; {
  data.getReader().read().then((chunk) =&gt; {
    console.log(chunk);
  });
};

port2.postMessage(stream, [stream]);
</code></pre>
<h3><code>ReadableStream.from(iterable)</code></h3>
<ul>
<li><code>iterable</code> {Iterable} Object implementing the <code>Symbol.asyncIterator</code> or
<code>Symbol.iterator</code> iterable protocol.</li>
</ul>
<p>A utility method that creates a new {ReadableStream} from an iterable.</p>
<pre><code class="language-mjs">import { ReadableStream } from 'node:stream/web';

async function* asyncIterableGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}

const stream = ReadableStream.from(asyncIterableGenerator());

for await (const chunk of stream)
  console.log(chunk); // Prints: 'a', 'b', 'c'
</code></pre>
<pre><code class="language-cjs">const { ReadableStream } = require('node:stream/web');

async function* asyncIterableGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}

(async () =&gt; {
  const stream = ReadableStream.from(asyncIterableGenerator());

  for await (const chunk of stream)
    console.log(chunk); // Prints: 'a', 'b', 'c'
})();
</code></pre>
<p>To pipe the resulting {ReadableStream} into a {WritableStream} the {Iterable}
should yield a sequence of {Buffer}, {TypedArray}, or {DataView} objects.</p>
<pre><code class="language-mjs">import { ReadableStream } from 'node:stream/web';
import { Buffer } from 'node:buffer';

async function* asyncIterableGenerator() {
  yield Buffer.from('a');
  yield Buffer.from('b');
  yield Buffer.from('c');
}

const stream = ReadableStream.from(asyncIterableGenerator());

await stream.pipeTo(createWritableStreamSomehow());
</code></pre>
<pre><code class="language-cjs">const { ReadableStream } = require('node:stream/web');
const { Buffer } = require('node:buffer');

async function* asyncIterableGenerator() {
  yield Buffer.from('a');
  yield Buffer.from('b');
  yield Buffer.from('c');
}

const stream = ReadableStream.from(asyncIterableGenerator());

(async () =&gt; {
  await stream.pipeTo(createWritableStreamSomehow());
})();
</code></pre>
<h3>Class: <code>ReadableStreamDefaultReader</code></h3>
<p>By default, calling <code>readableStream.getReader()</code> with no arguments
will return an instance of <code>ReadableStreamDefaultReader</code>. The default
reader treats the chunks of data passed through the stream as opaque
values, which allows the {ReadableStream} to work with generally any
JavaScript value.</p>
<h4><code>new ReadableStreamDefaultReader(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream}</li>
</ul>
<p>Creates a new {ReadableStreamDefaultReader} that is locked to the
given {ReadableStream}.</p>
<h4><code>readableStreamDefaultReader.cancel([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Cancels the {ReadableStream} and returns a promise that is fulfilled
when the underlying stream has been canceled.</p>
<h4><code>readableStreamDefaultReader.closed</code></h4>
<ul>
<li>Type: {Promise} Fulfilled with <code>undefined</code> when the associated
{ReadableStream} is closed or rejected if the stream errors or the reader's
lock is released before the stream finishes closing.</li>
</ul>
<h4><code>readableStreamDefaultReader.read()</code></h4>
<ul>
<li>Returns: A promise fulfilled with an object:
<ul>
<li><code>value</code> {any}</li>
<li><code>done</code> {boolean}</li>
</ul>
</li>
</ul>
<p>Requests the next chunk of data from the underlying {ReadableStream}
and returns a promise that is fulfilled with the data once it is
available.</p>
<h4><code>readableStreamDefaultReader.releaseLock()</code></h4>
<p>Releases this reader's lock on the underlying {ReadableStream}.</p>
<h3>Class: <code>ReadableStreamBYOBReader</code></h3>
<p>The <code>ReadableStreamBYOBReader</code> is an alternative consumer for
byte-oriented {ReadableStream}s (those that are created with
<code>underlyingSource.type</code> set equal to <code>'bytes'</code> when the
<code>ReadableStream</code> was created).</p>
<p>The <code>BYOB</code> is short for &quot;bring your own buffer&quot;. This is a
pattern that allows for more efficient reading of byte-oriented
data that avoids extraneous copying.</p>
<pre><code class="language-mjs">import {
  open,
} from 'node:fs/promises';

import {
  ReadableStream,
} from 'node:stream/web';

import { Buffer } from 'node:buffer';

class Source {
  type = 'bytes';
  autoAllocateChunkSize = 1024;

  async start(controller) {
    this.file = await open(new URL(import.meta.url));
    this.controller = controller;
  }

  async pull(controller) {
    const view = controller.byobRequest?.view;
    const {
      bytesRead,
    } = await this.file.read({
      buffer: view,
      offset: view.byteOffset,
      length: view.byteLength,
    });

    if (bytesRead === 0) {
      await this.file.close();
      this.controller.close();
    }
    controller.byobRequest.respond(bytesRead);
  }
}

const stream = new ReadableStream(new Source());

async function read(stream) {
  const reader = stream.getReader({ mode: 'byob' });

  const chunks = [];
  let result;
  do {
    result = await reader.read(Buffer.alloc(100));
    if (result.value !== undefined)
      chunks.push(Buffer.from(result.value));
  } while (!result.done);

  return Buffer.concat(chunks);
}

const data = await read(stream);
console.log(Buffer.from(data).toString());
</code></pre>
<h4><code>new ReadableStreamBYOBReader(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream}</li>
</ul>
<p>Creates a new <code>ReadableStreamBYOBReader</code> that is locked to the
given {ReadableStream}.</p>
<h4><code>readableStreamBYOBReader.cancel([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Cancels the {ReadableStream} and returns a promise that is fulfilled
when the underlying stream has been canceled.</p>
<h4><code>readableStreamBYOBReader.closed</code></h4>
<ul>
<li>Type: {Promise} Fulfilled with <code>undefined</code> when the associated
{ReadableStream} is closed or rejected if the stream errors or the reader's
lock is released before the stream finishes closing.</li>
</ul>
<h4><code>readableStreamBYOBReader.read(view[, options])</code></h4>
<ul>
<li><code>view</code> {Buffer|TypedArray|DataView}</li>
<li><code>options</code> {Object}
<ul>
<li><code>min</code> {number} When set, the returned promise will only be
fulfilled as soon as <code>min</code> number of elements are available.
When not set, the promise fulfills when at least one element
is available.</li>
</ul>
</li>
<li>Returns: A promise fulfilled with an object:
<ul>
<li><code>value</code> {TypedArray|DataView}</li>
<li><code>done</code> {boolean}</li>
</ul>
</li>
</ul>
<p>Requests the next chunk of data from the underlying {ReadableStream}
and returns a promise that is fulfilled with the data once it is
available.</p>
<p>Do not pass a pooled {Buffer} object instance in to this method.
Pooled <code>Buffer</code> objects are created using <code>Buffer.allocUnsafe()</code>,
or <code>Buffer.from()</code>, or are often returned by various <code>node:fs</code> module
callbacks. These types of <code>Buffer</code>s use a shared underlying
{ArrayBuffer} object that contains all of the data from all of
the pooled <code>Buffer</code> instances. When a <code>Buffer</code>, {TypedArray},
or {DataView} is passed in to <code>readableStreamBYOBReader.read()</code>,
the view's underlying <code>ArrayBuffer</code> is <em>detached</em>, invalidating
all existing views that may exist on that <code>ArrayBuffer</code>. This
can have disastrous consequences for your application.</p>
<h4><code>readableStreamBYOBReader.releaseLock()</code></h4>
<p>Releases this reader's lock on the underlying {ReadableStream}.</p>
<h3>Class: <code>ReadableStreamDefaultController</code></h3>
<p>Every {ReadableStream} has a controller that is responsible for
the internal state and management of the stream's queue. The
<code>ReadableStreamDefaultController</code> is the default controller
implementation for <code>ReadableStream</code>s that are not byte-oriented.</p>
<h4><code>readableStreamDefaultController.close()</code></h4>
<p>Closes the {ReadableStream} to which this controller is associated.</p>
<h4><code>readableStreamDefaultController.desiredSize</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Returns the amount of data remaining to fill the {ReadableStream}'s
queue.</p>
<h4><code>readableStreamDefaultController.enqueue([chunk])</code></h4>
<ul>
<li><code>chunk</code> {any}</li>
</ul>
<p>Appends a new chunk of data to the {ReadableStream}'s queue.</p>
<h4><code>readableStreamDefaultController.error([error])</code></h4>
<ul>
<li><code>error</code> {any}</li>
</ul>
<p>Signals an error that causes the {ReadableStream} to error and close.</p>
<h3>Class: <code>ReadableByteStreamController</code></h3>
<p>Every {ReadableStream} has a controller that is responsible for
the internal state and management of the stream's queue. The
<code>ReadableByteStreamController</code> is for byte-oriented <code>ReadableStream</code>s.</p>
<h4><code>readableByteStreamController.byobRequest</code></h4>
<ul>
<li>Type: {ReadableStreamBYOBRequest}</li>
</ul>
<h4><code>readableByteStreamController.close()</code></h4>
<p>Closes the {ReadableStream} to which this controller is associated.</p>
<h4><code>readableByteStreamController.desiredSize</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>Returns the amount of data remaining to fill the {ReadableStream}'s
queue.</p>
<h4><code>readableByteStreamController.enqueue(chunk)</code></h4>
<ul>
<li><code>chunk</code> {Buffer|TypedArray|DataView}</li>
</ul>
<p>Appends a new chunk of data to the {ReadableStream}'s queue.</p>
<h4><code>readableByteStreamController.error([error])</code></h4>
<ul>
<li><code>error</code> {any}</li>
</ul>
<p>Signals an error that causes the {ReadableStream} to error and close.</p>
<h3>Class: <code>ReadableStreamBYOBRequest</code></h3>
<p>When using <code>ReadableByteStreamController</code> in byte-oriented
streams, and when using the <code>ReadableStreamBYOBReader</code>,
the <code>readableByteStreamController.byobRequest</code> property
provides access to a <code>ReadableStreamBYOBRequest</code> instance
that represents the current read request. The object
is used to gain access to the <code>ArrayBuffer</code>/<code>TypedArray</code>
that has been provided for the read request to fill,
and provides methods for signaling that the data has
been provided.</p>
<h4><code>readableStreamBYOBRequest.respond(bytesWritten)</code></h4>
<ul>
<li><code>bytesWritten</code> {number}</li>
</ul>
<p>Signals that a <code>bytesWritten</code> number of bytes have been written
to <code>readableStreamBYOBRequest.view</code>.</p>
<h4><code>readableStreamBYOBRequest.respondWithNewView(view)</code></h4>
<ul>
<li><code>view</code> {Buffer|TypedArray|DataView}</li>
</ul>
<p>Signals that the request has been fulfilled with bytes written
to a new <code>Buffer</code>, <code>TypedArray</code>, or <code>DataView</code>.</p>
<h4><code>readableStreamBYOBRequest.view</code></h4>
<ul>
<li>Type: {Buffer|TypedArray|DataView}</li>
</ul>
<h3>Class: <code>WritableStream</code></h3>
<p>The <code>WritableStream</code> is a destination to which stream data is sent.</p>
<pre><code class="language-mjs">import {
  WritableStream,
} from 'node:stream/web';

const stream = new WritableStream({
  write(chunk) {
    console.log(chunk);
  },
});

await stream.getWriter().write('Hello World');
</code></pre>
<h4><code>new WritableStream([underlyingSink[, strategy]])</code></h4>
<ul>
<li><code>underlyingSink</code> {Object}
<ul>
<li><code>start</code> {Function} A user-defined function that is invoked immediately when
the <code>WritableStream</code> is created.
<ul>
<li><code>controller</code> {WritableStreamDefaultController}</li>
<li>Returns: <code>undefined</code> or a promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>write</code> {Function} A user-defined function that is invoked when a chunk of
data has been written to the <code>WritableStream</code>.
<ul>
<li><code>chunk</code> {any}</li>
<li><code>controller</code> {WritableStreamDefaultController}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>close</code> {Function} A user-defined function that is called when the
<code>WritableStream</code> is closed.
<ul>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>abort</code> {Function} A user-defined function that is called to abruptly close
the <code>WritableStream</code>.
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>type</code> {any} The <code>type</code> option is reserved for future use and <em>must</em> be
undefined.</li>
</ul>
</li>
<li><code>strategy</code> {Object}
<ul>
<li><code>highWaterMark</code> {number} The maximum internal queue size before backpressure
is applied.</li>
<li><code>size</code> {Function} A user-defined function used to identify the size of each
chunk of data.
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: {number}</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4><code>writableStream.abort([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Abruptly terminates the <code>WritableStream</code>. All queued writes will be
canceled with their associated promises rejected.</p>
<h4><code>writableStream.close()</code></h4>
<ul>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Closes the <code>WritableStream</code> when no additional writes are expected.</p>
<h4><code>writableStream.getWriter()</code></h4>
<ul>
<li>Returns: {WritableStreamDefaultWriter}</li>
</ul>
<p>Creates and returns a new writer instance that can be used to write
data into the <code>WritableStream</code>.</p>
<h4><code>writableStream.locked</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The <code>writableStream.locked</code> property is <code>false</code> by default, and is
switched to <code>true</code> while there is an active writer attached to this
<code>WritableStream</code>.</p>
<h4>Transferring with postMessage()</h4>
<p>A {WritableStream} instance can be transferred using a {MessagePort}.</p>
<pre><code class="language-js">const stream = new WritableStream(getWritableSinkSomehow());

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) =&gt; {
  data.getWriter().write('hello');
};

port2.postMessage(stream, [stream]);
</code></pre>
<h3>Class: <code>WritableStreamDefaultWriter</code></h3>
<h4><code>new WritableStreamDefaultWriter(stream)</code></h4>
<ul>
<li><code>stream</code> {WritableStream}</li>
</ul>
<p>Creates a new <code>WritableStreamDefaultWriter</code> that is locked to the given
<code>WritableStream</code>.</p>
<h4><code>writableStreamDefaultWriter.abort([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Abruptly terminates the <code>WritableStream</code>. All queued writes will be
canceled with their associated promises rejected.</p>
<h4><code>writableStreamDefaultWriter.close()</code></h4>
<ul>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Closes the <code>WritableStream</code> when no additional writes are expected.</p>
<h4><code>writableStreamDefaultWriter.closed</code></h4>
<ul>
<li>Type: {Promise} Fulfilled with <code>undefined</code> when the associated
{WritableStream} is closed or rejected if the stream errors or the writer's
lock is released before the stream finishes closing.</li>
</ul>
<h4><code>writableStreamDefaultWriter.desiredSize</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The amount of data required to fill the {WritableStream}'s queue.</p>
<h4><code>writableStreamDefaultWriter.ready</code></h4>
<ul>
<li>Type: {Promise} Fulfilled with <code>undefined</code> when the writer is ready
to be used.</li>
</ul>
<h4><code>writableStreamDefaultWriter.releaseLock()</code></h4>
<p>Releases this writer's lock on the underlying {ReadableStream}.</p>
<h4><code>writableStreamDefaultWriter.write([chunk])</code></h4>
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
<p>Appends a new chunk of data to the {WritableStream}'s queue.</p>
<h3>Class: <code>WritableStreamDefaultController</code></h3>
<p>The <code>WritableStreamDefaultController</code> manages the {WritableStream}'s
internal state.</p>
<h4><code>writableStreamDefaultController.error([error])</code></h4>
<ul>
<li><code>error</code> {any}</li>
</ul>
<p>Called by user-code to signal that an error has occurred while processing
the <code>WritableStream</code> data. When called, the {WritableStream} will be aborted,
with currently pending writes canceled.</p>
<h4><code>writableStreamDefaultController.signal</code></h4>
<ul>
<li>Type: {AbortSignal} An <code>AbortSignal</code> that can be used to cancel pending
write or close operations when a {WritableStream} is aborted.</li>
</ul>
<h3>Class: <code>TransformStream</code></h3>
<p>A <code>TransformStream</code> consists of a {ReadableStream} and a {WritableStream} that
are connected such that the data written to the <code>WritableStream</code> is received,
and potentially transformed, before being pushed into the <code>ReadableStream</code>'s
queue.</p>
<pre><code class="language-mjs">import {
  TransformStream,
} from 'node:stream/web';

const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

await Promise.all([
  transform.writable.getWriter().write('A'),
  transform.readable.getReader().read(),
]);
</code></pre>
<h4><code>new TransformStream([transformer[, writableStrategy[, readableStrategy]]])</code></h4>
<ul>
<li><code>transformer</code> {Object}
<ul>
<li><code>start</code> {Function} A user-defined function that is invoked immediately when
the <code>TransformStream</code> is created.
<ul>
<li><code>controller</code> {TransformStreamDefaultController}</li>
<li>Returns: <code>undefined</code> or a promise fulfilled with <code>undefined</code></li>
</ul>
</li>
<li><code>transform</code> {Function} A user-defined function that receives, and
potentially modifies, a chunk of data written to <code>transformStream.writable</code>,
before forwarding that on to <code>transformStream.readable</code>.
<ul>
<li><code>chunk</code> {any}</li>
<li><code>controller</code> {TransformStreamDefaultController}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>flush</code> {Function} A user-defined function that is called immediately before
the writable side of the <code>TransformStream</code> is closed, signaling the end of
the transformation process.
<ul>
<li><code>controller</code> {TransformStreamDefaultController}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>cancel</code> {Function} A user-defined function that is called when either the
readable side of the <code>TransformStream</code> is canceled or the writable side is
aborted.
<ul>
<li><code>reason</code> {any}</li>
<li>Returns: A promise fulfilled with <code>undefined</code>.</li>
</ul>
</li>
<li><code>readableType</code> {any} the <code>readableType</code> option is reserved for future use
and <em>must</em> be <code>undefined</code>.</li>
<li><code>writableType</code> {any} the <code>writableType</code> option is reserved for future use
and <em>must</em> be <code>undefined</code>.</li>
</ul>
</li>
<li><code>writableStrategy</code> {Object}
<ul>
<li><code>highWaterMark</code> {number} The maximum internal queue size before backpressure
is applied.</li>
<li><code>size</code> {Function} A user-defined function used to identify the size of each
chunk of data.
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: {number}</li>
</ul>
</li>
</ul>
</li>
<li><code>readableStrategy</code> {Object}
<ul>
<li><code>highWaterMark</code> {number} The maximum internal queue size before backpressure
is applied.</li>
<li><code>size</code> {Function} A user-defined function used to identify the size of each
chunk of data.
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: {number}</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4><code>transformStream.readable</code></h4>
<ul>
<li>Type: {ReadableStream}</li>
</ul>
<h4><code>transformStream.writable</code></h4>
<ul>
<li>Type: {WritableStream}</li>
</ul>
<h4>Transferring with postMessage()</h4>
<p>A {TransformStream} instance can be transferred using a {MessagePort}.</p>
<pre><code class="language-js">const stream = new TransformStream();

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) =&gt; {
  const { writable, readable } = data;
  // ...
};

port2.postMessage(stream, [stream]);
</code></pre>
<h3>Class: <code>TransformStreamDefaultController</code></h3>
<p>The <code>TransformStreamDefaultController</code> manages the internal state
of the <code>TransformStream</code>.</p>
<h4><code>transformStreamDefaultController.desiredSize</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<p>The amount of data required to fill the readable side's queue.</p>
<h4><code>transformStreamDefaultController.enqueue([chunk])</code></h4>
<ul>
<li><code>chunk</code> {any}</li>
</ul>
<p>Appends a chunk of data to the readable side's queue.</p>
<h4><code>transformStreamDefaultController.error([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
</ul>
<p>Signals to both the readable and writable side that an error has occurred
while processing the transform data, causing both sides to be abruptly
closed.</p>
<h4><code>transformStreamDefaultController.terminate()</code></h4>
<p>Closes the readable side of the transport and causes the writable side
to be abruptly closed with an error.</p>
<h3>Class: <code>ByteLengthQueuingStrategy</code></h3>
<h4><code>new ByteLengthQueuingStrategy(init)</code></h4>
<ul>
<li><code>init</code> {Object}
<ul>
<li><code>highWaterMark</code> {number}</li>
</ul>
</li>
</ul>
<h4><code>byteLengthQueuingStrategy.highWaterMark</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<h4><code>byteLengthQueuingStrategy.size</code></h4>
<ul>
<li>Type: {Function}
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: {number}</li>
</ul>
</li>
</ul>
<h3>Class: <code>CountQueuingStrategy</code></h3>
<h4><code>new CountQueuingStrategy(init)</code></h4>
<ul>
<li><code>init</code> {Object}
<ul>
<li><code>highWaterMark</code> {number}</li>
</ul>
</li>
</ul>
<h4><code>countQueuingStrategy.highWaterMark</code></h4>
<ul>
<li>Type: {number}</li>
</ul>
<h4><code>countQueuingStrategy.size</code></h4>
<ul>
<li>Type: {Function}
<ul>
<li><code>chunk</code> {any}</li>
<li>Returns: {number}</li>
</ul>
</li>
</ul>
<h3>Class: <code>TextEncoderStream</code></h3>
<h4><code>new TextEncoderStream()</code></h4>
<p>Creates a new <code>TextEncoderStream</code> instance.</p>
<h4><code>textEncoderStream.encoding</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>The encoding supported by the <code>TextEncoderStream</code> instance.</p>
<h4><code>textEncoderStream.readable</code></h4>
<ul>
<li>Type: {ReadableStream}</li>
</ul>
<h4><code>textEncoderStream.writable</code></h4>
<ul>
<li>Type: {WritableStream}</li>
</ul>
<h3>Class: <code>TextDecoderStream</code></h3>
<h4><code>new TextDecoderStream([encoding[, options]])</code></h4>
<ul>
<li><code>encoding</code> {string} Identifies the <code>encoding</code> that this <code>TextDecoder</code> instance
supports. <strong>Default:</strong> <code>'utf-8'</code>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>fatal</code> {boolean} <code>true</code> if decoding failures are fatal.</li>
<li><code>ignoreBOM</code> {boolean} When <code>true</code>, the <code>TextDecoderStream</code> will include the
byte order mark in the decoded result. When <code>false</code>, the byte order mark
will be removed from the output. This option is only used when <code>encoding</code> is
<code>'utf-8'</code>, <code>'utf-16be'</code>, or <code>'utf-16le'</code>. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Creates a new <code>TextDecoderStream</code> instance.</p>
<h4><code>textDecoderStream.encoding</code></h4>
<ul>
<li>Type: {string}</li>
</ul>
<p>The encoding supported by the <code>TextDecoderStream</code> instance.</p>
<h4><code>textDecoderStream.fatal</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The value will be <code>true</code> if decoding errors result in a <code>TypeError</code> being
thrown.</p>
<h4><code>textDecoderStream.ignoreBOM</code></h4>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>The value will be <code>true</code> if the decoding result will include the byte order
mark.</p>
<h4><code>textDecoderStream.readable</code></h4>
<ul>
<li>Type: {ReadableStream}</li>
</ul>
<h4><code>textDecoderStream.writable</code></h4>
<ul>
<li>Type: {WritableStream}</li>
</ul>
<h3>Class: <code>CompressionStream</code></h3>
<h4><code>new CompressionStream(format)</code></h4>
<ul>
<li><code>format</code> {string} One of <code>'deflate'</code>, <code>'deflate-raw'</code>, <code>'gzip'</code>, or <code>'brotli'</code>.</li>
</ul>
<h4><code>compressionStream.readable</code></h4>
<ul>
<li>Type: {ReadableStream}</li>
</ul>
<h4><code>compressionStream.writable</code></h4>
<ul>
<li>Type: {WritableStream}</li>
</ul>
<h3>Class: <code>DecompressionStream</code></h3>
<h4><code>new DecompressionStream(format)</code></h4>
<ul>
<li><code>format</code> {string} One of <code>'deflate'</code>, <code>'deflate-raw'</code>, <code>'gzip'</code>, or <code>'brotli'</code>.</li>
</ul>
<h4><code>decompressionStream.readable</code></h4>
<ul>
<li>Type: {ReadableStream}</li>
</ul>
<h4><code>decompressionStream.writable</code></h4>
<ul>
<li>Type: {WritableStream}</li>
</ul>
<h3>Utility Consumers</h3>
<p>The utility consumer functions provide common options for consuming
streams.</p>
<p>They are accessed using:</p>
<pre><code class="language-mjs">import {
  arrayBuffer,
  blob,
  buffer,
  json,
  text,
} from 'node:stream/consumers';
</code></pre>
<pre><code class="language-cjs">const {
  arrayBuffer,
  blob,
  buffer,
  json,
  text,
} = require('node:stream/consumers');
</code></pre>
<h4><code>streamConsumers.arrayBuffer(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream|stream.Readable|AsyncIterator}</li>
<li>Returns: {Promise} Fulfills with an <code>ArrayBuffer</code> containing the full
contents of the stream.</li>
</ul>
<pre><code class="language-mjs">import { arrayBuffer } from 'node:stream/consumers';
import { Readable } from 'node:stream';
import { TextEncoder } from 'node:util';

const encoder = new TextEncoder();
const dataArray = encoder.encode('hello world from consumers!');

const readable = Readable.from(dataArray);
const data = await arrayBuffer(readable);
console.log(`from readable: ${data.byteLength}`);
// Prints: from readable: 76
</code></pre>
<pre><code class="language-cjs">const { arrayBuffer } = require('node:stream/consumers');
const { Readable } = require('node:stream');
const { TextEncoder } = require('node:util');

const encoder = new TextEncoder();
const dataArray = encoder.encode('hello world from consumers!');
const readable = Readable.from(dataArray);
arrayBuffer(readable).then((data) =&gt; {
  console.log(`from readable: ${data.byteLength}`);
  // Prints: from readable: 76
});
</code></pre>
<h4><code>streamConsumers.blob(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream|stream.Readable|AsyncIterator}</li>
<li>Returns: {Promise} Fulfills with a {Blob} containing the full contents
of the stream.</li>
</ul>
<pre><code class="language-mjs">import { blob } from 'node:stream/consumers';

const dataBlob = new Blob(['hello world from consumers!']);

const readable = dataBlob.stream();
const data = await blob(readable);
console.log(`from readable: ${data.size}`);
// Prints: from readable: 27
</code></pre>
<pre><code class="language-cjs">const { blob } = require('node:stream/consumers');

const dataBlob = new Blob(['hello world from consumers!']);

const readable = dataBlob.stream();
blob(readable).then((data) =&gt; {
  console.log(`from readable: ${data.size}`);
  // Prints: from readable: 27
});
</code></pre>
<h4><code>streamConsumers.buffer(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream|stream.Readable|AsyncIterator}</li>
<li>Returns: {Promise} Fulfills with a {Buffer} containing the full
contents of the stream.</li>
</ul>
<pre><code class="language-mjs">import { buffer } from 'node:stream/consumers';
import { Readable } from 'node:stream';
import { Buffer } from 'node:buffer';

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
const data = await buffer(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27
</code></pre>
<pre><code class="language-cjs">const { buffer } = require('node:stream/consumers');
const { Readable } = require('node:stream');
const { Buffer } = require('node:buffer');

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
buffer(readable).then((data) =&gt; {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 27
});
</code></pre>
<h4><code>streamConsumers.bytes(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream|stream.Readable|AsyncIterator}</li>
<li>Returns: {Promise} Fulfills with a {Uint8Array} containing the full
contents of the stream.</li>
</ul>
<pre><code class="language-mjs">import { bytes } from 'node:stream/consumers';
import { Readable } from 'node:stream';
import { Buffer } from 'node:buffer';

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
const data = await bytes(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27
</code></pre>
<pre><code class="language-cjs">const { bytes } = require('node:stream/consumers');
const { Readable } = require('node:stream');
const { Buffer } = require('node:buffer');

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
bytes(readable).then((data) =&gt; {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 27
});
</code></pre>
<h4><code>streamConsumers.json(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream|stream.Readable|AsyncIterator}</li>
<li>Returns: {Promise} Fulfills with the contents of the stream parsed as a
UTF-8 encoded string that is then passed through <code>JSON.parse()</code>.</li>
</ul>
<pre><code class="language-mjs">import { json } from 'node:stream/consumers';
import { Readable } from 'node:stream';

const items = Array.from(
  {
    length: 100,
  },
  () =&gt; ({
    message: 'hello world from consumers!',
  }),
);

const readable = Readable.from(JSON.stringify(items));
const data = await json(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 100
</code></pre>
<pre><code class="language-cjs">const { json } = require('node:stream/consumers');
const { Readable } = require('node:stream');

const items = Array.from(
  {
    length: 100,
  },
  () =&gt; ({
    message: 'hello world from consumers!',
  }),
);

const readable = Readable.from(JSON.stringify(items));
json(readable).then((data) =&gt; {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 100
});
</code></pre>
<h4><code>streamConsumers.text(stream)</code></h4>
<ul>
<li><code>stream</code> {ReadableStream|stream.Readable|AsyncIterator}</li>
<li>Returns: {Promise} Fulfills with the contents of the stream parsed as a
UTF-8 encoded string.</li>
</ul>
<pre><code class="language-mjs">import { text } from 'node:stream/consumers';
import { Readable } from 'node:stream';

const readable = Readable.from('Hello world from consumers!');
const data = await text(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27
</code></pre>
<pre><code class="language-cjs">const { text } = require('node:stream/consumers');
const { Readable } = require('node:stream');

const readable = Readable.from('Hello world from consumers!');
text(readable).then((data) =&gt; {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 27
});
</code></pre>
