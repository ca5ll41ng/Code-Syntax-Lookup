---
id: "js-en-function-node-cluster"
language: "js"
lang: "en"
category: "function"
name: "node:cluster"
title: "Cluster"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/cluster.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Cluster

<h1>Cluster</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>Clusters of Node.js processes can be used to run multiple instances of Node.js
that can distribute workloads among their application threads. When process
isolation is not needed, use the <a href="worker_threads.md"><code>worker_threads</code></a> module instead, which
allows running multiple application threads within a single Node.js instance.</p>
<p>The cluster module allows easy creation of child processes that all share
server ports.</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) =&gt; {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) =&gt; {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) =&gt; {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) =&gt; {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
</code></pre>
<p>Running Node.js will now share port 8000 between the workers:</p>
<pre><code class="language-console">$ node server.js
Primary 3596 is running
Worker 4324 started
Worker 4520 started
Worker 6056 started
Worker 5644 started
</code></pre>
<p>On Windows, it is not yet possible to set up a named pipe server in a worker.</p>
<h2>How it works</h2>
<p>The worker processes are spawned using the <a href="child_process.md#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a> method,
so that they can communicate with the parent via IPC and pass server
handles back and forth.</p>
<p>The cluster module supports two methods of distributing incoming
connections.</p>
<p>The first one (and the default one on all platforms except Windows)
is the round-robin approach, where the primary process listens on a
port, accepts new connections and distributes them across the workers
in a round-robin fashion, with some built-in smarts to avoid
overloading a worker process.</p>
<p>The second approach is where the primary process creates the listen
socket and sends it to interested workers. The workers then accept
incoming connections directly.</p>
<p>The second approach should, in theory, give the best performance.
In practice however, distribution tends to be very unbalanced due
to operating system scheduler vagaries. Loads have been observed
where over 70% of all connections ended up in just two processes,
out of a total of eight.</p>
<p>Because <code>server.listen()</code> hands off most of the work to the primary
process, there are three cases where the behavior between a normal
Node.js process and a cluster worker differs:</p>
<ol>
<li><code>server.listen({fd: 7})</code> Because the message is passed to the primary,
file descriptor 7 <strong>in the parent</strong> will be listened on, and the
handle passed to the worker, rather than listening to the worker's
idea of what the number 7 file descriptor references.</li>
<li><code>server.listen(handle)</code> Listening on handles explicitly will cause
the worker to use the supplied handle, rather than talk to the primary
process.</li>
<li><code>server.listen(0)</code> Normally, this will cause servers to listen on a
random port. However, in a cluster, each worker will receive the
same &quot;random&quot; port each time they do <code>listen(0)</code>. In essence, the
port is random the first time, but predictable thereafter. To listen
on a unique port, generate a port number based on the cluster worker ID.</li>
</ol>
<p>Node.js does not provide routing logic. It is therefore important to design an
application such that it does not rely too heavily on in-memory data objects for
things like sessions and login.</p>
<p>Because workers are all separate processes, they can be killed or
re-spawned depending on a program's needs, without affecting other
workers. As long as there are some workers still alive, the server will
continue to accept connections. If no workers are alive, existing connections
will be dropped and new connections will be refused. Node.js does not
automatically manage the number of workers, however. It is the application's
responsibility to manage the worker pool based on its own needs.</p>
<p>Although a primary use case for the <code>node:cluster</code> module is networking, it can
also be used for other use cases requiring worker processes.</p>
<h2>Class: <code>Worker</code></h2>
<ul>
<li>Extends: {EventEmitter}</li>
</ul>
<p>A <code>Worker</code> object contains all public information and method about a worker.
In the primary it can be obtained using <code>cluster.workers</code>. In a worker
it can be obtained using <code>cluster.worker</code>.</p>
<h3>Event: <code>'disconnect'</code></h3>
<p>Similar to the <code>cluster.on('disconnect')</code> event, but specific to this worker.</p>
<pre><code class="language-js">cluster.fork().on('disconnect', () =&gt; {
  // Worker has disconnected
});
</code></pre>
<h3>Event: <code>'error'</code></h3>
<p>This event is the same as the one provided by <a href="child_process.md#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>.</p>
<p>Within a worker, <code>process.on('error')</code> may also be used.</p>
<h3>Event: <code>'exit'</code></h3>
<ul>
<li><code>code</code> {number} The exit code, if it exited normally.</li>
<li><code>signal</code> {string} The name of the signal (e.g. <code>'SIGHUP'</code>) that caused
the process to be killed.</li>
</ul>
<p>Similar to the <code>cluster.on('exit')</code> event, but specific to this worker.</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.on('exit', (code, signal) =&gt; {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');

if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.on('exit', (code, signal) =&gt; {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  });
}
</code></pre>
<h3>Event: <code>'listening'</code></h3>
<ul>
<li><code>address</code> {Object}</li>
</ul>
<p>Similar to the <code>cluster.on('listening')</code> event, but specific to this worker.</p>
<pre><code class="language-mjs">cluster.fork().on('listening', (address) =&gt; {
  // Worker is listening
});
</code></pre>
<pre><code class="language-cjs">cluster.fork().on('listening', (address) =&gt; {
  // Worker is listening
});
</code></pre>
<p>It is not emitted in the worker.</p>
<h3>Event: <code>'message'</code></h3>
<ul>
<li><code>message</code> {Object}</li>
<li><code>handle</code> {undefined|Object}</li>
</ul>
<p>Similar to the <code>'message'</code> event of <code>cluster</code>, but specific to this worker.</p>
<p>Within a worker, <code>process.on('message')</code> may also be used.</p>
<p>See <a href="process.md#event-message"><code>process</code> event: <code>'message'</code></a>.</p>
<p>Here is an example using the message system. It keeps a count in the primary
process of the number of HTTP requests received by the workers:</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

if (cluster.isPrimary) {

  // Keep track of http requests
  let numReqs = 0;
  setInterval(() =&gt; {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd &amp;&amp; msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  // Start workers and listen for messages containing notifyRequest
  const numCPUs = availableParallelism();
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

} else {

  // Worker processes have a http server.
  http.Server((req, res) =&gt; {
    res.writeHead(200);
    res.end('hello world\n');

    // Notify primary about the request
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();

if (cluster.isPrimary) {

  // Keep track of http requests
  let numReqs = 0;
  setInterval(() =&gt; {
    console.log(`numReqs = ${numReqs}`);
  }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd &amp;&amp; msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
  }

  // Start workers and listen for messages containing notifyRequest
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }

} else {

  // Worker processes have a http server.
  http.Server((req, res) =&gt; {
    res.writeHead(200);
    res.end('hello world\n');

    // Notify primary about the request
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);
}
</code></pre>
<h3>Event: <code>'online'</code></h3>
<p>Similar to the <code>cluster.on('online')</code> event, but specific to this worker.</p>
<pre><code class="language-js">cluster.fork().on('online', () =&gt; {
  // Worker is online
});
</code></pre>
<p>It is not emitted in the worker.</p>
<h3><code>worker.disconnect()</code></h3>
<ul>
<li>Returns: {cluster.Worker} A reference to <code>worker</code>.</li>
</ul>
<p>In a worker, this function will close all servers, wait for the <code>'close'</code> event
on those servers, and then disconnect the IPC channel.</p>
<p>In the primary, an internal message is sent to the worker causing it to call
<code>.disconnect()</code> on itself.</p>
<p>Causes <code>.exitedAfterDisconnect</code> to be set.</p>
<p>After a server is closed, it will no longer accept new connections,
but connections may be accepted by any other listening worker. Existing
connections will be allowed to close as usual. When no more connections exist,
see <a href="net.md#event-close"><code>server.close()</code></a>, the IPC channel to the worker will close allowing it
to die gracefully.</p>
<p>The above applies <em>only</em> to server connections, client connections are not
automatically closed by workers, and disconnect does not wait for them to close
before exiting.</p>
<p>In a worker, <code>process.disconnect</code> exists, but it is not this function;
it is <a href="child_process.md#subprocessdisconnect"><code>disconnect()</code></a>.</p>
<p>Because long living server connections may block workers from disconnecting, it
may be useful to send a message, so application specific actions may be taken to
close them. It also may be useful to implement a timeout, killing a worker if
the <code>'disconnect'</code> event has not been emitted after some time.</p>
<pre><code class="language-js">if (cluster.isPrimary) {
  const worker = cluster.fork();
  let timeout;

  worker.on('listening', (address) =&gt; {
    worker.send('shutdown');
    worker.disconnect();
    timeout = setTimeout(() =&gt; {
      worker.kill();
    }, 2000);
  });

  worker.on('disconnect', () =&gt; {
    clearTimeout(timeout);
  });

} else if (cluster.isWorker) {
  const net = require('node:net');
  const server = net.createServer((socket) =&gt; {
    // Connections never end
  });

  server.listen(8000);

  process.on('message', (msg) =&gt; {
    if (msg === 'shutdown') {
      // Initiate graceful close of any connections to server
    }
  });
}
</code></pre>
<h3><code>worker.exitedAfterDisconnect</code></h3>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>This property is <code>true</code> if the worker exited due to <code>.disconnect()</code>.
If the worker exited any other way, it is <code>false</code>. If the
worker has not exited, it is <code>undefined</code>.</p>
<p>The boolean <a href="#workerexitedafterdisconnect"><code>worker.exitedAfterDisconnect</code></a> allows distinguishing between
voluntary and accidental exit, the primary may choose not to respawn a worker
based on this value.</p>
<pre><code class="language-js">cluster.on('exit', (worker, code, signal) =&gt; {
  if (worker.exitedAfterDisconnect === true) {
    console.log('Oh, it was just voluntary – no need to worry');
  }
});

// kill worker
worker.kill();
</code></pre>
<h3><code>worker.id</code></h3>
<ul>
<li>Type: {integer}</li>
</ul>
<p>Each new worker is given its own unique id, this id is stored in the
<code>id</code>.</p>
<p>While a worker is alive, this is the key that indexes it in
<code>cluster.workers</code>.</p>
<h3><code>worker.isConnected()</code></h3>
<ul>
<li>Returns: {boolean}</li>
</ul>
<p>This function returns <code>true</code> if the worker is connected to its primary via its
IPC channel, <code>false</code> otherwise. A worker is connected to its primary after it
has been created. It is disconnected after the <code>'disconnect'</code> event is emitted.</p>
<h3><code>worker.isDead()</code></h3>
<ul>
<li>Returns: {boolean}</li>
</ul>
<p>This function returns <code>true</code> if the worker's process has terminated (either
because of exiting or being signaled). Otherwise, it returns <code>false</code>.</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('fork', (worker) =&gt; {
    console.log('worker is dead:', worker.isDead());
  });

  cluster.on('exit', (worker, code, signal) =&gt; {
    console.log('worker is dead:', worker.isDead());
  });
} else {
  // Workers can share any TCP connection. In this case, it is an HTTP server.
  http.createServer((req, res) =&gt; {
    res.writeHead(200);
    res.end(`Current process\n ${process.pid}`);
    process.kill(process.pid);
  }).listen(8000);
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');
const http = require('node:http');
const numCPUs = require('node:os').availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('fork', (worker) =&gt; {
    console.log('worker is dead:', worker.isDead());
  });

  cluster.on('exit', (worker, code, signal) =&gt; {
    console.log('worker is dead:', worker.isDead());
  });
} else {
  // Workers can share any TCP connection. In this case, it is an HTTP server.
  http.createServer((req, res) =&gt; {
    res.writeHead(200);
    res.end(`Current process\n ${process.pid}`);
    process.kill(process.pid);
  }).listen(8000);
}
</code></pre>
<h3><code>worker.kill([signal])</code></h3>
<ul>
<li><code>signal</code> {string} Name of the kill signal to send to the worker
process. <strong>Default:</strong> <code>'SIGTERM'</code></li>
</ul>
<p>This function will kill the worker. In the primary worker, it does this by
disconnecting the <code>worker.process</code>, and once disconnected, killing with
<code>signal</code>. In the worker, it does it by killing the process with <code>signal</code>.</p>
<p>The <code>kill()</code> function kills the worker process without waiting for a graceful
disconnect, it has the same behavior as <code>worker.process.kill()</code>.</p>
<p>This method is aliased as <code>worker.destroy()</code> for backwards compatibility.</p>
<p>In a worker, <code>process.kill()</code> exists, but it is not this function;
it is <a href="process.md#processkillpid-signal"><code>kill()</code></a>.</p>
<h3><code>worker.process</code></h3>
<ul>
<li>Type: {ChildProcess}</li>
</ul>
<p>All workers are created using <a href="child_process.md#child_processforkmodulepath-args-options"><code>child_process.fork()</code></a>, the returned object
from this function is stored as <code>.process</code>. In a worker, the global <code>process</code>
is stored.</p>
<p>See: <a href="child_process.md#child_processforkmodulepath-args-options">Child Process module</a>.</p>
<p>Workers will call <code>process.exit(0)</code> if the <code>'disconnect'</code> event occurs
on <code>process</code> and <code>.exitedAfterDisconnect</code> is not <code>true</code>. This protects against
accidental disconnection.</p>
<h3><code>worker.send(message[, sendHandle[, options]][, callback])</code></h3>
<ul>
<li><code>message</code> {Object}</li>
<li><code>sendHandle</code> {Handle}</li>
<li><code>options</code> {Object} The <code>options</code> argument, if present, is an object used to
parameterize the sending of certain types of handles. <code>options</code> supports
the following properties:
<ul>
<li><code>keepOpen</code> {boolean} A value that can be used when passing instances of
<code>net.Socket</code>. When <code>true</code>, the socket is kept open in the sending process.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li><code>callback</code> {Function}</li>
<li>Returns: {boolean}</li>
</ul>
<p>Send a message to a worker or primary, optionally with a handle.</p>
<p>In the primary, this sends a message to a specific worker. It is identical to
<a href="child_process.md#subprocesssendmessage-sendhandle-options-callback"><code>ChildProcess.send()</code></a>.</p>
<p>In a worker, this sends a message to the primary. It is identical to
<code>process.send()</code>.</p>
<p>This example will echo back all messages from the primary:</p>
<pre><code class="language-js">if (cluster.isPrimary) {
  const worker = cluster.fork();
  worker.send('hi there');

} else if (cluster.isWorker) {
  process.on('message', (msg) =&gt; {
    process.send(msg);
  });
}
</code></pre>
<h2>Event: <code>'disconnect'</code></h2>
<ul>
<li><code>worker</code> {cluster.Worker}</li>
</ul>
<p>Emitted after the worker IPC channel has disconnected. This can occur when a
worker exits gracefully, is killed, or is disconnected manually (such as with
<code>worker.disconnect()</code>).</p>
<p>There may be a delay between the <code>'disconnect'</code> and <code>'exit'</code> events. These
events can be used to detect if the process is stuck in a cleanup or if there
are long-living connections.</p>
<pre><code class="language-js">cluster.on('disconnect', (worker) =&gt; {
  console.log(`The worker #${worker.id} has disconnected`);
});
</code></pre>
<h2>Event: <code>'exit'</code></h2>
<ul>
<li><code>worker</code> {cluster.Worker}</li>
<li><code>code</code> {number} The exit code, if it exited normally.</li>
<li><code>signal</code> {string} The name of the signal (e.g. <code>'SIGHUP'</code>) that caused
the process to be killed.</li>
</ul>
<p>When any of the workers die the cluster module will emit the <code>'exit'</code> event.</p>
<p>This can be used to restart the worker by calling <a href="#clusterforkenv"><code>.fork()</code></a> again.</p>
<pre><code class="language-js">cluster.on('exit', (worker, code, signal) =&gt; {
  console.log('worker %d died (%s). restarting...',
              worker.process.pid, signal || code);
  cluster.fork();
});
</code></pre>
<p>See <a href="child_process.md#event-exit"><code>child_process</code> event: <code>'exit'</code></a>.</p>
<h2>Event: <code>'fork'</code></h2>
<ul>
<li><code>worker</code> {cluster.Worker}</li>
</ul>
<p>When a new worker is forked the cluster module will emit a <code>'fork'</code> event.
This can be used to log worker activity, and create a custom timeout.</p>
<pre><code class="language-js">const timeouts = [];
function errorMsg() {
  console.error('Something must be wrong with the connection ...');
}

cluster.on('fork', (worker) =&gt; {
  timeouts[worker.id] = setTimeout(errorMsg, 2000);
});
cluster.on('listening', (worker, address) =&gt; {
  clearTimeout(timeouts[worker.id]);
});
cluster.on('exit', (worker, code, signal) =&gt; {
  clearTimeout(timeouts[worker.id]);
  errorMsg();
});
</code></pre>
<h2>Event: <code>'listening'</code></h2>
<ul>
<li><code>worker</code> {cluster.Worker}</li>
<li><code>address</code> {Object}</li>
</ul>
<p>After calling <code>listen()</code> from a worker, when the <code>'listening'</code> event is emitted
on the server, a <code>'listening'</code> event will also be emitted on <code>cluster</code> in the
primary.</p>
<p>The event handler is executed with two arguments, the <code>worker</code> contains the
worker object and the <code>address</code> object contains the following connection
properties: <code>address</code>, <code>port</code>, and <code>addressType</code>. This is very useful if the
worker is listening on more than one address.</p>
<pre><code class="language-js">cluster.on('listening', (worker, address) =&gt; {
  console.log(
    `A worker is now connected to ${address.address}:${address.port}`);
});
</code></pre>
<p>The <code>addressType</code> is one of:</p>
<ul>
<li><code>4</code> (TCPv4)</li>
<li><code>6</code> (TCPv6)</li>
<li><code>-1</code> (Unix domain socket)</li>
<li><code>'udp4'</code> or <code>'udp6'</code> (UDPv4 or UDPv6)</li>
</ul>
<h2>Event: <code>'message'</code></h2>
<ul>
<li><code>worker</code> {cluster.Worker}</li>
<li><code>message</code> {Object}</li>
<li><code>handle</code> {undefined|Object}</li>
</ul>
<p>Emitted when the cluster primary receives a message from any worker.</p>
<p>See <a href="child_process.md#event-message"><code>child_process</code> event: <code>'message'</code></a>.</p>
<h2>Event: <code>'online'</code></h2>
<ul>
<li><code>worker</code> {cluster.Worker}</li>
</ul>
<p>After forking a new worker, the worker should respond with an online message.
When the primary receives an online message it will emit this event.
The difference between <code>'fork'</code> and <code>'online'</code> is that fork is emitted when the
primary forks a worker, and <code>'online'</code> is emitted when the worker is running.</p>
<pre><code class="language-js">cluster.on('online', (worker) =&gt; {
  console.log('Yay, the worker responded after it was forked');
});
</code></pre>
<h2>Event: <code>'setup'</code></h2>
<ul>
<li><code>settings</code> {Object}</li>
</ul>
<p>Emitted every time <a href="#clustersetupprimarysettings"><code>.setupPrimary()</code></a> is called.</p>
<p>The <code>settings</code> object is the <code>cluster.settings</code> object at the time
<a href="#clustersetupprimarysettings"><code>.setupPrimary()</code></a> was called and is advisory only, since multiple calls to
<a href="#clustersetupprimarysettings"><code>.setupPrimary()</code></a> can be made in a single tick.</p>
<p>If accuracy is important, use <code>cluster.settings</code>.</p>
<h2><code>cluster.disconnect([callback])</code></h2>
<ul>
<li><code>callback</code> {Function} Called when all workers are disconnected and handles are
closed.</li>
</ul>
<p>Calls <code>.disconnect()</code> on each worker in <code>cluster.workers</code>.</p>
<p>When they are disconnected all internal handles will be closed, allowing the
primary process to die gracefully if no other event is waiting.</p>
<p>The method takes an optional callback argument which will be called when
finished.</p>
<p>This can only be called from the primary process.</p>
<h2><code>cluster.fork([env])</code></h2>
<ul>
<li><code>env</code> {Object} Key/value pairs to add to worker process environment.</li>
<li>Returns: {cluster.Worker}</li>
</ul>
<p>Spawn a new worker process.</p>
<p>This can only be called from the primary process.</p>
<h2><code>cluster.isMaster</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>Deprecated alias for <a href="#clusterisprimary"><code>cluster.isPrimary</code></a>.</p>
<h2><code>cluster.isPrimary</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>True if the process is a primary. This is determined
by the <code>process.env.NODE_UNIQUE_ID</code>. If <code>process.env.NODE_UNIQUE_ID</code> is
undefined, then <code>isPrimary</code> is <code>true</code>.</p>
<h2><code>cluster.isWorker</code></h2>
<ul>
<li>Type: {boolean}</li>
</ul>
<p>True if the process is not a primary (it is the negation of <code>cluster.isPrimary</code>).</p>
<h2><code>cluster.schedulingPolicy</code></h2>
<p>The scheduling policy, either <code>cluster.SCHED_RR</code> for round-robin or
<code>cluster.SCHED_NONE</code> to leave it to the operating system. This is a
global setting and effectively frozen once either the first worker is spawned,
or <a href="#clustersetupprimarysettings"><code>.setupPrimary()</code></a> is called, whichever comes first.</p>
<p><code>SCHED_RR</code> is the default on all operating systems except Windows.
Windows will change to <code>SCHED_RR</code> once libuv is able to effectively
distribute IOCP handles without incurring a large performance hit.</p>
<p><code>cluster.schedulingPolicy</code> can also be set through the
<code>NODE_CLUSTER_SCHED_POLICY</code> environment variable. Valid
values are <code>'rr'</code> and <code>'none'</code>.</p>
<h2><code>cluster.settings</code></h2>
<ul>
<li>Type: {Object}
<ul>
<li><code>execArgv</code> {string[]} List of string arguments passed to the Node.js
executable. <strong>Default:</strong> <code>process.execArgv</code>.</li>
<li><code>exec</code> {string} File path to worker file. <strong>Default:</strong> <code>process.argv[1]</code>.</li>
<li><code>args</code> {string[]} String arguments passed to worker.
<strong>Default:</strong> <code>process.argv.slice(2)</code>.</li>
<li><code>cwd</code> {string} Current working directory of the worker process. <strong>Default:</strong>
<code>undefined</code> (inherits from parent process).</li>
<li><code>serialization</code> {string} Specify the kind of serialization used for sending
messages between processes. Possible values are <code>'json'</code> and <code>'advanced'</code>.
See <a href="child_process.md#advanced-serialization">Advanced serialization for <code>child_process</code></a> for more details.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>silent</code> {boolean} Whether or not to send output to parent's stdio.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>stdio</code> {Array} Configures the stdio of forked processes. Because the
cluster module relies on IPC to function, this configuration must contain an
<code>'ipc'</code> entry. When this option is provided, it overrides <code>silent</code>. See
<a href="child_process.md#child_processspawncommand-args-options"><code>child_process.spawn()</code></a>'s <a href="child_process.md#optionsstdio"><code>stdio</code></a>.</li>
<li><code>uid</code> {number} Sets the user identity of the process. (See setuid(2).)</li>
<li><code>gid</code> {number} Sets the group identity of the process. (See setgid(2).)</li>
<li><code>inspectPort</code> {number|Function} Sets inspector port of worker.
This can be a number, or a function that takes no arguments and returns a
number. By default each worker gets its own port, incremented from the
primary's <code>process.debugPort</code>.</li>
<li><code>windowsHide</code> {boolean} Hide the forked processes console window that would
normally be created on Windows systems. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
<p>After calling <a href="#clustersetupprimarysettings"><code>.setupPrimary()</code></a> (or <a href="#clusterforkenv"><code>.fork()</code></a>) this settings object will
contain the settings, including the default values.</p>
<p>This object is not intended to be changed or set manually.</p>
<h2><code>cluster.setupMaster([settings])</code></h2>
<blockquote>
<p>Stability: 0 - Deprecated</p>
</blockquote>
<p>Deprecated alias for <a href="#clustersetupprimarysettings"><code>.setupPrimary()</code></a>.</p>
<h2><code>cluster.setupPrimary([settings])</code></h2>
<ul>
<li><code>settings</code> {Object} See <a href="#clustersettings"><code>cluster.settings</code></a>.</li>
</ul>
<p><code>setupPrimary</code> is used to change the default 'fork' behavior. Once called,
the settings will be present in <code>cluster.settings</code>.</p>
<p>Any settings changes only affect future calls to <a href="#clusterforkenv"><code>.fork()</code></a> and have no
effect on workers that are already running.</p>
<p>The only attribute of a worker that cannot be set via <code>.setupPrimary()</code> is
the <code>env</code> passed to <a href="#clusterforkenv"><code>.fork()</code></a>.</p>
<p>The defaults above apply to the first call only; the defaults for later
calls are the current values at the time of <code>cluster.setupPrimary()</code> is called.</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';

cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'https'],
  silent: true,
});
cluster.fork(); // https worker
cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'http'],
});
cluster.fork(); // http worker
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');

cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'https'],
  silent: true,
});
cluster.fork(); // https worker
cluster.setupPrimary({
  exec: 'worker.js',
  args: ['--use', 'http'],
});
cluster.fork(); // http worker
</code></pre>
<p>This can only be called from the primary process.</p>
<h2><code>cluster.worker</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>A reference to the current worker object. Not available in the primary process.</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';

if (cluster.isPrimary) {
  console.log('I am primary');
  cluster.fork();
  cluster.fork();
} else if (cluster.isWorker) {
  console.log(`I am worker #${cluster.worker.id}`);
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');

if (cluster.isPrimary) {
  console.log('I am primary');
  cluster.fork();
  cluster.fork();
} else if (cluster.isWorker) {
  console.log(`I am worker #${cluster.worker.id}`);
}
</code></pre>
<h2><code>cluster.workers</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>A hash that stores the active worker objects, keyed by <code>id</code> field. This makes it
easy to loop through all the workers. It is only available in the primary
process.</p>
<p>A worker is removed from <code>cluster.workers</code> after the worker has disconnected
<em>and</em> exited. The order between these two events cannot be determined in
advance. However, it is guaranteed that the removal from the <code>cluster.workers</code>
list happens before the last <code>'disconnect'</code> or <code>'exit'</code> event is emitted.</p>
<pre><code class="language-mjs">import cluster from 'node:cluster';

for (const worker of Object.values(cluster.workers)) {
  worker.send('big announcement to all workers');
}
</code></pre>
<pre><code class="language-cjs">const cluster = require('node:cluster');

for (const worker of Object.values(cluster.workers)) {
  worker.send('big announcement to all workers');
}
</code></pre>
