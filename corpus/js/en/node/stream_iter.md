---
id: "js-en-function-node-stream_iter"
language: "js"
lang: "en"
category: "function"
name: "node:stream_iter"
title: "Iterable Streams"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/stream_iter.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Iterable Streams

<h1>Iterable Streams</h1>
<blockquote>
<p>Stability: 1 - Experimental – Enable this API with the <a href="cli.md#--experimental-stream-iter"><code>--experimental-stream-iter</code></a> CLI flag.</p>
</blockquote>
<p>The <code>node:stream/iter</code> module provides a streaming API built on iterables
rather than the event-driven <code>Readable</code>/<code>Writable</code>/<code>Transform</code> class hierarchy,
or the Web Streams <code>ReadableStream</code>/<code>WritableStream</code>/<code>TransformStream</code> interfaces.</p>
<p>Streams are represented as {AsyncIterable} (async) or {Iterable} (sync). There
are no base classes to extend -- any
object implementing the iterable protocol can participate. Transforms are plain
functions or objects with a <code>transform</code> method.</p>
<p>Data flows in <strong>batches</strong> ({Uint8Array[]} per iteration) to amortize the cost
of async operations.</p>
<pre><code class="language-mjs">import { from, pull, text } from 'node:stream/iter';
import { compressGzip, decompressGzip } from 'node:zlib/iter';

// Compress and decompress a string
const compressed = pull(from('Hello, world!'), compressGzip());
const result = await text(pull(compressed, decompressGzip()));
console.log(result); // 'Hello, world!'
</code></pre>
<pre><code class="language-cjs">const { from, pull, text } = require('node:stream/iter');
const { compressGzip, decompressGzip } = require('node:zlib/iter');

async function run() {
  // Compress and decompress a string
  const compressed = pull(from('Hello, world!'), compressGzip());
  const result = await text(pull(compressed, decompressGzip()));
  console.log(result); // 'Hello, world!'
}

run().catch(console.error);
</code></pre>
<pre><code class="language-mjs">import { open } from 'node:fs/promises';
import { text, pipeTo } from 'node:stream/iter';
import { compressGzip, decompressGzip } from 'node:zlib/iter';

// Read a file, compress, write to another file
const src = await open('input.txt', 'r');
const dst = await open('output.gz', 'w');
await pipeTo(src.pull(), compressGzip(), dst.writer({ autoClose: true }));
await src.close();

// Read it back
const gz = await open('output.gz', 'r');
console.log(await text(gz.pull(decompressGzip(), { autoClose: true })));
</code></pre>
<pre><code class="language-cjs">const { open } = require('node:fs/promises');
const { text, pipeTo } = require('node:stream/iter');
const { compressGzip, decompressGzip } = require('node:zlib/iter');

async function run() {
  // Read a file, compress, write to another file
  const src = await open('input.txt', 'r');
  const dst = await open('output.gz', 'w');
  await pipeTo(src.pull(), compressGzip(), dst.writer({ autoClose: true }));
  await src.close();

  // Read it back
  const gz = await open('output.gz', 'r');
  console.log(await text(gz.pull(decompressGzip(), { autoClose: true })));
}

run().catch(console.error);
</code></pre>
<h2>Concepts</h2>
<h3>Byte streams</h3>
<p>All data in this API is represented as {Uint8Array} bytes. Strings
are automatically UTF-8 encoded when passed to <code>from()</code>, <code>push()</code>, or
<code>pipeTo()</code>. This removes ambiguity around encodings and enables zero-copy
transfers between streams and native code.</p>
<h3>Batching</h3>
<p>Each iteration yields a <strong>batch</strong> -- an {Array} of {Uint8Array} chunks
({Uint8Array[]}). Batching amortizes the cost of <code>await</code> and {Promise} creation
across multiple chunks. A consumer that processes one chunk at a time can
simply iterate the inner array:</p>
<pre><code class="language-mjs">for await (const batch of source) {
  for (const chunk of batch) {
    handle(chunk);
  }
}
</code></pre>
<pre><code class="language-cjs">async function run() {
  for await (const batch of source) {
    for (const chunk of batch) {
      handle(chunk);
    }
  }
}
</code></pre>
<h3>Transforms</h3>
<p>Transforms come in two forms:</p>
<ul>
<li>
<p><strong>Stateless</strong> -- a function <code>(chunks, options) =&gt; result</code> called once per
batch. Receives <code>Uint8Array[]</code> (or <code>null</code> as the flush signal) and an
<code>options</code> object. Returns {Uint8Array[]|null|Iterable}.</p>
</li>
<li>
<p><strong>Stateful</strong> -- an object <code>{ transform(source, options) }</code> where <code>transform</code>
is a generator (sync or async) that receives the entire upstream iterable
and an <code>options</code> object, and yields output. This form is used for
compression, encryption, and any transform that needs to buffer across
batches.</p>
</li>
</ul>
<p>Both forms receive an <code>options</code> parameter with the following property:</p>
<ul>
<li><code>options.signal</code> {AbortSignal} An AbortSignal that fires when the pipeline
is cancelled, encounters an error, or the consumer stops reading. Transforms
can check <code>signal.aborted</code> or listen for the <code>'abort'</code> event to perform
early cleanup.</li>
</ul>
<p>The flush signal (<code>null</code>) is sent after the source ends, giving transforms
a chance to emit trailing data (e.g., compression footers).</p>
<pre><code class="language-js">// Stateless: uppercase transform
const upper = (chunks) =&gt; {
  if (chunks === null) return null; // flush
  return chunks.map((c) =&gt; new TextEncoder().encode(
    new TextDecoder().decode(c).toUpperCase(),
  ));
};

// Stateful: line splitter
const lines = {
  transform: async function*(source) {
    let partial = '';
    for await (const chunks of source) {
      if (chunks === null) {
        if (partial) yield [new TextEncoder().encode(partial)];
        continue;
      }
      for (const chunk of chunks) {
        const str = partial + new TextDecoder().decode(chunk);
        const parts = str.split('\n');
        partial = parts.pop();
        for (const line of parts) {
          yield [new TextEncoder().encode(`${line}\n`)];
        }
      }
    }
  },
};
</code></pre>
<h3>Pull vs. push</h3>
<p>The API supports two models:</p>
<ul>
<li>
<p><strong>Pull</strong> -- data flows on demand. <code>pull()</code> and <code>pullSync()</code> create lazy
pipelines that only read from the source when the consumer iterates.</p>
</li>
<li>
<p><strong>Push</strong> -- data is written explicitly. <code>push()</code> creates a writer/readable
pair with backpressure. The writer pushes data in; the readable is consumed
as an async iterable.</p>
</li>
</ul>
<h3>Backpressure</h3>
<p>Pull streams have natural backpressure -- the consumer drives the pace, so
the source is never read faster than the consumer can process. Push streams
need explicit backpressure because the producer and consumer run
independently. The <code>budget</code> and <code>backpressure</code> options on <code>push()</code>,
<code>broadcast()</code>, and <code>share()</code> control how this works.</p>
<h4>The two-buffer model</h4>
<p>Push streams use a two-part buffering system. Think of it like a bucket
(buffer) being filled through a hose (pending writes), with a float valve
that closes when the bucket is full:</p>
<pre><code class="language-text">                          budget (e.g., 16384)
                                 |
    Producer                     v
       |                    +---------+
       v                    |         |
  [ write() ] ----+    +---&gt;| buffer  |---&gt; Consumer pulls
  [ write() ]     |    |    | (bucket)|     for await (...)
  [ write() ]     v    |    +---------+
              +--------+         ^
              | pending|         |
              | writes |    float valve
              | (hose) |    (backpressure)
              +--------+
                   ^
                   |
          'strict' mode limits this too!
</code></pre>
<ul>
<li>
<p><strong>Buffer (the bucket)</strong> -- data ready for the consumer, capped at
<code>budget</code> bytes. When the consumer pulls, it drains all buffered data
at once into a single batch.</p>
</li>
<li>
<p><strong>Pending writes (the hose)</strong> -- writes waiting for buffer space. After
the consumer drains, pending writes are promoted into the now-empty
buffer and their promises settle.</p>
</li>
</ul>
<p>How each policy uses these buffers:</p>
<table>
<thead>
<tr>
<th>Policy</th>
<th>Buffer limit</th>
<th>Pending writes limit</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>'strict'</code></td>
<td><code>budget</code></td>
<td>1</td>
</tr>
<tr>
<td><code>'unbounded'</code></td>
<td><code>budget</code></td>
<td>Unbounded</td>
</tr>
<tr>
<td><code>'drop-oldest'</code></td>
<td><code>budget</code></td>
<td>N/A (never waits)</td>
</tr>
<tr>
<td><code>'drop-newest'</code></td>
<td><code>budget</code></td>
<td>N/A (never waits)</td>
</tr>
</tbody>
</table>
<h4>Strict (default)</h4>
<p>Strict mode catches &quot;fire-and-forget&quot; patterns where the producer calls
<code>write()</code> without awaiting, which would cause unbounded memory growth.
It limits the buffer to <code>budget</code> bytes and the pending writes queue
to a single entry.</p>
<p>If you properly await each write, you can only ever have one pending
write at a time (yours), so you never hit the pending writes limit.
Unawaited writes accumulate in the pending queue and throw once it
overflows:</p>
<pre><code class="language-mjs">import { push, text } from 'node:stream/iter';

