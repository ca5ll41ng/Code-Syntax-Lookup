---
id: "js-en-function-node-diagnostics_channel"
language: "js"
lang: "en"
category: "function"
name: "node:diagnostics_channel"
title: "Diagnostics Channel"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/diagnostics_channel.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Diagnostics Channel

<h1>Diagnostics Channel</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:diagnostics_channel</code> module provides an API to create named channels
to report arbitrary message data for diagnostics purposes.</p>
<p>It can be accessed using:</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');
</code></pre>
<p>It is intended that a module writer wanting to report diagnostics messages
will create one or many top-level channels to report messages through.
Channels may also be acquired at runtime but it is not encouraged
due to the additional overhead of doing so. Channels may be exported for
convenience, but as long as the name is known it can be acquired anywhere.</p>
<p>If you intend for your module to produce diagnostics data for others to
consume it is recommended that you include documentation of what named
channels are used along with the shape of the message data. Channel names
should generally include the module name to avoid collisions with data from
other modules.</p>
<h2>Public API</h2>
<h3>Overview</h3>
<p>Following is a simple overview of the public API.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

// Get a reusable channel object
const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

// Subscribe to the channel
diagnostics_channel.subscribe('my-channel', onMessage);

// Check if the channel has an active subscriber
if (channel.hasSubscribers) {
  // Publish data to the channel
  channel.publish({
    some: 'data',
  });
}

// Unsubscribe from the channel
diagnostics_channel.unsubscribe('my-channel', onMessage);
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

// Get a reusable channel object
const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

// Subscribe to the channel
diagnostics_channel.subscribe('my-channel', onMessage);

// Check if the channel has an active subscriber
if (channel.hasSubscribers) {
  // Publish data to the channel
  channel.publish({
    some: 'data',
  });
}

// Unsubscribe from the channel
diagnostics_channel.unsubscribe('my-channel', onMessage);
</code></pre>
<h4><code>diagnostics_channel.hasSubscribers(name)</code></h4>
<ul>
<li><code>name</code> {string|symbol} The channel name</li>
<li>Returns: {boolean} If there are active subscribers</li>
</ul>
<p>Check if there are active subscribers to the named channel. This is helpful if
the message you want to send might be expensive to prepare.</p>
<p>This API is optional but helpful when trying to publish messages from very
performance-sensitive code.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

if (diagnostics_channel.hasSubscribers('my-channel')) {
  // There are subscribers, prepare and publish message
}
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

if (diagnostics_channel.hasSubscribers('my-channel')) {
  // There are subscribers, prepare and publish message
}
</code></pre>
<h4><code>diagnostics_channel.channel(name)</code></h4>
<ul>
<li><code>name</code> {string|symbol} The channel name</li>
<li>Returns: {Channel} The named channel object</li>
</ul>
<p>This is the primary entry-point for anyone wanting to publish to a named
channel. It produces a channel object which is optimized to reduce overhead at
publish time as much as possible.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');
</code></pre>
<h4><code>diagnostics_channel.subscribe(name, onMessage)</code></h4>
<ul>
<li><code>name</code> {string|symbol} The channel name</li>
<li><code>onMessage</code> {Function} The handler to receive channel messages
<ul>
<li><code>message</code> {any} The message data</li>
<li><code>name</code> {string|symbol} The name of the channel</li>
</ul>
</li>
</ul>
<p>Register a message handler to subscribe to this channel. This message handler
will be run synchronously whenever a message is published to the channel. Any
errors thrown in the message handler will trigger an <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a>.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