const { writer, readable } = push({ budget: 16384 });

// Consumer must run concurrently -- without it, the first write
// that fills the buffer blocks the producer forever.
const consuming = text(readable);

// GOOD: awaited writes. The producer waits for the consumer to
// make room when the buffer is full.
for (const item of dataset) {
  await writer.write(item);
}
await writer.end();
console.log(await consuming);
</code></pre>
<pre><code class="language-cjs">const { push, text } = require('node:stream/iter');

async function run() {
  const { writer, readable } = push({ budget: 16384 });

  // Consumer must run concurrently -- without it, the first write
  // that fills the buffer blocks the producer forever.
  const consuming = text(readable);

  // GOOD: awaited writes. The producer waits for the consumer to
  // make room when the buffer is full.
  for (const item of dataset) {
    await writer.write(item);
  }
  await writer.end();
  console.log(await consuming);
}

run().catch(console.error);
</code></pre>
<p>Forgetting to <code>await</code> will eventually throw:</p>
<pre><code class="language-js">// BAD: fire-and-forget. Strict mode throws once both buffers fill.
for (const item of dataset) {
  writer.write(item); // Not awaited -- queues without bound
}
// --&gt; throws &quot;Backpressure violation: too many pending writes&quot;
</code></pre>
<h4>Unbounded</h4>
<p>Unbounded mode caps buffered bytes at <code>budget</code> but places no limit on the
pending writes queue. Awaited writes block until the consumer makes room,
just like strict mode. The difference is that unawaited writes silently
queue forever instead of throwing -- a potential memory leak if the
producer forgets to <code>await</code>.</p>
<p>This is the mode that existing Node.js classic streams and Web Streams
default to. Use it when you control the producer and know it awaits
properly, or when migrating code from those APIs.</p>
<pre><code class="language-mjs">import { push, text } from 'node:stream/iter';

const { writer, readable } = push({
  budget: 16384,
  backpressure: 'unbounded',
});

const consuming = text(readable);

// Safe -- awaited writes block until the consumer reads.
for (const item of dataset) {
  await writer.write(item);
}
await writer.end();
console.log(await consuming);
</code></pre>
<pre><code class="language-cjs">const { push, text } = require('node:stream/iter');

async function run() {
  const { writer, readable } = push({
    budget: 16384,
    backpressure: 'unbounded',
  });

  const consuming = text(readable);

  // Safe -- awaited writes block until the consumer reads.
  for (const item of dataset) {
    await writer.write(item);
  }
  await writer.end();
  console.log(await consuming);
}

run().catch(console.error);
</code></pre>
<h4>Drop-oldest</h4>
<p>Writes never wait. When the slots buffer is full, the oldest buffered
chunk is evicted to make room for the incoming write. The consumer
always sees the most recent data. Useful for live feeds, telemetry, or
any scenario where stale data is less valuable than current data.</p>
<pre><code class="language-mjs">import { push } from 'node:stream/iter';

// Keep only the most recent ~16 KB of readings
const { writer, readable } = push({
  budget: 16384,
  backpressure: 'drop-oldest',
});
</code></pre>
<pre><code class="language-cjs">const { push } = require('node:stream/iter');

// Keep only the most recent ~16 KB of readings
const { writer, readable } = push({
  budget: 16384,
  backpressure: 'drop-oldest',
});
</code></pre>
<h4>Drop-newest</h4>
<p>Writes never wait. When the slots buffer is full, the incoming write is
silently discarded. The consumer processes what is already buffered
without being overwhelmed by new data. Useful for rate-limiting or
shedding load under pressure.</p>
<pre><code class="language-mjs">import { push } from 'node:stream/iter';

// Accept up to 16 KB of buffered data; discard anything beyond that
const { writer, readable } = push({
  budget: 16384,
  backpressure: 'drop-newest',
});
</code></pre>
<pre><code class="language-cjs">const { push } = require('node:stream/iter');

// Accept up to 16 KB of buffered data; discard anything beyond that
const { writer, readable } = push({
  budget: 16384,
  backpressure: 'drop-newest',
});
</code></pre>
<h3>Writer interface</h3>
<p>A writer is any object conforming to the Writer interface. Only <code>write()</code> is
required; all other methods are optional.</p>
<p>Writer arguments use Web IDL conversion semantics. A non-<code>Uint8Array</code> chunk is
converted to a <code>USVString</code> and then UTF-8 encoded. <code>writev()</code> and
<code>writevSync()</code> accept any iterable object whose values can be converted to
chunks. Writer option dictionaries treat <code>null</code> as an empty dictionary and
ignore unknown members.</p>
<p>Each async method has a synchronous <code>*Sync</code> counterpart designed for a
try-fallback pattern: attempt the fast synchronous path first, and fall back
to the async version only when the synchronous call indicates it could not
complete:</p>
<pre><code class="language-mjs">if (!writer.writeSync(chunk)) await writer.write(chunk);
if (!writer.writevSync(chunks)) await writer.writev(chunks);
if (writer.endSync() &lt; 0) await writer.end();
writer.fail(err);  // Always synchronous, no fallback needed
</code></pre>
<h4><code>writer.canWrite</code></h4>
<ul>
<li>{boolean|null}</li>
</ul>
<p>Returns <code>true</code> if the slots buffer has physical capacity (buffered data is
below the configured byte budget), <code>false</code> if the budget is exhausted, or
<code>null</code> if the writer is closed or the consumer has disconnected.</p>
<p>This reports physical capacity independently of the backpressure policy. With
<code>'drop-oldest'</code> or <code>'drop-newest'</code>, writes still complete when this is <code>false</code>
by evicting buffered data or discarding the incoming data, respectively.</p>
<p>This is a hint, not a guarantee: the state can change between the check and
the write. Use <a href="#ondraindrainable"><code>ondrain()</code></a> to wait for capacity rather than polling.</p>
<h4><code>writer.end([options])</code></h4>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Cancel just this operation. The signal cancels only
the pending <code>end()</code> call; it does not fail the writer itself.</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with the total number of bytes written.</li>
</ul>
<p>Signals that no more data will be written. Writes already waiting for buffer
space remain ordered before the end of the stream, while later writes fail. If
data is outstanding, the returned promise fulfills after the consumer pulls
<code>done: true</code> beyond the final batch. If no data is buffered or pending, the
writer closes immediately.</p>
<h4><code>writer.endSync()</code></h4>
<ul>
<li>Returns: {number} Total bytes written, or <code>-1</code> if ending cannot complete
synchronously.</li>
</ul>
<p>Synchronous variant of <code>writer.end()</code>. A return value of <code>-1</code> only indicates
that the operation could not complete synchronously; no assumption can be made
about whether closing has started or why it could not complete. Use the
try-fallback pattern to await completion:</p>
<pre><code class="language-cjs">const result = writer.endSync();
if (result &lt; 0) {
  writer.end();
}
</code></pre>
<h4><code>writer.fail([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
</ul>
<p>Put the writer into a terminal error state. If the writer is already closed
or errored, this is a no-op. Unlike <code>write()</code> and <code>end()</code>, <code>fail()</code> is
unconditionally synchronous because failing a writer is a pure state
transition with no async work to perform. The reason is stored and propagated
without modification. If omitted, the reason is <code>undefined</code>.</p>
<h4><code>writer[Symbol.asyncDispose]()</code></h4>
<p>If the writer is open, calls <code>writer.fail()</code>. If the writer is closing after
<code>end()</code> or <code>endSync()</code>, waits for buffered data to drain. If the writer is
already closed or errored, resolves immediately.</p>
<h4><code>writer.write(chunk[, options])</code></h4>
<ul>
<li><code>chunk</code> {Uint8Array|string}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Cancel just this write operation. The signal cancels
only the pending <code>write()</code> call; it does not fail the writer itself.</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with <code>undefined</code> when buffer space is available.</li>
</ul>
<p>Write a chunk.</p>
<h4><code>writer.writeSync(chunk)</code></h4>
<ul>
<li><code>chunk</code> {Uint8Array|string}</li>
<li>Returns: {boolean} <code>true</code> if the write was accepted, <code>false</code> if the
buffer is full.</li>
</ul>
<p>Synchronous write. Does not block; returns <code>false</code> if backpressure is active.</p>
<h4><code>writer.writev(chunks[, options])</code></h4>
<ul>
<li><code>chunks</code> {Iterable} of {Uint8Array|string} values</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Cancel just this write operation. The signal cancels
only the pending <code>writev()</code> call; it does not fail the writer itself.</li>
</ul>
</li>
<li>Returns: {Promise}</li>
</ul>
<p>Write multiple chunks as a single batch.</p>
<h4><code>writer.writevSync(chunks)</code></h4>
<ul>
<li><code>chunks</code> {Iterable} of {Uint8Array|string} values</li>
<li>Returns: {boolean} <code>true</code> if the write was accepted, <code>false</code> if the
buffer is full.</li>
</ul>
<p>Synchronous batch write.</p>
<h2>The <code>stream/iter</code> module</h2>
<p>Most functions are available both as named exports and as properties of the
<code>Stream</code> namespace object. The classic stream adapters (<code>fromReadable()</code>,
<code>fromWritable()</code>, <code>toReadable()</code>, <code>toReadableSync()</code>, and <code>toWritable()</code>) and
the static helper objects (<code>Broadcast</code>, <code>Share</code>, and <code>SyncShare</code>) are named
exports only.</p>
<pre><code class="language-mjs">// Named exports
import { from, pull, bytes, Stream } from 'node:stream/iter';

// Namespace access
Stream.from('hello');
</code></pre>
<p>Options dictionaries defined by the Iterable Streams API use Web IDL
conversion semantics. <code>null</code> is treated as an empty dictionary, unknown
members are ignored, and known members are converted to their declared types
before the operation runs. Conversion failures use Node.js error codes such as
<code>ERR_INVALID_ARG_TYPE</code>, <code>ERR_INVALID_ARG_VALUE</code>, and <code>ERR_OUT_OF_RANGE</code>.</p>
<pre><code class="language-cjs">// Named exports
const { from, pull, bytes, Stream } = require('node:stream/iter');

// Namespace access
Stream.from('hello');
</code></pre>
<p>Including the <code>node:</code> prefix on the module specifier is optional.</p>
<h2>Sources</h2>
<h3><code>from(input)</code></h3>
<ul>
<li><code>input</code> {string|ArrayBuffer|ArrayBufferView|Iterable|AsyncIterable|Object}
Must not be <code>null</code> or <code>undefined</code>.</li>
<li>Returns: {AsyncIterable} whose chunks fulfill with {Uint8Array[]}.</li>
</ul>
<p>Create an async byte stream from the given input. Strings are UTF-8 encoded.
<code>ArrayBuffer</code> and <code>ArrayBufferView</code> values are wrapped as <code>Uint8Array</code>. Arrays
and iterables in <code>input</code> are recursively flattened and normalized. Flattened
values may be split across implementation-defined bounded batches.</p>
<p>Objects implementing <code>Symbol.for('Stream.toAsyncStreamable')</code> or
<code>Symbol.for('Stream.toStreamable')</code> are converted via those protocols. The
<code>toAsyncStreamable</code> protocol takes precedence over <code>toStreamable</code>, which takes
precedence over the iteration protocols (<code>Symbol.asyncIterator</code>,
<code>Symbol.iterator</code>).</p>
<pre><code class="language-mjs">import { Buffer } from 'node:buffer';
import { from, text } from 'node:stream/iter';

console.log(await text(from('hello')));       // 'hello'
console.log(await text(from(Buffer.from('hello')))); // 'hello'
</code></pre>
<pre><code class="language-cjs">const { Buffer } = require('node:buffer');
const { from, text } = require('node:stream/iter');

async function run() {
  console.log(await text(from('hello')));       // 'hello'
  console.log(await text(from(Buffer.from('hello')))); // 'hello'
}

run().catch(console.error);
</code></pre>
<h3><code>fromSync(input)</code></h3>
<ul>
<li><code>input</code> {string|ArrayBuffer|ArrayBufferView|Iterable|Object}
Must not be <code>null</code> or <code>undefined</code>.</li>
<li>Returns: {Iterable} whose chunks return {Uint8Array[]}</li>
</ul>
<p>Synchronous version of <a href="#frominput"><code>from()</code></a>. Returns a sync iterable. Cannot accept
async iterables or promises. Objects implementing
<code>Symbol.for('Stream.toStreamable')</code> are converted via that protocol (takes
precedence over <code>Symbol.iterator</code>). The <code>toAsyncStreamable</code> protocol is
ignored entirely.</p>
<pre><code class="language-mjs">import { fromSync, textSync } from 'node:stream/iter';

console.log(textSync(fromSync('hello'))); // 'hello'
</code></pre>
<pre><code class="language-cjs">const { fromSync, textSync } = require('node:stream/iter');

console.log(textSync(fromSync('hello'))); // 'hello'
</code></pre>
<h2>Pipelines</h2>
<h3><code>pipeTo(source[, ...transforms], writer[, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable|Iterable} The data source.</li>
<li><code>...transforms</code> {Function|Object} Zero or more transforms to apply.</li>
<li><code>writer</code> {Object} Destination with <code>write(chunk)</code> method.</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Abort the pipeline. Aborting fails the destination
writer unless <code>preventFail</code> is <code>true</code>.</li>
<li><code>preventClose</code> {boolean} If <code>true</code>, do not call <code>writer.end()</code> when
the source ends. <strong>Default:</strong> <code>false</code>.</li>
<li><code>preventFail</code> {boolean} If <code>true</code>, do not call <code>writer.fail()</code> on
error. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with the total number of bytes written.</li>
</ul>
<p>Pipe a source through transforms into a writer. If the writer has a
<code>writev(chunks)</code> method, entire batches are passed in a single call (enabling
scatter/gather I/O).</p>
<p>If the writer implements the optional <code>*Sync</code> methods (<code>writeSync</code>, <code>writevSync</code>,
<code>endSync</code>), <code>pipeTo()</code> will attempt to use the synchronous methods
first as a fast path, and fall back to the async versions only when the sync
methods indicate they cannot complete (e.g., backpressure or waiting for the
next tick). <code>fail()</code> is always called synchronously.</p>
<pre><code class="language-mjs">import { from, pipeTo } from 'node:stream/iter';
import { compressGzip } from 'node:zlib/iter';
import { open } from 'node:fs/promises';

const fh = await open('output.gz', 'w');
const totalBytes = await pipeTo(
  from('Hello, world!'),
  compressGzip(),
  fh.writer({ autoClose: true }),
);
</code></pre>
<pre><code class="language-cjs">const { from, pipeTo } = require('node:stream/iter');
const { compressGzip } = require('node:zlib/iter');
const { open } = require('node:fs/promises');

async function run() {
  const fh = await open('output.gz', 'w');
  const totalBytes = await pipeTo(
    from('Hello, world!'),
    compressGzip(),
    fh.writer({ autoClose: true }),
  );
}

run().catch(console.error);
</code></pre>
<h3><code>pipeToSync(source[, ...transforms], writer[, options])</code></h3>
<ul>
<li><code>source</code> {Iterable} The sync data source.</li>
<li><code>...transforms</code> {Function|Object} Zero or more sync transforms.</li>
<li><code>writer</code> {Object} Destination with <code>write(chunk)</code> method.</li>
<li><code>options</code> {Object}
<ul>
<li><code>preventClose</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
<li><code>preventFail</code> {boolean} <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {number} Total bytes written.</li>
</ul>
<p>Synchronous version of <a href="#pipetosource-transforms-writer-options"><code>pipeTo()</code></a>. The <code>source</code>, all transforms, and the
<code>writer</code> must be synchronous. Cannot accept async iterables or promises.</p>
<p>The <code>writer</code> must have the <code>*Sync</code> methods (<code>writeSync</code>, <code>writevSync</code>,
<code>endSync</code>) and <code>fail()</code> for this to work.</p>
<h3><code>pull(source[, ...transforms][, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable|Iterable} The data source.</li>
<li><code>...transforms</code> {Function|Object} Zero or more transforms to apply.</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal} Abort the pipeline.</li>
</ul>
</li>
<li>Returns: {AsyncIterable} whose chunks fulfill with {Uint8Array[]}</li>
</ul>
<p>Create a lazy async pipeline. Source conversion and streamable protocol
dispatch occur when <code>pull()</code> is called, but data is not read from <code>source</code>
until the returned iterable is consumed. A signal that is already aborted is
thrown synchronously after source conversion. Transforms are applied in order.</p>
<pre><code class="language-mjs">import { from, pull, text } from 'node:stream/iter';

const asciiUpper = (chunks) =&gt; {
  if (chunks === null) return null;
  return chunks.map((c) =&gt; {
    for (let i = 0; i &lt; c.length; i++) {
      c[i] -= (c[i] &gt;= 97 &amp;&amp; c[i] &lt;= 122) * 32;
    }
    return c;
  });
};

const result = pull(from('hello'), asciiUpper);
console.log(await text(result)); // 'HELLO'
</code></pre>
<pre><code class="language-cjs">const { from, pull, text } = require('node:stream/iter');

const asciiUpper = (chunks) =&gt; {
  if (chunks === null) return null;
  return chunks.map((c) =&gt; {
    for (let i = 0; i &lt; c.length; i++) {
      c[i] -= (c[i] &gt;= 97 &amp;&amp; c[i] &lt;= 122) * 32;
    }
    return c;
  });
};

async function run() {
  const result = pull(from('hello'), asciiUpper);
  console.log(await text(result)); // 'HELLO'
}

run().catch(console.error);
</code></pre>
<p>Using an <code>AbortSignal</code>:</p>
<pre><code class="language-mjs">import { pull } from 'node:stream/iter';

const ac = new AbortController();
const result = pull(source, transform, { signal: ac.signal });
ac.abort(); // Pipeline throws AbortError on next iteration
</code></pre>
<pre><code class="language-cjs">const { pull } = require('node:stream/iter');

const ac = new AbortController();
const result = pull(source, transform, { signal: ac.signal });
ac.abort(); // Pipeline throws AbortError on next iteration
</code></pre>
<h3><code>pullSync(source[, ...transforms])</code></h3>
<ul>
<li><code>source</code> {Iterable} The sync data source.</li>
<li><code>...transforms</code> {Function|Object} Zero or more sync transforms.</li>
<li>Returns: {Iterable} whose chunks return {Uint8Array[]}</li>
</ul>
<p>Synchronous version of <a href="#pullsource-transforms-options"><code>pull()</code></a>. Source conversion and streamable protocol
dispatch occur when <code>pullSync()</code> is called. All transforms must be synchronous.</p>
<h2>Push streams</h2>
<h3><code>push([...transforms][, options])</code></h3>
<ul>
<li><code>...transforms</code> {Function|Object} Optional transforms applied to the
readable side.</li>
<li><code>options</code> {Object}
<ul>
<li><code>budget</code> {number} Maximum number of buffered bytes before
backpressure is applied. Must be &gt;= 16384.
<strong>Default:</strong> <code>16384</code>.</li>
<li><code>backpressure</code> {string} Backpressure policy: <code>'strict'</code>, <code>'unbounded'</code>,
<code>'drop-oldest'</code>, or <code>'drop-newest'</code>. <strong>Default:</strong> <code>'strict'</code>.</li>
<li><code>signal</code> {AbortSignal} Abort the stream. The signal remains active while
buffered data drains after <code>writer.end()</code>; aborting during that time fails
the writer and rejects the pending <code>end()</code> promise.</li>
</ul>
</li>
<li>Returns: {Object}
<ul>
<li><code>writer</code> {Writable} The writer side.</li>
<li><code>readable</code> {AsyncIterable} whose chunks fulfill with {Uint8Array[]}</li>
</ul>
</li>
</ul>
<p>Create a push stream with backpressure. The writer pushes data in; the
readable side is consumed as an async iterable.</p>
<pre><code class="language-mjs">import { push, text } from 'node:stream/iter';

const { writer, readable } = push();

// Producer and consumer must run concurrently. With strict backpressure
// (the default), awaited writes block until the consumer reads.
const producing = (async () =&gt; {
  await writer.write('hello');
  await writer.write(' world');
  await writer.end();
})();

console.log(await text(readable)); // 'hello world'
await producing;
</code></pre>
<pre><code class="language-cjs">const { push, text } = require('node:stream/iter');

async function run() {
  const { writer, readable } = push();

  // Producer and consumer must run concurrently. With strict backpressure
  // (the default), awaited writes block until the consumer reads.
  const producing = (async () =&gt; {
    await writer.write('hello');
    await writer.write(' world');
    await writer.end();
  })();

  console.log(await text(readable)); // 'hello world'
  await producing;
}

run().catch(console.error);
</code></pre>
<p>The writer returned by <code>push()</code> conforms to the [Writer interface][].</p>
<h2>Duplex channels</h2>
<h3><code>duplex([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>budget</code> {number} Buffer size in bytes for both directions.
Must be &gt;= 16384. <strong>Default:</strong> <code>16384</code>.</li>
<li><code>backpressure</code> {string} Policy for both directions.
<strong>Default:</strong> <code>'strict'</code>.</li>
<li><code>signal</code> {AbortSignal} Cancellation signal for both channels.</li>
<li><code>a</code> {Object} Options specific to the A-to-B direction. Overrides
shared options.
<ul>
<li><code>budget</code> {number}</li>
<li><code>backpressure</code> {string}</li>
</ul>
</li>
<li><code>b</code> {Object} Options specific to the B-to-A direction. Overrides
shared options.
<ul>
<li><code>budget</code> {number}</li>
<li><code>backpressure</code> {string}</li>
</ul>
</li>
</ul>
</li>
<li>Returns: {Array} A pair <code>[channelA, channelB]</code> of duplex channels.</li>
</ul>
<p>Create a pair of connected duplex channels for bidirectional communication,
similar to <code>socketpair()</code>. Data written to one channel's writer appears in
the other channel's readable.</p>
<p>Each channel has:</p>
<ul>
<li><code>writer</code> — a [Writer interface][] object for sending data to the peer.</li>
<li><code>readable</code> — an {AsyncIterable} for reading data from the peer.</li>
<li><code>close()</code> — close this end of the channel (idempotent).</li>
<li><code>[Symbol.asyncDispose]()</code> — async dispose support for <code>await using</code>.</li>
</ul>
<pre><code class="language-mjs">import { duplex, text } from 'node:stream/iter';

const [client, server] = duplex();

// Server echoes back
const serving = (async () =&gt; {
  for await (const chunks of server.readable) {
    await server.writer.writev(chunks);
  }
  await server.writer.end();
})();

await client.writer.write('hello');
await client.writer.end();

console.log(await text(client.readable)); // 'hello'
await serving;
</code></pre>
<pre><code class="language-cjs">const { duplex, text } = require('node:stream/iter');

async function run() {
  const [client, server] = duplex();

  // Server echoes back
  const serving = (async () =&gt; {
    for await (const chunks of server.readable) {
      await server.writer.writev(chunks);
    }
    await server.writer.end();
  })();

  await client.writer.write('hello');
  await client.writer.end();

  console.log(await text(client.readable)); // 'hello'
  await serving;
}

run().catch(console.error);
</code></pre>
<h2>Consumers</h2>
<h3><code>array(source[, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable|Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal}</li>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with an array of <code>Uint8Array</code> objects.</li>
</ul>
<p>Collect all chunks as an array of <code>Uint8Array</code> values (without concatenating).</p>
<h3><code>arrayBuffer(source[, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable|Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal}</li>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with an <code>ArrayBuffer</code> object.</li>
</ul>
<p>Collect all bytes into an <code>ArrayBuffer</code>.</p>
<h3><code>arrayBufferSync(source[, options])</code></h3>
<ul>
<li><code>source</code> {Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {ArrayBuffer}</li>
</ul>
<p>Synchronous version of <a href="#arraybuffersource-options"><code>arrayBuffer()</code></a>.</p>
<h3><code>arraySync(source[, options])</code></h3>
<ul>
<li><code>source</code> {Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {Uint8Array[]}</li>
</ul>
<p>Synchronous version of <a href="#arraysource-options"><code>array()</code></a>.</p>
<h3><code>bytes(source[, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable|Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal}</li>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with an <code>Uint8Array</code> object.</li>
</ul>
<p>Collect all bytes from a stream into a single <code>Uint8Array</code>.</p>
<pre><code class="language-mjs">import { from, bytes } from 'node:stream/iter';

const data = await bytes(from('hello'));
console.log(data); // Uint8Array(5) [ 104, 101, 108, 108, 111 ]
</code></pre>
<pre><code class="language-cjs">const { from, bytes } = require('node:stream/iter');

async function run() {
  const data = await bytes(from('hello'));
  console.log(data); // Uint8Array(5) [ 104, 101, 108, 108, 111 ]
}

run().catch(console.error);
</code></pre>
<h3><code>bytesSync(source[, options])</code></h3>
<ul>
<li><code>source</code> {Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {Uint8Array}</li>
</ul>
<p>Synchronous version of <a href="#bytessource-options"><code>bytes()</code></a>.</p>
<h3><code>text(source[, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable|Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>encoding</code> {string} Text encoding. <strong>Default:</strong> <code>'utf-8'</code>.</li>
<li><code>signal</code> {AbortSignal}</li>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {Promise} Fulfills with a <code>string</code>.</li>
</ul>
<p>Collect all bytes and decode as text.</p>
<pre><code class="language-mjs">import { from, text } from 'node:stream/iter';

console.log(await text(from('hello'))); // 'hello'
</code></pre>
<pre><code class="language-cjs">const { from, text } = require('node:stream/iter');

async function run() {
  console.log(await text(from('hello'))); // 'hello'
}

run().catch(console.error);
</code></pre>
<h3><code>textSync(source[, options])</code></h3>
<ul>
<li><code>source</code> {Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>encoding</code> {string} <strong>Default:</strong> <code>'utf-8'</code>.</li>
<li><code>limit</code> {number} Maximum number of bytes to consume. If the total bytes
collected exceeds limit, an <code>ERR_OUT_OF_RANGE</code> error is thrown</li>
</ul>
</li>
<li>Returns: {string}</li>
</ul>
<p>Synchronous version of <a href="#textsource-options"><code>text()</code></a>.</p>
<h2>Utilities</h2>
<h3><code>ondrain(drainable)</code></h3>
<ul>
<li><code>drainable</code> {Object} An object implementing the drainable protocol.</li>
<li>Returns: {Promise|null}</li>
</ul>
<p>Wait for a drainable writer to regain physical buffer capacity. Returns <code>null</code>
if the object does not implement the drainable protocol, or a promise that
fulfills with <code>true</code> when buffered data falls below the byte budget.</p>
<p>For writers using <code>'drop-oldest'</code> or <code>'drop-newest'</code>, this waits for physical
capacity even though writes do not block. This allows producers to avoid data
loss by waiting before writing.</p>
<pre><code class="language-mjs">import { push, ondrain, text } from 'node:stream/iter';

const { writer, readable } = push({ budget: 16384 });
const chunk = new Uint8Array(8192);  // 8 KB
writer.writeSync(chunk);
writer.writeSync(chunk);  // 16 KB total -- buffer full

// Start consuming so the buffer can actually drain
const consuming = text(readable);

// Buffer is full -- wait for drain
const canWrite = await ondrain(writer);
if (canWrite) {
  await writer.write('c');
}
await writer.end();
await consuming;
</code></pre>
<pre><code class="language-cjs">const { push, ondrain, text } = require('node:stream/iter');

async function run() {
  const { writer, readable } = push({ budget: 16384 });
  const chunk = new Uint8Array(8192);  // 8 KB
  writer.writeSync(chunk);
  writer.writeSync(chunk);  // 16 KB total -- buffer full

  // Start consuming so the buffer can actually drain
  const consuming = text(readable);

  // Buffer is full -- wait for drain
  const canWrite = await ondrain(writer);
  if (canWrite) {
    await writer.write('c');
  }
  await writer.end();
  await consuming;
}

run().catch(console.error);
</code></pre>
<h3><code>merge(...sources[, options])</code></h3>
<ul>
<li><code>...sources</code> {AsyncIterable|Iterable} whose chunks must be {Uint8Array[]}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal}</li>
</ul>
</li>
<li>Returns: {AsyncIterable} whose chunks fulfill with {Uint8Array[]}</li>
</ul>
<p>Merge multiple async iterables by yielding batches in temporal order
(whichever source produces data first). All sources are consumed
concurrently.</p>
<pre><code class="language-mjs">import { from, merge, text } from 'node:stream/iter';

const merged = merge(from('hello '), from('world'));
console.log(await text(merged)); // Order depends on timing
</code></pre>
<pre><code class="language-cjs">const { from, merge, text } = require('node:stream/iter');

async function run() {
  const merged = merge(from('hello '), from('world'));
  console.log(await text(merged)); // Order depends on timing
}

run().catch(console.error);
</code></pre>
<h3><code>tap(callback)</code></h3>
<ul>
<li><code>callback</code> {Function} <code>(chunks) =&gt; void</code> Called with each batch and with
<code>null</code> when the source ends.</li>
<li>Returns: {Function} A stateless transform.</li>
</ul>
<p>Create a pass-through transform that observes batches without modifying them.
Useful for logging, metrics, or debugging.</p>
<pre><code class="language-mjs">import { from, pull, text, tap } from 'node:stream/iter';

const result = pull(
  from('hello'),
  tap((chunks) =&gt; {
    if (chunks !== null) console.log('Batch size:', chunks.length);
  }),
);
console.log(await text(result));
</code></pre>
<pre><code class="language-cjs">const { from, pull, text, tap } = require('node:stream/iter');

async function run() {
  const result = pull(
    from('hello'),
    tap((chunks) =&gt; {
      if (chunks !== null) console.log('Batch size:', chunks.length);
    }),
  );
  console.log(await text(result));
}

run().catch(console.error);
</code></pre>
<p><code>tap()</code> intentionally does not prevent in-place modification of the
chunks by the tapping callback; but return values are ignored.</p>
<h3><code>tapSync(callback)</code></h3>
<ul>
<li><code>callback</code> {Function}</li>
<li>Returns: {Function}</li>
</ul>
<p>Synchronous version of <a href="#tapcallback"><code>tap()</code></a>.</p>
<h2>Multi-consumer</h2>
<h3><code>broadcast([options])</code></h3>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>budget</code> {number} Buffer size in bytes. Must be &gt;= 16384.
<strong>Default:</strong> <code>65536</code>.</li>
<li><code>backpressure</code> {string} <code>'strict'</code>, <code>'unbounded'</code>, <code>'drop-oldest'</code>, or
<code>'drop-newest'</code>. <strong>Default:</strong> <code>'strict'</code>.</li>
<li><code>signal</code> {AbortSignal}</li>
</ul>
</li>
<li>Returns: {Object}
<ul>
<li><code>writer</code> {Writable}</li>
<li><code>broadcast</code> {BroadcastChannel}</li>
</ul>
</li>
</ul>
<p>Create a push-model multi-consumer broadcast channel. A single writer pushes
data to multiple consumers. Each consumer has an independent cursor into a
shared buffer.</p>
<pre><code class="language-mjs">import { broadcast, text } from 'node:stream/iter';

const { writer, broadcast: bc } = broadcast();

// Create consumers before writing
const c1 = bc.push();  // Consumer 1
const c2 = bc.push();  // Consumer 2

// Producer and consumers must run concurrently. Awaited writes
// block when the buffer fills until consumers read.
const producing = (async () =&gt; {
  await writer.write('hello');
  await writer.end();
})();

const [r1, r2] = await Promise.all([text(c1), text(c2)]);
console.log(r1); // 'hello'
console.log(r2); // 'hello'
await producing;
</code></pre>
<pre><code class="language-cjs">const { broadcast, text } = require('node:stream/iter');

async function run() {
  const { writer, broadcast: bc } = broadcast();

  // Create consumers before writing
  const c1 = bc.push();  // Consumer 1
  const c2 = bc.push();  // Consumer 2

  // Producer and consumers must run concurrently. Awaited writes
  // block when the buffer fills until consumers read.
  const producing = (async () =&gt; {
    await writer.write('hello');
    await writer.end();
  })();

  const [r1, r2] = await Promise.all([text(c1), text(c2)]);
  console.log(r1); // 'hello'
  console.log(r2); // 'hello'
  await producing;
}

run().catch(console.error);
</code></pre>
<h4><code>broadcast.cancel([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
</ul>
<p>Cancel the broadcast. If <code>reason</code> is provided, all consumers reject with that
exact reason. If it is omitted, consumers complete normally.</p>
<h4><code>broadcast.consumerCount</code></h4>
<ul>
<li>{number}</li>
</ul>
<p>The number of active consumers.</p>
<h4><code>broadcast.push([...transforms][, options])</code></h4>
<ul>
<li><code>...transforms</code> {Function|Object}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal}</li>
</ul>
</li>
<li>Returns: {AsyncIterable} whose chunks fulfill with {Uint8Array[]}</li>
</ul>
<p>Create a new consumer. Optional transforms are applied to this consumer's view
of the data.</p>
<h4><code>broadcast[Symbol.dispose]()</code></h4>
<p>Alias for <code>broadcast.cancel()</code>.</p>
<h3><code>Broadcast.from(input[, options])</code></h3>
<ul>
<li><code>input</code> {AsyncIterable|Iterable|BroadcastChannel}</li>
<li><code>options</code> {Object} Same as <code>broadcast()</code>.</li>
<li>Returns: {BroadcastChannel|Object} A <code>broadcastProtocol</code> input returns its
{BroadcastChannel} directly. Other inputs return <code>{ writer, broadcast }</code>.</li>
</ul>
<p>Create a {BroadcastChannel} from an existing source. The source is consumed
automatically and pushed to all subscribers.</p>
<h3><code>share(source[, options])</code></h3>
<ul>
<li><code>source</code> {AsyncIterable} The source to share.</li>
<li><code>options</code> {Object}
<ul>
<li><code>budget</code> {number} Buffer size in bytes. Must be &gt;= 16384.
<strong>Default:</strong> <code>65536</code>.</li>
<li><code>backpressure</code> {string} <code>'strict'</code>, <code>'unbounded'</code>, <code>'drop-oldest'</code>, or
<code>'drop-newest'</code>. <strong>Default:</strong> <code>'strict'</code>.</li>
<li><code>signal</code> {AbortSignal}</li>
</ul>
</li>
<li>Returns: {Share}</li>
</ul>
<p>Create a pull-model multi-consumer shared stream. Unlike <code>broadcast()</code>, the
source is only read when a consumer pulls. Multiple consumers share a single
buffer.</p>
<pre><code class="language-mjs">import { from, share, text } from 'node:stream/iter';

const shared = share(from('hello'));

const c1 = shared.pull();
const c2 = shared.pull();

// Consume concurrently to avoid deadlock with small buffers.
const [r1, r2] = await Promise.all([text(c1), text(c2)]);
console.log(r1); // 'hello'
console.log(r2); // 'hello'
</code></pre>
<pre><code class="language-cjs">const { from, share, text } = require('node:stream/iter');

async function run() {
  const shared = share(from('hello'));

  const c1 = shared.pull();
  const c2 = shared.pull();

  // Consume concurrently to avoid deadlock with small buffers.
  const [r1, r2] = await Promise.all([text(c1), text(c2)]);
  console.log(r1); // 'hello'
  console.log(r2); // 'hello'
}

run().catch(console.error);
</code></pre>
<h3>Class: <code>Share</code></h3>
<h4>Static method: <code>Share.from(input[, options])</code></h4>
<ul>
<li><code>input</code> {AsyncIterable|Shareable}</li>
<li><code>options</code> {Object} Same as <code>share()</code>.</li>
<li>Returns: {Share}</li>
</ul>
<p>Create a {Share} from an existing source.</p>
<h4><code>share.cancel([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
</ul>
<p>Cancel the share. If <code>reason</code> is provided, all consumers reject with that exact
reason. If it is omitted, consumers complete normally.</p>
<h4><code>share.consumerCount</code></h4>
<ul>
<li>{number}</li>
</ul>
<p>The number of active consumers.</p>
<h4><code>share.pull([...transforms][, options])</code></h4>
<ul>
<li><code>...transforms</code> {Function|Object}</li>
<li><code>options</code> {Object}
<ul>
<li><code>signal</code> {AbortSignal}</li>
</ul>
</li>
<li>Returns: {AsyncIterable} whose chunks fulfill with {Uint8Array[]}</li>
</ul>
<p>Create a new consumer of the shared source.</p>
<h4><code>share[Symbol.dispose]()</code></h4>
<p>Alias for <code>share.cancel()</code>.</p>
<h3>Interface: <code>Shareable</code></h3>
<h4><code>sharable[Symbol.for('Stream.shareProtocol')]</code></h4>
<ul>
<li>{Function} that returns a {Share}.</li>
</ul>
<h3>Interface: <code>SyncShareable</code></h3>
<h4><code>sharable[Symbol.for('Stream.shareSyncProtocol')]</code></h4>
<ul>
<li>{Function} that returns a {SyncShare}.</li>
</ul>
<h3><code>shareSync(source[, options])</code></h3>
<ul>
<li><code>source</code> {Iterable} The sync source to share.</li>
<li><code>options</code> {Object}
<ul>
<li><code>budget</code> {number} Must be &gt;= 16384.
<strong>Default:</strong> <code>65536</code>.</li>
<li><code>backpressure</code> {string} <code>'strict'</code>, <code>'drop-oldest'</code>, or <code>'drop-newest'</code>.
<strong>Default:</strong> <code>'strict'</code>.</li>
</ul>
</li>
<li>Returns: {SyncShare}</li>
</ul>
<p>Synchronous version of <a href="#sharesource-options"><code>share()</code></a>.</p>
<p>Because there is no way to wait in a synchronous context, <code>'unbounded'</code> is not
supported and throws <code>ERR_INVALID_ARG_VALUE</code>. With <code>'drop-newest'</code>, a consumer
that reaches the end of the buffer while the budget is exhausted discards a
single entry from the source and then returns <code>{ done: true }</code> without a
value; the consumer is not detached, so it can resume once the slowest
consumer advances and releases budget.</p>
<h3>Class: <code>SyncShare</code></h3>
<h4>Static method: <code>SyncShare.fromSync(input[, options])</code></h4>
<ul>
<li><code>input</code> {Iterable|SyncShareable}</li>
<li><code>options</code> {Object}</li>
<li>Returns: {SyncShare}</li>
</ul>
<h4><code>share.cancel([reason])</code></h4>
<ul>
<li><code>reason</code> {any}</li>
</ul>
<p>Cancel the share. If <code>reason</code> is provided, all consumers throw that exact
reason. If it is omitted, consumers complete normally.</p>
<h4><code>share.consumerCount</code></h4>
<ul>
<li>{number}</li>
</ul>
<p>The number of active consumers.</p>
<h4><code>share.pull([...transforms])</code></h4>
<ul>
<li><code>...transforms</code> {Function|Object}</li>
<li>Returns: {Iterable} whose chunks return {Uint8Array[]}</li>
</ul>
<p>Create a new consumer of the shared source.</p>
<h4><code>share[Symbol.dispose]()</code></h4>
<p>Alias for <code>share.cancel()</code>.</p>
<h2>Compression and decompression transforms</h2>
<p>Compression and decompression transforms for use with <code>pull()</code>, <code>pullSync()</code>,
<code>pipeTo()</code>, and <code>pipeToSync()</code> are available via the <a href="zlib.md#iterable-compression"><code>node:zlib/iter</code></a>
module. See the <a href="zlib.md#iterable-compression"><code>node:zlib/iter</code> documentation</a> for details.</p>
<h2>Classic stream interop</h2>
<p>These utility functions bridge between classic
<a href="stream.md#class-streamreadable"><code>stream.Readable</code></a>/<a href="stream.md#class-streamwritable"><code>stream.Writable</code></a> streams and the <code>stream/iter</code>
API.</p>
<p>Both <code>fromReadable()</code> and <code>fromWritable()</code> accept duck-typed objects -- they
do not require the input to extend <code>stream.Readable</code> or <code>stream.Writable</code>
directly. The minimum contract is described below for each function.</p>
<h3><code>fromReadable(readable)</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>readable</code> {stream.Readable|Object} A classic Readable stream or a compatible
object with <code>read()</code>, <code>pipe()</code>, <code>destroy()</code>, <code>on()</code>, and <code>removeListener()</code>
methods.</li>
<li>Returns: {AsyncIterable} whose chunks fulfill with {Uint8Array[]}</li>
</ul>
<p>Converts a classic Readable stream (or duck-typed equivalent) into a
stream/iter async iterable source that can be passed to <a href="#frominput"><code>from()</code></a>,
<a href="#pullsource-transforms-options"><code>pull()</code></a>, <a href="#textsource-options"><code>text()</code></a>, etc.</p>
<p>If the object implements the <a href="#streamtoasyncstreamable"><code>toAsyncStreamable</code></a> protocol (as
<code>stream.Readable</code> does), that protocol is used. Otherwise, the function
duck-types on <code>read()</code>, <code>pipe()</code>, <code>destroy()</code>, <code>on()</code>, and <code>removeListener()</code>
(EventEmitter) and wraps the stream with a batched async iterator.</p>
<p>The result is cached per instance -- calling <code>fromReadable()</code> twice with the
same stream returns the same iterable.</p>
<p>For object-mode or encoded Readable streams, chunks are automatically
normalized to <code>Uint8Array</code>.</p>
<pre><code class="language-mjs">import { Readable } from 'node:stream';
import { fromReadable, text } from 'node:stream/iter';

const readable = new Readable({
  read() { this.push('hello world'); this.push(null); },
});

const result = await text(fromReadable(readable));
console.log(result); // 'hello world'
</code></pre>
<pre><code class="language-cjs">const { Readable } = require('node:stream');
const { fromReadable, text } = require('node:stream/iter');

const readable = new Readable({
  read() { this.push('hello world'); this.push(null); },
});

async function run() {
  const result = await text(fromReadable(readable));
  console.log(result); // 'hello world'
}
run();
</code></pre>
<h3><code>fromWritable(writable[, options])</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>writable</code> {stream.Writable|Object} A classic Writable stream or a compatible
object with <code>write()</code>, <code>end()</code>, <code>destroy()</code>, <code>on()</code>, and <code>removeListener()</code>
methods.</li>
<li><code>options</code> {Object}
<ul>
<li><code>backpressure</code> {string} Backpressure policy. <strong>Default:</strong> <code>'strict'</code>.
<ul>
<li><code>'strict'</code> -- one write may wait while the buffer is full. Further writes
are rejected until it is accepted or canceled.</li>
<li><code>'unbounded'</code> -- writes are queued while the buffer is full. Recommended
for use with <a href="#pipetosource-transforms-writer-options"><code>pipeTo()</code></a>.</li>
<li><code>'drop-newest'</code> -- writes are silently discarded when the buffer is full.</li>
<li><code>'drop-oldest'</code> -- <strong>not supported</strong>. Throws <code>ERR_INVALID_ARG_VALUE</code>.</li>
</ul>
</li>
</ul>
</li>
<li>Returns: {Object} A stream/iter Writer adapter.</li>
</ul>
<p>Creates a stream/iter Writer adapter from a classic Writable stream (or
duck-typed equivalent). The adapter can be passed to <a href="#pipetosource-transforms-writer-options"><code>pipeTo()</code></a> as a
destination.</p>
<p>Since all writes on a classic Writable are fundamentally asynchronous,
the synchronous Writer methods (<code>writeSync</code>, <code>writevSync</code>, <code>endSync</code>) always
return <code>false</code> or <code>-1</code>, deferring to the async path. A queued <code>write()</code> or
<code>writev()</code> can be canceled with its <code>options.signal</code> before it reaches the
classic Writable.</p>
<p>If <code>writer.fail(reason)</code> receives a non-Error reason, the classic Writable is
destroyed with an <code>ERR_FALSY_VALUE_REJECTION</code> or <code>ERR_OPERATION_FAILED</code> error.
Its <code>reason</code> property contains the original value, which remains the Writer's
stored failure reason.</p>
<p>The result is cached per instance and backpressure policy -- calling
<code>fromWritable()</code> twice with the same stream and <code>backpressure</code> option returns
the same Writer.</p>
<p>For duck-typed streams that do not expose <code>writableHighWaterMark</code>,
<code>writableLength</code>, or similar properties, sensible defaults are used.
Object-mode writables (if detectable) are rejected since the Writer
interface is bytes-only.</p>
<pre><code class="language-mjs">import { Writable } from 'node:stream';
import { from, fromWritable, pipeTo } from 'node:stream/iter';

const writable = new Writable({
  write(chunk, encoding, cb) { console.log(chunk.toString()); cb(); },
});

await pipeTo(from('hello world'),
             fromWritable(writable, { backpressure: 'unbounded' }));
</code></pre>
<pre><code class="language-cjs">const { Writable } = require('node:stream');
const { from, fromWritable, pipeTo } = require('node:stream/iter');

async function run() {
  const writable = new Writable({
    write(chunk, encoding, cb) { console.log(chunk.toString()); cb(); },
  });

  await pipeTo(from('hello world'),
               fromWritable(writable, { backpressure: 'unbounded' }));
}
run();
</code></pre>
<h3><code>toReadable(source[, options])</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>source</code> {AsyncIterable} whose chunks must fulfill with {Uint8Array[]}
the return value of <a href="#pullsource-transforms-options"><code>pull()</code></a> or <a href="#frominput"><code>from()</code></a>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>highWaterMark</code> {number} The internal buffer size in bytes before
backpressure is applied. <strong>Default:</strong> <code>65536</code> (64 KB).</li>
<li><code>signal</code> {AbortSignal} An optional signal to abort the readable.</li>
</ul>
</li>
<li>Returns: {stream.Readable}</li>
</ul>
<p>Creates a byte-mode <a href="stream.md#class-streamreadable"><code>stream.Readable</code></a> from the <code>source</code>
(the native batch format used by the stream/iter API). Each <code>Uint8Array</code> in a
yielded batch is pushed as a separate chunk into the Readable.</p>
<p>Classic streams cannot represent arbitrary values as emitted errors. A
non-Error reason is wrapped in an <code>ERR_FALSY_VALUE_REJECTION</code> or
<code>ERR_OPERATION_FAILED</code> error whose <code>reason</code> property contains the original
value.</p>
<pre><code class="language-mjs">import { createWriteStream } from 'node:fs';
import { from, pull, toReadable } from 'node:stream/iter';
import { compressGzip } from 'node:zlib/iter';

const source = pull(from('hello world'), compressGzip());
const readable = toReadable(source);

readable.pipe(createWriteStream('output.gz'));
</code></pre>
<pre><code class="language-cjs">const { createWriteStream } = require('node:fs');
const { from, pull, toReadable } = require('node:stream/iter');
const { compressGzip } = require('node:zlib/iter');

const source = pull(from('hello world'), compressGzip());
const readable = toReadable(source);

readable.pipe(createWriteStream('output.gz'));
</code></pre>
<h3><code>toReadableSync(source[, options])</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>source</code> {Iterable} whose chunks must return {Uint8Array[]}, such as the
return value of <a href="#pullsyncsource-transforms"><code>pullSync()</code></a> or <a href="#fromsyncinput"><code>fromSync()</code></a>.</li>
<li><code>options</code> {Object}
<ul>
<li><code>highWaterMark</code> {number} The internal buffer size in bytes before
backpressure is applied. <strong>Default:</strong> <code>65536</code> (64 KB).</li>
</ul>
</li>
<li>Returns: {stream.Readable}</li>
</ul>
<p>Creates a byte-mode <a href="stream.md#class-streamreadable"><code>stream.Readable</code></a> from the <code>source</code>.
The <code>_read()</code> method pulls from the iterator
synchronously, so data is available immediately via <code>readable.read()</code>.</p>
<pre><code class="language-mjs">import { fromSync, toReadableSync } from 'node:stream/iter';

const source = fromSync('hello world');
const readable = toReadableSync(source);

console.log(readable.read().toString()); // 'hello world'
</code></pre>
<pre><code class="language-cjs">const { fromSync, toReadableSync } = require('node:stream/iter');

const source = fromSync('hello world');
const readable = toReadableSync(source);

console.log(readable.read().toString()); // 'hello world'
</code></pre>
<h3><code>toWritable(writer)</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>writer</code> {Object} A stream/iter Writer. Only the <code>write()</code> method is
required; <code>end()</code>, <code>fail()</code>, <code>writeSync()</code>, <code>writevSync()</code>, <code>endSync()</code>,
and <code>writev()</code> are optional.</li>
<li>Returns: {stream.Writable}</li>
</ul>
<p>Creates a classic <a href="stream.md#class-streamwritable"><code>stream.Writable</code></a> backed by a stream/iter Writer.</p>
<p>Each <code>_write()</code> / <code>_writev()</code> call attempts the Writer's synchronous method
first (<code>writeSync</code> / <code>writevSync</code>), falling back to the async method if the
sync path returns <code>false</code>. Similarly, <code>_final()</code> tries <code>endSync()</code>
before <code>end()</code>. When the sync path succeeds, the callback is deferred via
<code>queueMicrotask</code> to preserve the async resolution contract.</p>
<p>Classic stream callbacks cannot represent arbitrary values as errors. A
non-Error reason is wrapped in an <code>ERR_FALSY_VALUE_REJECTION</code> or
<code>ERR_OPERATION_FAILED</code> error before it is passed to the callback. The error's
<code>reason</code> property contains the original value.</p>
<p>Destroying the Writable before successful completion calls <code>writer.fail()</code>.
If <code>fail()</code> is unavailable, <code>Symbol.dispose</code> or <code>Symbol.asyncDispose</code> is used
when implemented by the Writer.</p>
<p>The Writable uses the default classic stream <code>highWaterMark</code>. Classic stream
backpressure bounds writes waiting to reach the underlying Writer, while the
Writer controls completion of the active <code>_write()</code> or <code>_writev()</code> operation.</p>
<pre><code class="language-mjs">import { push, toWritable } from 'node:stream/iter';

const { writer, readable } = push();
const writable = toWritable(writer);

writable.write('hello');
writable.end();
</code></pre>
<pre><code class="language-cjs">const { push, toWritable } = require('node:stream/iter');

const { writer, readable } = push();
const writable = toWritable(writer);

writable.write('hello');
writable.end();
</code></pre>
<h2>Protocol symbols</h2>
<p>These well-known symbols allow third-party objects to participate in the
streaming protocol without importing from <code>node:stream/iter</code> directly.</p>
<h3><code>Stream.broadcastProtocol</code></h3>
<ul>
<li>Value: <code>Symbol.for('Stream.broadcastProtocol')</code></li>
</ul>
<p>The value must be a function. When called by <code>Broadcast.from()</code>, it receives
the options passed to <code>Broadcast.from()</code> and must return an object conforming
to the {BroadcastChannel} interface. The implementation is fully custom -- it can
manage consumers, buffering, and backpressure however it wants.</p>
<pre><code class="language-mjs">import {
  broadcast as createBroadcast,
  Broadcast,
  text,
} from 'node:stream/iter';

// This example defers to the built-in Broadcast, but a custom
// implementation could use any mechanism.
class MessageBus {
  #broadcast;
  #writer;

  constructor() {
    const { writer, broadcast } = createBroadcast();
    this.#writer = writer;
    this.#broadcast = broadcast;
  }

  [Symbol.for('Stream.broadcastProtocol')](options) {
    return this.#broadcast;
  }

  send(data) {
    this.#writer.write(new TextEncoder().encode(data));
  }

  close() {
    this.#writer.end();
  }
}

const bus = new MessageBus();
const broadcast = Broadcast.from(bus);
const consumer = broadcast.push();
bus.send('hello');
bus.close();
console.log(await text(consumer)); // 'hello'
</code></pre>
<pre><code class="language-cjs">const {
  broadcast: createBroadcast,
  Broadcast,
  text,
} = require('node:stream/iter');

// This example defers to the built-in Broadcast, but a custom
// implementation could use any mechanism.
class MessageBus {
  #broadcast;
  #writer;

  constructor() {
    const { writer, broadcast } = createBroadcast();
    this.#writer = writer;
    this.#broadcast = broadcast;
  }

  [Symbol.for('Stream.broadcastProtocol')](options) {
    return this.#broadcast;
  }

  send(data) {
    this.#writer.write(new TextEncoder().encode(data));
  }

  close() {
    this.#writer.end();
  }
}

const bus = new MessageBus();
const broadcast = Broadcast.from(bus);
const consumer = broadcast.push();
bus.send('hello');
bus.close();
text(consumer).then(console.log); // 'hello'
</code></pre>
<h3><code>Stream.drainableProtocol</code></h3>
<ul>
<li>Value: <code>Symbol.for('Stream.drainableProtocol')</code></li>
</ul>
<p>Implement to make a writer compatible with <code>ondrain()</code>. The method should
return <code>null</code> if no backpressure, or a promise that fulfills with a truthy value
when backpressure clears.</p>
<pre><code class="language-mjs">import { ondrain } from 'node:stream/iter';

class CustomWriter {
  #queue = [];
  #drain = null;
  #closed = false;
  [Symbol.for('Stream.drainableProtocol')]() {
    if (this.#closed) return null;
    if (this.#queue.length &lt; 3) return Promise.resolve(true);
    this.#drain ??= Promise.withResolvers();
    return this.#drain.promise;
  }
  write(chunk) {
    this.#queue.push(chunk);
  }
  flush() {
    this.#queue.length = 0;
    this.#drain?.resolve(true);
    this.#drain = null;
  }
  close() {
    this.#closed = true;
  }
}
const writer = new CustomWriter();
const ready = ondrain(writer);
console.log(ready); // Promise { true } -- no backpressure
</code></pre>
<pre><code class="language-cjs">const { ondrain } = require('node:stream/iter');

class CustomWriter {
  #queue = [];
  #drain = null;
  #closed = false;

  [Symbol.for('Stream.drainableProtocol')]() {
    if (this.#closed) return null;
    if (this.#queue.length &lt; 3) return Promise.resolve(true);
    this.#drain ??= Promise.withResolvers();
    return this.#drain.promise;
  }

  write(chunk) {
    this.#queue.push(chunk);
  }

  flush() {
    this.#queue.length = 0;
    this.#drain?.resolve(true);
    this.#drain = null;
  }

  close() {
    this.#closed = true;
  }
}

const writer = new CustomWriter();
const ready = ondrain(writer);
console.log(ready); // Promise { true } -- no backpressure
</code></pre>
<h3><code>Stream.shareProtocol</code></h3>
<ul>
<li>Value: <code>Symbol.for('Stream.shareProtocol')</code></li>
</ul>
<p>The value must be a function. When called by <code>Share.from()</code>, it receives the
options passed to <code>Share.from()</code> and must return an object conforming to the
{Share} interface. The implementation is fully custom -- it can manage the shared
source, consumers, buffering, and backpressure however it wants.</p>
<pre><code class="language-mjs">import { share, Share, text } from 'node:stream/iter';

// This example defers to the built-in share(), but a custom
// implementation could use any mechanism.
class DataPool {
  #share;

  constructor(source) {
    this.#share = share(source);
  }

  [Symbol.for('Stream.shareProtocol')](options) {
    return this.#share;
  }
}

const pool = new DataPool(
  (async function* () {
    yield 'hello';
  })(),
);

const shared = Share.from(pool);
const consumer = shared.pull();
console.log(await text(consumer)); // 'hello'
</code></pre>
<pre><code class="language-cjs">const { share, Share, text } = require('node:stream/iter');

// This example defers to the built-in share(), but a custom
// implementation could use any mechanism.
class DataPool {
  #share;

  constructor(source) {
    this.#share = share(source);
  }

  [Symbol.for('Stream.shareProtocol')](options) {
    return this.#share;
  }
}

const pool = new DataPool(
  (async function* () {
    yield 'hello';
  })(),
);

const shared = Share.from(pool);
const consumer = shared.pull();
text(consumer).then(console.log); // 'hello'
</code></pre>
<h3><code>Stream.shareSyncProtocol</code></h3>
<ul>
<li>Value: <code>Symbol.for('Stream.shareSyncProtocol')</code></li>
</ul>
<p>The value must be a function. When called by <code>SyncShare.fromSync()</code>, it receives
the options passed to <code>SyncShare.fromSync()</code> and must return an object conforming
to the {SyncShare} interface. The implementation is fully custom -- it can manage
the shared source, consumers, and buffering however it wants.</p>
<pre><code class="language-mjs">import { shareSync, SyncShare, textSync } from 'node:stream/iter';

// This example defers to the built-in shareSync(), but a custom
// implementation could use any mechanism.
class SyncDataPool {
  #share;

  constructor(source) {
    this.#share = shareSync(source);
  }

  [Symbol.for('Stream.shareSyncProtocol')](options) {
    return this.#share;
  }
}

const encoder = new TextEncoder();
const pool = new SyncDataPool(
  function* () {
    yield [encoder.encode('hello')];
  }(),
);

const shared = SyncShare.fromSync(pool);
const consumer = shared.pull();
console.log(textSync(consumer)); // 'hello'
</code></pre>
<pre><code class="language-cjs">const { shareSync, SyncShare, textSync } = require('node:stream/iter');

// This example defers to the built-in shareSync(), but a custom
// implementation could use any mechanism.
class SyncDataPool {
  #share;

  constructor(source) {
    this.#share = shareSync(source);
  }

  [Symbol.for('Stream.shareSyncProtocol')](options) {
    return this.#share;
  }
}

const encoder = new TextEncoder();
const pool = new SyncDataPool(
  function* () {
    yield [encoder.encode('hello')];
  }(),
);

const shared = SyncShare.fromSync(pool);
const consumer = shared.pull();
console.log(textSync(consumer)); // 'hello'
</code></pre>
<h3><code>Stream.toAsyncStreamable</code></h3>
<ul>
<li>Value: <code>Symbol.for('Stream.toAsyncStreamable')</code></li>
</ul>
<p>The value must be a function that converts the object into a streamable value.
When the object is passed to <code>from()</code>, this method is called to produce the
actual data. It may return any value that resolves to a string, <code>Uint8Array</code>,
<code>AsyncIterable</code>, <code>Iterable</code>, or another streamable object.</p>
<pre><code class="language-mjs">import { from, text } from 'node:stream/iter';

class Greeting {
  #name;

  constructor(name) {
    this.#name = name;
  }

  [Symbol.for('Stream.toAsyncStreamable')]() {
    return `hello ${this.#name}`;
  }
}

const stream = from(new Greeting('world'));
console.log(await text(stream)); // 'hello world'
</code></pre>
<pre><code class="language-cjs">const { from, text } = require('node:stream/iter');

class Greeting {
  #name;

  constructor(name) {
    this.#name = name;
  }

  [Symbol.for('Stream.toAsyncStreamable')]() {
    return `hello ${this.#name}`;
  }
}

const stream = from(new Greeting('world'));
text(stream).then(console.log); // 'hello world'
</code></pre>
<h3><code>Stream.toStreamable</code></h3>
<ul>
<li>Value: <code>Symbol.for('Stream.toStreamable')</code></li>
</ul>
<p>The value must be a function that synchronously converts the object into a
streamable value. When the object is passed to <code>fromSync()</code>, this method is
called to produce the actual data. It must synchronously return a streamable
value: a string, <code>Uint8Array</code>, or <code>Iterable</code>.</p>
<pre><code class="language-mjs">import { fromSync, textSync } from 'node:stream/iter';

class Greeting {
  #name;

  constructor(name) {
    this.#name = name;
  }

  [Symbol.for('Stream.toStreamable')]() {
    return `hello ${this.#name}`;
  }
}

const stream = fromSync(new Greeting('world'));
console.log(textSync(stream)); // 'hello world'
</code></pre>
<pre><code class="language-cjs">const { fromSync, textSync } = require('node:stream/iter');

class Greeting {
  #name;

  constructor(name) {
    this.#name = name;
  }

  [Symbol.for('Stream.toStreamable')]() {
    return `hello ${this.#name}`;
  }
}

const stream = fromSync(new Greeting('world'));
console.log(textSync(stream)); // 'hello world'
</code></pre>