diagnostics_channel.subscribe('my-channel', (message, name) =&gt; {
  // Received data
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

diagnostics_channel.subscribe('my-channel', (message, name) =&gt; {
  // Received data
});
</code></pre>
<h4><code>diagnostics_channel.unsubscribe(name, onMessage)</code></h4>
<ul>
<li><code>name</code> {string|symbol} The channel name</li>
<li><code>onMessage</code> {Function} The previous subscribed handler to remove</li>
<li>Returns: {boolean} <code>true</code> if the handler was found, <code>false</code> otherwise.</li>
</ul>
<p>Remove a message handler previously registered to this channel with
<a href="#diagnostics_channelsubscribename-onmessage"><code>diagnostics_channel.subscribe(name, onMessage)</code></a>.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

function onMessage(message, name) {
  // Received data
}

diagnostics_channel.subscribe('my-channel', onMessage);

diagnostics_channel.unsubscribe('my-channel', onMessage);
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

function onMessage(message, name) {
  // Received data
}

diagnostics_channel.subscribe('my-channel', onMessage);

diagnostics_channel.unsubscribe('my-channel', onMessage);
</code></pre>
<h4><code>diagnostics_channel.tracingChannel(nameOrChannels)</code></h4>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<ul>
<li><code>nameOrChannels</code> {string|TracingChannel} Channel name or
object containing all the <a href="#tracingchannel-channels">TracingChannel Channels</a></li>
<li>Returns: {TracingChannel} Collection of channels to trace with</li>
</ul>
<p>Creates a <a href="#class-tracingchannel"><code>TracingChannel</code></a> wrapper for the given
<a href="#tracingchannel-channels">TracingChannel Channels</a>. If a name is given, the corresponding tracing
channels will be created in the form of <code>tracing:${name}:${eventType}</code> where
<code>eventType</code> corresponds to the types of <a href="#tracingchannel-channels">TracingChannel Channels</a>.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channelsByName = diagnostics_channel.tracingChannel('my-channel');

// or...

const channelsByCollection = diagnostics_channel.tracingChannel({
  start: diagnostics_channel.channel('tracing:my-channel:start'),
  end: diagnostics_channel.channel('tracing:my-channel:end'),
  asyncStart: diagnostics_channel.channel('tracing:my-channel:asyncStart'),
  asyncEnd: diagnostics_channel.channel('tracing:my-channel:asyncEnd'),
  error: diagnostics_channel.channel('tracing:my-channel:error'),
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channelsByName = diagnostics_channel.tracingChannel('my-channel');

// or...

const channelsByCollection = diagnostics_channel.tracingChannel({
  start: diagnostics_channel.channel('tracing:my-channel:start'),
  end: diagnostics_channel.channel('tracing:my-channel:end'),
  asyncStart: diagnostics_channel.channel('tracing:my-channel:asyncStart'),
  asyncEnd: diagnostics_channel.channel('tracing:my-channel:asyncEnd'),
  error: diagnostics_channel.channel('tracing:my-channel:error'),
});
</code></pre>
<h4><code>diagnostics_channel.boundedChannel(nameOrChannels)</code></h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>nameOrChannels</code> {string|BoundedChannel} Channel name or
object containing all the <a href="#boundedchannel-channels">BoundedChannel Channels</a></li>
<li>Returns: {BoundedChannel} Collection of channels to trace with</li>
</ul>
<p>Creates a <a href="#class-boundedchannel"><code>BoundedChannel</code></a> wrapper for the given channels. If a name is
given, the corresponding channels will be created in the form of
<code>tracing:${name}:${eventType}</code> where <code>eventType</code> is <code>start</code> or <code>end</code>.</p>
<p>A <code>BoundedChannel</code> is a simplified version of <a href="#class-tracingchannel"><code>TracingChannel</code></a> that only
traces synchronous operations. It only has <code>start</code> and <code>end</code> events, without
<code>asyncStart</code>, <code>asyncEnd</code>, or <code>error</code> events, making it suitable for tracing
operations that don't involve asynchronous continuations or error handling.</p>
<pre><code class="language-mjs">import { boundedChannel, channel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

// or...

const wc2 = boundedChannel({
  start: channel('tracing:my-operation:start'),
  end: channel('tracing:my-operation:end'),
});
</code></pre>
<pre><code class="language-cjs">const { boundedChannel, channel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

// or...

const wc2 = boundedChannel({
  start: channel('tracing:my-operation:start'),
  end: channel('tracing:my-operation:end'),
});
</code></pre>
<h3>Class: <code>Channel</code></h3>
<p>The class <code>Channel</code> represents an individual named channel within the data
pipeline. It is used to track subscribers and to publish messages when there
are subscribers present. It exists as a separate object to avoid channel
lookups at publish time, enabling very fast publish speeds and allowing
for heavy use while incurring very minimal cost. Channels are created with
<a href="#diagnostics_channelchannelname"><code>diagnostics_channel.channel(name)</code></a>, constructing a channel directly
with <code>new Channel(name)</code> is not supported.</p>
<h4><code>channel.hasSubscribers</code></h4>
<ul>
<li>Returns: {boolean} If there are active subscribers</li>
</ul>
<p>Check if there are active subscribers to this channel. This is helpful if
the message you want to send might be expensive to prepare.</p>
<p>This API is optional but helpful when trying to publish messages from very
performance-sensitive code.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

if (channel.hasSubscribers) {
  // There are subscribers, prepare and publish message
}
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

if (channel.hasSubscribers) {
  // There are subscribers, prepare and publish message
}
</code></pre>
<h4><code>channel.publish(message)</code></h4>
<ul>
<li><code>message</code> {any} The message to send to the channel subscribers</li>
</ul>
<p>Publish a message to any subscribers to the channel. This will trigger
message handlers synchronously so they will execute within the same context.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

channel.publish({
  some: 'message',
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

channel.publish({
  some: 'message',
});
</code></pre>
<h4><code>channel.subscribe(onMessage)</code></h4>
<ul>
<li><code>onMessage</code> {Function} The handler to receive channel messages
<ul>
<li><code>message</code> {any} The message data</li>
<li><code>name</code> {string|symbol} The name of the channel</li>
</ul>
</li>
</ul>
<p>Register a message handler to subscribe to this channel. This message handler
will be run synchronously whenever a message is published to the channel. Any
errors thrown in the message handler will trigger an <a href="process.md#event-uncaughtexception"><code>'uncaughtException'</code></a>.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

channel.subscribe((message, name) =&gt; {
  // Received data
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

channel.subscribe((message, name) =&gt; {
  // Received data
});
</code></pre>
<h4><code>channel.unsubscribe(onMessage)</code></h4>
<ul>
<li><code>onMessage</code> {Function} The previous subscribed handler to remove</li>
<li>Returns: {boolean} <code>true</code> if the handler was found, <code>false</code> otherwise.</li>
</ul>
<p>Remove a message handler previously registered to this channel with
<a href="#channelsubscribeonmessage"><code>channel.subscribe(onMessage)</code></a>.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

channel.subscribe(onMessage);

channel.unsubscribe(onMessage);
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channel = diagnostics_channel.channel('my-channel');

function onMessage(message, name) {
  // Received data
}

channel.subscribe(onMessage);

channel.unsubscribe(onMessage);
</code></pre>
<h4><code>channel.bindStore(store[, transform])</code></h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>store</code> {AsyncLocalStorage} The store to which to bind the context data</li>
<li><code>transform</code> {Function} Transform context data before setting the store context</li>
</ul>
<p>When <a href="#channelrunstorescontext-fn-thisarg-args"><code>channel.runStores(context, ...)</code></a> is called, the given context data
will be applied to any store bound to the channel. If the store has already been
bound the previous <code>transform</code> function will be replaced with the new one.
The <code>transform</code> function may be omitted to set the given context data as the
context directly.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (data) =&gt; {
  return { data };
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (data) =&gt; {
  return { data };
});
</code></pre>
<h4><code>channel.unbindStore(store)</code></h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>store</code> {AsyncLocalStorage} The store to unbind from the channel.</li>
<li>Returns: {boolean} <code>true</code> if the store was found, <code>false</code> otherwise.</li>
</ul>
<p>Remove a message handler previously registered to this channel with
<a href="#channelbindstorestore-transform"><code>channel.bindStore(store)</code></a>.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store);
channel.unbindStore(store);
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store);
channel.unbindStore(store);
</code></pre>
<h4><code>channel.runStores(context, fn[, thisArg[, ...args]])</code></h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>context</code> {any} Message to send to subscribers and bind to stores</li>
<li><code>fn</code> {Function} Handler to run within the entered storage context</li>
<li><code>thisArg</code> {any} The receiver to be used for the function call.</li>
<li><code>...args</code> {any} Optional arguments to pass to the function.</li>
</ul>
<p>Applies the given data to any AsyncLocalStorage instances bound to the channel
for the duration of the given function, then publishes to the channel within
the scope of that data is applied to the stores.</p>
<p>If a transform function was given to <a href="#channelbindstorestore-transform"><code>channel.bindStore(store)</code></a> it will be
applied to transform the message data before it becomes the context value for
the store. The prior storage context is accessible from within the transform
function in cases where context linking is required.</p>
<p>The context applied to the store should be accessible in any async code which
continues from execution which began during the given function, however
there are some situations in which <a href="async_context.md#troubleshooting-context-loss">context loss</a> may occur.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (message) =&gt; {
  const parent = store.getStore();
  return new Span(message, parent);
});
channel.runStores({ some: 'message' }, () =&gt; {
  store.getStore(); // Span({ some: 'message' })
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();

const channel = diagnostics_channel.channel('my-channel');

channel.bindStore(store, (message) =&gt; {
  const parent = store.getStore();
  return new Span(message, parent);
});
channel.runStores({ some: 'message' }, () =&gt; {
  store.getStore(); // Span({ some: 'message' })
});
</code></pre>
<h4><code>channel.withStoreScope(data)</code></h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<ul>
<li><code>data</code> {any} Message to bind to stores</li>
<li>Returns: {RunStoresScope} Disposable scope object</li>
</ul>
<p>Creates a disposable scope that binds the given data to any AsyncLocalStorage
instances bound to the channel and publishes it to subscribers. The scope
automatically restores the previous storage contexts when disposed.</p>
<p>This method enables the use of JavaScript's explicit resource management
(<code>using</code> syntax with <code>Symbol.dispose</code>) to manage store contexts without
closure wrapping.</p>
<pre><code class="language-mjs">import { channel } from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const store = new AsyncLocalStorage();
const ch = channel('my-channel');

ch.bindStore(store, (message) =&gt; {
  return { ...message, timestamp: Date.now() };
});

{
  using scope = ch.withStoreScope({ request: 'data' });
  // Store is entered, data is published
  console.log(store.getStore()); // { request: 'data', timestamp: ... }
}
// Store is automatically restored on scope exit
</code></pre>
<pre><code class="language-cjs">const { channel } = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const store = new AsyncLocalStorage();
const ch = channel('my-channel');

ch.bindStore(store, (message) =&gt; {
  return { ...message, timestamp: Date.now() };
});

{
  using scope = ch.withStoreScope({ request: 'data' });
  // Store is entered, data is published
  console.log(store.getStore()); // { request: 'data', timestamp: ... }
}
// Store is automatically restored on scope exit
</code></pre>
<h3>Class: <code>RunStoresScope</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The class <code>RunStoresScope</code> represents a disposable scope created by
<a href="#channelwithstorescopedata"><code>channel.withStoreScope(data)</code></a>. It manages the lifecycle of store
contexts and ensures they are properly restored when the scope exits.</p>
<p>The scope must be used with the <code>using</code> syntax to ensure proper disposal.</p>
<h3>Class: <code>TracingChannel</code></h3>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The class <code>TracingChannel</code> is a collection of <a href="#tracingchannel-channels">TracingChannel Channels</a> which
together express a single traceable action. It is used to formalize and
simplify the process of producing events for tracing application flow.
<a href="#diagnostics_channeltracingchannelnameorchannels"><code>diagnostics_channel.tracingChannel()</code></a> is used to construct a
<code>TracingChannel</code>. As with <code>Channel</code> it is recommended to create and reuse a
single <code>TracingChannel</code> at the top-level of the file rather than creating them
dynamically.</p>
<h4><code>tracingChannel.subscribe(subscribers)</code></h4>
<ul>
<li><code>subscribers</code> {Object} Set of <a href="#tracingchannel-channels">TracingChannel Channels</a> subscribers
<ul>
<li><code>start</code> {Function} The <a href="#startevent"><code>start</code> event</a> subscriber</li>
<li><code>end</code> {Function} The <a href="#endevent"><code>end</code> event</a> subscriber</li>
<li><code>asyncStart</code> {Function} The <a href="#asyncstartevent"><code>asyncStart</code> event</a> subscriber</li>
<li><code>asyncEnd</code> {Function} The <a href="#asyncendevent"><code>asyncEnd</code> event</a> subscriber</li>
<li><code>error</code> {Function} The <a href="#errorevent"><code>error</code> event</a> subscriber</li>
</ul>
</li>
</ul>
<p>Helper to subscribe a collection of functions to the corresponding channels.
This is the same as calling <a href="#channelsubscribeonmessage"><code>channel.subscribe(onMessage)</code></a> on each channel
individually.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.subscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.subscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});
</code></pre>
<h4><code>tracingChannel.unsubscribe(subscribers)</code></h4>
<ul>
<li><code>subscribers</code> {Object} Set of <a href="#tracingchannel-channels">TracingChannel Channels</a> subscribers
<ul>
<li><code>start</code> {Function} The <a href="#startevent"><code>start</code> event</a> subscriber</li>
<li><code>end</code> {Function} The <a href="#endevent"><code>end</code> event</a> subscriber</li>
<li><code>asyncStart</code> {Function} The <a href="#asyncstartevent"><code>asyncStart</code> event</a> subscriber</li>
<li><code>asyncEnd</code> {Function} The <a href="#asyncendevent"><code>asyncEnd</code> event</a> subscriber</li>
<li><code>error</code> {Function} The <a href="#errorevent"><code>error</code> event</a> subscriber</li>
</ul>
</li>
<li>Returns: {boolean} <code>true</code> if all handlers were successfully unsubscribed,
and <code>false</code> otherwise.</li>
</ul>
<p>Helper to unsubscribe a collection of functions from the corresponding channels.
This is the same as calling <a href="#channelunsubscribeonmessage"><code>channel.unsubscribe(onMessage)</code></a> on each channel
individually.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.unsubscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.unsubscribe({
  start(message) {
    // Handle start message
  },
  end(message) {
    // Handle end message
  },
  asyncStart(message) {
    // Handle asyncStart message
  },
  asyncEnd(message) {
    // Handle asyncEnd message
  },
  error(message) {
    // Handle error message
  },
});
</code></pre>
<h4><code>tracingChannel.traceSync(fn[, context[, thisArg[, ...args]]])</code></h4>
<ul>
<li><code>fn</code> {Function} Function to wrap a trace around</li>
<li><code>context</code> {Object} Shared object to correlate events through</li>
<li><code>thisArg</code> {any} The receiver to be used for the function call</li>
<li><code>...args</code> {any} Optional arguments to pass to the function</li>
<li>Returns: {any} The return value of the given function</li>
</ul>
<p>Trace a synchronous function call. This will always produce a <a href="#startevent"><code>start</code> event</a>
and <a href="#endevent"><code>end</code> event</a> around the execution and may produce an <a href="#errorevent"><code>error</code> event</a>
if the given function throws an error. This will run the given function using
<a href="#channelrunstorescontext-fn-thisarg-args"><code>channel.runStores(context, ...)</code></a> on the <code>start</code> channel which ensures all
events should have any bound stores set to match this trace context.</p>
<p>To ensure only correct trace graphs are formed, events will only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins will not receive future events from that trace,
only future traces will be seen.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceSync(() =&gt; {
  // Do something
}, {
  some: 'thing',
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceSync(() =&gt; {
  // Do something
}, {
  some: 'thing',
});
</code></pre>
<h4><code>tracingChannel.tracePromise(fn[, context[, thisArg[, ...args]]])</code></h4>
<ul>
<li><code>fn</code> {Function} Function to wrap a trace around</li>
<li><code>context</code> {Object} Shared object to correlate trace events through</li>
<li><code>thisArg</code> {any} The receiver to be used for the function call</li>
<li><code>...args</code> {any} Optional arguments to pass to the function</li>
<li>Returns: {any} The return value of the given function. If the return value
is a Promise or thenable, tracing events will be published when it settles.
If the return value is not a Promise or thenable, it is returned as-is and
a warning is emitted.</li>
</ul>
<p>Trace an asynchronous function call which returns a {Promise} or
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables">thenable object</a>. This will always produce a <a href="#startevent"><code>start</code> event</a> and
<a href="#endevent"><code>end</code> event</a> around the synchronous portion of the function execution, and
will produce an <a href="#asyncstartevent"><code>asyncStart</code> event</a> and <a href="#asyncendevent"><code>asyncEnd</code> event</a> when the
returned promise is resolved or rejected. It may also produce an
<a href="#errorevent"><code>error</code> event</a> if the given function throws an error or the returned promise
is rejected. This will run the given function using
<a href="#channelrunstorescontext-fn-thisarg-args"><code>channel.runStores(context, ...)</code></a> on the <code>start</code> channel which ensures all
events should have any bound stores set to match this trace context.</p>
<p>If the value returned by <code>fn</code> is not a Promise or thenable, then it will be
returned with a warning, and no <code>asyncStart</code> or <code>asyncEnd</code> events will be
produced.</p>
<p>To ensure only correct trace graphs are formed, events will only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins will not receive future events from that trace,
only future traces will be seen.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.tracePromise(async () =&gt; {
  // Do something
}, {
  some: 'thing',
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.tracePromise(async () =&gt; {
  // Do something
}, {
  some: 'thing',
});
</code></pre>
<h4><code>tracingChannel.traceCallback(fn[, position[, context[, thisArg[, ...args]]]])</code></h4>
<ul>
<li><code>fn</code> {Function} callback using function to wrap a trace around</li>
<li><code>position</code> {number} Zero-indexed argument position of expected callback
(defaults to last argument if <code>undefined</code> is passed)</li>
<li><code>context</code> {Object} Shared object to correlate trace events through (defaults
to <code>{}</code> if <code>undefined</code> is passed)</li>
<li><code>thisArg</code> {any} The receiver to be used for the function call</li>
<li><code>...args</code> {any} arguments to pass to the function (must include the callback)</li>
<li>Returns: {any} The return value of the given function</li>
</ul>
<p>Trace a callback-receiving function call. The callback is expected to follow
the error as first arg convention typically used. This will always produce a
<a href="#startevent"><code>start</code> event</a> and <a href="#endevent"><code>end</code> event</a> around the synchronous portion of the
function execution, and will produce a <a href="#asyncstartevent"><code>asyncStart</code> event</a> and
<a href="#asyncendevent"><code>asyncEnd</code> event</a> around the callback execution. It may also produce an
<a href="#errorevent"><code>error</code> event</a> if the given function throws or the first argument passed to
the callback is set. This will run the given function using
<a href="#channelrunstorescontext-fn-thisarg-args"><code>channel.runStores(context, ...)</code></a> on the <code>start</code> channel which ensures all
events should have any bound stores set to match this trace context.</p>
<p>To ensure only correct trace graphs are formed, events will only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins will not receive future events from that trace,
only future traces will be seen.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceCallback((arg1, callback) =&gt; {
  // Do something
  callback(null, 'result');
}, 1, {
  some: 'thing',
}, thisArg, arg1, callback);
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

channels.traceCallback((arg1, callback) =&gt; {
  // Do something
  callback(null, 'result');
}, 1, {
  some: 'thing',
}, thisArg, arg1, callback);
</code></pre>
<p>The callback will also be run with <a href="#channelrunstorescontext-fn-thisarg-args"><code>channel.runStores(context, ...)</code></a> which
enables context loss recovery in some cases.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';
import { AsyncLocalStorage } from 'node:async_hooks';

const channels = diagnostics_channel.tracingChannel('my-channel');
const myStore = new AsyncLocalStorage();

// The start channel sets the initial store data to something
// and stores that store data value on the trace context object
channels.start.bindStore(myStore, (data) =&gt; {
  const span = new Span(data);
  data.span = span;
  return span;
});

// Then asyncStart can restore from that data it stored previously
channels.asyncStart.bindStore(myStore, (data) =&gt; {
  return data.span;
});
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');
const { AsyncLocalStorage } = require('node:async_hooks');

const channels = diagnostics_channel.tracingChannel('my-channel');
const myStore = new AsyncLocalStorage();

// The start channel sets the initial store data to something
// and stores that store data value on the trace context object
channels.start.bindStore(myStore, (data) =&gt; {
  const span = new Span(data);
  data.span = span;
  return span;
});

// Then asyncStart can restore from that data it stored previously
channels.asyncStart.bindStore(myStore, (data) =&gt; {
  return data.span;
});
</code></pre>
<h4><code>tracingChannel.hasSubscribers</code></h4>
<ul>
<li>Returns: {boolean} <code>true</code> if any of the individual channels has a subscriber,
<code>false</code> if not.</li>
</ul>
<p>This is a helper method available on a <a href="#class-tracingchannel"><code>TracingChannel</code></a> instance to check if
any of the <a href="#tracingchannel-channels">TracingChannel Channels</a> have subscribers. A <code>true</code> is returned if
any of them have at least one subscriber, a <code>false</code> is returned otherwise.</p>
<pre><code class="language-mjs">import diagnostics_channel from 'node:diagnostics_channel';

const channels = diagnostics_channel.tracingChannel('my-channel');

if (channels.hasSubscribers) {
  // Do something
}
</code></pre>
<pre><code class="language-cjs">const diagnostics_channel = require('node:diagnostics_channel');

const channels = diagnostics_channel.tracingChannel('my-channel');

if (channels.hasSubscribers) {
  // Do something
}
</code></pre>
<h3>Class: <code>BoundedChannel</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The class <code>BoundedChannel</code> is a simplified version of <a href="#class-tracingchannel"><code>TracingChannel</code></a> that
only traces synchronous operations. It consists of two channels (<code>start</code> and
<code>end</code>) instead of five, omitting the <code>asyncStart</code>, <code>asyncEnd</code>, and <code>error</code>
events. This makes it suitable for tracing operations that don't involve
asynchronous continuations or error handling.</p>
<p>Like <code>TracingChannel</code>, it is recommended to create and reuse a single
<code>BoundedChannel</code> at the top-level of the file rather than creating them
dynamically.</p>
<h4><code>boundedChannel.hasSubscribers</code></h4>
<ul>
<li>Returns: {boolean} <code>true</code> if any of the individual channels has a subscriber,
<code>false</code> if not.</li>
</ul>
<p>Check if any of the <code>start</code> or <code>end</code> channels have subscribers.</p>
<pre><code class="language-mjs">import { boundedChannel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

if (wc.hasSubscribers) {
  // There are subscribers, perform traced operation
}
</code></pre>
<pre><code class="language-cjs">const { boundedChannel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

if (wc.hasSubscribers) {
  // There are subscribers, perform traced operation
}
</code></pre>
<h4><code>boundedChannel.subscribe(handlers)</code></h4>
<ul>
<li><code>handlers</code> {Object} Set of channel subscribers
<ul>
<li><code>start</code> {Function} The start event subscriber</li>
<li><code>end</code> {Function} The end event subscriber</li>
</ul>
</li>
</ul>
<p>Subscribe to the bounded channel events. This is equivalent to calling
<a href="#channelsubscribeonmessage"><code>channel.subscribe(onMessage)</code></a> on each channel individually.</p>
<pre><code class="language-mjs">import { boundedChannel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

wc.subscribe({
  start(message) {
    // Handle start
  },
  end(message) {
    // Handle end
  },
});
</code></pre>
<pre><code class="language-cjs">const { boundedChannel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

wc.subscribe({
  start(message) {
    // Handle start
  },
  end(message) {
    // Handle end
  },
});
</code></pre>
<h4><code>boundedChannel.unsubscribe(handlers)</code></h4>
<ul>
<li><code>handlers</code> {Object} Set of channel subscribers
<ul>
<li><code>start</code> {Function} The start event subscriber</li>
<li><code>end</code> {Function} The end event subscriber</li>
</ul>
</li>
<li>Returns: {boolean} <code>true</code> if all handlers were successfully unsubscribed,
<code>false</code> otherwise.</li>
</ul>
<p>Unsubscribe from the bounded channel events. This is equivalent to calling
<a href="#channelunsubscribeonmessage"><code>channel.unsubscribe(onMessage)</code></a> on each channel individually.</p>
<pre><code class="language-mjs">import { boundedChannel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

const handlers = {
  start(message) {},
  end(message) {},
};

wc.subscribe(handlers);
wc.unsubscribe(handlers);
</code></pre>
<pre><code class="language-cjs">const { boundedChannel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

const handlers = {
  start(message) {},
  end(message) {},
};

wc.subscribe(handlers);
wc.unsubscribe(handlers);
</code></pre>
<h4><code>boundedChannel.run(context, fn[, thisArg[, ...args]])</code></h4>
<ul>
<li><code>context</code> {Object} Shared object to correlate events through</li>
<li><code>fn</code> {Function} Function to wrap a trace around</li>
<li><code>thisArg</code> {any} The receiver to be used for the function call</li>
<li><code>...args</code> {any} Optional arguments to pass to the function</li>
<li>Returns: {any} The return value of the given function</li>
</ul>
<p>Trace a synchronous function call. This will produce a <code>start</code> event and <code>end</code>
event around the execution. This runs the given function using
<a href="#channelrunstorescontext-fn-thisarg-args"><code>channel.runStores(context, ...)</code></a> on the <code>start</code> channel which ensures all
events have any bound stores set to match this trace context.</p>
<pre><code class="language-mjs">import { boundedChannel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

const result = wc.run({ operationId: '123' }, () =&gt; {
  // Perform operation
  return 42;
});
</code></pre>
<pre><code class="language-cjs">const { boundedChannel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

const result = wc.run({ operationId: '123' }, () =&gt; {
  // Perform operation
  return 42;
});
</code></pre>
<h4><code>boundedChannel.withScope([context])</code></h4>
<ul>
<li><code>context</code> {Object} Shared object to correlate events through</li>
<li>Returns: {BoundedChannelScope} Disposable scope object</li>
</ul>
<p>Create a disposable scope for tracing a synchronous operation using JavaScript's
explicit resource management (<code>using</code> syntax). The scope automatically publishes
<code>start</code> and <code>end</code> events, enters bound stores, and handles cleanup when disposed.</p>
<pre><code class="language-mjs">import { boundedChannel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

const context = { operationId: '123' };
{
  using scope = wc.withScope(context);
  // Stores are entered, start event is published

  // Perform work and set result on context
  context.result = 42;
}
// End event is published, stores are restored automatically
</code></pre>
<pre><code class="language-cjs">const { boundedChannel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

const context = { operationId: '123' };
{
  using scope = wc.withScope(context);
  // Stores are entered, start event is published

  // Perform work and set result on context
  context.result = 42;
}
// End event is published, stores are restored automatically
</code></pre>
<h3>Class: <code>BoundedChannelScope</code></h3>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>The class <code>BoundedChannelScope</code> represents a disposable scope created by
<a href="#boundedchannelwithscopecontext"><code>boundedChannel.withScope(context)</code></a>. It manages the lifecycle of a traced
operation, automatically publishing events and managing store contexts.</p>
<p>The scope must be used with the <code>using</code> syntax to ensure proper disposal.</p>
<pre><code class="language-mjs">import { boundedChannel } from 'node:diagnostics_channel';

const wc = boundedChannel('my-operation');

const context = {};
{
  using scope = wc.withScope(context);
  // Start event is published, stores are entered
  context.result = performOperation();
  // End event is automatically published at end of block
}
</code></pre>
<pre><code class="language-cjs">const { boundedChannel } = require('node:diagnostics_channel');

const wc = boundedChannel('my-operation');

const context = {};
{
  using scope = wc.withScope(context);
  // Start event is published, stores are entered
  context.result = performOperation();
  // End event is automatically published at end of block
}
</code></pre>
<h3>BoundedChannel Channels</h3>
<p>A <code>BoundedChannel</code> consists of two diagnostics channels representing the
lifecycle of a scope created with the <code>using</code> syntax:</p>
<ul>
<li><code>tracing:${name}:start</code> - Published when the <code>using</code> statement executes (scope creation)</li>
<li><code>tracing:${name}:end</code> - Published when exiting the block (scope disposal)</li>
</ul>
<p>When using the <code>using</code> syntax with [<code>boundedChannel.withScope([context])</code>][], the <code>start</code>
event is published immediately when the statement executes, and the <code>end</code> event
is automatically published when disposal occurs at the end of the block. All
events share the same context object, which can be extended with additional
properties like <code>result</code> during scope execution.</p>
<h3>TracingChannel Channels</h3>
<p>A TracingChannel is a collection of several diagnostics_channels representing
specific points in the execution lifecycle of a single traceable action. The
behavior is split into five diagnostics_channels consisting of <code>start</code>,
<code>end</code>, <code>asyncStart</code>, <code>asyncEnd</code>, and <code>error</code>. A single traceable action will
share the same event object between all events, this can be helpful for
managing correlation through a weakmap.</p>
<p>These event objects will be extended with <code>result</code> or <code>error</code> values when
the task &quot;completes&quot;. In the case of a synchronous task the <code>result</code> will be
the return value and the <code>error</code> will be anything thrown from the function.
With callback-based async functions the <code>result</code> will be the second argument
of the callback while the <code>error</code> will either be a thrown error visible in the
<code>end</code> event or the first callback argument in either of the <code>asyncStart</code> or
<code>asyncEnd</code> events.</p>
<p>To ensure only correct trace graphs are formed, events should only be published
if subscribers are present prior to starting the trace. Subscriptions which are
added after the trace begins should not receive future events from that trace,
only future traces will be seen.</p>
<p>Tracing channels should follow a naming pattern of:</p>
<ul>
<li><code>tracing:module.class.method:start</code> or <code>tracing:module.function:start</code></li>
<li><code>tracing:module.class.method:end</code> or <code>tracing:module.function:end</code></li>
<li><code>tracing:module.class.method:asyncStart</code> or <code>tracing:module.function:asyncStart</code></li>
<li><code>tracing:module.class.method:asyncEnd</code> or <code>tracing:module.function:asyncEnd</code></li>
<li><code>tracing:module.class.method:error</code> or <code>tracing:module.function:error</code></li>
</ul>
<h4><code>start(event)</code></h4>
<ul>
<li>Name: <code>tracing:${name}:start</code></li>
</ul>
<p>The <code>start</code> event represents the point at which a function is called. At this
point the event data may contain function arguments or anything else available
at the very start of the execution of the function.</p>
<h4><code>end(event)</code></h4>
<ul>
<li>Name: <code>tracing:${name}:end</code></li>
</ul>
<p>The <code>end</code> event represents the point at which a function call returns a value.
In the case of an async function this is when the promise returned not when the
function itself makes a return statement internally. At this point, if the
traced function was synchronous the <code>result</code> field will be set to the return
value of the function. Alternatively, the <code>error</code> field may be present to
represent any thrown errors.</p>
<p>It is recommended to listen specifically to the <code>error</code> event to track errors
as it may be possible for a traceable action to produce multiple errors. For
example, an async task which fails may be started internally before the sync
part of the task then throws an error.</p>
<h4><code>asyncStart(event)</code></h4>
<ul>
<li>Name: <code>tracing:${name}:asyncStart</code></li>
</ul>
<p>The <code>asyncStart</code> event represents the callback or continuation of a traceable
function being reached. At this point things like callback arguments may be
available, or anything else expressing the &quot;result&quot; of the action.</p>
<p>For callbacks-based functions, the first argument of the callback will be
assigned to the <code>error</code> field, if not <code>undefined</code> or <code>null</code>, and the second
argument will be assigned to the <code>result</code> field.</p>
<p>For promises, the argument to the <code>resolve</code> path will be assigned to <code>result</code>
or the argument to the <code>reject</code> path will be assign to <code>error</code>.</p>
<p>It is recommended to listen specifically to the <code>error</code> event to track errors
as it may be possible for a traceable action to produce multiple errors. For
example, an async task which fails may be started internally before the sync
part of the task then throws an error.</p>
<h4><code>asyncEnd(event)</code></h4>
<ul>
<li>Name: <code>tracing:${name}:asyncEnd</code></li>
</ul>
<p>The <code>asyncEnd</code> event represents the callback of an asynchronous function
returning. It's not likely event data will change after the <code>asyncStart</code> event,
however it may be useful to see the point where the callback completes.</p>
<h4><code>error(event)</code></h4>
<ul>
<li>Name: <code>tracing:${name}:error</code></li>
</ul>
<p>The <code>error</code> event represents any error produced by the traceable function
either synchronously or asynchronously. If an error is thrown in the
synchronous portion of the traced function the error will be assigned to the
<code>error</code> field of the event and the <code>error</code> event will be triggered. If an error
is received asynchronously through a callback or promise rejection it will also
be assigned to the <code>error</code> field of the event and trigger the <code>error</code> event.</p>
<p>It is possible for a single traceable function call to produce errors multiple
times so this should be considered when consuming this event. For example, if
another async task is triggered internally which fails and then the sync part
of the function then throws and error two <code>error</code> events will be emitted, one
for the sync error and one for the async error.</p>
<h3>Built-in Channels</h3>
<h4>Console</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'console.log'</code></h5>
<ul>
<li><code>args</code> {any[]}</li>
</ul>
<p>Emitted when <code>console.log()</code> is called. Receives and array of the arguments
passed to <code>console.log()</code>.</p>
<h5>Event: <code>'console.info'</code></h5>
<ul>
<li><code>args</code> {any[]}</li>
</ul>
<p>Emitted when <code>console.info()</code> is called. Receives and array of the arguments
passed to <code>console.info()</code>.</p>
<h5>Event: <code>'console.debug'</code></h5>
<ul>
<li><code>args</code> {any[]}</li>
</ul>
<p>Emitted when <code>console.debug()</code> is called. Receives and array of the arguments
passed to <code>console.debug()</code>.</p>
<h5>Event: <code>'console.warn'</code></h5>
<ul>
<li><code>args</code> {any[]}</li>
</ul>
<p>Emitted when <code>console.warn()</code> is called. Receives and array of the arguments
passed to <code>console.warn()</code>.</p>
<h5>Event: <code>'console.error'</code></h5>
<ul>
<li><code>args</code> {any[]}</li>
</ul>
<p>Emitted when <code>console.error()</code> is called. Receives and array of the arguments
passed to <code>console.error()</code>.</p>
<h4>Crypto</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'crypto.fips.indicator'</code></h5>
<ul>
<li><code>operation</code> {string} The provider-defined operation type.</li>
<li><code>reason</code> {string} The provider-defined description of why the operation is
not approved.</li>
<li><code>blocked</code> {boolean} Whether an indicator callback blocked the operation.</li>
<li><code>count</code> {number} The number of matching pending indicator invocations
represented by this message.</li>
<li><code>dropped</code> {number} The number of additional indicator invocations dropped
before this message was delivered.</li>
</ul>
<p>Emitted when the OpenSSL FIPS provider used by Node.js detects an operation that
is not FIPS approved after the corresponding provider check was relaxed. Such
operations are possible when the provider is configured for backwards
compatibility. The <code>operation</code> and <code>reason</code> values come from the provider and
should be treated as opaque strings rather than stable enumerations.</p>
<p>Start Node.js with <a href="cli.md#--enable-fips-indicator-events"><code>--enable-fips-indicator-events</code></a> to enable this channel.
Without the option, subscribing does not install the OpenSSL callback and no
messages are published.</p>
<p>Subscribing to the channel is observation-only and never changes the result of
an operation. Node.js preserves the result from any native indicator callback
installed before Node.js initializes its crypto support. When
<a href="cli.md#--force-fips"><code>--force-fips=strict</code></a> is used, Node.js rejects callback-indicated
non-approved operations whether or not indicator events are enabled or the
channel has subscribers.</p>
<p>Messages are published asynchronously on the main thread because OpenSSL
indicators can originate from Workers or other threads. Only subscriptions on
the main thread receive messages. Delivery order relative to the originating
operation is not defined, and a message cannot be correlated with a particular
call or Worker.</p>
<p>One cryptographic operation can invoke the OpenSSL indicator more than once.
Matching pending invocations are coalesced and reflected in <code>count</code>, which does
not necessarily represent a number of cryptographic operations. At most 256
distinct messages are queued. Additional invocations are reported in <code>dropped</code>
on the first queued message. Queued messages do not keep the event loop active,
so this channel is best-effort diagnostics rather than an authoritative audit
log.</p>
<p>This channel observes the default OpenSSL library context used by Node.js. It
does not observe native addons or other code that uses another <code>OSSL_LIB_CTX</code>
or another copy of <code>libcrypto</code>. It is active with OpenSSL 3.4 and later and is
not available with BoringSSL. A provider configured to reject a check directly,
including a pedantic OpenSSL FIPS provider, can reject an operation without
emitting an indicator. Receiving or not receiving a message does not establish
that Node.js or a cryptographic operation is FIPS validated.</p>
<pre><code class="language-mjs">import diagnosticsChannel from 'node:diagnostics_channel';

diagnosticsChannel.subscribe('crypto.fips.indicator', (message) =&gt; {
  console.error('Non-approved cryptographic operation', message);
});
</code></pre>
<h4>HTTP</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'http.client.request.created'</code></h5>
<ul>
<li><code>request</code> {http.ClientRequest}</li>
</ul>
<p>Emitted when client creates a request object.
Unlike <code>http.client.request.start</code>, this event is emitted before the request has been sent.</p>
<h5>Event: <code>'http.client.request.start'</code></h5>
<ul>
<li><code>request</code> {http.ClientRequest}</li>
</ul>
<p>Emitted when client starts a request.</p>
<h5>Event: <code>'http.client.request.error'</code></h5>
<ul>
<li><code>request</code> {http.ClientRequest}</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when an error occurs during a client request.</p>
<h5>Event: <code>'http.client.response.finish'</code></h5>
<ul>
<li><code>request</code> {http.ClientRequest}</li>
<li><code>response</code> {http.IncomingMessage}</li>
</ul>
<p>Emitted when client receives a response.</p>
<h5>Event: <code>'http.server.request.start'</code></h5>
<ul>
<li><code>request</code> {http.IncomingMessage}</li>
<li><code>response</code> {http.ServerResponse}</li>
<li><code>socket</code> {net.Socket}</li>
<li><code>server</code> {http.Server}</li>
</ul>
<p>Emitted when server receives a request.</p>
<h5>Event: <code>'http.server.response.created'</code></h5>
<ul>
<li><code>request</code> {http.IncomingMessage}</li>
<li><code>response</code> {http.ServerResponse}</li>
</ul>
<p>Emitted when server creates a response.
The event is emitted before the response is sent.</p>
<h5>Event: <code>'http.server.response.finish'</code></h5>
<ul>
<li><code>request</code> {http.IncomingMessage}</li>
<li><code>response</code> {http.ServerResponse}</li>
<li><code>socket</code> {net.Socket}</li>
<li><code>server</code> {http.Server}</li>
</ul>
<p>Emitted when server sends a response.</p>
<h4>HTTP/2</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'http2.client.stream.created'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
</ul>
<p>Emitted when a stream is created on the client.</p>
<h5>Event: <code>'http2.client.stream.start'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
</ul>
<p>Emitted when a stream is started on the client.</p>
<h5>Event: <code>'http2.client.stream.error'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when an error occurs during the processing of a stream on the client.</p>
<h5>Event: <code>'http2.client.stream.finish'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>flags</code> {number}</li>
</ul>
<p>Emitted when a stream is received on the client.</p>
<h5>Event: <code>'http2.client.stream.bodyChunkSent'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
<li><code>writev</code> {boolean}</li>
<li><code>data</code> {Buffer | string | Buffer[] | Object[]}
<ul>
<li><code>chunk</code> {Buffer|string}</li>
<li><code>encoding</code> {string}</li>
</ul>
</li>
<li><code>encoding</code> {string}</li>
</ul>
<p>Emitted when a chunk of the client stream body is being sent.</p>
<h5>Event: <code>'http2.client.stream.bodySent'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
</ul>
<p>Emitted after the client stream body has been fully sent.</p>
<h5>Event: <code>'http2.client.stream.close'</code></h5>
<ul>
<li><code>stream</code> {ClientHttp2Stream}</li>
</ul>
<p>Emitted when a stream is closed on the client. The HTTP/2 error code used when
closing the stream can be retrieved using the <code>stream.rstCode</code> property.</p>
<h5>Event: <code>'http2.server.stream.created'</code></h5>
<ul>
<li><code>stream</code> {ServerHttp2Stream}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
</ul>
<p>Emitted when a stream is created on the server.</p>
<h5>Event: <code>'http2.server.stream.start'</code></h5>
<ul>
<li><code>stream</code> {ServerHttp2Stream}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
</ul>
<p>Emitted when a stream is started on the server.</p>
<h5>Event: <code>'http2.server.stream.error'</code></h5>
<ul>
<li><code>stream</code> {ServerHttp2Stream}</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when an error occurs during the processing of a stream on the server.</p>
<h5>Event: <code>'http2.server.stream.finish'</code></h5>
<ul>
<li><code>stream</code> {ServerHttp2Stream}</li>
<li><code>headers</code> {HTTP/2 Headers Object}</li>
<li><code>flags</code> {number}</li>
</ul>
<p>Emitted when a stream is sent on the server.</p>
<h5>Event: <code>'http2.server.stream.close'</code></h5>
<ul>
<li><code>stream</code> {ServerHttp2Stream}</li>
</ul>
<p>Emitted when a stream is closed on the server. The HTTP/2 error code used when
closing the stream can be retrieved using the <code>stream.rstCode</code> property.</p>
<h4>Modules</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'tracing:module.require:start'</code></h5>
<ul>
<li><code>event</code> {Object} containing the following properties
<ul>
<li><code>id</code> Argument passed to <code>require()</code>. Module name.</li>
<li><code>parentFilename</code> Name of the module that attempted to require(id).</li>
</ul>
</li>
</ul>
<p>Emitted when <code>require()</code> is executed. See <a href="#startevent"><code>start</code> event</a>.</p>
<h5>Event: <code>'tracing:module.require:end'</code></h5>
<ul>
<li><code>event</code> {Object} containing the following properties
<ul>
<li><code>id</code> Argument passed to <code>require()</code>. Module name.</li>
<li><code>parentFilename</code> Name of the module that attempted to require(id).</li>
</ul>
</li>
</ul>
<p>Emitted when a <code>require()</code> call returns. See <a href="#endevent"><code>end</code> event</a>.</p>
<h5>Event: <code>'tracing:module.require:error'</code></h5>
<ul>
<li><code>event</code> {Object} containing the following properties
<ul>
<li><code>id</code> Argument passed to <code>require()</code>. Module name.</li>
<li><code>parentFilename</code> Name of the module that attempted to require(id).</li>
</ul>
</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when a <code>require()</code> throws an error. See <a href="#errorevent"><code>error</code> event</a>.</p>
<h5>Event: <code>'tracing:module.import:asyncStart'</code></h5>
<ul>
<li><code>event</code> {Object} containing the following properties
<ul>
<li><code>id</code> Argument passed to <code>import()</code>. Module name.</li>
<li><code>parentURL</code> URL object of the module that attempted to import(id).</li>
</ul>
</li>
</ul>
<p>Emitted when <code>import()</code> is invoked. See <a href="#asyncstartevent"><code>asyncStart</code> event</a>.</p>
<h5>Event: <code>'tracing:module.import:asyncEnd'</code></h5>
<ul>
<li><code>event</code> {Object} containing the following properties
<ul>
<li><code>id</code> Argument passed to <code>import()</code>. Module name.</li>
<li><code>parentURL</code> URL object of the module that attempted to import(id).</li>
</ul>
</li>
</ul>
<p>Emitted when <code>import()</code> has completed. See <a href="#asyncendevent"><code>asyncEnd</code> event</a>.</p>
<h5>Event: <code>'tracing:module.import:error'</code></h5>
<ul>
<li><code>event</code> {Object} containing the following properties
<ul>
<li><code>id</code> Argument passed to <code>import()</code>. Module name.</li>
<li><code>parentURL</code> URL object of the module that attempted to import(id).</li>
</ul>
</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when a <code>import()</code> throws an error. See <a href="#errorevent"><code>error</code> event</a>.</p>
<h4>NET</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'net.client.socket'</code></h5>
<ul>
<li><code>socket</code> {net.Socket|tls.TLSSocket}</li>
</ul>
<p>Emitted when a new TCP or pipe client socket connection is created.</p>
<h5>Event: <code>'net.server.socket'</code></h5>
<ul>
<li><code>socket</code> {net.Socket}</li>
</ul>
<p>Emitted when a new TCP or pipe connection is received.</p>
<h5>Event: <code>'tracing:net.server.listen:asyncStart'</code></h5>
<ul>
<li><code>server</code> {net.Server}</li>
<li><code>options</code> {Object}</li>
</ul>
<p>Emitted when <a href="net.md#serverlisten"><code>net.Server.listen()</code></a> is invoked, before the port or pipe is actually setup.</p>
<h5>Event: <code>'tracing:net.server.listen:asyncEnd'</code></h5>
<ul>
<li><code>server</code> {net.Server}</li>
</ul>
<p>Emitted when <a href="net.md#serverlisten"><code>net.Server.listen()</code></a> has completed and thus the server is ready to accept connection.</p>
<h5>Event: <code>'tracing:net.server.listen:error'</code></h5>
<ul>
<li><code>server</code> {net.Server}</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when <a href="net.md#serverlisten"><code>net.Server.listen()</code></a> is returning an error.</p>
<h4>UDP</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'udp.socket'</code></h5>
<ul>
<li><code>socket</code> {dgram.Socket}</li>
</ul>
<p>Emitted when a new UDP socket is created.</p>
<h4>Process</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'child_process'</code></h5>
<ul>
<li><code>process</code> {ChildProcess}</li>
</ul>
<p>Emitted when a new process is created.</p>
<p><code>tracing:child_process.spawn:start</code></p>
<ul>
<li><code>process</code> {ChildProcess}</li>
<li><code>options</code> {Object}</li>
</ul>
<p>Emitted when <a href="child_process.md#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> is invoked, before the process is
actually spawned.</p>
<p><code>tracing:child_process.spawn:end</code></p>
<ul>
<li><code>process</code> {ChildProcess}</li>
</ul>
<p>Emitted when <a href="child_process.md#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> has completed successfully and the
process has been created.</p>
<p><code>tracing:child_process.spawn:error</code></p>
<ul>
<li><code>process</code> {ChildProcess}</li>
<li><code>error</code> {Error}</li>
</ul>
<p>Emitted when <a href="child_process.md#child_processspawncommand-args-options"><code>child_process.spawn()</code></a> encounters an error.</p>
<h5>Event: <code>'process.execve'</code></h5>
<ul>
<li><code>execPath</code> {string}</li>
<li><code>args</code> {string[]}</li>
<li><code>env</code> {string[]}</li>
</ul>
<p>Emitted when <a href="process.md#processexecvefile-args-env"><code>process.execve()</code></a> is invoked.</p>
<h4>Web Locks</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<p>These channels are emitted for each <a href="worker_threads.md#locksrequestname-options-callback"><code>locks.request()</code></a> call. See
<a href="worker_threads.md#worker_threadslocks"><code>worker_threads.locks</code></a> for details on Web Locks.</p>
<h5>Event: <code>'locks.request.start'</code></h5>
<ul>
<li><code>name</code> {string} The name of the requested lock resource.</li>
<li><code>mode</code> {string} The lock mode: <code>'exclusive'</code> or <code>'shared'</code>.</li>
</ul>
<p>Emitted when a lock request is initiated, before the lock is granted.</p>
<h5>Event: <code>'locks.request.grant'</code></h5>
<ul>
<li><code>name</code> {string} The name of the requested lock resource.</li>
<li><code>mode</code> {string} The lock mode: <code>'exclusive'</code> or <code>'shared'</code>.</li>
</ul>
<p>Emitted when a lock is successfully granted and the callback is about to run.</p>
<h5>Event: <code>'locks.request.miss'</code></h5>
<ul>
<li><code>name</code> {string} The name of the requested lock resource.</li>
<li><code>mode</code> {string} The lock mode: <code>'exclusive'</code> or <code>'shared'</code>.</li>
</ul>
<p>Emitted when <code>ifAvailable</code> is <code>true</code> and the lock is not immediately available,
and the request callback is invoked with <code>null</code> instead of a <code>Lock</code> object.</p>
<h5>Event: <code>'locks.request.end'</code></h5>
<ul>
<li><code>name</code> {string} The name of the requested lock resource.</li>
<li><code>mode</code> {string} The lock mode: <code>'exclusive'</code> or <code>'shared'</code>.</li>
<li><code>steal</code> {boolean} Whether the request uses steal semantics.</li>
<li><code>ifAvailable</code> {boolean} Whether the request uses ifAvailable semantics.</li>
<li><code>error</code> {Error|undefined} The error thrown by the callback, if any.</li>
</ul>
<p>Emitted when a lock request has finished, whether the callback succeeded,
threw an error, or the lock was stolen.</p>
<h4>Worker Thread</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'worker_threads'</code></h5>
<ul>
<li><code>worker</code> {Worker}</li>
</ul>
<p>Emitted when a new thread is created.</p>
<h4>SQLite</h4>
<blockquote>
<p>Stability: 1 - Experimental</p>
</blockquote>
<h5>Event: <code>'sqlite.db.query'</code></h5>
<ul>
<li><code>sql</code> {string} The expanded SQL with bound parameter values substituted.
If expansion fails, the source SQL with unsubstituted placeholders is used
instead.</li>
<li><code>database</code> {Database} The <a href="sqlite.md#class-database"><code>Database</code></a> instance that executed the
statement.</li>
<li><code>duration</code> {number} SQLite's internal estimate of the statement run time in
nanoseconds. This reflects C-layer execution time only and does not include
JavaScript binding overhead such as argument marshaling or result-row
construction.</li>
</ul>
<p>Emitted after a SQL statement finishes executing against a <a href="sqlite.md#class-database"><code>Database</code></a>
instance. This is a <strong>profiling</strong> event: it fires once per statement upon
completion and reports an estimated duration from SQLite's internal profiler.
It is not a distributed-tracing span. There is no corresponding start event,
no async context propagation, and no parent-span linkage. If you need
OpenTelemetry-compatible spans or async context propagation, wrap your SQLite
calls with a <a href="#class-tracingchannel"><code>TracingChannel</code></a> at the JavaScript layer instead.</p>
<p>Publishing is zero-overhead when there are no subscribers.</p>
<p>No event is emitted for a statement that is abandoned mid-iteration and later
finalized, either explicitly through <a href="sqlite.md#statementclose"><code>statement.close()</code></a> or when the
statement is garbage collected. Subscribers must not close the database or the
statement, since both are still in use while the event is being delivered; see
<a href="sqlite.md#databaseclose"><code>database.close()</code></a> and <a href="sqlite.md#statementclose"><code>statement.close()</code></a>.</p>
